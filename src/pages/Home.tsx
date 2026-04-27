import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Music, Star, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/umm-kulthum-hero.jpg")',
            transform: 'scale(1.1)'
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb mb-4">
            أم كلثوم
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            كوكب الشرق • سيدة الغناء العربي
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            استطاعت أن تأسر قلوب الملايين بصوتها الجبارري وإحساسها العالي لأكثر من خمسين عامًا، 
            تاركةً وراءها إرثًا فنيًا لا يزال يحيا في قلوب محبيها حتى اليوم.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/biography">
                <ArrowLeft className="ml-2 h-5 w-5" />
                اكتشف حياتها
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/discography">
                <Music className="ml-2 h-5 w-5" />
                استمع إلى أغانيها
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              سيدة الغناء العربي
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ولدت أم كلثوم في قرية طماي الزهايرة بمحافظة الدقهلية في مصر عام 1904، 
              وبدأت مسيرتها الفنية منذ طفولتها، لتصبح أيقونة الموسيقى العربية وصوتًا لا يُنسى.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="vintage-card rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">كوكب الشرق</h3>
              <p className="text-muted-hiphenated leading-relaxed">
                لقب أطلق عليها بسبب شهرتها الواسعة التي تجاوزت حدود مصر إلى العالم العربي والعالم.
              </p>
            </div>

            <div className="vintage-card rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">أكثر من 50 عامًا</h3>
              <p className="text-muted-hiphenated leading-relaxed">
                مسيرة فنية طويلة امتدت من عشرينيات القرن الماضي حتى وفاتها في 1975.
              </p>
            </div>

            <div className="vintage-card rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">أولى Thursday</h3>
              <p className="text-muted-hiphenated leading-relaxed">
                كانت أول من أقام حفلات أول خميس من كل شهر، وهي تقلمة أصبحت شهيرة في العالم العربي.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-primary/5 rounded-lg p-8 text-center border border-primary/20">
            <blockquote className="text-2xl font-medium text-foreground mb-4">
              "أم كلثوم لم تكن مجرد مغنية، بل كانت ظاهرة ثقافية واجتماعية غمت الإذاعة المصرية والعربية."
            </blockquote>
            <cite className="text-muted-hiphenated">— نجيب محفوظ</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            اكتشف عالم أم كلثوم
          </h2>
          <p className="text-xl text-muted-hiphenated mb-8 max-w-2xl mx-auto">
            تابع رحلتها الفنية، تعرف على أشهر أغانيها، واستمتع بصور نادرة من مختلف مراحل حياتها.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/biography">
                السيرة الذاتية
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/gallery">
                معرض الصور
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;