import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Package } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Активные проекты</CardTitle>
              <CardDescription>Ваши текущие боты в разработке</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <Bot className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-medium">Telegram Support Bot</h3>
                    <p className="text-sm text-muted-foreground">В разработке</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Тарифный план</CardTitle>
              <CardDescription>Информация о вашем текущем плане</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <Package className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-medium">Базовый план</h3>
                  <p className="text-sm text-muted-foreground">До 3 активных ботов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;