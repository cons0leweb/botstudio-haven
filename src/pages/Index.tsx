import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, MessageSquare, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Создаем умных ботов для вашего бизнеса
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Автоматизируйте общение с клиентами и оптимизируйте рабочие процессы с помощью наших ботов
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login">
              <Button size="lg" className="animate-float">
                Начать проект
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <Bot className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telegram боты</h3>
              <p className="text-muted-foreground">
                Создаем функциональных ботов для автоматизации бизнес-процессов в Telegram
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discord боты</h3>
              <p className="text-muted-foreground">
                Разрабатываем ботов для управления серверами Discord и комьюнити
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-lg">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Кастомные решения</h3>
              <p className="text-muted-foreground">
                Создаем уникальных ботов под ваши специфические задачи
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;