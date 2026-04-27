import React from 'react';
import { Play, Clock, Calendar, Award } from 'lucide-react';

const Discography = () => {
  const famousSongs = [
    {
      title: 'ألف ليلة وليلة',
      year: '1969',
      composer: 'بليغ حمدي',
      poet: 'مرريد',
      duration: '50:00',
      description: 'من أشهر أغانيها على الإطلاق، ألحان بليغ حمدي وكلمات مرريد، تُعتبر من روائع الموسيقى العربية.',
      popularity: '★★★★★'
    },
    {
      title: 'إنتا عمري',
      year: '1964',
      composer: 'محمد عبد الوهاب',
      poet: 'أحمد شفيق',
      duration: '45:00',
      description: 'من أجمل ماانيها، ألحان محمد عبد الوهاب وكلمات أحمد شفيق، تعبر عن الحب والحنين.',
      popularity: '★★★★★'
    },
    {
      title: 'الأطلال',
      year: '1966',
      composer: 'رياض السنباطي',
      poet: 'إبراهيم ناجي',
      duration: '55:00',
      description: 'من أعظم أغانيها، ألحان رياض السنباطي وكلمات إبراهيم ناجي، تُعت treasure of Arabic music.',
      popularity: '★★★★★'
    },
    {
      title: 'حيرلتي',
      year: '1961',
      composer: 'رياض السنباطي',
      poet: 'أبو السعود الإبياري',
      duration: '40:00',
      description: 'أغنية كلاسيكية أبدع فيها رياض السنباطي لحنًا وكلمات أبو السعود الإبياري.',
      popularity: '★★★★★'
    },
    {
      title: 'فكروني',
      year: '1957',
      composer: 'رياض السنباطي',
      poet: 'أبو السعود الإبياري',
      duration: '35:00',
      description: 'من أوائل أعمالها مع رياض السنباطي، تُظهر بداية تعاونها مع كبار الموسيقيين.',
      popularity: '★★★★☆'
    },
    {
      title: 'دارت الأيام',
      year: '1970',
      composer: 'محمد عبد الوهاب',
      poet: 'مأمون الشناوي',
      duration: '42:00',
      description: 'من أواخر أعمالها، ألحان محمد عبد الوهاب وكلمات مأمون الشناوي، تعكس نضجها الفني.',
      popularity: '★★★★★'
    },
    {
      title: 'إسأل روحك',
      year: '1960',
      composer: 'رياض السنباطي',
      poet: 'أبو السعود الإبياري',
      duration: '38:00',
      description: 'أغنية كلاسيكية تعبر عن التأمل والروحانية، ألحان رياض السنباطي.',
      popularity: '★★★★�'
    },
    {
      title: 'ليلة بيها أمل',
      year: '1965',
      composer: 'بليغ حمدي',
      poet: 'مرريد',
      duration: '48:00',
      description: 'من أعمالها مع بليغ حمدي، تُظهر تطورها الموسيقي في الستينيات.',
      popularity: '★★★★☆'
    }
  ];

  const albums = [
    {
      title: 'أفضل ما غنت أم كلثوم',
      year: '1960s',
      songs: ['ألف ليلة وليلة', 'إنتا عمري', 'الأطلال'],
      description: 'مجموعة مختارة من أشهر أغانيها'
    },
    {
      title: 'حفلات الأولى خميس',
      year: '1948-1973',
      songs: ['فكروني', 'حيرلتي', 'دارت الأيام'],
      description: 'تسجيلات حية من حفلاتها الشهرية'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <div className="text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 mb-4">
            الأغاني والألبومات
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            استمتع بأشهر أغاني أم كلثوم التي طالما أحيا قلوب الملايين
          </p>
        </div>
      </section>

      {/* Famous Songs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8 mb-12">
            أشهر الأغاني
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {famousSongs.map((song, index) => (
              <div key={index} className="vintage-card rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {song.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-hiphenated mb-2">
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-1" />
                        <span>{song.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        <span>{song.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <Award className="h-4 w-4 ml-1 text-yellow-500" />
                      <span className="text-sm text-muted-hiphenated">{song.popularity}</span>
                    </div>
                  </div>
                  <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-hiphenated">الملحن:</span>
                    <span className="font-medium">{song.composer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-hiphenated">الشاعر:</span>
                    <span className="font-medium">{song.poet}</span>
                  </div>
                </div>
                
                <p className="text-muted-hiphenated text-sm leading-relaxed">
                  {song.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8 mb-12">
            الألبومات
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {albums.map((album, index) => (
              <div key={index} className="vintage-card rounded-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center ml-6">
                    <Music className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {album.title}
                    </h3>
                    <p className="text-muted-hiphenated mb-4">{album.description}</p>
                    <div className="flex items-center text-sm text-muted-hiphenated">
                      <Calendar className="h-4 w-4 ml-1" />
                      <span>{album.year}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">أشهر الأغاني:</h4>
                  {album.songs.map((song, songIndex) => (
                    <div key={songIndex} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <span className="font-medium">{song}</span>
                      <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                        <Play className="h-4 w-4 text-primary-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Player Note */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            استمتع بموسيقى أم كلثوم
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            يمكنك الاستماع إلى أغانيها على منصات الموسيقى المختلفة مثل Spotify، Apple Music، 
            وYouTube. استمتع بصوتها الرنان وإحساسها العالي في كل مكان وزمان.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://open.spotify.com/artist/52lsD82iOqGtyfEMqWgk4f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              <Play className="ml-2 h-5 w-5" />
              استمع على Spotify
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=Umm+Kulthum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify center px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              <Play className="ml-2 h-5 w-5" />
              استمع على YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discography;