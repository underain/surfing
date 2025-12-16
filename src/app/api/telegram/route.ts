import { NextResponse } from "next/server";

type Payload = {
  date?: string;
  time: string;
  tariff: string;
  name: string;
  phone: string;
};

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Server misconfig: TELEGRAM env vars missing" },
        { status: 500 },
      );
    }

    const body = (await req.json()) as Payload;

    const errors: Record<string, string> = {};
    if (!body.time) errors.time = "Выберите время";
    if (!body.tariff) errors.tariff = "Выберите тариф";
    if (!body.name) errors.name = "Укажите имя";
    if (!body.phone) errors.phone = "Укажите телефон";

    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const text =
      `🏄 <b>Новая заявка</b>\n` +
      `\n<b>Дата:</b> ${body.date || "не выбрана"}` +
      `\n<b>Время:</b> ${body.time}` +
      `\n<b>Тариф:</b> ${body.tariff}` +
      `\n<b>Имя:</b> ${body.name}` +
      `\n<b>Телефон:</b> ${body.phone}` +
      `\n\n🕒 ${new Date().toLocaleString("ru-RU")}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      return NextResponse.json(
        { ok: false, error: tgData.description || "Telegram error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 },
    );
  }
}
