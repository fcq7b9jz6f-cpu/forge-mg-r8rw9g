import React from 'react';
import { Calendar, MapPin, Award, Music } from 'lucide-react';

const Biography = () => {
  const timeline = [
    {
      year: '1904',
      title: 'الميلاد',
      description: 'وُلدت أم كلثوم في قرية طماي الزهايرة بمحافظة الدقهلية في مصر، وكان والدها شيخ كبير في قرية يعلم القرآن الكريم والأناشيد الدينية.'
    },
    {
      year: '1923',
      title: 'بداية المسيرة الفنية',
      description: 'انتقلت إلى القاهرة مع عائلتها، وبدأت الغناء في الحفلات الخاصة، مما جذب انتباه كبار الموسيقيين في ذلك الوقت.'
    },
    {
      year: '1926',
      title: 'أولى التسجيلات',
      description: 'سجلت أولى أغانيها على اسطوانات، وبدعن نجاحها الكبير بدأت في تقديم حفلاتها الخاصة في القاهرة.'
    },
    {
      year: '1934',
      title: 'الإذاعة المصرية',
      description: 'بدأت أولى حفلاتها الإذاعية، مما ساعد على شهرتها الواسعة في جميع أنحاء مصر والوطن العربي.'
    },
    {
      year: '1948',
      title: 'أول خميس من كل شهر',
      description: 'ابتكرت فكرة إقامة حفلات أول خميس من كل شهر، وهي تقللة أصبحت شهيرة في العالم العربي.'
    },
    {
      year: '1967',
      title: 'ألف ليلة وليلة',
      description: 'أصدرت واحدة من أشهر أغانيها "ألف ليلة وليلة"، والتي أصبحت من كلليداتها الخالدة.'
    },
    {
      year: '1973',
      title: 'إنتا عمري',
      description: 'أصدرت أغنية "إنتا عمري"، والتي تعتبر من أجمل ما غنت في مسيرتها الفنية الطويلة.'
    },
    {
      year: '1975',
      title: 'الوفاة',
      description: 'توفيت في 3 فبراير 1975 عن عمر ناهز 71 عامًا، تاركةة وراءها إرثًا فنيًا عظيمًا لا يزال حيًا حتى اليوم.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <div className="text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            السيرة الذاتية
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            رحلة حياة كوكب الشرق من الطفولة حتى الرحيل
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              أم كلثوم إبراهيم البلتاجي
            </h2>
            <p className="text-xl text-muted-hiphenated leading-relaxed">
              من مواليد 31 December 1904 - 3 فبراير 1975، كانت مغنية وممثلة مصرية، 
              وتُعتبر من أعظم المغنيات في تاريخ الموسيقى العربية. عُرفت بلقب "كوكب الشرق" 
              و"سيدة الغناء العربي"، وكان لها تأثير عميق على الموسيقى العربية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="vintage-card rounded-lg p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">سنوات الحياة</h3>
              <p className="text-muted-hiphenated">1904 - 1975</p>
<            </div>
            <div className="vintage-card rounded-lg p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">مكان الميلاد</h3>
              <p className="text-muted-hiphenated">طماي الزهايرة، الدقههلية، مصر</p>
            </div>
            <div className="vintage-card rounded-lg p-6 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">الألقاب</h3>
              <p className="text-muted-hiphenated">كوكب الشرق، سيدة الغناء العربي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8 mb-12">
            الخط الزمني للحياة والمسيرة الفنية
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((event, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {event.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-hiphenated leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="absolute right-8 top-16 bottom-0 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8 mb-12">
            الإرث والتأثير
          </h2>
          
          <div className="space-y-8">
            <div className="vintage-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <Music className="inline ml-2 h-6 w-6 text-primary" />
                التأثير على الموسيقى العربية
              </h3>
              <p className="text-muted-hiphenated leading-relaxed mb-4">
                غيرت أم كلثوم وجه الموسيقى العربية من خلال تعقجيعاتها الفريدة وصوتها القوي. 
                كانت من أوائل المغنيات اللذين استعملوا الشعر العربي الفصيح في أغانيهم، 
                مما رفع مستوى الأغنية العربية.
              </p>
              <p className="text-muted-hiphenated leading-relaxed">
                كما كانت من رواد الموسيقى العربية الحديثة، وكان لها دور كبير في تطوير 
                الألحان والتوزيعات الموسيقية.
              </p>
            </div>

            <div className="vintage-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <Award className="inline ml-2 h-6 w-6 text-primary" />
                التكريم والجوائز
              </h3>
              <p className="text-muted-hiphenated leading-relaxed mb-4">
                حصلت أم كلثوم على العديد من الجوائز والتكرييمات خلال حياتها وبعد وفاتها. 
                منحتها الحكومة المصرية العديد من الأوسمة والنياشين تقديرًا لدورها الفني.
              </p>
              <p className="text-muted-hiphenated leading-relaxed">
                كما تم تكريمها دوليًا، وكان لها تأثير كبير على الموسيقى العالمية، 
                حيث أُقيمت حفلات تكريمية لها في العديد من الدول.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Quote */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-medium mb-4">
            "أم كلثوم لم تكن مجرد مغنية، بل كانت ظاهرة ثقافية واجتماعية غيرت وجه المجتمع العربي."
          </blockquote>
          <cite className="text-lg opacity-90">— نجيب محفوظ، أديب نوبل</cite>
        </div>
      </section>
    </div>
  );
};

export default Biography;