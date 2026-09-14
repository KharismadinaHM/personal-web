/**
 * Translations Dictionary for Kharismadina Hijra M Portfolio
 * Bilingual Support: Indonesian (ID) & English (EN - directly from original CV)
 */

const translations = {
  id: {
    // Navigation
    nav_about: "Tentang",
    nav_experience: "Pengalaman",
    nav_skills: "Keahlian",
    nav_education: "Pendidikan & Sertifikasi",
    nav_contact: "Kontak",
    nav_contact_btn: "Hubungi Saya",

    // Hero
    hero_available: "Tersedia untuk Peluang & Proyek Baru",
    hero_subtitle: "Data & Machine Learning Engineer",
    hero_tagline: "Data Engineer dinamis dengan 4 tahun pengalaman membangun pipeline analitik berkinerja tinggi, alur kerja ETL & reverse ETL, arsitektur berbasis event, dan sistem Generative AI multi-agent di cloud. Membuka nilai data bisnis melalui data engineering dan kecerdasan buatan.",
    hero_btn_experience: "Lihat Pengalaman",
    hero_btn_contact: "Hubungi Saya",
    hero_btn_cv: "Request CV",
    hero_cert_badge: "4x Google Cloud Certified",

    // Metrics
    metric_exp_val: "4+ Tahun",
    metric_exp_lbl: "Pengalaman Data & ML Engineering",
    metric_gcp_val: "4x GCP",
    metric_gcp_lbl: "Google Cloud Professional Certified",
    metric_data_val: "1TB+ Data",
    metric_data_lbl: "ETL Pipelines Firebase ke BigQuery",
    metric_edu_val: "Top 0.1%",
    metric_edu_lbl: "Lulusan Terbaik Ilmu Komputer Gunadarma",

    // About Section
    about_subtitle: "Tentang Saya",
    about_title: "Fondasi Kuat di Data Platform & Machine Learning",
    about_p1: "Saya adalah <strong>Data & Machine Learning Engineer</strong> yang berfokus pada perancangan arsitektur data skala besar, otomatisasi pipeline analitik, serta integrasi model machine learning dan LLM ke dalam alur kerja bisnis.",
    about_p2: "Berpengalaman mengelola siklus hidup data menyeluruh — mulai dari <em>real-time event streaming</em> dengan Apache Kafka & Apache Spark, orkestrasi batch dengan Apache Airflow & dbt, pergudangan data modern di Google BigQuery & ClickHouse, hingga implementasi <em>distributed multi-agent generative AI system</em> berbasis GCP (Cloud Run, ADK, MCP).",
    about_p3: "Saya memiliki rekam jejak terbukti dalam memangkas latensi data, mengoptimalkan query basis data hingga 30%, serta menjembatani kebutuhan teknis arsitektur (SAD/TSD) dengan sasaran bisnis (BRD/FSD).",
    about_card_title: "Fokus & Spesialisasi",
    about_focus_1: "<strong>High-Performance Pipelines:</strong> ETL & reverse ETL batch/streaming (Kafka, Dataflow, Airflow, dbt).",
    about_focus_2: "<strong>Generative AI & LLM:</strong> Multi-agent system, RAG, Gemini & Imagen integrations, MCP.",
    about_focus_3: "<strong>Cloud & Modern Data Stack:</strong> Google Cloud (BigQuery, Bigtable, Cloud Run), ClickHouse, Snowflake.",
    about_focus_4: "<strong>Analytics & BI:</strong> Looker real-time dashboards, reduksi proses manual hingga 40%.",

    // Experience Section
    exp_subtitle: "Karier & Proyek",
    exp_title: "Pengalaman Kerja Profesional",
    exp_desc: "Ringkasan rekayasa data dan model machine learning yang diterapkan pada skala enterprise.",
    exp_smartnet_period: "Agu 2023 — Sekarang",
    exp_smartnet_p: "Memimpin perancangan dan operasional data platform berskala besar, sistem orkestrasi data terdistribusi, serta rekayasa sistem AI generatif berbasis multi-agent di Google Cloud Platform.",
    exp_smartnet_h1: "<strong>Distributed Multi-Agent Generative AI System:</strong> Merancang sistem agen otonom di GCP (Cloud Run, ADK, MCP) yang mengagregasi analitik BigQuery, API finansial eksternal, dan model Gemini/Imagen untuk kampanye pemasaran lokal.",
    exp_smartnet_h2: "<strong>Large-scale ETL & Ingestion:</strong> Merancang pipeline ETL pengolah 1TB+ data dari Firebase ke BigQuery, serta mengefisiensikan real-time ingestion menggunakan Pub/Sub dan Dataflow dengan transformasi in-flight untuk mereduksi overhead penyimpanan.",
    exp_smartnet_h3: "<strong>Orchestration & Database Optimization:</strong> Mengotomatiskan alur kerja Airflow dan dbt (meningkatkan data freshness 30%), mengintegrasikan ClickHouse untuk analitik berkecepatan tinggi, serta migrasi NoSQL dari Cassandra ke Cloud Bigtable.",
    exp_smartnet_link: "Lihat Detail Proyek Lengkap (15 Items)",

    exp_scm_period: "Jan 2022 — Jul 2023",
    exp_scm_p: "Bertanggung jawab atas integrasi data rating siaran televisi nasional (SCTV & Indosiar), pipeline streaming terdistribusi, dan keandalan operasional batch DAGs harian.",
    exp_scm_h1: "<strong>Event-Driven Data Matching (Fuzzy ML):</strong> Membangun program pencocokan data periklanan Python menggunakan teknik machine learning <em>fuzzy wuzzy</em> untuk mengintegrasikan data Gen21 & Nielsen, meningkatkan akurasi matching sebesar 90% dan memangkas waktu pemrosesan 80%.",
    exp_scm_h2: "<strong>Streaming Data Pipelines:</strong> Membangun infrastruktur streaming data menggunakan Docker, Apache Kafka, Apache Spark, dan MySQL yang mampu menangani peningkatan volume data sebesar 40% tanpa hambatan.",
    exp_scm_h3: "<strong>Airflow Operational Efficiency:</strong> Mengimplementasikan Directed Acyclic Graphs (DAGs) untuk troubleshooting komprehensif, memangkas downtime sistem sebesar 35% dan mencapai 99.8% operational efficiency.",
    exp_scm_link: "Lihat Detail Proyek & Arsitektur",

    // Skills Section
    skills_subtitle: "Kompetensi Teknis",
    skills_title: "Keahlian & Penguasaan Teknologi",
    skills_desc: "Dikelompokkan berdasarkan domain keahlian dalam arsitektur data modern dan rekayasa AI.",
    skill_cat_1: "Data Pipeline & Orchestration",
    skill_cat_2: "Cloud Platforms & Infra",
    skill_cat_3: "Machine Learning & GenAI",
    skill_cat_4: "Databases & Warehousing",
    skill_cat_5: "Streaming & Distributed",
    skill_cat_6: "Metodologi & Kolaborasi",

    // Education & Certifications
    edu_subtitle: "Kualifikasi Formal",
    edu_title: "Pendidikan & Sertifikasi Cloud",
    edu_desc: "Standar kompetensi profesional bertaraf internasional dan pencapaian akademik teratas.",
    edu_heading: "Pendidikan",
    edu_degree: "Bachelor of Science in Computer Science (S.Kom)",
    edu_time: "Jakarta, Indonesia • Lulus Agustus 2023",
    edu_award: "Awarded Best Student — Top 0.1% Universitas",
    edu_bullet_1: "<strong>Deepfake Face Detection ML:</strong> Mengembangkan solusi deteksi wajah deepfake menggunakan Convolutional Neural Networks (CNN) dan Inception ResNet V2, mencapai akurasi 90% dan menurunkan false positive sebesar 80%.",
    edu_bullet_2: "<strong>Mentorship & Training:</strong> Membimbing praktisi melalui materi pembelajaran komprehensif, meningkatkan kompetensi tim sebesar 30% dalam adopsi teknik ML mutakhir.",
    edu_link: "Lihat Detail Proyek Deepfake (CNN/Inception) →",
    cert_heading: "Sertifikasi Resmi Google Cloud",

    // Contact Section
    contact_subtitle: "Mari Berkolaborasi",
    contact_title: "Informasi Kontak",
    contact_desc: "Terbuka untuk diskusi arsitektur data, implementasi machine learning/LLM, serta peluang kerja sama profesional.",
    contact_email_lbl: "Email Utama",
    contact_phone_lbl: "Telepon / WhatsApp",
    contact_loc_lbl: "Domisili",
    contact_github_lbl: "GitHub Profil",
    contact_copy_btn: "Salin",
    contact_cta_title: "Mulai Percakapan",
    contact_cta_desc: "Baik untuk proyek transformasi data, audit infrastruktur cloud, implementasi generative AI multi-agent, atau peluang karier, saya siap terhubung.",
    contact_btn_email: "Kirim Pesan via Email",
    contact_btn_wa: "Hubungi via WhatsApp",

    // Footer
    footer_tag: "Dibangun dengan standar web performa tinggi & desain minimalis modern.",
    footer_back_top: "Kembali ke Atas ↑",

    // Toast
    toast_copied: "Email berhasil disalin ke clipboard!",

    // Common Detail Page Labels
    detail_case_badge: "Studi Kasus Pengalaman Kerja",
    detail_research_badge: "Studi Kasus Riset & Machine Learning",
    back_to_home: "Kembali ke Portofolio Utama",
    back_to_edu: "Kembali ke Pendidikan & Sertifikasi",
    back_to_exp: "Kembali ke Pengalaman Lainnya",

    // Smartnet Detail
    smartnet_date: "Agustus 2023 — Sekarang",
    smartnet_b1_title: "1. Generative AI & Distributed Multi-Agent Architecture",
    smartnet_b1_desc: "Inisiatif strategis pemanfaatan kecerdasan buatan otonom untuk otomasi analisis dan pembuatan kampanye pemasaran berbasis data.",
    smartnet_p1_title: "Distributed Multi-Agent Generative AI System",
    smartnet_p1_text: "Merancang dan mengimplementasikan sistem multi-agent terdistribusi otonom di Google Cloud Platform. Agen-agen ini mengagregasi analitik BigQuery, integrasi API finansial pihak ketiga, dan pemodelan generative AI multimodal (Google Gemini & Imagen) untuk menghasilkan kampanye pemasaran berbasis data lokal secara dinamis dan terstruktur.",
    smartnet_p2_title: "Automated AI Data Feeding & Latency Reduction",
    smartnet_p2_text: "Mengimplementasikan alur kerja Apache Airflow untuk mengotomatiskan penarikan data PostgreSQL langsung ke BigQuery, memangkas latensi transfer data sebesar 30% dan mempercepat kapabilitas penyajian konteks data untuk aplikasi Generative AI.",
    smartnet_b2_title: "2. Ingestion Skala Besar & Streaming Pipelines",
    smartnet_b2_desc: "Pengembangan jalur data bervolume tinggi, penanganan data real-time, dan migrasi basis data NoSQL.",
    smartnet_p3_title: "ETL Firebase ke Google BigQuery",
    smartnet_p3_text: "Merancang dan memelihara pipeline ETL untuk memproses lebih dari 1TB data dari Firebase ke Google BigQuery, meningkatkan aksesibilitas dan ketersediaan data analitik untuk tim data science dan business intelligence.",
    smartnet_p4_title: "Streamlined Real-Time Data Ingestion",
    smartnet_p4_text: "Mengembangkan pipeline streaming real-time ke BigQuery memanfaatkan GCP Pub/Sub dan Cloud Dataflow. Mengintegrasikan logika transformasi in-flight untuk memfilter kolom audit redundan secara langsung, mengurangi overhead dan biaya penyimpanan hilir secara signifikan.",
    smartnet_p5_title: "Automated NoSQL Database Migration",
    smartnet_p5_text: "Merekayasa pipeline migrasi data otomatis tanpa kendala (seamless migration) untuk memindahkan beban kerja NoSQL dari on-premise Apache Cassandra ke Google Cloud Bigtable terkelola.",
    smartnet_b3_title: "3. Data Orchestration, Transformation & Analytics",
    smartnet_b3_desc: "Standardisasi logika bisnis dan percepatan kueri eksploratif data warehouse.",
    smartnet_p6_title: "Orchestration via Apache Airflow & dbt",
    smartnet_p6_text: "Mengorkestrasi tahapan ingestion, transformasi, dan uji kualitas data otomatis menggunakan Apache Airflow dan dbt (data build tool). Berhasil meningkatkan kesegaran data (freshness) sebesar 30% dan menjamin konsistensi logika bisnis di seluruh dataset perusahaan.",
    smartnet_p7_title: "Integrasi ClickHouse Columnar Storage",
    smartnet_p7_text: "Mengintegrasikan ClickHouse untuk pengujian analitik berkinerja tinggi pada proyek proof-of-concept (POC), menghasilkan akselerasi drastis dalam eksplorasi dan query analitik dataset berukuran besar.",
    smartnet_p8_title: "5+ Dashboard Interaktif Looker",
    smartnet_p8_text: "Membangun 5+ dashboard analitik interaktif di Looker untuk kebutuhan pelaporan real-time manajemen, mengotomatiskan alur kerja dan memangkas pemrosesan data manual hingga 40%.",
    smartnet_p9_title: "Optimasi & Desain Basis Data",
    smartnet_p9_text: "Merancang dan mengoptimalkan skema basis data pada lebih dari 3 aplikasi produksi, menghasilkan peningkatan performa kueri rata-rata sebesar 30%.",
    smartnet_b4_title: "4. Tata Kelola Arsitektur & Manajemen Proyek",
    smartnet_b4_desc: "Menyelaraskan rancangan arsitektur teknis dengan sasaran bisnis strategis para pemangku kepentingan.",
    smartnet_p10_title: "Dokumentasi Kebutuhan Bisnis & Fungsional",
    smartnet_p10_text: "Menyusun 3+ Business Requirements Documents (BRD) dan Functional Specification Documents (FSD) komprehensif, mengeliminasi ambiguitas kebutuhan proyek dan memangkas revisi stakeholder hingga 20%.",
    smartnet_p11_title: "Rancangan Arsitektur Sistem & Spesifikasi Teknis",
    smartnet_p11_text: "Membuat 3+ System Architecture Documents (SAD) dan Technical Specification Documents (TSD), menyelaraskan rancang bangun teknis dengan objektif bisnis serta meningkatkan kejelasan tahap development sebesar 15%.",
    smartnet_p12_title: "Analisis Kebutuhan Lintas Tim",
    smartnet_p12_text: "Menganalisis kebutuhan teknis untuk 4+ inisiatif proyek, memfasilitasi komunikasi efektif antara stakeholder bisnis dan developer, serta memotong miskomunikasi sebesar 25%. Mengembangkan konsep fitur untuk 3+ solusi software (adopsi +10%).",
    smartnet_p13_title: "Supervisi Developer & Validasi Kualitas",
    smartnet_p13_text: "Memonitor pengerjaan tugas tim developer untuk 5+ proyek (menekan keterlambatan task hingga 10%) dan memvalidasi hasil pengujian untuk 4+ proyek dengan tingkat kepatuhan spesifikasi mencapai 90%.",

    // Smartnet Architecture Diagrams (ID)
    diagram_zoom_hint: "Klik untuk memperbesar diagram",
    close_modal: "Tutup",
    
    // Diagram 1: Gemini Enterprise
    smartnet_diag1_badge: "Enterprise AI & RAG Architecture",
    smartnet_diag1_title: "Arsitektur: AI & Search Intelligence using Gemini Enterprise Solution",
    smartnet_diag1_desc: "Solusi terpadu pencarian cerdas dan pemrosesan dokumen berbasis AI di Google Cloud Platform yang menghubungkan data enterprise terstruktur dan tidak terstruktur dengan Large Language Model multimodal.",
    smartnet_diag1_s1_title: "1. Ingestion Dokumen Terpusat",
    smartnet_diag1_s1_text: "Dokumen korporat disimpan secara terpusat di Google Cloud Storage (GCS) sebagai basis pengetahuan data tak terstruktur.",
    smartnet_diag1_s2_title: "2. Vertex AI Search & Indexing",
    smartnet_diag1_s2_text: "Vertex AI Search mem-parsing dan mengindeks dokumen untuk semantic vector search berkecepatan tinggi dalam kerangka Retrieval-Augmented Generation (RAG).",
    smartnet_diag1_s3_title: "3. Konektor SharePoint & OneDrive",
    smartnet_diag1_s3_text: "Integrasi konektor pihak ketiga menyinkronkan repositori Microsoft SharePoint dan OneDrive ke lingkungan AI secara aman.",
    smartnet_diag1_s4_title: "4. Grounding Gemini & BigQuery",
    smartnet_diag1_s4_text: "Platform Gemini Enterprise melakukan grounding kueri dengan metrik terstruktur BigQuery dan dokumen untuk menyajikan respons akurat ke desktop dan mobile.",

    // Diagram 2: Retail DWH Real-Time Analytics
    smartnet_diag2_badge: "Real-Time Streaming & Medallion DWH",
    smartnet_diag2_title: "Arsitektur Real-Time Data Analytics & Medallion Data Warehouse (Retail DWH)",
    smartnet_diag2_desc: "Rancangan arsitektur streaming data skala besar dari ratusan database toko (DB Express) dan cabang (DB Standard) menuju BigQuery Medallion Architecture (Bronze, Silver, Gold).",
    smartnet_diag2_s1_title: "1. Ingestion Datastream & Pub/Sub",
    smartnet_diag2_s1_text: "Menangkap transaksi kasir toko secara realtime via Stream App ke GCP Pub/Sub Topics dan CDC Datastream dari DB Standard cabang.",
    smartnet_diag2_s2_title: "2. Stream Processing via Dataflow",
    smartnet_diag2_s2_text: "Cloud Dataflow menjalankan raw ingestion ke Data Lake (Cloud Storage) dan pembersihan data (cleansing & deduplication) in-flight.",
    smartnet_diag2_s3_title: "3. BigQuery Medallion Architecture",
    smartnet_diag2_s3_text: "Alur data bertingkat: Bronze Layer (raw events), Silver Layer (data bersih), dan Gold Layer (agregasi data mart penjualan & stok toko).",
    smartnet_diag2_s4_title: "4. Observabilitas & Penyajian BI",
    smartnet_diag2_s4_text: "Tata kelola data terpusat via Google Cloud Dataplex, visualisasi metrik sistem di Grafana, dan pelaporan real-time ke BI Dashboard.",

    // Diagram 3: Data Lineage RekapTransaksiTokoDetail
    smartnet_diag3_badge: "Data Lineage & CDC Ingestion",
    smartnet_diag3_title: "Data Lineage Transaksi Toko: RekapTransaksiTokoDetail",
    smartnet_diag3_desc: "Silsilah alur data terperinci dari level trigger basis data SQL Express di gerai toko lokal hingga tersaji di tabel analitik Google BigQuery.",
    smartnet_diag3_s1_title: "1. Trigger Tabel Audit Toko",
    smartnet_diag3_s1_text: "Perubahan data di tabel RekapTransaksiTokoDetail mengaktifkan trigger otomatis yang mencatat log audit ke RekapTransaksiTokoDetail_Audit.",
    smartnet_diag3_s2_title: "2. Publikasi ke GCP Pub/Sub",
    smartnet_diag3_s2_text: "Aplikasi toko mengekstrak baris audit dan menerbitkannya ke topik GCP Pub/Sub: pb-RekapTransaksiTokoDetail-raw.",
    smartnet_diag3_s3_title: "3. BigQuery Direct Subscription",
    smartnet_diag3_s3_text: "Direct Subscriber BigQuery menyerap streaming message langsung ke tabel raw RekapTransaksiTokoDetail tanpa delay batch.",
    smartnet_diag3_s4_title: "4. Analytical View & Scheduler",
    smartnet_diag3_s4_text: "View analitik vw_RekapTransaksiTokoDetail memfilter kolom redundan, dan Cloud Scheduler memprosesnya ke tabel produksi pb_bronze_toko.",

    // Diagram 4: Firebase Analytics Fase 1
    smartnet_diag4_badge: "Firebase Analytics – Phase 1",
    smartnet_diag4_title: "1. Firebase Analytics – Phase 1",
    smartnet_fb1_details: `
      <div class="flow-breakdown">
        <div class="flow-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span>Alur data:</span>
        </div>

        <ul class="flow-list">
          <li class="flow-item">
            <strong>SDK on Device:</strong> Data dikumpulkan dari aplikasi Android dan iOS.
          </li>
          <li class="flow-item">
            <strong>Platform-level Message Transport:</strong> Android menggunakan Android Transport Layer, sedangkan iOS menggunakan iOS/APNs.
          </li>
          <li class="flow-item">
            <strong>Firebase Backend:</strong> Kedua jalur data masuk ke modul Analytics di Firebase.
          </li>
          <li class="flow-item">
            <strong>Data Warehouse (BigQuery):</strong> Data disimpan dan diorganisasi ke dalam beberapa Data Mart, serta diproses lebih lanjut dengan BigQuery ML.
          </li>
          <li class="flow-item">
            <strong>Metadata &amp; Orkestrasi:</strong>
            <ul class="flow-sublist">
              <li class="flow-subitem">Data Catalog menyediakan metadata untuk memperkaya Data Mart.</li>
              <li class="flow-subitem">Cloud Composer mengatur orkestrasi job/pipeline menuju BigQuery ML.</li>
            </ul>
          </li>
          <li class="flow-item">
            <strong>Insight and Visualization:</strong> Data dari BigQuery divisualisasikan menggunakan Looker Studio.
          </li>
          <li class="flow-item">
            <strong>Output:</strong> Hasil akhir ditampilkan dalam 3 dashboard berbeda:
            <ul class="flow-sublist">
              <li class="flow-subitem">Marketing Dashboard</li>
              <li class="flow-subitem">Users Monitoring Dashboard</li>
              <li class="flow-subitem">Application Dashboard</li>
            </ul>
          </li>
        </ul>

        <div class="flow-keypoint">
          <strong>Poin utama:</strong> Fokus Phase 1 adalah membangun pipeline dasar dari SDK aplikasi mobile hingga ke dashboard visualisasi, dengan dukungan metadata dan orkestrasi.
        </div>
      </div>
    `,

    // Diagram 5: Firebase Analytics Fase 3
    smartnet_diag5_badge: "Firebase Analytics – Phase 3",
    smartnet_diag5_title: "2. Firebase Analytics – Phase 3",
    smartnet_fb3_details: `
      <div class="flow-breakdown">
        <div class="flow-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span>Alur data:</span>
        </div>

        <ul class="flow-list">
          <li class="flow-item">
            <strong>Data Sources:</strong> Data berasal dari App Store dan Playstore (bukan lagi dari SDK aplikasi langsung).
          </li>
          <li class="flow-item">
            <strong>Google Cloud Platform:</strong>
            <ul class="flow-sublist">
              <li class="flow-subitem">Data dari App Store diproses lebih dulu melalui Cloud Functions.</li>
              <li class="flow-subitem">Data dari Playstore langsung masuk ke BigQuery Data Transfer Service.</li>
              <li class="flow-subitem">Output dari Cloud Functions juga diarahkan ke Data Warehouse.</li>
            </ul>
          </li>
          <li class="flow-item">
            <strong>Data Warehouse (BigQuery):</strong>
            <ul class="flow-sublist">
              <li class="flow-subitem">Berisi beberapa Data Mart.</li>
              <li class="flow-subitem">Dilengkapi dengan BigQuery ML untuk pemrosesan/analitik lanjutan.</li>
            </ul>
          </li>
          <li class="flow-item">
            <strong>Output:</strong> Hasil akhir divisualisasikan melalui Looker Studio Pro (versi pro, lebih advanced dibanding Looker Studio biasa pada Phase 1).
          </li>
        </ul>

        <div class="flow-keypoint">
          <strong>Poin utama:</strong> Phase 3 memperluas sumber data ke tingkat store (App Store &amp; Playstore), menyederhanakan alur dengan BigQuery Data Transfer Service, dan meningkatkan kapabilitas visualisasi ke Looker Studio Pro.
        </div>
      </div>
    `,

    // SCM Detail
    scm_date: "Januari 2022 — Juli 2023",
    scm_b1_title: "1. Event-Driven Advertising Data Matching (Python & Fuzzy ML)",
    scm_b1_desc: "Integrasi dan rekonsiliasi data penayangan iklan komersial antara sistem broadcast traffic internal dan lembaga rating independen.",
    scm_p1_title: "Pencocokan Otomatis Gen21 & Nielsen TV Ratings",
    scm_p1_text: "Mengembangkan program pencocokan data periklanan berbasis event-driven dengan Python menggunakan teknik machine learning fuzzy wuzzy. Solusi ini berhasil mengintegrasikan dataset heterogeneous dari Gen21 (traffic log) dan Nielsen Media Research untuk analisis rating pemirsa siaran TV nasional (SCTV & Indosiar).",
    scm_p1_b1: "Meningkatkan akurasi pencocokan log iklan komersial hingga <strong>90%</strong>.",
    scm_p1_b2: "Memangkas waktu komputasi pemrosesan harian sebesar <strong>80%</strong> dibanding metode manual sebelumnya.",
    scm_b2_title: "2. Streaming Data Pipelines Skalabilitas Tinggi",
    scm_b2_desc: "Infrastruktur pemrosesan aliran data terdistribusi untuk mengantisipasi lonjakan trafik siaran.",
    scm_p2_title: "Pipeline Streaming Kafka + Spark + Docker",
    scm_p2_text: "Membangun dan mengonfigurasi pipeline streaming data menggunakan kontainerisasi Docker, Apache Kafka sebagai message broker terdistribusi, Apache Spark untuk micro-batch processing cepat, dan MySQL sebagai storage hilir.",
    scm_p2_b1: "Mampu menangani peningkatan volume data hingga <strong>40%</strong> tanpa latensi berlebih.",
    scm_p2_b2: "Menjamin keandalan pengiriman data (zero data loss) dan kontinuitas analitik waktu nyata.",
    scm_b3_title: "3. Orkestrasi & Efisiensi Operasional dengan Airflow",
    scm_b3_desc: "Peningkatan keandalan job scheduler dan deteksi dini kegagalan pipeline.",
    scm_p3_title: "Troubleshooting Kompleks & Otomasi DAGs",
    scm_p3_text: "Mengimplementasikan Directed Acyclic Graphs (DAGs) terstandarisasi pada Apache Airflow untuk mengotomatiskan penanganan galat dan troubleshooting kesalahan sistem yang kompleks.",
    scm_p3_b1: "Mereduksi system downtime sebesar <strong>35%</strong> melalui notifikasi kegagalan dan automatic retries.",
    scm_p3_b2: "Mencapai efisiensi operasional sistem sebesar <strong>99.8%</strong> untuk seluruh batch job harian.",

    // Deepfake Detail
    deepfake_title: "Deepfake Face Detection Solution",
    deepfake_inst: "UNIVERSITAS GUNADARMA",
    deepfake_badge: "Awarded Best Student (Top 0.1% Universitas)",
    deepfake_date: "Selesai: Agustus 2023",
    deepfake_summary_title: "Ringkasan Riset & Inovasi",
    deepfake_summary_desc: "Perkembangan pesat teknologi manipulasi video dan wajah berbasis kecerdasan buatan (deepfake) menimbulkan tantangan besar terhadap integritas informasi digital dan verifikasi identitas. Proyek riset ini dirancang untuk mendeteksi artefak manipulasi mikroskopis pada video dan citra wajah menggunakan pendekatan arsitektur deep learning mutakhir.",
    deepfake_p1_title: "Arsitektur CNN & Inception ResNet V2",
    deepfake_p1_text: "Menggabungkan kekuatan Convolutional Neural Networks (CNN) dengan arsitektur residual deep learning Inception ResNet V2 untuk mengekstraksi representasi fitur spasial berbobot tinggi dari frame wajah yang dimanipulasi.",
    deepfake_p1_b1: "Mencapai akurasi deteksi model sebesar <strong>90%</strong> pada dataset pengujian wajah deepfake.",
    deepfake_p1_b2: "Menurunkan angka <em>false positive</em> sebesar <strong>80%</strong>, memastikan verifikasi wajah asli tetap presisi tanpa salah klasifikasi.",
    deepfake_p2_title: "Diseminasi Pengetahuan & Mentorship",
    deepfake_p2_text: "Menyusun materi pembelajaran teknis komprehensif mengenai penerapan computer vision dan transfer learning dalam deteksi manipulasi citra.",
    deepfake_p2_b1: "Membimbing praktisi dan rekan sejawat dalam memahami teknik deep learning terkini.",
    deepfake_p2_b2: "Mencatatkan peningkatan kompetensi tim sebesar 30% serta mempercepat adopsi metodologi ML modern."
  },

  en: {
    // Navigation
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education & Certifications",
    nav_contact: "Contact",
    nav_contact_btn: "Contact Me",

    // Hero
    hero_available: "Available for Opportunities & Projects",
    hero_subtitle: "Data & Machine Learning Engineer",
    hero_tagline: "Dynamic Data Engineer with four years of experience building high-performance analytics pipelines, ETL and reverse ETL workflows, and event-driven architectures. Skilled in modern data stack tools including dbt, ClickHouse, Apache Airflow, BigQuery, Looker, Dataflow, PubSub, MongoDB, Cassandra and Confluent Kafka. Passionate about delivering business insights and unlocking value from data.",
    hero_btn_experience: "View Experience",
    hero_btn_contact: "Contact Me",
    hero_btn_cv: "Request CV",
    hero_cert_badge: "4x Google Cloud Certified",

    // Metrics
    metric_exp_val: "4+ Years",
    metric_exp_lbl: "Data & ML Engineering Experience",
    metric_gcp_val: "4x GCP",
    metric_gcp_lbl: "Google Cloud Professional Certified",
    metric_data_val: "1TB+ Data",
    metric_data_lbl: "ETL Pipelines Firebase to BigQuery",
    metric_edu_val: "Top 0.1%",
    metric_edu_lbl: "Gunadarma University Best Student Award",

    // About Section
    about_subtitle: "About Me",
    about_title: "Strong Foundations in Data Platforms & Machine Learning",
    about_p1: "I am a <strong>Data & Machine Learning Engineer</strong> with four years of experience building high-performance analytics pipelines, ETL and reverse ETL workflows, and event-driven architectures.",
    about_p2: "Proficient in managing end-to-end data lifecycles — from real-time streaming with Apache Kafka & Apache Spark, batch orchestration with Apache Airflow & dbt, modern data warehousing in Google BigQuery & ClickHouse, to engineering distributed multi-agent generative AI systems on GCP (Cloud Run, ADK, MCP).",
    about_p3: "Proven track record in reducing data latency, boosting database query performance by 30%, and bridging technical designs (SAD/TSD) with business requirements (BRD/FSD).",
    about_card_title: "Core Specializations",
    about_focus_1: "<strong>High-Performance Pipelines:</strong> Batch & streaming ETL/reverse ETL (Kafka, Dataflow, Airflow, dbt).",
    about_focus_2: "<strong>Generative AI & LLMs:</strong> Distributed multi-agent systems, RAG, Gemini & Imagen integrations, MCP.",
    about_focus_3: "<strong>Cloud & Modern Data Stack:</strong> Google Cloud (BigQuery, Bigtable, Cloud Run), ClickHouse, Snowflake.",
    about_focus_4: "<strong>Analytics & BI:</strong> Looker real-time dashboards, reducing manual processing by 40%.",

    // Experience Section
    exp_subtitle: "Career & Projects",
    exp_title: "Professional Work Experience",
    exp_desc: "Summary of enterprise-scale data engineering pipelines and machine learning systems.",
    exp_smartnet_period: "Aug 2023 — Present",
    exp_smartnet_p: "Leading large-scale data platform engineering, distributed orchestration, and cloud-native multi-agent generative AI architectures on Google Cloud Platform.",
    exp_smartnet_h1: "<strong>Distributed Multi-Agent Generative AI System:</strong> Engineered a distributed multi-agent GenAI system on GCP (Cloud Run, ADK, MCP), autonomously aggregating BigQuery analytics, external financial APIs, and Gemini/Imagen models into structured, localized marketing campaigns.",
    exp_smartnet_h2: "<strong>Large-scale ETL & Streaming Ingestion:</strong> Designed & maintained ETL pipelines processing 1TB+ of data from Firebase to BigQuery; streamlined real-time data ingestion via Pub/Sub and Dataflow with in-flight transformation to eliminate redundant audit columns and reduce storage costs.",
    exp_smartnet_h3: "<strong>Orchestration & Database Optimization:</strong> Orchestrated ingestion and quality checks using Airflow and dbt (improving data freshness by 30%), integrated ClickHouse for high-performance POC analytics, and automated seamless NoSQL migration from Cassandra to Cloud Bigtable.",
    exp_smartnet_link: "View Full Project Details (15 Items)",

    exp_scm_period: "Jan 2022 — Jul 2023",
    exp_scm_p: "Responsible for nationwide TV audience ratings data integration (SCTV & Indosiar), streaming pipelines, and daily DAG operational reliability.",
    exp_scm_h1: "<strong>Event-Driven Advertising Data Matching:</strong> Developed a Python-based advertising data matching program using fuzzy wuzzy machine learning techniques to integrate Gen21 and Nielsen datasets for analyzing SCTV & Indosiar ratings, increasing matching accuracy by 90% and reducing processing time by 80%.",
    exp_scm_h2: "<strong>Real-Time Data Streaming Pipelines:</strong> Built robust data streaming pipelines using Docker, Apache Kafka, Apache Spark, and MySQL that handled a 40% increase in data volume while ensuring seamless, reliable data flow.",
    exp_scm_h3: "<strong>Airflow Operational Efficiency:</strong> Implemented Directed Acyclic Graphs (DAGs) in Apache Airflow to troubleshoot complex errors, reducing system downtime by 35% and achieving 99.8% operational efficiency.",
    exp_scm_link: "View Architecture & Project Details",

    // Skills Section
    skills_subtitle: "Technical Competencies",
    skills_title: "Skills & Technology Stack",
    skills_desc: "Categorized by expertise domains in modern data engineering, cloud infrastructure, and AI engineering.",
    skill_cat_1: "Data Pipeline & Orchestration",
    skill_cat_2: "Cloud Platforms & Infra",
    skill_cat_3: "Machine Learning & GenAI",
    skill_cat_4: "Databases & Warehousing",
    skill_cat_5: "Streaming & Distributed",
    skill_cat_6: "Methodology & Collaboration",

    // Education & Certifications
    edu_subtitle: "Formal Qualifications",
    edu_title: "Education & Cloud Certifications",
    edu_desc: "Internationally recognized professional credentials and top academic performance.",
    edu_heading: "Education",
    edu_degree: "Bachelor of Science in Computer Science",
    edu_time: "Jakarta, Indonesia • Graduated August 2023",
    edu_award: "Awarded Best Student — Top 0.1% of the University",
    edu_bullet_1: "<strong>Deepfake Face Detection ML:</strong> Developed a deepfake face detection solution using Convolutional Neural Networks (CNN) and Inception ResNet V2, achieving 90% detection accuracy and reducing false positives by 80%.",
    edu_bullet_2: "<strong>Mentorship & Training:</strong> Guided practitioners through comprehensive learning materials, resulting in a 30% improvement in team competency and faster adoption of cutting-edge ML techniques.",
    edu_link: "View Deepfake Project Details (CNN/Inception) →",
    cert_heading: "Official Google Cloud Certifications",

    // Contact Section
    contact_subtitle: "Let's Collaborate",
    contact_title: "Contact Information",
    contact_desc: "Open to discussions regarding data architecture, machine learning/LLM implementations, and professional opportunities.",
    contact_email_lbl: "Primary Email",
    contact_phone_lbl: "Phone / WhatsApp",
    contact_loc_lbl: "Location",
    contact_github_lbl: "GitHub Profile",
    contact_copy_btn: "Copy",
    contact_cta_title: "Start a Conversation",
    contact_cta_desc: "Whether you have a data platform challenge, cloud infrastructure audit, multi-agent AI initiative, or an exciting career opportunity, I'd love to connect.",
    contact_btn_email: "Send Email Message",
    contact_btn_wa: "Connect via WhatsApp",

    // Footer
    footer_tag: "Engineered with high performance standards & modern minimalist design.",
    footer_back_top: "Back to Top ↑",

    // Toast
    toast_copied: "Email successfully copied to clipboard!",

    // Common Detail Page Labels
    detail_case_badge: "Work Experience Case Study",
    detail_research_badge: "Research & Machine Learning Case Study",
    back_to_home: "Back to Main Portfolio",
    back_to_edu: "Back to Education & Certifications",
    back_to_exp: "Back to Other Experience",

    // Smartnet Detail
    smartnet_date: "August 2023 — Present",
    smartnet_b1_title: "1. Generative AI & Distributed Multi-Agent Architecture",
    smartnet_b1_desc: "Strategic initiative engineering autonomous multi-agent systems for aggregated analytics and automated marketing campaigns.",
    smartnet_p1_title: "Distributed Multi-Agent Generative AI System",
    smartnet_p1_text: "Engineered a distributed multi-agent generative AI system on GCP (Cloud Run, ADK, MCP), autonomously aggregating BigQuery analytics, external financial APIs, and Gemini/Imagen models into structured, localized marketing campaigns.",
    smartnet_p2_title: "Automated AI Data Feeding & Latency Reduction",
    smartnet_p2_text: "Implemented Airflow workflows to automate PostgreSQL data ingestion into BigQuery, reducing data latency by 30% and enhancing generative AI capabilities.",
    smartnet_b2_title: "2. Large-Scale Ingestion & Streaming Pipelines",
    smartnet_b2_desc: "High-volume data pipelines, real-time ingestion, and seamless NoSQL database migrations.",
    smartnet_p3_title: "ETL Firebase to Google BigQuery",
    smartnet_p3_text: "Designed and maintained ETL pipelines processing 1TB+ of data from Firebase to BigQuery, improving data accessibility for analytics teams.",
    smartnet_p4_title: "Streamlined Real-Time Data Ingestion",
    smartnet_p4_text: "Streamlined real-time data ingestion into BigQuery using Pub/Sub and Dataflow, incorporating in-flight data transformation logic to remove redundant audit columns and reduce downstream storage overhead.",
    smartnet_p5_title: "Automated NoSQL Database Migration",
    smartnet_p5_text: "Engineered and automated a seamless data migration pipeline, successfully transferring NoSQL workloads from Apache Cassandra to Cloud Bigtable.",
    smartnet_b3_title: "3. Data Orchestration, Transformation & Analytics",
    smartnet_b3_desc: "Standardizing business logic across data warehouse layers and accelerating exploratory queries.",
    smartnet_p6_title: "Orchestration via Apache Airflow & dbt",
    smartnet_p6_text: "Orchestrated ingestion, transformation, and quality checks using Apache Airflow and dbt, improving data freshness by 30% and ensuring consistent business logic across datasets.",
    smartnet_p7_title: "ClickHouse Columnar Storage Integration",
    smartnet_p7_text: "Integrated ClickHouse for high-performance analytics queries in proof-of-concept projects, enabling faster exploratory analysis on large datasets.",
    smartnet_p8_title: "5+ Interactive Dashboards in Looker",
    smartnet_p8_text: "Developed 5+ interactive dashboards in Looker, optimizing real-time reporting and reducing manual data processing by 40%.",
    smartnet_p9_title: "Database Design & Query Optimization",
    smartnet_p9_text: "Designed and optimized databases for 3+ applications, improving query performance by 30%.",
    smartnet_b4_title: "4. Technical Governance & Project Delivery",
    smartnet_b4_desc: "Aligning technical architecture designs with strategic business objectives and stakeholder requirements.",
    smartnet_p10_title: "BRD & FSD Documentation",
    smartnet_p10_text: "Authored 3+ BRDs and FSDs, clarifying project requirements and reducing stakeholder revisions by 20%.",
    smartnet_p11_title: "System Architecture & Technical Specs (SAD/TSD)",
    smartnet_p11_text: "Created 3+ SADs and TSDs, aligning technical designs with business objectives, improving development clarity by 15%.",
    smartnet_p12_title: "Cross-Functional Requirements Analysis",
    smartnet_p12_text: "Analyzed requirements for 4+ projects, cutting misalignments by 25%. Developed concept features for 3+ software solutions, enhancing user experience and increasing adoption by 10%.",
    smartnet_p13_title: "Developer Supervision & Quality Assurance",
    smartnet_p13_text: "Monitored developer tasks for 5+ projects, ensuring timely delivery and reducing task overruns by 10%. Validated testing outcomes for 4+ projects, achieving 90% compliance with project specifications.",

    // Smartnet Architecture Diagrams (EN)
    diagram_zoom_hint: "Click to view full diagram",
    close_modal: "Close",
    
    // Diagram 1: Gemini Enterprise
    smartnet_diag1_badge: "Enterprise AI & RAG Architecture",
    smartnet_diag1_title: "Architecture: AI & Search Intelligence using Gemini Enterprise Solution",
    smartnet_diag1_desc: "Integrated enterprise search intelligence and document processing architecture on Google Cloud Platform, connecting structured BigQuery analytics and unstructured documents to multimodal Large Language Models.",
    smartnet_diag1_s1_title: "1. Centralized Document Ingestion",
    smartnet_diag1_s1_text: "Corporate documents are securely collected and stored in centralized Google Cloud Storage (GCS) as the unstructured enterprise knowledge base.",
    smartnet_diag1_s2_title: "2. Vertex AI Search & Indexing",
    smartnet_diag1_s2_text: "Vertex AI Search parses and indexes document content, delivering ultra-fast semantic vector search for contextual Retrieval-Augmented Generation (RAG).",
    smartnet_diag1_s3_title: "3. SharePoint & OneDrive Connectors",
    smartnet_diag1_s3_text: "Third-party enterprise connectors periodically synchronize files from Microsoft SharePoint and OneDrive into the AI environment securely.",
    smartnet_diag1_s4_title: "4. Gemini Grounding & BigQuery",
    smartnet_diag1_s4_text: "The Gemini Enterprise platform grounds user queries with structured BigQuery metrics and retrieved documents to deliver hallucination-free responses across desktop and mobile.",

    // Diagram 2: Retail DWH Real-Time Analytics
    smartnet_diag2_badge: "Real-Time Streaming & Medallion DWH",
    smartnet_diag2_title: "Architecture: Real-Time Data Analytics & Medallion Data Warehouse (Retail DWH)",
    smartnet_diag2_desc: "End-to-end large-scale streaming data architecture ingesting from hundreds of retail store databases (DB Express) and branch systems (DB Standard) into a BigQuery Medallion Architecture.",
    smartnet_diag2_s1_title: "1. Datastream & Pub/Sub Ingestion",
    smartnet_diag2_s1_text: "Captures point-of-sale transactions in real time via Stream App to Google Pub/Sub topics and CDC Datastream from branch DB Standard.",
    smartnet_diag2_s2_title: "2. Stream Processing via Dataflow",
    smartnet_diag2_s2_text: "Cloud Dataflow pipelines execute raw ingestion into Cloud Storage Data Lake and perform in-flight cleansing and deduplication.",
    smartnet_diag2_s3_title: "3. BigQuery Medallion Architecture",
    smartnet_diag2_s3_text: "Tiered data warehouse layers: Bronze Layer (raw events), Silver Layer (cleansed data), and Gold Layer (aggregated sales & inventory data marts).",
    smartnet_diag2_s4_title: "4. Observability & BI Delivery",
    smartnet_diag2_s4_text: "Centralized data governance via GCP Dataplex, live system monitoring in Grafana, and real-time executive reporting served to BI dashboards.",

    // Diagram 3: Data Lineage RekapTransaksiTokoDetail
    smartnet_diag3_badge: "Data Lineage & CDC Ingestion",
    smartnet_diag3_title: "Data Lineage: RekapTransaksiTokoDetail Transaction Pipeline",
    smartnet_diag3_desc: "Granular data lineage trace from retail store SQL Express database triggers to analytical BigQuery production tables.",
    smartnet_diag3_s1_title: "1. Retail Store Audit Trigger",
    smartnet_diag3_s1_text: "Every change in table RekapTransaksiTokoDetail activates a database trigger logging audit records into RekapTransaksiTokoDetail_Audit.",
    smartnet_diag3_s2_title: "2. Publish to GCP Pub/Sub",
    smartnet_diag3_s2_text: "Local store applications extract audit rows and asynchronously publish message events to GCP Pub/Sub topic: pb-RekapTransaksiTokoDetail-raw.",
    smartnet_diag3_s3_title: "3. BigQuery Direct Subscription",
    smartnet_diag3_s3_text: "BigQuery Direct Subscription ingests the real-time stream directly into raw table RekapTransaksiTokoDetail without batch latency.",
    smartnet_diag3_s4_title: "4. Analytical Views & Scheduler",
    smartnet_diag3_s4_text: "Analytical view vw_RekapTransaksiTokoDetail filters redundant audit fields, and Cloud Scheduler promotes records into production dataset pb_bronze_toko.",

    // Diagram 4: Firebase Analytics Fase 1 & 2
    smartnet_diag4_badge: "Firebase Analytics – Phase 1 and 2",
    smartnet_diag4_title: "1. Firebase Analytics – Phase 1 and 2",
    smartnet_fb1_details: `
      <div class="flow-breakdown">
        <div class="flow-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span>Data flow:</span>
        </div>

        <ul class="flow-list">
          <li class="flow-item">
            <strong>SDK on Device:</strong> Data is collected from Android and iOS apps.
          </li>
          <li class="flow-item">
            <strong>Platform-level Message Transport:</strong> Android uses the Android Transport Layer, while iOS uses iOS/APNs.
          </li>
          <li class="flow-item">
            <strong>Firebase Backend:</strong> Both data paths feed into the Analytics module in Firebase.
          </li>
          <li class="flow-item">
            <strong>Data Warehouse (BigQuery):</strong> Data is stored and organized into several Data Marts, and further processed using BigQuery ML.
          </li>
          <li class="flow-item">
            <strong>Metadata &amp; Orchestration:</strong>
            <ul class="flow-sublist">
              <li class="flow-subitem">Data Catalog provides metadata to enrich the Data Marts.</li>
              <li class="flow-subitem">Cloud Composer orchestrates jobs/pipelines feeding into BigQuery ML.</li>
            </ul>
          </li>
          <li class="flow-item">
            <strong>Insight and Visualization:</strong> Data from BigQuery is visualized using Looker Studio.
          </li>
          <li class="flow-item">
            <strong>Output:</strong> The final results are displayed across 3 different dashboards:
            <ul class="flow-sublist">
              <li class="flow-subitem">Marketing Dashboard</li>
              <li class="flow-subitem">Users Monitoring Dashboard</li>
              <li class="flow-subitem">Application Dashboard</li>
            </ul>
          </li>
        </ul>

        <div class="flow-keypoint">
          <strong>Key point:</strong> Phase 1 focuses on building the foundational pipeline from mobile app SDKs to visualization dashboards, supported by metadata and orchestration layers.
        </div>
      </div>
    `,

    // Diagram 5: Firebase Analytics Fase 3
    smartnet_diag5_badge: "Firebase Analytics – Phase 3",
    smartnet_diag5_title: "2. Firebase Analytics – Phase 3",
    smartnet_fb3_details: `
      <div class="flow-breakdown">
        <div class="flow-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span>Data flow:</span>
        </div>

        <ul class="flow-list">
          <li class="flow-item">
            <strong>Data Sources:</strong> Data comes from the App Store and Playstore (no longer directly from app SDKs).
          </li>
          <li class="flow-item">
            <strong>Google Cloud Platform:</strong>
            <ul class="flow-sublist">
              <li class="flow-subitem">Data from the App Store is first processed through Cloud Functions.</li>
              <li class="flow-subitem">Data from Playstore goes directly into BigQuery Data Transfer Service.</li>
              <li class="flow-subitem">The output from Cloud Functions is also routed into the Data Warehouse.</li>
            </ul>
          </li>
          <li class="flow-item">
            <strong>Data Warehouse (BigQuery):</strong>
            <ul class="flow-sublist">
              <li class="flow-subitem">Contains several Data Marts.</li>
              <li class="flow-subitem">Equipped with BigQuery ML for advanced processing/analytics.</li>
            </ul>
          </li>
          <li class="flow-item">
            <strong>Output:</strong> The final results are visualized through Looker Studio Pro (a more advanced version compared to the standard Looker Studio in Phase 1).
          </li>
        </ul>

        <div class="flow-keypoint">
          <strong>Key point:</strong> Phase 3 expands the data source to the store level (App Store &amp; Playstore), simplifies the flow using BigQuery Data Transfer Service, and upgrades the visualization capability to Looker Studio Pro.
        </div>
      </div>
    `,

    // SCM Detail
    scm_date: "January 2022 — July 2023",
    scm_b1_title: "1. Event-Driven Advertising Data Matching (Python & Fuzzy ML)",
    scm_b1_desc: "Commercial airtime data integration and reconciliation between internal traffic logs and independent ratings agencies.",
    scm_p1_title: "Gen21 & Nielsen TV Ratings Automated Matching",
    scm_p1_text: "Developed an event-driven, Python-based advertising data matching program using fuzzy wuzzy machine learning techniques to integrate datasets from Gen21 and Nielsen for analyzing SCTV and Indosiar TV ratings.",
    scm_p1_b1: "Increased commercial log matching accuracy by <strong>90%</strong>.",
    scm_p1_b2: "Reduced computational processing time by <strong>80%</strong> compared to manual reconciliation.",
    scm_b2_title: "2. High-Scalability Streaming Data Pipelines",
    scm_b2_desc: "Distributed stream processing infrastructure handling significant broadcast traffic spikes.",
    scm_p2_title: "Kafka + Spark + Docker Streaming Pipeline",
    scm_p2_text: "Built robust data streaming pipelines using Docker, Apache Kafka, Apache Spark, and MySQL that handled a 40% increase in data volume while ensuring seamless, reliable data flow.",
    scm_p2_b1: "Handled a <strong>40%</strong> increase in data volume without operational friction.",
    scm_p2_b2: "Guaranteed seamless delivery with zero data loss and real-time analytics continuity.",
    scm_b3_title: "3. Operational Efficiency & Airflow Orchestration",
    scm_b3_desc: "Enhanced scheduler reliability and proactive error detection across scheduled pipelines.",
    scm_p3_title: "Airflow Directed Acyclic Graphs (DAGs) Troubleshooting",
    scm_p3_text: "Implemented Directed Acyclic Graphs (DAGs) in Apache Airflow to troubleshoot complex errors, reducing system downtime by 35% and achieving 99.8% operational efficiency.",
    scm_p3_b1: "Reduced system downtime by <strong>35%</strong> with automated alerting and retries.",
    scm_p3_b2: "Achieved <strong>99.8%</strong> operational efficiency across daily production workloads.",

    // Deepfake Detail
    deepfake_title: "Deepfake Face Detection Solution",
    deepfake_inst: "GUNADARMA UNIVERSITY",
    deepfake_badge: "Awarded Best Student (Top 0.1% of the University)",
    deepfake_date: "Completed: August 2023",
    deepfake_summary_title: "Research & Innovation Summary",
    deepfake_summary_desc: "The proliferation of AI-driven facial manipulation and deepfake technology poses major security challenges to digital media integrity and biometric identity verification. This research developed an advanced deep learning framework to detect subtle facial synthesis artifacts.",
    deepfake_p1_title: "CNN & Inception ResNet V2 Architecture",
    deepfake_p1_text: "Combined Convolutional Neural Networks (CNN) with the residual Inception ResNet V2 architecture to extract high-dimensional spatial feature representations from manipulated facial frames.",
    deepfake_p1_b1: "Achieved <strong>90%</strong> detection accuracy on deepfake facial benchmark datasets.",
    deepfake_p1_b2: "Reduced false positive rates by <strong>80%</strong>, ensuring authentic facial verifications are preserved.",
    deepfake_p2_title: "Knowledge Dissemination & Mentorship",
    deepfake_p2_text: "Authored comprehensive training modules on computer vision and transfer learning applications for media manipulation detection.",
    deepfake_p2_b1: "Guided practitioners and peers through cutting-edge deep learning workflows.",
    deepfake_p2_b2: "Drove a 30% improvement in team competency and faster adoption of modern ML techniques."
  }
};

// Expose globally for vanilla browser usage
window.siteTranslations = translations;
