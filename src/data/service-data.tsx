import {
    Award, BadgeCheck, ClipboardCheck, FlaskConical,
    GraduationCap, HeartPulse, Leaf, ShieldCheck,
    ShieldHalf, Truck, Wheat, Zap,
} from "lucide-react";

export const servicesPageData = {
    hero: {
        title: "Professional ISO Certification Services",
        description:
            "QSI menyediakan layanan sertifikasi sistem manajemen internasional untuk membantu perusahaan meningkatkan kualitas, kepatuhan, keamanan, dan daya saing bisnis.",
        cta: {
            primary: "Free Consultation",
            secondary: "Explore Certifications",
        },
    },
};

export const servicesData = [
    {
        id: 1,
        name: "ISO 9001",
        slug: "iso-9001",
        shortName: "Quality Management System",
        icon: Award,
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
        overview:
            "Sistem Manajemen Mutu (SMM) ISO 9001 adalah standar internasional yang membantu organisasi memastikan produk dan layanannya secara konsisten memenuhi kebutuhan pelanggan dan regulasi yang berlaku.",
        shortDescription:
            "Meningkatkan kualitas bisnis dan kepuasan pelanggan melalui sistem manajemen mutu yang terstruktur.",
        whyNeedIt:
            "Di tengah persaingan global yang semakin ketat, pelanggan dan mitra bisnis menuntut bukti nyata komitmen kualitas. ISO 9001 memberikan kerangka kerja yang teruji untuk membangun kepercayaan, mengurangi pemborosan, dan mendorong perbaikan berkelanjutan di seluruh lini operasional.",
        benefits: [
            "Meningkatkan kepuasan dan loyalitas pelanggan",
            "Meningkatkan efisiensi dan konsistensi operasional",
            "Mengurangi kesalahan proses dan biaya rework",
            "Meningkatkan kredibilitas dan daya saing perusahaan",
            "Membuka akses ke pasar dan tender yang lebih besar",
            "Mendorong budaya perbaikan berkelanjutan",
        ],
        targetIndustries: ["Manufacturing", "Construction", "Healthcare", "Education", "Logistics"],
        certificationProcess: [
            "Consultation",
            "Gap Analysis",
            "Document Review",
            "Stage 1 Audit",
            "Stage 2 Audit",
            "Certification Decision",
        ],
        estimatedTimeline: "1 - 3 Months",
        stats: [
            { label: "Organisasi Bersertifikat", value: "1M+", desc: "di seluruh dunia" },
            { label: "Negara", value: "170+", desc: "mengadopsi standar ini" },
            { label: "Peningkatan Efisiensi", value: "30%", desc: "rata-rata setelah implementasi" },
        ],
        faq: [
            {
                question: "Apa manfaat ISO 9001 untuk bisnis saya?",
                answer: "ISO 9001 membantu perusahaan meningkatkan kualitas layanan, kepuasan pelanggan, dan efisiensi operasional secara terukur.",
            },
            {
                question: "Apakah ISO 9001 cocok untuk UMKM?",
                answer: "Ya, ISO 9001 dapat diterapkan pada semua jenis organisasi, mulai dari UMKM hingga perusahaan multinasional.",
            },
            {
                question: "Berapa lama sertifikat ISO 9001 berlaku?",
                answer: "Sertifikat berlaku selama 3 tahun dengan audit surveilans tahunan untuk memastikan kepatuhan berkelanjutan.",
            },
        ],
        cta: { title: "Improve Your Business Quality Today", button: "Consult ISO 9001" },
    },

    {
        id: 2,
        name: "ISO 14001",
        slug: "iso-14001",
        shortName: "Environmental Management System",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
        overview:
            "ISO 14001 adalah standar internasional untuk Sistem Manajemen Lingkungan (SML) yang membantu organisasi mengidentifikasi, mengelola, memantau, dan mengendalikan dampak lingkungan dari kegiatan operasionalnya.",
        shortDescription:
            "Mengelola dampak lingkungan dengan sistem manajemen berstandar internasional untuk bisnis yang lebih berkelanjutan.",
        whyNeedIt:
            "Regulasi lingkungan semakin ketat dan konsumen semakin peduli terhadap praktik bisnis yang ramah lingkungan. ISO 14001 membantu perusahaan memenuhi kewajiban regulasi sekaligus membangun reputasi sebagai bisnis yang bertanggung jawab terhadap lingkungan.",
        benefits: [
            "Mengurangi dampak lingkungan secara terukur",
            "Meningkatkan efisiensi penggunaan energi dan sumber daya",
            "Meningkatkan reputasi dan citra perusahaan",
            "Memenuhi regulasi dan persyaratan lingkungan",
            "Mengurangi risiko denda dan sanksi lingkungan",
            "Membuka peluang bisnis dengan mitra yang peduli lingkungan",
        ],
        targetIndustries: ["Manufacturing", "Energy", "Agriculture", "Construction"],
        certificationProcess: [
            "Initial Consultation",
            "Environmental Review",
            "Documentation",
            "Audit Process",
            "Certification",
        ],
        estimatedTimeline: "2 - 4 Months",
        stats: [
            { label: "Sertifikat Aktif", value: "300K+", desc: "di seluruh dunia" },
            { label: "Pengurangan Emisi", value: "20%", desc: "rata-rata setelah implementasi" },
            { label: "Penghematan Energi", value: "15%", desc: "rata-rata per tahun" },
        ],
        faq: [
            {
                question: "Mengapa ISO 14001 penting untuk bisnis?",
                answer: "ISO 14001 membantu perusahaan mengurangi dampak negatif terhadap lingkungan sekaligus memenuhi regulasi yang berlaku.",
            },
            {
                question: "Apakah ISO 14001 wajib?",
                answer: "Tidak wajib secara hukum, namun banyak tender pemerintah dan klien internasional mensyaratkan sertifikasi ini.",
            },
        ],
        cta: { title: "Build a Sustainable Business", button: "Consult ISO 14001" },
    },

    {
        id: 3,
        name: "ISO 45001",
        slug: "iso-45001",
        shortName: "Occupational Health & Safety",
        icon: ShieldHalf,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        overview:
            "ISO 45001 adalah standar internasional untuk Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) yang membantu organisasi menciptakan lingkungan kerja yang aman dan sehat bagi seluruh karyawan.",
        shortDescription:
            "Melindungi tenaga kerja dengan sistem keselamatan dan kesehatan kerja berstandar internasional.",
        whyNeedIt:
            "Kecelakaan kerja berdampak besar pada produktivitas, biaya, dan reputasi perusahaan. ISO 45001 memberikan sistem yang proaktif untuk mengidentifikasi dan mengendalikan risiko K3 sebelum insiden terjadi, bukan sekadar bereaksi setelah kejadian.",
        benefits: [
            "Mengurangi risiko kecelakaan dan penyakit kerja",
            "Meningkatkan keselamatan dan kesehatan seluruh karyawan",
            "Meningkatkan kepatuhan terhadap regulasi K3",
            "Membangun budaya keselamatan di seluruh organisasi",
            "Mengurangi biaya akibat kecelakaan dan absensi",
            "Meningkatkan produktivitas dan moral karyawan",
        ],
        targetIndustries: ["Construction", "Manufacturing", "Mining", "Energy"],
        certificationProcess: [
            "Consultation",
            "Risk Assessment",
            "Documentation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "2 - 5 Months",
        stats: [
            { label: "Kematian Kerja/Tahun", value: "2.78M", desc: "dapat dicegah secara global" },
            { label: "Pengurangan Insiden", value: "40%", desc: "rata-rata setelah implementasi" },
            { label: "Penghematan Biaya", value: "25%", desc: "dari biaya kompensasi" },
        ],
        faq: [
            {
                question: "Apa perbedaan ISO 45001 dengan OHSAS 18001?",
                answer: "ISO 45001 menggantikan OHSAS 18001 dengan pendekatan yang lebih komprehensif, termasuk keterlibatan pekerja dan konteks organisasi.",
            },
            {
                question: "Apakah ISO 45001 cocok untuk semua ukuran perusahaan?",
                answer: "Ya, ISO 45001 dirancang fleksibel dan dapat diterapkan pada organisasi dari berbagai ukuran dan sektor.",
            },
        ],
        cta: { title: "Protect Your Workforce", button: "Consult ISO 45001" },
    },

    {
        id: 4,
        name: "ISO 39001",
        slug: "iso-39001",
        shortName: "Road Traffic Safety Management",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        overview:
            "ISO 39001 adalah standar internasional untuk Sistem Manajemen Keselamatan Lalu Lintas Jalan yang membantu organisasi mengurangi risiko kecelakaan dan fatalitas dalam operasional transportasi darat.",
        shortDescription:
            "Meningkatkan keselamatan lalu lintas dan sistem transportasi perusahaan secara sistematis.",
        whyNeedIt:
            "Perusahaan yang mengandalkan armada kendaraan menghadapi risiko besar dari kecelakaan lalu lintas — baik dari sisi finansial maupun reputasi. ISO 39001 menyediakan kerangka kerja untuk mengelola risiko tersebut secara proaktif.",
        benefits: [
            "Mengurangi risiko kecelakaan lalu lintas",
            "Meningkatkan keselamatan pengemudi dan armada",
            "Meningkatkan kepatuhan operasional transportasi",
            "Mengurangi biaya klaim asuransi dan perbaikan",
            "Meningkatkan efisiensi pengelolaan armada",
        ],
        targetIndustries: ["Logistics", "Transportation", "Distribution"],
        certificationProcess: [
            "Consultation",
            "Traffic Risk Analysis",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "1 - 3 Months",
        stats: [
            { label: "Kematian Lalu Lintas/Tahun", value: "1.35M", desc: "secara global" },
            { label: "Pengurangan Kecelakaan", value: "35%", desc: "rata-rata setelah implementasi" },
            { label: "Penghematan Biaya Armada", value: "20%", desc: "per tahun" },
        ],
        faq: [
            {
                question: "Siapa yang membutuhkan ISO 39001?",
                answer: "Perusahaan logistik, transportasi, distribusi, dan organisasi mana pun yang mengoperasikan armada kendaraan untuk kegiatan bisnis.",
            },
        ],
        cta: { title: "Improve Road Safety Standards", button: "Consult ISO 39001" },
    },

    {
        id: 5,
        name: "ISO 22000",
        slug: "iso-22000",
        shortName: "Food Safety Management",
        icon: Wheat,
        image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010",
        overview:
            "ISO 22000 adalah standar internasional untuk Sistem Manajemen Keamanan Pangan yang mengintegrasikan prinsip HACCP dengan sistem manajemen untuk memastikan keamanan produk makanan di seluruh rantai pasokan.",
        shortDescription:
            "Memastikan keamanan produk pangan dari hulu ke hilir dengan standar manajemen internasional.",
        whyNeedIt:
            "Kontaminasi pangan dapat menyebabkan kerugian masif — dari penarikan produk hingga tuntutan hukum. ISO 22000 memberikan sistem yang komprehensif untuk mengidentifikasi dan mengendalikan bahaya pangan sebelum sampai ke konsumen.",
        benefits: [
            "Menjamin keamanan produk pangan di seluruh rantai pasokan",
            "Meningkatkan kepercayaan pelanggan dan regulator",
            "Mengurangi risiko kontaminasi dan penarikan produk",
            "Memenuhi persyaratan ekspor ke pasar internasional",
            "Meningkatkan efisiensi proses produksi pangan",
        ],
        targetIndustries: ["Food & Beverage", "Agriculture", "Distribution"],
        certificationProcess: [
            "Consultation",
            "Food Safety Assessment",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "2 - 4 Months",
        stats: [
            { label: "Kasus Keracunan Pangan/Tahun", value: "600M", desc: "dapat dicegah" },
            { label: "Negara Mensyaratkan", value: "50+", desc: "untuk ekspor produk pangan" },
            { label: "Pengurangan Insiden", value: "45%", desc: "rata-rata setelah implementasi" },
        ],
        faq: [
            {
                question: "Apa perbedaan ISO 22000 dan HACCP?",
                answer: "ISO 22000 mengintegrasikan HACCP ke dalam sistem manajemen yang lebih komprehensif, mencakup komunikasi, manajemen sistem, dan program prasyarat.",
            },
        ],
        cta: { title: "Ensure Food Safety Excellence", button: "Consult ISO 22000" },
    },

    {
        id: 6,
        name: "ISO 27001",
        slug: "iso-27001",
        shortName: "Information Security Management",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        overview:
            "ISO 27001 adalah standar internasional untuk Sistem Manajemen Keamanan Informasi (SMKI) yang membantu organisasi melindungi aset informasi dari ancaman siber, kebocoran data, dan gangguan sistem.",
        shortDescription:
            "Melindungi data dan informasi bisnis dari ancaman siber dengan sistem keamanan informasi internasional.",
        whyNeedIt:
            "Serangan siber dan kebocoran data semakin canggih dan merugikan. Biaya rata-rata satu insiden kebocoran data mencapai $4.45 juta. ISO 27001 memberikan kerangka kerja komprehensif untuk melindungi aset informasi perusahaan secara sistematis.",
        benefits: [
            "Melindungi data dan aset informasi perusahaan",
            "Mengurangi risiko serangan siber dan kebocoran data",
            "Meningkatkan kepercayaan klien dan mitra bisnis",
            "Memenuhi regulasi perlindungan data (PDPA, GDPR)",
            "Mengurangi biaya insiden keamanan informasi",
            "Meningkatkan kesadaran keamanan di seluruh organisasi",
        ],
        targetIndustries: ["Technology", "Finance", "Healthcare", "Government"],
        certificationProcess: [
            "Gap Analysis",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "2 - 6 Months",
        stats: [
            { label: "Biaya Rata-rata Kebocoran Data", value: "$4.45M", desc: "per insiden" },
            { label: "Serangan Siber/Hari", value: "2,200+", desc: "secara global" },
            { label: "Pengurangan Risiko", value: "50%", desc: "setelah implementasi" },
        ],
        faq: [
            {
                question: "Apakah ISO 27001 wajib untuk perusahaan teknologi?",
                answer: "Tidak wajib secara hukum, namun banyak klien enterprise dan tender pemerintah mensyaratkan ISO 27001 sebagai prasyarat.",
            },
            {
                question: "Apakah ISO 27001 mencakup keamanan cloud?",
                answer: "Ya, ISO 27001 mencakup semua aspek keamanan informasi termasuk infrastruktur cloud melalui Annex A kontrol yang relevan.",
            },
        ],
        cta: { title: "Secure Your Business Information", button: "Consult ISO 27001" },
    },

    {
        id: 7,
        name: "ISO 50001",
        slug: "iso-50001",
        shortName: "Energy Management System",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        overview:
            "ISO 50001 adalah standar internasional untuk Sistem Manajemen Energi yang membantu organisasi mengembangkan kebijakan penggunaan energi yang lebih efisien, menetapkan target, dan mengukur kemajuannya.",
        shortDescription:
            "Mengoptimalkan penggunaan energi untuk efisiensi operasional dan pengurangan emisi karbon.",
        whyNeedIt:
            "Biaya energi terus meningkat dan tekanan regulasi untuk mengurangi emisi karbon semakin besar. ISO 50001 memberikan sistem yang terstruktur untuk mengidentifikasi peluang penghematan energi dan mewujudkannya secara berkelanjutan.",
        benefits: [
            "Mengurangi biaya energi secara signifikan",
            "Meningkatkan efisiensi dan produktivitas operasional",
            "Mengurangi emisi karbon dan jejak lingkungan",
            "Memenuhi regulasi dan komitmen keberlanjutan",
            "Meningkatkan reputasi sebagai perusahaan ramah lingkungan",
        ],
        targetIndustries: ["Manufacturing", "Energy", "Industrial"],
        certificationProcess: [
            "Energy Review",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "2 - 4 Months",
        stats: [
            { label: "Penghematan Energi", value: "10-30%", desc: "rata-rata per tahun" },
            { label: "Pengurangan Emisi CO2", value: "20%", desc: "rata-rata setelah implementasi" },
            { label: "ROI", value: "2-3x", desc: "dalam 3 tahun pertama" },
        ],
        faq: [
            {
                question: "Berapa penghematan energi yang bisa dicapai?",
                answer: "Rata-rata organisasi mencapai penghematan 10-30% biaya energi dalam tahun pertama implementasi.",
            },
        ],
        cta: { title: "Optimize Your Energy Efficiency", button: "Consult ISO 50001" },
    },

    {
        id: 8,
        name: "ISO 37001",
        slug: "iso-37001",
        shortName: "Anti-Bribery Management",
        icon: BadgeCheck,
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
        overview:
            "ISO 37001 adalah standar internasional untuk Sistem Manajemen Anti Penyuapan yang membantu organisasi mencegah, mendeteksi, dan menangani penyuapan dalam operasional bisnis.",
        shortDescription:
            "Membangun sistem anti penyuapan yang profesional dan transparan untuk tata kelola perusahaan yang baik.",
        whyNeedIt:
            "Penyuapan merusak kepercayaan bisnis, menghambat pertumbuhan ekonomi, dan dapat berujung pada sanksi hukum yang berat. ISO 37001 menunjukkan komitmen nyata perusahaan terhadap integritas dan tata kelola yang baik.",
        benefits: [
            "Meningkatkan integritas dan transparansi perusahaan",
            "Mengurangi risiko penyuapan dan korupsi",
            "Meningkatkan kepercayaan stakeholder dan investor",
            "Melindungi perusahaan dari sanksi hukum",
            "Membuka akses ke tender dan mitra internasional",
        ],
        targetIndustries: ["Government", "Finance", "Corporate"],
        certificationProcess: [
            "Consultation",
            "Policy Development",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "2 - 5 Months",
        stats: [
            { label: "Kerugian Korupsi Global/Tahun", value: "$3.6T", desc: "secara global" },
            { label: "Peningkatan Kepercayaan", value: "60%", desc: "dari investor dan mitra" },
            { label: "Pengurangan Risiko", value: "40%", desc: "insiden penyuapan" },
        ],
        faq: [
            {
                question: "Apakah ISO 37001 diperlukan untuk tender pemerintah?",
                answer: "Semakin banyak instansi pemerintah dan BUMN mensyaratkan ISO 37001 sebagai bukti komitmen anti korupsi dalam proses tender.",
            },
        ],
        cta: { title: "Build Integrity & Transparency", button: "Consult ISO 37001" },
    },

    {
        id: 9,
        name: "ISO 21001",
        slug: "iso-21001",
        shortName: "Educational Organization Management",
        icon: GraduationCap,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        overview:
            "ISO 21001 adalah standar internasional untuk Sistem Manajemen Organisasi Pendidikan yang membantu institusi pendidikan meningkatkan kualitas layanan dan kepuasan peserta didik.",
        shortDescription:
            "Meningkatkan kualitas dan daya saing institusi pendidikan dengan standar manajemen internasional.",
        whyNeedIt:
            "Persaingan antar institusi pendidikan semakin ketat. ISO 21001 memberikan kerangka kerja yang terbukti untuk meningkatkan kualitas pengajaran, layanan, dan pengalaman belajar yang berdampak positif pada akreditasi dan kepercayaan masyarakat.",
        benefits: [
            "Meningkatkan kualitas proses belajar mengajar",
            "Meningkatkan kepuasan peserta didik dan orang tua",
            "Meningkatkan kredibilitas dan akreditasi institusi",
            "Membangun sistem manajemen yang lebih terstruktur",
            "Membuka peluang kerjasama internasional",
        ],
        targetIndustries: ["Education", "Training Institution"],
        certificationProcess: [
            "Consultation",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "2 - 4 Months",
        stats: [
            { label: "Peningkatan Kepuasan Siswa", value: "35%", desc: "rata-rata setelah implementasi" },
            { label: "Institusi Bersertifikat", value: "5,000+", desc: "di seluruh dunia" },
            { label: "Peningkatan Akreditasi", value: "28%", desc: "nilai rata-rata" },
        ],
        faq: [
            {
                question: "Apakah ISO 21001 cocok untuk sekolah swasta?",
                answer: "Ya, ISO 21001 dirancang untuk semua jenis organisasi pendidikan, mulai dari sekolah swasta, universitas, hingga lembaga pelatihan.",
            },
        ],
        cta: { title: "Improve Educational Standards", button: "Consult ISO 21001" },
    },

    {
        id: 10,
        name: "ISO 13485",
        slug: "iso-13485",
        shortName: "Medical Devices Management",
        icon: HeartPulse,
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
        overview:
            "ISO 13485 adalah standar internasional untuk Sistem Manajemen Mutu khusus industri alat kesehatan yang memastikan perangkat medis diproduksi dan didistribusikan secara konsisten memenuhi persyaratan regulasi.",
        shortDescription:
            "Memastikan kualitas dan keamanan perangkat medis dengan standar manajemen mutu internasional.",
        whyNeedIt:
            "Industri alat kesehatan diatur ketat oleh regulasi nasional dan internasional. ISO 13485 adalah prasyarat untuk memasuki pasar global dan mendapatkan izin edar dari otoritas regulasi seperti FDA, CE Mark, dan BPOM.",
        benefits: [
            "Memenuhi persyaratan regulasi alat kesehatan internasional",
            "Meningkatkan kualitas dan keamanan produk medis",
            "Membuka akses ke pasar global (FDA, CE Mark)",
            "Mengurangi risiko penarikan produk dan sanksi",
            "Meningkatkan kepercayaan tenaga medis dan pasien",
        ],
        targetIndustries: ["Healthcare", "Medical Device"],
        certificationProcess: [
            "Gap Analysis",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "3 - 6 Months",
        stats: [
            { label: "Pasar Alkes Global", value: "$600B", desc: "proyeksi 2025" },
            { label: "Regulasi Mensyaratkan", value: "50+", desc: "negara untuk izin edar" },
            { label: "Pengurangan Insiden", value: "40%", desc: "produk cacat" },
        ],
        faq: [
            {
                question: "Apakah ISO 13485 wajib untuk produsen alat kesehatan?",
                answer: "Di banyak negara, ISO 13485 merupakan persyaratan wajib atau de facto untuk mendapatkan izin edar produk alat kesehatan.",
            },
        ],
        cta: { title: "Ensure Medical Device Quality", button: "Consult ISO 13485" },
    },

    {
        id: 11,
        name: "ISO 17025",
        slug: "iso-17025",
        shortName: "Laboratory Management System",
        icon: FlaskConical,
        image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e",
        overview:
            "ISO 17025 adalah standar internasional untuk kompetensi laboratorium pengujian dan kalibrasi yang memastikan hasil pengujian yang valid, akurat, dan dapat diterima secara internasional.",
        shortDescription:
            "Meningkatkan kompetensi dan kredibilitas laboratorium sesuai standar internasional.",
        whyNeedIt:
            "Klien dan regulator membutuhkan jaminan bahwa hasil laboratorium dapat dipercaya. Akreditasi ISO 17025 memberikan bukti objektif bahwa laboratorium memiliki kompetensi teknis dan sistem manajemen yang memadai.",
        benefits: [
            "Meningkatkan validitas dan akurasi hasil pengujian",
            "Meningkatkan kompetensi teknis personel laboratorium",
            "Meningkatkan kepercayaan klien terhadap hasil uji",
            "Membuka akses ke tender dan kontrak internasional",
            "Memenuhi persyaratan akreditasi KAN dan internasional",
        ],
        targetIndustries: ["Laboratory", "Healthcare", "Research"],
        certificationProcess: [
            "Technical Review",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "3 - 6 Months",
        stats: [
            { label: "Laboratorium Terakreditasi", value: "100K+", desc: "di seluruh dunia" },
            { label: "Peningkatan Akurasi", value: "99.9%", desc: "tingkat kepercayaan hasil uji" },
            { label: "Negara Mengakui", value: "100+", desc: "hasil uji laboratorium terakreditasi" },
        ],
        faq: [
            {
                question: "Apa perbedaan ISO 17025 dan ISO 9001 untuk laboratorium?",
                answer: "ISO 17025 spesifik untuk kompetensi teknis laboratorium, sementara ISO 9001 berfokus pada sistem manajemen mutu umum. Keduanya bisa diimplementasikan bersama.",
            },
        ],
        cta: { title: "Improve Laboratory Competency", button: "Consult ISO 17025" },
    },

    {
        id: 12,
        name: "HACCP",
        slug: "haccp",
        shortName: "Food Hazard Control",
        icon: ClipboardCheck,
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
        overview:
            "HACCP (Hazard Analysis and Critical Control Points) adalah sistem pengendalian keamanan pangan yang berfokus pada identifikasi dan pengendalian bahaya fisik, kimia, dan biologis dalam proses produksi pangan.",
        shortDescription:
            "Mengendalikan risiko keamanan pangan secara sistematis dari bahan baku hingga produk jadi.",
        whyNeedIt:
            "Kontaminasi pangan berdampak serius pada kesehatan konsumen dan bisnis Anda. HACCP adalah pendekatan pencegahan yang telah terbukti secara ilmiah dan diakui oleh Codex Alimentarius sebagai standar keamanan pangan global.",
        benefits: [
            "Mengurangi risiko kontaminasi pangan secara proaktif",
            "Meningkatkan keamanan dan kualitas produk",
            "Meningkatkan kepercayaan konsumen dan regulator",
            "Memenuhi persyaratan regulasi BPOM dan internasional",
            "Mengurangi risiko penarikan produk dan kerugian bisnis",
        ],
        targetIndustries: ["Food Industry", "Restaurant", "Manufacturing"],
        certificationProcess: [
            "Hazard Analysis",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "1 - 3 Months",
        stats: [
            { label: "Pengurangan Kontaminasi", value: "60%", desc: "rata-rata setelah implementasi" },
            { label: "Negara Mensyaratkan", value: "40+", desc: "untuk ekspor produk pangan" },
            { label: "Penghematan Biaya", value: "30%", desc: "dari recall dan insiden" },
        ],
        faq: [
            {
                question: "Apakah HACCP wajib untuk industri makanan?",
                answer: "HACCP diwajibkan oleh BPOM untuk industri pangan tertentu dan menjadi persyaratan wajib untuk ekspor ke banyak negara.",
            },
        ],
        cta: { title: "Maintain Food Safety Standards", button: "Consult HACCP" },
    },

    {
        id: 13,
        name: "GDP",
        slug: "gdp",
        shortName: "Good Distribution Practice",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
        overview:
            "GDP (Good Distribution Practice) adalah standar praktik distribusi yang baik untuk memastikan produk, terutama produk farmasi dan kesehatan, didistribusikan dengan cara yang menjaga kualitas dan integritasnya.",
        shortDescription:
            "Memastikan kualitas dan integritas produk terjaga di seluruh rantai distribusi.",
        whyNeedIt:
            "Produk yang rusak atau terkontaminasi selama distribusi dapat menyebabkan kerugian besar dan risiko kesehatan. GDP memberikan standar yang jelas untuk penanganan, penyimpanan, dan pengiriman produk yang memenuhi persyaratan regulasi.",
        benefits: [
            "Menjamin kualitas produk sepanjang rantai distribusi",
            "Mengurangi risiko kerusakan dan kontaminasi produk",
            "Meningkatkan kepatuhan terhadap regulasi distribusi",
            "Memenuhi persyaratan BPOM untuk distribusi farmasi",
            "Meningkatkan kepercayaan klien dan mitra bisnis",
        ],
        targetIndustries: ["Logistics", "Pharmaceutical", "Distribution"],
        certificationProcess: [
            "Assessment",
            "Implementation",
            "Audit",
            "Certification",
        ],
        estimatedTimeline: "1 - 3 Months",
        stats: [
            { label: "Pengurangan Produk Rusak", value: "45%", desc: "rata-rata setelah implementasi" },
            { label: "Kepatuhan Regulasi", value: "100%", desc: "persyaratan BPOM terpenuhi" },
            { label: "Penghematan Biaya", value: "25%", desc: "dari kerugian distribusi" },
        ],
        faq: [
            {
                question: "Apakah GDP wajib untuk distributor farmasi?",
                answer: "Ya, GDP merupakan persyaratan wajib dari BPOM untuk perusahaan yang mendistribusikan produk farmasi dan alat kesehatan di Indonesia.",
            },
        ],
        cta: { title: "Improve Distribution Quality", button: "Consult GDP" },
    },
];