'use client';

import React, { useState } from 'react';
import { Calendar, ArrowRight, CornerDownRight, Tag, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  categoryTag: 'ELECTRONICS' | 'MAINTENANCE' | 'DIAGNOSTICS' | 'TECH' | 'GENERAL';
  serviceId: string;
  author: string;
  authorRole: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-motor-analizi',
    title: 'Sakarya Motor Mekanik Bakım Onarım ve Motor Revizyonu',
    excerpt: 'Sakarya Modern Sanayi bölgesinde motor revizyon ve komple rektefiye süreçleri. Motor mekanik arızalarında HKN Auto uzmanlığı ve ileri teknoloji tanı yöntemleri.',
    content: `Motor mekanik aksamı, aracınızın performans ve yakıt verimliğini doğrudan tayin eden en karmaşık sistemdir. HKN Auto olarak, Sakarya Modern Sanayi Sitesi'ndeki dijital donanımlı laboratuvarımızda motor mekanik bakım onarım ve motor revizyonu işlemlerini uluslararası standartlarda gerçekleştiriyoruz.

    Motor Mekanik Revizyonu Nedir?
    Yüksek kilometreye bağlı yıpranmalar, yetersiz yağlama veya hararet nedeniyle motor gücünde kayıplar oluşur. Motor revizyonu (motor rektefiyesi), motorun tamamen sökülerek silindir bloğu, pistonlar, biyel kolları, supaplar ve eksantrik milinin mikron bazında ölçülüp fabrikasyon toleranslarına geri getirilmesi sürecidir.

    TEKNİK MOTOR MEKANİK SÜREÇLERİ
    - Bilgisayarlı Kompresyon ve Sızdırma Testleri: Her bir silindirin yanma kalitesini ölçerek aşınmış segman ve supap kaçaklarını tespit etme.
    - Orijinal OEM Parça Entegrasyonu: Piston, yatak, subap ve conta takımlarında sadece aracınıza özel lisanslı yedek parça kullanımı.
    - Krank Mili ve Silindir Bloğu Taşlama: Sakarya'nın en gelişmiş rektefiye ekipmanlarıyla sıfır hata payıyla yüzey işleme.
    - Dinamik Basınç ve Torklama Değerleri: Üretici verilerine uygun tork anahtarlarıyla hassas motor montajı.

    Neden HKN Auto Sakarya?
    Sakarya'da motor mekanik revizyon dendiğinde akla gelen en güvenilir merkezlerden biri olmanın gururunu yaşıyoruz. Doğru teşhis sayesinde gereksiz parça değişimlerinin önüne geçiyor, bütçenizi korurken aracınızın ömrünü %100'e kadar artırıyoruz. Her revize ettiğimiz motora km güvenceli garanti sunuyoruz.`,
    date: '15 MAYIS 2026',
    category: 'Performans',
    categoryTag: 'TECH',
    serviceId: 'HKN-MEK1',
    author: 'Merve Cahyir',
    authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
    readTime: '6 dk okuma'
  },
  {
    id: 'yazilim-guncellemeleri',
    title: 'Elektronik Çözülemeyen Arızaların Çözümleri ve ECU Programlama',
    excerpt: 'Sıradan servislerin çözemediği kronik beyin arızaları, CAN-BUS hat arızaları ve yazılımsal otomotiv elektronik çözümleri HKN Auto güvencesiyle Sakarya’da.',
    content: `Modern araçlar, tekerlekli bilgisayarlar gibidir. Motor kontrol üniteleri (ECU), araç genelindeki binlerce sensörden gelen veriyi milisaniyeler içinde işler. HKN Auto olarak, Sakarya'da başka hiçbir yerde çözülemeyen kronik elektronik arızaların teşhis ve kesin onarım çözümlerini sunuyoruz.

    Kronik ve Çözülemeyen Elektronik Arızalar Nelerdir?
    Çoğu zaman kirlenmiş soketler, kopmuş CAN-BUS iletişim telleri veya çökmüş entegre devreler nedeniyle araçlar arıza moduna geçer ve gösterge panelinde çok sayıda uyarı lambası yanar. Standart tarayıcılar bu arızaların kök nedenini göremez, sadece yüzeysel hata kodları verir.

    ELEKTRONİK LABORATUVARIMIZDA NELER YAPIYORUZ?
    - CAN-Bus Dalga Boyu Ölçümleri: Dijital osiloskop cihazlarımızla iletişim hatlarındaki elektriksel parazit ve kısa devre tespiti.
    - ECU Beyin Programlama ve Onarım: Bozulmuş motor kontrol ünitesi yazılımlarının orijinal sunucular üzerinden güncellenmesi ve donanımsal çip onarımı.
    - Kaçak Akım ve Termal Kamera Analizi: Aracın kapalıyken aküyü bitirmesine sebep olan parazitik gizli akım kaçaklarının mikro-termal görüntülemeyle bulunması.
    - Sensör ve Aktüatör Kodlaması: Yeni takılan elektronik bileşenlerin araç beynine tanıtılması ve adaptasyon ayarları.

    Sakarya'da Teknolojik Üstünlük
    Sakarya ve çevre illerden gelen birçok otomobil tutkunu ve esnafının çözülemeyen beyin problemlerini gideriyoruz. Merve Cahyir liderliğindeki uzman kadromuz ve en son teknoloji tanı cihazlarımızla, elektronik kusurları deneme yanılma yoluyla değil, milimetrik ölçümlerle tespit ederek tamir etmekteyiz.`,
    date: '12 MAYIS 2026',
    category: 'Elektronik',
    categoryTag: 'ELECTRONICS',
    serviceId: 'HKN-ELK2',
    author: 'Merve Cahyir',
    authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
    readTime: '5 dk okuma'
  },
  {
    id: 'fren-bakimi',
    title: 'Sakarya Ön Takım Tamiri, Amortisör ve Dişli Düzen Kontrolleri',
    excerpt: 'Konforlu ve güvenli bir yol tutuşu için ön takım tamiri neden ertelenmemeli? Rot, rotil, aks, salıncak burçları ve amortisör bakımı Sakarya HKN Auto’da.',
    content: `Aracınızın yolla olan tek bağı lastikler ve bu bağı ayakta tutan sistem ise ön takım ile süspansiyon elemanlarıdır. Bozuk yollar, çukurlar ve kaldırımlar ön takım elemanlarında hızlı aşınmalara ve dolayısıyla sürüş emniyeti kayıplarına yol açar.

    Ön Takım (Yürüyen Aksam) Nedir?
    Süspansiyon sistemi; salıncak kolları, amortisörler, helezon yaylar, rot kolları, rotiller ve akslardan oluşur. Ön takımda oluşan en ufak boşluk veya gevşeklik, yüksek hızlarda direksiyonda titremeye, aracın sağa sola çekmesine ve lastiklerin içten/dıştan düzensiz aşınmasına neden olur.

    ÖN TAKIM VE SÜSPANSİYON BAKIM ADIMLARI
    - Hidrolik ve Amortisör Hassasiyet Analizi: Amortisör sızdırmazlıkları ve yay sönümleme katsayılarının dinamik test edilmesi.
    - Rotil ve Salıncak Burç Kontrolleri: Boşluk yapan ve tıkırtı sesine sebep olan kauçuk burçların tespiti ve pres makineleriyle değişimi.
    - 3D Lazer Teknolojili Rot Ayarı: Tekerleklerin açılarının kamber-kaster değerlerine göre bilgisayarla sıfırlanması.
    - Direksiyon Kutusu Detaylı Kontrolü: Direksiyon milindeki aşınmaların ve hidrolik pompa seslerinin önlenmesi.

    Sakarya'da Sürüş Güvenliği: HKN Auto
    Boşluk yapmış bir rot başı veya patlak bir amortisör, ani bir frende durma mesafenizi metrelerce uzatabilir. Sakarya Modern Sanayi bölgesinde yer alan HKN Auto, Merve Cahyir yönetiminde ön takım parçalarınızı büyük bir hassasiyetle denetler ve sadece ihtiyaç duyan parçaları orijinalleriyle değiştirerek can güvenliğinizi korur.`,
    date: '08 MAYIS 2026',
    category: 'Bakım',
    categoryTag: 'MAINTENANCE',
    serviceId: 'HKN-ONT3',
    author: 'Merve Cahyir',
    authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
    readTime: '4 dk okuma'
  },
  {
    id: 'hata-kodlari-obd2',
    title: 'Motor Mekanik Periyodik Bakım: Yılda Bir Kez Yapılması Gerekenler',
    excerpt: 'Aracınızın motor ömrünü garanti altına alacak periyodik bakım rutinleri. Sakarya HKN Auto periyodik bakım kapsamında motor yağı ve tüm filtre değişim detayları.',
    content: `Her otomobilin düzenli aralıklarla (genellikle 10.000 km veya 1 yılda bir) motor mekanik periyodik bakıma girmesi elzemdir. Kalitesiz yağlar ve tıkalı filtreler, motorun nefes almasını zorlaştırarak yakıt tüketimini artırır ve aşınmaları hızlandırır.

    Periyodik Bakım Neleri Kaplar?
    Periyodik bakım sadece yağ değişimi değil, aracın tüm sıvı ve emniyet noktalarının gözden geçirildiği genel bir muayenedir. Düzenli bakım yapılmayan motorlarda iç aksamda kurum bağlama ve aşırı sürtünme sonucu yağ yakma sorunları ortaya çıkar.

    HKN AUTO PERİYODİK BAKIM CHECKLIST
    - Motor Yağı ve Orijinal Filtre Değişimleri: Filtre grubunun (hava, yağ, polen ve yakıt filtreleri) yüksek süzme kapasiteli orijinal yedek parçalarla yenilenmesi.
    - Fren Balataları ve Disk Kalınlık Analizleri: Balataların ömrünün ölçülmesi ve disk yüzeylerinin pürüzsüzlüğünün kontrolü.
    - Sıvı Seviyesi ve Donma Derecesi Ölçümleri: Radyatör antifriz derecesi, fren hidroliği nem kontrolü ve direksiyon hidroliği seviyesi.
    - Elektrik ve Aydınlatma Check-up: Far, sinyal ve stop lambalarının kontrol edilip OBD beyninin taranması.

    Sakarya Motor Mekanik Periyodik Bakım
    Sakarya'da aracınızı güvenle teslim edeceğiniz periyodik bakım noktası olarak, her marka ve model araç için üreticinin tavsiye ettiği viskozitede (Örn: 0W-30, 5W-30) tam sentetik yağlar kullanmaktayız. Zamanında yapılan bir bakım, ileride binlerce liralık motor onarım masraflarının önüne geçer.`,
    date: '02 MAYIS 2026',
    category: 'Bakım',
    categoryTag: 'MAINTENANCE',
    serviceId: 'HKN-PER4',
    author: 'Merve Cahyir',
    authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
    readTime: '5 dk okuma'
  },
  {
    id: 'sanziman-omru',
    title: 'Sakarya Otomatik Şanzıman Bakım Onarım ve Revizyon Çözümleri',
    excerpt: 'Otomatik viteslerde vuruntu, kaçırma ve geçiş sorunlarına son. Çift kavramalı (DSG, EDC, Powershift) ve tork konvertörlü şanzıman revizyon süreçleri.',
    content: `Otomatik şanzımanlar, motorun ürettiği gücü tekerleklere en konforlu şekilde aktarmak için tasarlanmış mühendislik harikalarıdır. Titiz bir bakım yapılmadığında otomatik şanzıman beyni (Mekatronik) ve dişli grupları aşınarak pahalı arızalara yol açabilir.

    Otomatik Şanzıman Arıza Belirtileri:
    Vites geçişlerinde sarsıntı (vuruntu), devir yükseldiği halde aracın hızlanmaması (debriyaj kaçırma), geri vitese geçerken gecikme veya göstergede şanzıman arıza lambasının yanması en belirgin belirtilerdir.

    HKN AUTO’DA ŞANZIMAN ONARIMI VE REVİZYONU
    - Profesyonel Şanzıman Yağı Değişimi: Özel makinelerimizle şanzıman içindeki eski yağı tamamen vakumlayarak %100 oranında taze şanzıman yağı doldurma.
    - Solenoid ve Valf Gövdesi Testleri: Şanzıman beyninin basınç değerlerinin dijital test cihazlarında ölçülerek arızalı selenoidlerin yenilenmesi.
    - Tork Konvertörü (Türbin) Revizyonu: Sallantı ve titremelere sebep olan tork konvertörünün parçalara ayrılıp gerekli kaynak ve balans işlemlerinin yapılması.
    - Balata ve Çift Kavrama Değişimi: Debriyaj takımlarının milimetrik boşluk toleranslarında profesyonelce montajlanıp kalibre edilmesi.

    Sakarya Otomatik Şanzıman Uzmanı
    Otomatik şanzıman onarımı hata kabul etmeyen, tamamen steril bir ortamda ve özel ekipmanlarla yapılması gereken bir işlemdir. Sakarya Modern Sanayi bölgesinde HKN Auto olarak, otomatik şanzıman revizyonunda orijinal yedek parça ve yazılımsal adaptasyon garantisi sunuyoruz.`,
    date: '28 NİSAN 2026',
    category: 'Bakım',
    categoryTag: 'MAINTENANCE',
    serviceId: 'HKN-SAN5',
    author: 'Merve Cahyir',
    authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
    readTime: '6 dk okuma'
  },
  {
    id: 'rutin-kontrol-hizmeti',
    title: 'Güvenli Sürüş İçin 15 Nokta Detaylı Rutin Kontrol ve Check-up',
    excerpt: 'Yola çıkmadan önce mutlaka yapılması gereken hayati incelemeler. Sakarya’da en çok talep gören HKN Auto 15 Nokta Rutin Kontrol checklisti.',
    content: `Uzun yola çıkmadan önce, periyodik bakımların arasında veya mevsim geçişlerinde aracınızın genel durumunu analiz ettirmek sürüş güvenliğinizin en temel faktörüdür. HKN Auto olarak gerçekleştirdiğimiz 15 Nokta Detaylı Rutin Kontrol, en çok ihtiyaç duyulan emniyet kriterlerini güvence altına alır.

    15 Nokta Rutin Kontrol Nedir?
    Rutin kontrol; tahmin yürütmeden, tamamen ölçüm aletleri, test pompaları ve diagnostik bilgisayarlar kullanılarak aracın yürüyen aksamından elektronik ünitelerine kadar 15 hayati noktasının profesyonel gözle taranmasıdır.

    15 TEMEL KONTROL NOKTASI
    - Fren Sistem Muayenesi: Balata kalınlığı, ön ve arka disk aşınma yüzeyleri ile fren hidroliği nem kaynama noktası testi.
    - Motor ve Şanzıman Sıvıları: Motor yağı kalitesi, şanzıman sızdırmazlığı, hidrolik direksiyon yağ seviyesi.
    - Soğutma Sistemi ve Antifriz: Radyatör sızdırmazlığı, hortumların gevşekliği ve antifriz donma derecesi ölçümü.
    - Ön ve Arka Takım Güvenliği: Rot başı, salıncak burçları, aks körükleri ve amortisörlerin aşınma kontrolleri.
    - Lastikler ve Aşınma Payları: Lastik diş derinlikleri ve doğru basınç oranlarının ayarlanması.
    - Akü ve Şarj Entegrasyonu: Akü voltajı, marş gücü deşarj verisi ve alternatörün şarj dolum kapasitesi.
    - Aydınlatma ve Silecekler: Tüm iç/dış ampuller ile cam sileceklerinin süpürme kalitesi.
    - OBD-II Bilgisayarlı Beyin Taraması: Aracın hafızasında birikmiş pasif arıza kodlarının silinmesi ve aktif hataların raporlanması.

    Neden Sakarya’da En Çok Tercih Edilen Hizmet?
    Rutin kontroller sayesinde fark etmesi imkansız olan küçük bir hortum sızıntısı veya rot boşluğu erkenden keşfedilir. Bu işlem sizi yolda kalmaktan koruduğu gibi hararet yapma gibi yıkıcı motor hasarlarının önüne geçer. HKN Auto olarak işlem sonunda detaylı analiz raporunu dijital olarak teslim ediyoruz.`,
    date: '20 NİSAN 2026',
    category: 'Bakım',
    categoryTag: 'MAINTENANCE',
    serviceId: 'HKN-RUT1',
    author: 'Merve Cahyir',
    authorRole: 'Genel Müdür & Otomotiv Servis Yöneticisi',
    readTime: '5 dk okuma'
  }
];


