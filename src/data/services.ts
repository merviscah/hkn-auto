import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'motor-mekanik',
    title: 'Motor Mekanik Bakım Onarım ve Revizyon',
    subtitle: 'EARTH_ENGINE',
    description: 'Kapsamlı motor revizyonu ve mekanik parçaların hassas onarımı. Aracınızın kalbini fabrikadan çıktığı ilk günkü performansına döndürüyoruz.',
    iconName: 'Wrench',
    details: {
      avgTime: '2 - 5 İş Günü',
      priceRange: '₺₺ - ₺₺₺',
      warranty: '1 Yıl / 20.000 KM Garantili',
      diagnosticApps: ['Hassas Silindir Basınç Analizi', 'Kompresyon Eğrisi Kalibrasyonu', 'Yakıt Besleme Teşhis Sistemi'],
      steps: [
        'Motor detaylı yıkanması ve akustik arıza dinleme',
        'Bilgisayarlı kompresyon ve kaçak testleri',
        'Silindir kapak, supap ve yatak tölerans kontrolleri',
        'Orijinal OEM parçalar ile hassas montaj ve torklama',
        'Re-MAP kalibrasyonu ve ilk marş yol testleri'
      ]
    }
  },
  {
    id: 'on-takim',
    title: 'Ön Takım Tamiri',
    description: 'Sürüş konforu ve güvenliğiniz için süspansiyon ve direksiyon sistemlerinin milimetrik ayarı.',
    iconName: 'Activity',
    details: {
      avgTime: '3 - 6 Saat',
      priceRange: '₺ - ₺₺',
      warranty: '6 Ay Garanti',
      diagnosticApps: ['Lazer Askı Hizalama (Rot)', 'Kamber-Kaster Kalibrasyonu', 'Dinamik Boşluk ve Sarsıntı Analizi'],
      steps: [
        'Amortisör ve helezon yayların sönümleme testi',
        'Salıncak, rot başı ve rotillerin boşluk kontrolü',
        '3D Lazer teknolojisi ile hassas rot ayarı',
        'Direksiyon kutusu hidrolik ve boşluk testleri'
      ]
    }
  },
  {
    id: 'periyodik-bakim',
    title: 'Periyodik Bakım',
    description: 'Düzenli kontrol ve değişimlerle aracınızın ömrünü uzatan, sorunsuz sürüş sağlayan bakım paketleri.',
    iconName: 'Calendar',
    details: {
      avgTime: '1 - 2 Saat',
      priceRange: '₺',
      warranty: '10.000 KM Bakım Güvencesi',
      diagnosticApps: ['36 Nokta Sıvı Sızdırmazlık Taraması', 'OBD-II Arıza Kodu Eşitlemesi', 'Şarj Sistemi ve Alternatör Check-up'],
      steps: [
        'Motor yağı ve filtrelerin (hava, polen, yakıt) değişimi',
        'Fren balataları ve disk kalınlık tolerans kontrolü',
        'Antifriz, hidrolik seviyeleri ve safiyet derecesi ölçümü',
        'Lastik diş derinliği ve basınç kontrolleri',
        'Servis lambası ve arıza hafızası sıfırlama'
      ]
    }
  },
  {
    id: 'elektronik-cozumler',
    title: 'Elektronik Çözümler',
    description: 'Kronik ve karmaşık elektriksel arızaların son teknoloji diyagnostik cihazlarla kesin çözümü.',
    iconName: 'Cpu',
    details: {
      avgTime: '4 - 12 Saat',
      priceRange: '₺₺',
      warranty: '6 Ay Elektronik Onarım Garantisi',
      diagnosticApps: ['Osiloskop CAN-BUS Dalga Boyu Analizi', 'ECU Beyin Kodlama ve Güncelleme', 'Termal Kamerayla Kaçak Akım Tespiti'],
      steps: [
        'CAN-Bus iletişim hattı osiloskop ölçümleri',
        'Kontrol ünitesi (ECU) yazılım ve donanım kontrolü',
        'Tesisat, röle ve sigorta kutusu akım testleri',
        'Sensör ve aktüatör sinyal kalibrasyonları'
      ]
    }
  },
  {
    id: 'sanziman-onarim',
    title: 'Şanzıman Onarım',
    description: 'Otomatik şanzıman sistemlerinde uzmanlaşmış teknik ekip ile vites geçişlerinde kusursuzluk.',
    iconName: 'Sliders',
    details: {
      avgTime: '1 - 3 İş Günü',
      priceRange: '₺₺ - ₺₺₺',
      warranty: '1 Yıl Onarım Garantisi',
      diagnosticApps: ['Vites Oranı Kayma Monitörleme', 'Şanzıman Yağı Viskozite Ölçümü', 'Selenoid Aktüatör Basınç Testi'],
      steps: [
        'Şanzıman beyni selenoid ve basınç testleri',
        'Debriyaj ve balata takımı aşınma kontrolleri',
        'Türbin (tork konvertörü) balans ve revizyon süreci',
        'Şanzıman yağı ve dahili filtrelerin değişimi',
        'Yazılımsal vites geçiş kalibrasyonu (Adaptasyon)'
      ]
    }
  }
];
