import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const stats = [
    { label: 'Пользователи', value: '1,234', icon: 'Users', change: '+12%' },
    { label: 'Документы', value: '567', icon: 'FileText', change: '+8%' },
    { label: 'Активность', value: '89%', icon: 'Activity', change: '+3%' },
    { label: 'Настройки', value: '23', icon: 'Settings', change: '0%' },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Панель управления</h1>
                <p className="text-xs text-muted-foreground">Административный доступ</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <Icon name="LogOut" className="mr-2" size={18} />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Добро пожаловать</h2>
          <p className="text-muted-foreground">Управляйте вашей системой из единого центра</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-scale border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={stat.icon} className="text-primary" size={24} />
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-border">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Обзор
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <Icon name="User" size={16} />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Icon name="Settings" size={16} />
              Настройки
            </TabsTrigger>
            <TabsTrigger value="docs" className="gap-2">
              <Icon name="BookOpen" size={16} />
              Документация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Активность системы
                  </CardTitle>
                  <CardDescription>Статистика за последние 7 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[85, 72, 68, 55, 48].map((value, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">День {i + 1}</span>
                          <span className="font-medium">{value}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary rounded-full h-2 transition-all" 
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    Последние действия
                  </CardTitle>
                  <CardDescription>Журнал активности пользователей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'Новый пользователь зарегистрирован', time: '5 мин назад', icon: 'UserPlus' },
                      { action: 'Обновлены настройки системы', time: '1 час назад', icon: 'Settings' },
                      { action: 'Создан новый документ', time: '2 часа назад', icon: 'FileText' },
                      { action: 'Изменен профиль пользователя', time: '3 часа назад', icon: 'Edit' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon} className="text-primary" size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{item.action}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Профиль пользователя</CardTitle>
                <CardDescription>Управление информацией о профиле</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Администратор</h3>
                    <p className="text-muted-foreground">admin@example.com</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Имя</Label>
                      <p className="text-muted-foreground">Администратор</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Роль</Label>
                      <p className="text-muted-foreground">Суперадмин</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Email</Label>
                      <p className="text-muted-foreground">admin@example.com</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Дата регистрации</Label>
                      <p className="text-muted-foreground">01.01.2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Настройки системы</CardTitle>
                <CardDescription>Управление параметрами и конфигурацией</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Уведомления', description: 'Настройка системных уведомлений', icon: 'Bell' },
                  { title: 'Безопасность', description: 'Параметры безопасности и доступа', icon: 'Shield' },
                  { title: 'Интеграции', description: 'Подключенные сервисы и API', icon: 'Plug' },
                  { title: 'Резервное копирование', description: 'Автоматическое создание резервных копий', icon: 'Database' },
                ].map((setting, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name={setting.icon} className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{setting.title}</h4>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Документация и помощь</CardTitle>
                <CardDescription>Руководства и справочная информация</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Начало работы', description: 'Основы использования системы', icon: 'Rocket' },
                  { title: 'Руководство администратора', description: 'Полное руководство по управлению', icon: 'BookOpen' },
                  { title: 'API документация', description: 'Интеграция и разработка', icon: 'Code' },
                  { title: 'Часто задаваемые вопросы', description: 'Ответы на распространенные вопросы', icon: 'HelpCircle' },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name={doc.icon} className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{doc.title}</h4>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="ExternalLink" size={20} />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <label className={`text-sm font-medium ${className}`}>{children}</label>
);

export default Admin;
