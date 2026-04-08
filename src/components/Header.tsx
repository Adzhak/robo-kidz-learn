import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-xl font-extrabold leading-tight text-foreground">
              РобоСтарт
            </h1>
            <p className="text-xs text-muted-foreground leading-none">Онлайн-школа робототехники</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
          <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
          <a href="#about" className="hover:text-primary transition-colors">О нас</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-4 font-body text-sm font-medium text-muted-foreground">
          <a href="#courses" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Курсы</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">О нас</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors">Контакты</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
