import React, { useState } from 'react';
import { Camera, Calendar, MapPin, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/umm-kulthum-hero.jpg',
      title: 'أم كلثوم في الخمسينيات',
      description: 'صورة كلاسيكية من ذروة نجوميتها',
      year: '1950s',
      location: 'القاهرة، مصر'
    },
    {
      src: 'https://images.pexels.com/photos/29344611/pexels-photo-29344611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'في الاستوديو',
      description: 'أثناء تسجيل أحد أعمالها',
      year: '1960s',
      location: 'استوديو الإذاعة المصرية'
    },
    {
      src: 'https://images.pexels.com/photos/19615580/pexels-photo-19615580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'حفلة غنائية',
      description: 'أثناء إحدى حفلاتها الشهرية',
      year: '1965',
      location: 'قصر النيل، القاهرة'
    },
    {
      src: 'https://images.pexels.com/photos/33264462/pexels-photo-33264462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'صورة شخصية',
      description: 'صورة رسمية من أواخر الستينيات',
      year: '1968',
      location: 'القاهرة، مصر'
    },
    {
      src: 'https://images.pexels.com/photos/30232371/pexels-photo-30232371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'مع الجمهار',
      description: 'أثناء استقبالها من الجمهور',
      year: '1970',
      location: 'مسرح البالون، القاهرة'
    },
    {
      src: 'https://images.pexels.com/photos/29344613/pexels-photo-29344613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'في المنزل',
      description: 'لقطة عائلية نادرة',
      year: '1960s',
      location: 'منزلها الخاص، القاهرة'
    },
    {
      src: 'https://images.pexels.com/photos/29344615/pexels-photo-29344615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'زيارة رسمية',
      description: 'أثناء زيارة رسمية إلى دولة عربية',
      year: '1967',
      location: 'دمشق، سوريا'
    },
    {
      src: 'https://images.pexels.com/photos/7715788/pexels-photo-7715788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'في الكواليس',
      description: 'أثناء التحضير لحفل غنائي',
      year: '1972',
      location: 'دار الأوبرا، القاهرة'
    },
    {
      src: 'https://images.pexels.com/photos/9419400/pexels-photo-9419400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'صورة تذكارية',
      description: 'مع مجموعة من الموسيقيين',
      year: '1969',
      location: 'القاهرة، مصر'
    }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <div className="text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 mb-4">
            معرض الصور
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            صور نادرة من مختلف مراحل حياة أم كلثوم الفنية
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="vintage-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => openModal(image.src)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/umm-kulthum-hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      <span>{image.year}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 ml-1" />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            تصنيفات الصور
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="vintage-card rounded-lg p-6 text-center">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">الحفلات الغنائية</h3>
              <p className="text-muted-foreground">
                صور من حفلاتها الشهرية وإحياءها للجمهور في مختلف المسارح
              </p>
            </div>
            
            <div className="vintage-card rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">الاستوديوهات</h3>
              <p className="text-muted-foreground">
                لقطات نادرة من أثناء تسجيل أغانيها في الاستوديوهات المختلفة
              </p>
            </div>
            
            <div className="vintage-card rounded-lg p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">الحياة الشخصية</h3>
              <p className="text-muted-foreground">
                صور عائلية وشخصية من مختلف مراحل حياتها
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 left-4 z-10 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </button>
            <img 
              src={selectedImage} 
              alt="صورة كبيرة"
              className="w-full h-auto max-h-[80vh] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/umm-kulthum-hero.jpg';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;