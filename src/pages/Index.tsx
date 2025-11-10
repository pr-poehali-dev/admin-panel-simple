import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Современные методы защиты данных и авторизации',
    },
    {
      icon: 'Zap',
      title: 'Быстродействие',
      description: 'Оптимизированная работа и мгновенный отклик',
    },
    {
      icon: 'Users',
      title: 'Управление',
      description: 'Интуитивный интерфейс для администрирования',
    },
    {
      icon: 'Settings',
      title: 'Гибкость',
      description: 'Настройка под ваши потребности',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-primary/5">
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={20} />
            </div>
            <span className="text-xl font-semibold">Админ-панель</span>
          </div>
          <Button onClick={() => navigate('/login')} variant="default" className="gap-2">
            <Icon name="LogIn" size={18} />
            Войти
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-6">
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Управление системой
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Минималистичная и эффективная панель администрирования с чистым дизайном и мощным функционалом
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/login')}
                className="gap-2 text-lg px-8 h-12"
              >
                <Icon name="ArrowRight" size={20} />
                Начать работу
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 text-lg px-8 h-12"
              >
                <Icon name="BookOpen" size={20} />
                Документация
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <CardContent className="py-16 px-8 relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы начать?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Войдите в систему и получите полный доступ к панели управления
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/login')}
                  className="gap-2 text-lg px-8 h-12"
                >
                  <Icon name="Lock" size={20} />
                  Войти в панель
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-8 mt-16 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>© 2024 Админ-панель. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