interface BlogViewProps {
  onSelectPost: (postId: string) => void;
}

export default function BlogView({ onSelectPost }: BlogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['Tümü', 'Bakım', 'Elektronik', 'Tanılama', 'Performans'];
  const postsPerPage = 3;

  const filteredPosts = selectedCategory === 'Tümü'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pt-28 pb-20 bg-brand-bg relative min-h-screen" id="blog-page">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/[0.02] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/[0.01]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Banner Featured Post Card matching layout exactly */}
        <div className="mb-20 bg-gradient-to-br from-[#131b26] to-brand-bg-dark border border-brand-container-hover/80 rounded-xl p-6 md:p-10 relative overflow-hidden group shadow-2xl" id="featured-blog-banner">
          <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-brand-orange/[0.025] blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-start justify-between h-full">
            <div>
              <span className="font-mono text-[9px] font-extrabold tracking-widest text-brand-orange bg-[#ff4d00]/10 border border-[#ff4d00]/30 px-2.5 py-1 rounded inline-block uppercase mb-5">
                ÖNE ÇIKAN
              </span>
              <h1 className="font-display text-2xl md:text-3.5xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4 group-hover:text-brand-orange transition-colors duration-300">
                Geleceğin Tanı Teknolojileri: Yapay Zeka ile Motor Analizi
              </h1>
              <p className="text-brand-text-secondary text-xs sm:text-sm md:text-base leading-relaxed mb-8">
                Modern otomotiv dünyasında artık anahtar sesinden çok veri paketleri konuşuyor. HKN Auto olarak yeni nesil diagnostik süreçlerimizi nasıl evrilttiğimizi keşfedin. Yapay zeka veri modelleri ile otonom kontrol süreçlerini atölyemize entegre ettik.
              </p>
            </div>

            <button
              onClick={() => onSelectPost('ai-motor-analizi')}
              className="font-mono text-xs font-black text-brand-orange flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-300 uppercase cursor-pointer"
            >
              <span>DEVAMINI OKU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters row - Horizontal Scrollable on Mobile, Flex on Desktop */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-3 scrollbar-none" id="blog-category-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase shrink-0 transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/15'
                  : 'bg-[#111c2d] border-brand-container-hover text-brand-text-secondary hover:text-white hover:border-brand-text-secondary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of cards matching layout 100% */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20" id="blog-grid-container">
          
          {currentPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              className="bg-[#131b26] border border-brand-container-hover/80 hover:border-brand-orange/30 rounded-lg p-6 flex flex-col justify-between cursor-pointer group shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-orange/5"
              id={`blog-card-${post.id}`}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-4 text-brand-text-secondary/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    {post.date}
                  </span>
                  <span className="text-brand-orange font-bold uppercase tracking-wider">
                    {post.categoryTag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-lg leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-brand-container-hover/60 text-xs font-mono">
                <span className="text-brand-text-secondary/40 font-bold uppercase tracking-wider">
                  SERVIS ID: #{post.serviceId}
                </span>
                <span className="text-brand-orange group-hover:translate-x-1.5 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Beautiful Pagination control exact like mockup */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold" id="blog-pagination">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="p-2 px-3 rounded border border-brand-container-hover bg-[#111c2d] hover:bg-brand-container text-brand-text-secondary hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded border flex items-center justify-center transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? 'border-brand-orange bg-[#ff4d00]/10 text-brand-orange font-bold font-mono'
                    : 'border-brand-container-hover bg-[#111c2d] text-brand-text-secondary hover:text-white'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="p-2 px-3 rounded border border-brand-container-hover bg-[#111c2d] hover:bg-brand-container text-brand-text-secondary hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
