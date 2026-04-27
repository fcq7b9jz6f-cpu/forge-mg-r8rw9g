import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">عن أم كلثوم</h3>
            <p className="text-muted-foreground leading-relaxed">
              أم كلثوم، كوكب الشرق، أعظم مغنية في تاريخ الموسيقى العربية. 
              استطاعت أن تأسر قلوب الملايين بصوتها الجبارري وإحساسها العالي لأكثر من خمسين عامًا.
            </p>
pez
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">روابط سريعة</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link>
              <Link to="/biography" className="block text-muted-foreground hover:text-primary transition-colors">السيرة الذاتية</Link>
              <Link to="/discography" className="block text-muted-foreground hover:text-primary transition-colors">الأغاني</Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">المعرض</Link>
            </nav>
          </div>

          {/* Famous Songs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">أشهر الأغاني</h3>
            <nav className="space-y-2 text-muted-foreground">
              <p>ألف ليلة وليلة</p>
              <p>إنت عمري</p>
              <p>الأطلال</p>
              <p>حيرلتي</p>
              <p>فكروني</p>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 موقع أم كلثوم. صُنع بحب لتراثنا العربي العريق.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;