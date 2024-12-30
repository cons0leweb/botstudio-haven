import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Упс! Страница не найдена
        </p>
        <Link to="/">
          <Button size="lg">Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;