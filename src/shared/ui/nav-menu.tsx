import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
export function NavMenu() {
  return (
    <NavigationMenu.Root className="text-primary hidden xl:flex">
      <NavigationMenu.List className="flex items-center gap-3 bg-white p-1 rounded-4xl border border-[#002B4133]">
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3">
          Главная
        </NavigationMenu.Item>
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3 transition-colors duration-200">
          О нас
        </NavigationMenu.Item>
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3 transition-colors duration-200">
          Награды
        </NavigationMenu.Item>
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3 transition-colors duration-200">
          Тарифы
        </NavigationMenu.Item>
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3 transition-colors duration-200">
          Акции
        </NavigationMenu.Item>
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3 transition-colors duration-200">
          Запись
        </NavigationMenu.Item>
        <NavigationMenu.Item className="cursor-pointer hover:bg-primary hover:text-white rounded-4xl px-5 py-3 transition-colors duration-200">
          Контакты
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
