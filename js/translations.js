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
    hero_title: "Hai, I am Kharismadina Hijra Muhamad you can call me Kharis 👋",
    hero_greeting: "Hai, I am Kharismadina Hijra Muhamad you can call me Kharis 👋",
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
    exp_scm_h1: "<strong>Data Matching Nielsen × Gen21 (ML):</strong> Program Python berbasis <em>fuzzywuzzy</em> dalam Docker yang mencocokkan data MySQL (Nielsen) dan SQL Server (Gen21) — batch harian via Airflow dan real-time via Debezium + Kafka — ke PostgreSQL tim Marketing. Akurasi matching naik 90%, waktu proses turun 80%.",
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
    smartnet_b1_title: "Generative AI & Distributed Multi-Agent Architecture",
    smartnet_b1_desc: "Inisiatif strategis pemanfaatan kecerdasan buatan otonom untuk otomasi analisis dan pembuatan kampanye pemasaran berbasis data.",
    smartnet_p1_title: "Distributed Multi-Agent Generative AI System",
    smartnet_p1_text: "Merancang dan mengimplementasikan sistem multi-agent terdistribusi otonom di Google Cloud Platform. Agen-agen ini mengagregasi analitik BigQuery, integrasi API finansial pihak ketiga, dan pemodelan generative AI multimodal (Google Gemini & Imagen) untuk menghasilkan kampanye pemasaran berbasis data lokal secara dinamis dan terstruktur.",
    smartnet_p2_title: "Automated AI Data Feeding & Latency Reduction",
    smartnet_p2_text: "Mengimplementasikan alur kerja Apache Airflow untuk mengotomatiskan penarikan data PostgreSQL langsung ke BigQuery, memangkas latensi transfer data sebesar 30% dan mempercepat kapabilitas penyajian konteks data untuk aplikasi Generative AI.",
    smartnet_b2_title: "Ingestion Skala Besar & Streaming Pipelines",
    smartnet_b2_desc: "Pengembangan jalur data bervolume tinggi, penanganan data real-time, dan migrasi basis data NoSQL.",
    smartnet_p3_title: "ETL Firebase ke Google BigQuery",
    smartnet_p3_text: "Merancang dan memelihara pipeline ETL untuk memproses lebih dari 1TB data dari Firebase ke Google BigQuery, meningkatkan aksesibilitas dan ketersediaan data analitik untuk tim data science dan business intelligence.",
    smartnet_p4_title: "Streamlined Real-Time Data Ingestion",
    smartnet_p4_text: "Mengembangkan pipeline streaming real-time ke BigQuery memanfaatkan GCP Pub/Sub dan Cloud Dataflow. Mengintegrasikan logika transformasi in-flight untuk memfilter kolom audit redundan secara langsung, mengurangi overhead dan biaya penyimpanan hilir secara signifikan.",
    smartnet_p5_title: "Automated NoSQL Database Migration",
    smartnet_p5_text: "Merekayasa pipeline migrasi data otomatis tanpa kendala (seamless migration) untuk memindahkan beban kerja NoSQL dari on-premise Apache Cassandra ke Google Cloud Bigtable terkelola.",
    smartnet_b3_title: "Data Orchestration, Transformation & Analytics",
    smartnet_b3_desc: "Standardisasi logika bisnis dan percepatan kueri eksploratif data warehouse.",
    smartnet_p6_title: "Orchestration via Apache Airflow & dbt",
    smartnet_p6_text: "Mengorkestrasi tahapan ingestion, transformasi, dan uji kualitas data otomatis menggunakan Apache Airflow dan dbt (data build tool). Berhasil meningkatkan kesegaran data (freshness) sebesar 30% dan menjamin konsistensi logika bisnis di seluruh dataset perusahaan.",
    smartnet_p7_title: "Integrasi ClickHouse Columnar Storage",
    smartnet_p7_text: "Mengintegrasikan ClickHouse untuk pengujian analitik berkinerja tinggi pada proyek proof-of-concept (POC), menghasilkan akselerasi drastis dalam eksplorasi dan query analitik dataset berukuran besar.",
    smartnet_p8_title: "5+ Dashboard Interaktif Looker",
    smartnet_p8_text: "Membangun 5+ dashboard analitik interaktif di Looker untuk kebutuhan pelaporan real-time manajemen, mengotomatiskan alur kerja dan memangkas pemrosesan data manual hingga 40%.",
    smartnet_p9_title: "Optimasi & Desain Basis Data",
    smartnet_p9_text: "Merancang dan mengoptimalkan skema basis data pada lebih dari 3 aplikasi produksi, menghasilkan peningkatan performa kueri rata-rata sebesar 30%.",
    smartnet_b4_title: "Tata Kelola Arsitektur & Manajemen Proyek",
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
    smartnet_diag2_title: "1. Arsitektur Real-Time Data Analytics & Medallion Data Warehouse (Retail DWH)",
    smartnet_diag2_arch_title: "High-Level Architecture (Real-Time Streaming & Medallion DWH)",
    smartnet_diag2_desc: "Rancangan arsitektur streaming data skala besar dari 1.200 database toko (DB Express) dan cabang (DB Standard) menuju BigQuery Medallion Architecture (Bronze, Silver, Gold) dengan pemantauan terpadu Grafana.",
    smartnet_diag2_details: `
      <div class="flow-breakdown">
        <!-- Overview Meta Grid -->
        <div class="flow-meta-grid">
          <div class="flow-meta-box">
            <div class="flow-meta-label">Klien &amp; Jangkauan</div>
            <div class="flow-meta-value">1.200 Toko Retail</div>
            <div class="flow-meta-desc">Ritel &amp; bengkel motor di seluruh Indonesia</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Volume &amp; Skala</div>
            <div class="flow-meta-value">~100 GB / Bulan</div>
            <div class="flow-meta-desc">Near real-time streaming ingestion</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Efisiensi Biaya</div>
            <div class="flow-meta-value">~$300 / Bulan</div>
            <div class="flow-meta-desc">1 multi-stream job Dataflow terpadu</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Tech Stack Utama</div>
            <div class="flow-meta-value">Dataflow &amp; BigQuery</div>
            <div class="flow-meta-desc">Beam Python, Pub/Sub, Datastream, Grafana</div>
          </div>
        </div>

        <!-- Section 1: Overview & Yang Saya Bangun -->
        <div class="flow-section">
          <h4 class="flow-section-heading">1. Ringkasan &amp; Ruang Lingkup Proyek</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            Arsitektur data streaming berskala besar end-to-end yang menyerap data transaksi kasir toko dan master data cabang ke dalam BigQuery Medallion Data Warehouse, dilengkapi sistem observabilitas proaktif dan penyajian BI real-time.
          </p>
          <ul class="flow-list">
            <li class="flow-item">
              <strong>Komponen yang saya bangun:</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Streaming Dataflow Ingestion Layer:</strong> Raw ingestion dari 20 stream Pub/Sub, pembersihan data (in-flight cleansing), deduplikasi stateful, dan pemuatan ke layer bronze (staging) BigQuery via Storage Write API.</li>
                <li class="flow-subitem"><strong>Transformasi Bronze ke Silver:</strong> Pipeline Dataflow otomatis untuk standardisasi dan pembersihan data lebih lanjut.</li>
                <li class="flow-subitem"><strong>CDC Master Data Cabang:</strong> Alur Google Cloud Datastream untuk menangkap perubahan data master dari basis data cabang ke BigQuery.</li>
                <li class="flow-subitem"><strong>Observabilitas Grafana 1.200 Toko:</strong> Monitoring live transfer data, keterlambatan (late data), dan pencegahan data loss pada seluruh 1.200 gerai toko.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section 2: End-to-End Architecture Flow -->
        <div class="flow-section">
          <h4 class="flow-section-heading">2. Alur Arsitektur End-to-End (High-Level Architecture Flow)</h4>
          
          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Sumber Data</th>
                  <th>Deskripsi</th>
                  <th>Jalur Masuk ke GCP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Store: DB Express</strong></td>
                  <td>Database di PC pada masing-masing 1.200 toko lokal, terhubung dengan Stream App</td>
                  <td>Stream App menerbitkan transaksi kasir (POS) secara real-time ke GCP Pub/Sub table topics</td>
                </tr>
                <tr>
                  <td><strong>Branch: DB Standard</strong></td>
                  <td>Database tingkat cabang yang mengelola data master</td>
                  <td>CDC (Change Data Capture) via Datastream langsung menuju BigQuery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item">
              <strong>1. Ingestion (Pub/Sub &amp; Datastream):</strong> Stream App mengirim transaksi kasir real-time ke topik Pub/Sub. Datastream menangkap perubahan CDC master data cabang ke BigQuery.
            </li>
            <li class="flow-item">
              <strong>2. Stream Processing (Dataflow Raw Ingestion):</strong> Membaca Pub/Sub, mendaratkan data mentah ke Cloud Storage Data Lake, dan memuat ke Bronze Layer BigQuery dengan pembersihan in-flight dan deduplikasi. Event bronze juga dipublikasikan ke Bronze Topics (Pub/Sub).
            </li>
            <li class="flow-item">
              <strong>3. Data Jobs (Dataflow):</strong> Transformasi Cleansing (bronze ke silver, dibangun mandiri) dan Transformasi Business Logic (silver ke gold).
            </li>
            <li class="flow-item">
              <strong>4. Medallion Layers (BigQuery):</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Bronze:</strong> Raw events transaksi langsung dari toko.</li>
                <li class="flow-subitem"><strong>Silver:</strong> Data bersih dan tervalidasi setelah deduplikasi.</li>
                <li class="flow-subitem"><strong>Gold:</strong> Data mart agregasi penjualan dan inventaris stok toko untuk analitik eksekutif.</li>
              </ul>
            </li>
            <li class="flow-item">
              <strong>5. Stock Data Path:</strong> Khusus data stok disalurkan melalui Silver Topics (Pub/Sub) ke target RDBMS operasional (DB App metadata dan DB Stock Monitor) untuk mendukung sistem aplikasi lain.
            </li>
            <li class="flow-item">
              <strong>6. Governance &amp; Monitoring:</strong> Dataplex untuk tata kelola data terpusat; Grafana untuk monitoring kesehatan pipeline dan transmisi data 1.200 gerai toko.
            </li>
            <li class="flow-item">
              <strong>7. Delivery:</strong> Gold Layer menyuplai dashboards, reporting analitik (BI), dan konsumsi aplikasi bisnis lainnya.
            </li>
          </ul>
        </div>

        <!-- Section 3: Dataflow Streaming Pipeline In Detail -->
        <div class="flow-section">
          <h4 class="flow-section-heading">3. Detail Implementasi: Pipeline Streaming Dataflow</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            Satu streaming Dataflow job terpadu menangani <strong>10 tabel sumber dari 2 tipe toko (total 20 subscription Pub/Sub dan 20 tabel BigQuery bronze)</strong>. Pipeline dibangun secara dinamis berbasis loop konfigurasi tanpa perlu deploy job terpisah per tabel.
          </p>

          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Tahap</th>
                  <th>Komponen</th>
                  <th>Fungsi &amp; Logika Pemrosesan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Read</strong></td>
                  <td>Pub/Sub I/O</td>
                  <td>Membaca streaming messages dari 20 subscription Pub/Sub secara paralel.</td>
                </tr>
                <tr>
                  <td><strong>2. CDC Prepare</strong></td>
                  <td>JSON Parser &amp; Formatter</td>
                  <td>Parsing payload JSON, klasifikasi record UPSERT atau DELETE, pembuatan sequence number dari waktu operasi (fallback waktu server jika kosong), normalisasi kode toko, tagging tipe toko, dan penambahan ingestion timestamp.</td>
                </tr>
                <tr>
                  <td><strong>3. Make Dedup Key</strong></td>
                  <td>Key Extractor</td>
                  <td>Membentuk composite key dari nama tabel + primary key (selalu menyertakan kode toko unik).</td>
                </tr>
                <tr>
                  <td><strong>4. Stateful Dedup</strong></td>
                  <td>Stateful Processing (Beam State API)</td>
                  <td>Menyimpan sequence number tertinggi per key dan mendrop record lama atau duplikat. State otomatis kedaluwarsa setelah 7 hari inaktivitas.</td>
                </tr>
                <tr>
                  <td><strong>5. Fix Types</strong></td>
                  <td>Defensive Schema Mapper</td>
                  <td>Type casting ketat ke skema BigQuery tujuan, validasi nilai numerik (mencegah error seperti "N/A"), penghapusan kolom operasional redundan, failed cast diubah menjadi NULL dengan peringatan log.</td>
                </tr>
                <tr>
                  <td><strong>6. Write</strong></td>
                  <td>Storage Write API</td>
                  <td>Penulisan streaming berkecepatan tinggi ke tabel BigQuery bronze.</td>
                </tr>
                <tr>
                  <td><strong>Side Output</strong></td>
                  <td>Dead-Letter Queue</td>
                  <td>Record yang gagal diparsing ditulis ke tabel <code>error_logs</code> bersama payload asli dan pesan error tanpa memutus pipeline.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item">
              <strong>Keputusan Desain Kunci:</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>1 Job Terpadu:</strong> Shared workers (<code>n2-standard-4</code>, autoscaling 1–4, Streaming Engine) membuat biaya fixed per-job hanya dibayar 1 kali dibanding 20 job terpisah.</li>
                <li class="flow-subitem"><strong>At-least-once Delivery by Design:</strong> Menjamin zero data loss saat jaringan toko tidak stabil; potensi duplikasi diselesaikan oleh stateful dedup berbasis sequence number.</li>
                <li class="flow-subitem"><strong>Stateful Deduplication:</strong> Menjamin urutan data; record out-of-order atau late data tidak akan menimpa data yang lebih mutakhir.</li>
                <li class="flow-subitem"><strong>Retry Under Load:</strong> Pipeline melakukan retry otomatis saat worker mencapai beban maksimal, mencegah data terbuang pada jam sibuk.</li>
                <li class="flow-subitem"><strong>Preservasi Riwayat Delete:</strong> Operasi delete ditandai (<code>cdc_change_type = DELETE</code>), mempertahankan riwayat audit untuk keputusan di silver layer.</li>
                <li class="flow-subitem"><strong>Defensive Type Handling:</strong> Validasi ketat mencegah nilai abnormal merusak Storage Write API; anomali dicatat sebagai NULL dengan log warning.</li>
              </ul>
            </li>
            <li class="flow-item">
              <strong>Runtime &amp; Libraries:</strong> Apache Beam Python SDK (<code>apache_beam</code>), Storage Write API, Streaming Engine Runner v2, stateful timer 7 hari, counters Beam metrics, dan structured JSON logging.
            </li>
          </ul>
        </div>

        <!-- Section 4: Grafana Monitoring -->
        <div class="flow-section">
          <h4 class="flow-section-heading">4. Lapisan Observabilitas &amp; Monitoring Grafana</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            Layer monitoring dan alerting real-time yang dirancang untuk mengawasi integritas aliran data dari seluruh 1.200 toko, menjawab 4 pilar utama:
          </p>

          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Pilar Monitor</th>
                  <th>Pertanyaan yang Dijawab</th>
                  <th>Metrik &amp; Visualisasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Data Transfer</strong></td>
                  <td>Apakah setiap toko aktif mengirimkan data?</td>
                  <td>Status pengiriman data per toko dan per tabel, serta volume throughput 1.200 toko.</td>
                </tr>
                <tr>
                  <td><strong>Late Data</strong></td>
                  <td>Tabel atau toko mana yang mengalami keterlambatan?</td>
                  <td>Selisih waktu antara jadwal estimasi kedatangan dengan waktu tiba aktual di BigQuery.</td>
                </tr>
                <tr>
                  <td><strong>Duplicate Data</strong></td>
                  <td>Apakah ada data yang masuk berulang?</td>
                  <td>Deteksi record duplikat per toko dan tabel akibat mekanisme pengiriman at-least-once.</td>
                </tr>
                <tr>
                  <td><strong>Data Loss</strong></td>
                  <td>Apakah ada transaksi yang hilang dari BigQuery?</td>
                  <td>Perbandingan data sumber vs data BigQuery, ditambah pelacakan error dead-letter table dan metrik Beam.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item">
              <strong>Aturan Alerting:</strong> Notifikasi instan via <strong>Email dan WhatsApp</strong> langsung aktif saat terdeteksi anomali data loss atau lonjakan duplikasi data.
            </li>
            <li class="flow-item">
              <strong>Laporan Harian Otomatis:</strong> Automated daily report dikirim via email merangkum kesehatan transfer data, late data, duplikasi, dan potensi data loss dari seluruh gerai toko.
            </li>
            <li class="flow-item">
              <strong>Pengguna Sistem:</strong> Digunakan oleh tim <strong>PIC IT Data Operation</strong> (kualitas data) dan <strong>IT Network</strong> klien (menemukan toko dengan masalah konektivitas lokal).
            </li>
          </ul>
        </div>

        <!-- Section 5: Problems Solved & Key Impact -->
        <div class="flow-section">
          <h4 class="flow-section-heading">5. Masalah yang Diselesaikan &amp; Dampak Bisnis</h4>
          <div class="flow-keypoint">
            <ul class="flow-list" style="margin-top: 0.3rem;">
              <li class="flow-item">
                <strong>Streaming Near Real-Time Hemat Biaya:</strong> Mengonsolidasi 20 pipeline terpisah menjadi 1 streaming job multi-stream, melayani 1.200 toko (~100 GB/bulan) hanya dengan biaya operasional sekitar <strong>$300 per bulan</strong>.
              </li>
              <li class="flow-item">
                <strong>Mengatasi Ketidakcocokan Data Master:</strong> Menemukan akar masalah selisih data akibat gangguan konektivitas toko, diatasi dengan at-least-once delivery + stateful dedup + monitoring proaktif.
              </li>
              <li class="flow-item">
                <strong>Deteksi Toko Offline dalam 10 Menit:</strong> Toko yang tidak mengirim data langsung terdeteksi dalam waktu <strong>10 menit</strong> melalui alert WhatsApp/Email (sebelumnya baru disadari berhari-hari setelah terjadi selisih rekonsiliasi manual).
              </li>
              <li class="flow-item">
                <strong>Zero Silent Data Loss:</strong> Kombinasi dead-letter error logs dan metrik internal pipeline menjamin tidak ada data transaksi kasir yang hilang secara diam-diam.
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,

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

    // Use Case Accordion Controls
    usecases_section_title: "Daftar Studi Kasus & Arsitektur Sistem",
    usecases_section_desc: "Kumpulan rancangan arsitektur data engineering, streaming skala besar, analitik mobile, machine learning, dan sistem multi-agent end-to-end.",
    usecases_count_pill: "5 Studi Kasus End-to-End",
    usecases_expand_all: "Buka Semua",
    usecases_collapse_all: "Tutup Semua",
    usecase_open_hint: "Klik judul kasus untuk melihat detail",
    usecase_hint_open: "Lihat Detail",
    usecase_hint_close: "Tutup",
    competency_divider_label: "Kompetensi Teknis & Tanggung Jawab Inti",

    // Use Case 1: Retail DWH
    usecase_retail_badge: "Real-Time Streaming & Medallion DWH",
    usecase_retail_title: "1. Arsitektur Real-Time Data Analytics & Medallion Data Warehouse (Retail DWH)",
    usecase_retail_summary: "Rancangan arsitektur streaming data 1.200 toko (100 GB/bulan, ~$300/bln) via Dataflow ke BigQuery Medallion Architecture dengan observabilitas Grafana.",

    // Use Case 2: Train Ticket Mobile App DWH (Firebase Analytics Phase 1, 2 & 3)
    usecase_fb_badge: "Firebase Analytics & Medallion DWH",
    usecase_fb_title: "2. Mobile App Analytics Data Warehouse (Train Ticket Booking) — Firebase Analytics (Phase 1, 2 & 3)",
    usecase_fb_summary: "BigQuery Data Warehouse (~100 GB/hari) berbasis Medallion Architecture & Star Schema untuk aplikasi pemesanan tiket kereta (10M+ unduhan), mengintegrasikan analitik mobile Firebase (Fase 1 & 2) serta data store (Fase 3) ke Looker Studio.",
    usecase_fb_details: `
      <div class="flow-breakdown">
        <!-- Overview Meta Grid -->
        <div class="flow-meta-grid">
          <div class="flow-meta-box">
            <div class="flow-meta-label">Klien &amp; Jangkauan</div>
            <div class="flow-meta-value">10M+ Downloads</div>
            <div class="flow-meta-desc">Aplikasi Tiket Kereta Indonesia (Play Store)</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Volume &amp; Skala Data</div>
            <div class="flow-meta-value">~100 GB / Hari</div>
            <div class="flow-meta-desc">~3 TB / Bulan event analitik berskala besar</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Pola Arsitektur</div>
            <div class="flow-meta-value">Medallion &amp; Star Schema</div>
            <div class="flow-meta-desc">BigQuery Bronze, Silver, Gold + Looker Studio</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Tech Stack Utama</div>
            <div class="flow-meta-value">Firebase &amp; BigQuery</div>
            <div class="flow-meta-desc">Looker Studio Pro, Cloud Functions, BigQuery DTS, SQL</div>
          </div>
        </div>

        <!-- Section 1: Overview & Yang Saya Bangun -->
        <div class="flow-section">
          <h4 class="flow-section-heading">1. Ringkasan &amp; Ruang Lingkup Proyek</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            Data warehouse BigQuery berskala enterprise menggunakan <strong>Medallion Architecture</strong> untuk aplikasi pemesanan tiket kereta terkemuka di Indonesia (10M+ unduhan di Google Play Store). Sistem ini mengolah sekitar <strong>100 GB event analitik per hari</strong> yang diekspor dari Firebase Analytics, memodelkannya menjadi data marts berformat <strong>Star Schema</strong> pada layer Gold, dan menyajikan dashboard Looker Studio interaktif untuk pemantauan perjalanan pengguna (<em>user journey</em>). Proyek ini diselesaikan secara kolaboratif dalam tim (<em>team project</em>).
          </p>
          <ul class="flow-list">
            <li class="flow-item">
              <strong>Komponen yang saya bangun (My part):</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Silver Layer Pipelines:</strong> Membangun sejumlah tabel silver untuk flattening struktur payload JSON bersarang (<em>nested &amp; repeated fields</em>), deduplikasi event ganda akibat retry jaringan mobile, dan clustering event analitik.</li>
                <li class="flow-subitem"><strong>Gold Layer Data Marts:</strong> Merancang dan mengimplementasikan data mart dalam format Star Schema (tabel fakta transaksi/event dan tabel dimensi atribut perjalanan) yang siap pakai untuk visualisasi performa tinggi.</li>
                <li class="flow-subitem"><strong>Dashboards di Looker Studio &amp; Looker Studio Pro:</strong> Membangun visualisasi perjalanan pengguna end-to-end, mencakup alur pembelian tiket (<em>purchase</em>), pengembalian dana (<em>refund</em>), dan ubah jadwal (<em>reschedule</em>).</li>
                <li class="flow-subitem"><strong>Data Quality Review &amp; Mitigasi Tagging:</strong> Berperan aktif dalam audit kualitas data yang menemukan celah ketiadaan tagging event di beberapa layar kunci aplikasi, serta menyusun strategi perbaikan di sisi mobile app sebelum kalkulasi metrik funnel dijalankan.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section 2: End-to-End Architecture Flow -->
        <div class="flow-section">
          <h4 class="flow-section-heading">2. Alur Arsitektur End-to-End (High-Level Architecture Flow)</h4>
          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Sumber Data</th>
                  <th>Deskripsi</th>
                  <th>Jalur Masuk ke BigQuery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mobile App (Firebase)</strong></td>
                  <td>Event analitik pengguna dari aplikasi tiket Android &amp; iOS</td>
                  <td>Native export harian &amp; streaming dari Firebase ke BigQuery (~100 GB/hari)</td>
                </tr>
                <tr>
                  <td><strong>Backend Event Tagging</strong></td>
                  <td>Tagging event layar (<em>screen views</em>) dan status transaksi</td>
                  <td>Jalur export Firebase yang sama ke BigQuery</td>
                </tr>
                <tr>
                  <td><strong>Multi-Store Data (Fase 3)</strong></td>
                  <td>Metrik unduhan &amp; instalasi dari Apple App Store &amp; Google Play Store</td>
                  <td>Cloud Functions (App Store) dan BigQuery Data Transfer Service (Play Store)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item"><strong>1. Ingestion:</strong> Event pengguna diserap via ekspor native Firebase ke BigQuery pada skala ~100 GB per hari.</li>
            <li class="flow-item"><strong>2. Bronze Layer:</strong> Mendaratkan raw events apa adanya (<em>as-is</em>) tanpa modifikasi, menjamin auditabilitas dan kemampuan melacak kembali (<em>traceability</em>) angka ke event mentah aslinya.</li>
            <li class="flow-item"><strong>3. Silver Layer:</strong> Transformasi pembersihan dan standardisasi data: flattening skema array bersarang (<em>unnesting</em>), deduplikasi rekaman ganda, serta pengelompokan (<em>clustering</em>) event.</li>
            <li class="flow-item"><strong>4. Gold Layer:</strong> Data marts bisnis siap pakai dengan Star Schema (tabel fakta dan tabel dimensi) yang dioptimasi untuk kueri cepat tanpa kalkulasi berulang.</li>
            <li class="flow-item"><strong>5. Delivery:</strong> Dashboard Looker Studio &amp; Looker Studio Pro menyajikan visualisasi user journey tiket secara real-time dan terpercaya.</li>
          </ul>
        </div>

        <!-- Section 3: Arsitektur Pipeline & Evolusi Fase (Fase 1, 2 & 3) -->
        <div class="flow-section">
          <h4 class="flow-section-heading">3. Detail Arsitektur Pipeline &amp; Evolusi Fase (Fase 1, 2 &amp; 3)</h4>

          <!-- Sub-Fase 1 & 2 -->
          <div class="phase-subcard">
            <div class="phase-subcard-header">
              <h5 class="phase-subcard-title">Fase 1 &amp; 2: Pipeline Analitik Mobile App &amp; BigQuery Data Marts</h5>
              <span class="phase-badge-pill phase-badge-1">Fase 1 &amp; 2 · Ingestion &amp; Funnels</span>
            </div>
            <div class="diagram-preview-box" data-lightbox-src="assets/firebase-analytics-fase-1&amp;2.png" data-lightbox-caption-key="usecase_fb_title" role="button" tabindex="0" aria-label="Perbesar diagram Firebase Analytics Fase 1 &amp; 2">
              <img src="assets/firebase-analytics-fase-1&amp;2.png" alt="Firebase Analytics Fase 1 &amp; 2" class="diagram-preview-img" loading="lazy">
              <div class="diagram-zoom-hint">
                <span data-i18n="diagram_zoom_hint">Klik untuk memperbesar diagram</span>
              </div>
            </div>
            <ul class="flow-list" style="margin-top: 1rem;">
              <li class="flow-item"><strong>SDK on Device:</strong> Telemetri dan event interaksi dikumpulkan dari aplikasi Android dan iOS.</li>
              <li class="flow-item"><strong>Transport Layer:</strong> Android Transport Layer dan Apple Push Notification service (APNs) menyalurkan pesan ke backend Firebase.</li>
              <li class="flow-item"><strong>Firebase Analytics Backend:</strong> Memvalidasi dan mengekspor payload event langsung ke Google BigQuery.</li>
              <li class="flow-item"><strong>Warehouse &amp; ML:</strong> Data dikelola dalam Data Marts terstruktur, diperkaya metadata via Data Catalog, dan diorkestrasi Cloud Composer untuk pemodelan prediktif BigQuery ML.</li>
              <li class="flow-item"><strong>3 Dashboard Looker Studio:</strong> Menghasilkan <em>Marketing Dashboard</em>, <em>Users Monitoring Dashboard</em>, dan <em>Application Dashboard</em> untuk analisis konversi tiket.</li>
            </ul>
          </div>

          <!-- Sub-Fase 3 -->
          <div class="phase-subcard">
            <div class="phase-subcard-header">
              <h5 class="phase-subcard-title">Fase 3: Multi-Store Ingestion &amp; Looker Studio Pro</h5>
              <span class="phase-badge-pill phase-badge-3">Fase 3 · Multi-Store &amp; Pro</span>
            </div>
            <div class="diagram-preview-box" data-lightbox-src="assets/firebase-analytics-fase-3.png" data-lightbox-caption-key="usecase_fb_title" role="button" tabindex="0" aria-label="Perbesar diagram Firebase Analytics Fase 3">
              <img src="assets/firebase-analytics-fase-3.png" alt="Firebase Analytics Fase 3 Multi-Store Ingestion" class="diagram-preview-img" loading="lazy">
              <div class="diagram-zoom-hint">
                <span data-i18n="diagram_zoom_hint">Klik untuk memperbesar diagram</span>
              </div>
            </div>
            <ul class="flow-list" style="margin-top: 1rem;">
              <li class="flow-item"><strong>Sumber Data Store Eksternal:</strong> Memperluas penyerapan data ke tingkat store resmi (Apple App Store &amp; Google Play Store).</li>
              <li class="flow-item"><strong>Ingestion GCP Otomatis:</strong> Data App Store diekstrak via Cloud Functions terkelola, sedangkan data Play Store diserap otomatis lewat BigQuery Data Transfer Service (DTS).</li>
              <li class="flow-item"><strong>Data Warehouse Terintegrasi:</strong> Konsolidasi data store dengan data interaksi pengguna aplikasi ke dalam Star Schema Data Marts dan evaluasi BigQuery ML.</li>
              <li class="flow-item"><strong>Looker Studio Pro:</strong> Peningkatan kapabilitas analitik dan kolaborasi enterprise dengan Looker Studio Pro untuk pemangku kepentingan tingkat manajemen.</li>
            </ul>
          </div>
        </div>

        <!-- Section 4: Detail Implementasi & Keputusan Desain -->
        <div class="flow-section">
          <h4 class="flow-section-heading">4. Rincian Layer &amp; Keputusan Desain Utama</h4>
          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Tujuan Arsitektur</th>
                  <th>Kontribusi Spesifik Saya</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bronze</strong></td>
                  <td>Raw Landing</td>
                  <td>Data tiba melalui ekspor native Firebase dan dipertahankan apa adanya (<em>as-is</em>) untuk kebutuhan audit.</td>
                </tr>
                <tr>
                  <td><strong>Silver</strong></td>
                  <td>Cleaned Data</td>
                  <td>Membangun pipeline unnesting payload bersarang, deduplikasi record ganda, dan klusterisasi event.</td>
                </tr>
                <tr>
                  <td><strong>Gold</strong></td>
                  <td>Ready-to-use Marts</td>
                  <td>Merancang data marts Star Schema dengan fact tables transaksi/event dan dimension tables deskriptif.</td>
                </tr>
                <tr>
                  <td><strong>Dashboards</strong></td>
                  <td>Business Intelligence</td>
                  <td>Membangun dashboard interaktif di Looker Studio untuk visualisasi user journey (purchase, refund, reschedule).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item"><strong>Keputusan Desain Kunci:</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Medallion Architecture:</strong> Memisahkan data mentah, data bersih, dan data siap analitik, sehingga setiap masalah inkonsistensi dapat dilacak langsung ke layer spesifik.</li>
                <li class="flow-subitem"><strong>Star Schema pada Gold:</strong> Menyediakan kueri join yang ringan dan cepat untuk Looker Studio, memastikan seluruh departemen membaca tabel fakta dan dimensi yang seragam.</li>
                <li class="flow-subitem"><strong>Dashboard Hanya Membaca Layer Gold:</strong> Menjaga dashboard tetap kencang dan mencegah duplikasi logika bisnis di layer visualisasi.</li>
                <li class="flow-subitem"><strong>Flatten &amp; Dedup pada Silver:</strong> Membersihkan skema bersarang dan duplikasi event satu kali di layer silver, sehingga seluruh tabel hilir bermula dari data yang bersih dan terpercaya.</li>
                <li class="flow-subitem"><strong>Data Quality Before Analysis:</strong> Menegakkan prinsip integritas data—memperbaiki sumber tagging terlebih dahulu sebelum merilis visualisasi funnel.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section 5: Problems Solved & Key Impact -->
        <div class="flow-section">
          <h4 class="flow-section-heading">5. Masalah yang Diselesaikan &amp; Dampak Bisnis</h4>
          <div class="flow-keypoint">
            <ul class="flow-list" style="margin-top: 0.3rem;">
              <li class="flow-item">
                <strong>Kasus 1 — Permintaan Funnel Perjalanan Pengguna yang Belum Didukung Data:</strong>
                <ul class="flow-sublist">
                  <li class="flow-subitem"><em>Permintaan:</em> Stakeholder bisnis meminta analisis funnel perjalanan pengguna (<em>user journey funnel</em>) untuk seluruh alur pemesanan tiket: pembelian tiket, pengembalian dana (<em>refund</em>), dan ubah jadwal (<em>reschedule</em>).</li>
                  <li class="flow-subitem"><em>Permasalahan:</em> Audit data menemukan bahwa sejumlah layar penting aplikasi belum memiliki tagging event sama sekali, dan sebagian record transaksi/promo tidak valid. Funnel yang dipaksakan dari data ini akan menampilkan persentase drop-off yang salah dan dapat memicu salah ambil keputusan bisnis.</li>
                  <li class="flow-subitem"><em>Investigasi &amp; Keputusan:</em> Kami mengkomparasi seluruh layar alur tiket dengan log event BigQuery untuk memetakan layar yang tidak terlacak. Kami mengomunikasikan temuan ini secara transparan dalam bahasa bisnis dan menyepakati penundaan singkat untuk memperbaiki tagging di aplikasi terlebih dahulu sebelum funnel dibuat.</li>
                  <li class="flow-subitem"><em>Hasil:</em> Klien terhindar dari keputusan bias dan berhasil memperoleh metrik funnel yang 100% akurat dan dapat diandalkan.</li>
                </ul>
              </li>
              <li class="flow-item" style="margin-top: 0.6rem;">
                <strong>Kasus 2 — Menjinakkan 100 GB/Hari Event Mentah Bersarang Menjadi Data Mart Cepat:</strong>
                <ul class="flow-sublist">
                  <li class="flow-subitem"><em>Tantangan:</em> Event mentah Firebase memiliki format sangat bersarang (<em>nested arrays</em>), rekaman berulang akibat pengiriman ulang jaringan mobile, dan berukuran ~100 GB/hari sehingga sangat berat dan lambat jika di-query langsung oleh tim analitik.</li>
                  <li class="flow-subitem"><em>Solusi:</em> Medallion warehouse yang melakukan flattening dan deduplikasi otomatis di silver, lalu memodelkannya ke Star Schema di gold.</li>
                  <li class="flow-subitem"><em>Hasil:</em> Tim bisnis dan BI memperoleh dashboard perjalanan tiket yang responsif, kueri cepat, hemat biaya komputasi BigQuery, dan berbasis tabel data yang konsisten di seluruh departemen.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,

    // Use Case 3: Predictive Maintenance Spare Part Motor
    usecase_pm_badge: "On-Premise ML · Python",
    usecase_pm_title: "3. Machine Learning: Predictive Maintenance Spare Part Motor",
    usecase_pm_summary: "Memprediksi kebutuhan penggantian spare part dan oli motor menggunakan data yang diekstraksi dari foto odometer dan plat nomor via pipeline Python on-premise.",
    usecase_pm_meta1_label: "Target Objek",
    usecase_pm_meta1_val: "1.200 Toko & Bengkel",
    usecase_pm_meta1_desc: "Pelanggan servis motor ritel",
    usecase_pm_meta2_label: "Input Ekstraksi",
    usecase_pm_meta2_val: "Odometer & Plat",
    usecase_pm_meta2_desc: "Foto smartphone via OCR Python",
    usecase_pm_meta3_label: "Estimasi Output",
    usecase_pm_meta3_val: "Jadwal Servis & Oli",
    usecase_pm_meta3_desc: "Rekomendasi suku cadang presisi",
    usecase_pm_meta4_label: "Infrastruktur & Stack",
    usecase_pm_meta4_val: "On-Premise Python",
    usecase_pm_meta4_desc: "OpenCV, Tabular Data, Scikit-Learn",

    // Use Case 4: Generative AI & Distributed Multi-Agent Architecture
    usecase_genai_badge: "Enterprise AI & RAG Architecture",
    usecase_genai_title: "4. Generative AI & Distributed Multi-Agent Architecture (Gemini Enterprise)",
    usecase_genai_summary: "Arsitektur AI otonom terdistribusi di GCP yang menggabungkan analitik BigQuery, Vertex AI Search RAG, konektor SharePoint/OneDrive, dan multimodal Gemini/Imagen.",
    usecase_genai_meta1_label: "Domain Solusi",
    usecase_genai_meta1_val: "Marketing AI Otonom",
    usecase_genai_meta1_desc: "Kampanye pemasaran lokal dinamis",
    usecase_genai_meta2_label: "Model Multimodal",
    usecase_genai_meta2_val: "Gemini & Imagen",
    usecase_genai_meta2_desc: "Pembuatan konten teks & visual",
    usecase_genai_meta3_label: "Arsitektur Agen",
    usecase_genai_meta3_val: "ADK & MCP Protocol",
    usecase_genai_meta3_desc: "Distributed runtime di Cloud Run",
    usecase_genai_meta4_label: "Integrasi Data & RAG",
    usecase_genai_meta4_val: "BigQuery + Vertex AI",
    usecase_genai_meta4_desc: "Grounding data terstruktur & dokumen",

    // Use Case 5: Data Lineage Transaksi Toko
    usecase_lineage_badge: "Data Lineage & CDC Ingestion",
    usecase_lineage_title: "5. Data Lineage Transaksi Toko: RekapTransaksiTokoDetail",
    usecase_lineage_summary: "Silsilah alur data terperinci dari level trigger basis data SQL Express di gerai toko lokal via Pub/Sub dan BigQuery Direct Subscription ke tabel analitik produksi.",
    usecase_lineage_meta1_label: "Titik Asal (Origin)",
    usecase_lineage_meta1_val: "1.200 Toko Retail",
    usecase_lineage_meta1_desc: "Basis data SQL Server Express POS",
    usecase_lineage_meta2_label: "Mekanisme CDC",
    usecase_lineage_meta2_val: "DB Triggers & Audit",
    usecase_lineage_meta2_desc: "Pencatatan mutasi transaksi otomatis",
    usecase_lineage_meta3_label: "Transport Layer",
    usecase_lineage_meta3_val: "GCP Pub/Sub Streaming",
    usecase_lineage_meta3_desc: "Pengiriman streaming tanpa delay batch",
    usecase_lineage_meta4_label: "Target BigQuery",
    usecase_lineage_meta4_val: "Direct Sub & Views",
    usecase_lineage_meta4_desc: "Tabel analitik produksi terverifikasi",

    // Diagram 4: Firebase Analytics Fase 1 (Legacy Key Compatibility)
    smartnet_diag4_badge: "Firebase Analytics – Phase 1 and 2",
    smartnet_diag4_title: "1. Firebase Analytics – Phase 1 and 2",
    smartnet_fb1_details: `
      <div class="flow-breakdown">
        <ul class="flow-list">
          <li class="flow-item"><strong>SDK on Device:</strong> Data dikumpulkan dari aplikasi Android dan iOS.</li>
          <li class="flow-item"><strong>Platform-level Message Transport:</strong> Android Transport Layer dan iOS APNs menyalurkan pesan.</li>
          <li class="flow-item"><strong>Firebase Backend:</strong> Masuk ke modul Analytics di Firebase.</li>
          <li class="flow-item"><strong>Data Warehouse (BigQuery):</strong> Data disimpan dalam Data Marts dan diproses BigQuery ML.</li>
          <li class="flow-item"><strong>Insight &amp; Visualisasi:</strong> 3 Dashboard Looker Studio (Marketing, Users Monitoring, Application).</li>
        </ul>
      </div>
    `,

    // Diagram 5: Firebase Analytics Fase 3 (Legacy Key Compatibility)
    smartnet_diag5_badge: "Firebase Analytics – Phase 3",
    smartnet_diag5_title: "2. Firebase Analytics – Phase 3",
    smartnet_fb3_details: `
      <div class="flow-breakdown">
        <ul class="flow-list">
          <li class="flow-item"><strong>Data Sources:</strong> App Store &amp; Playstore store-level data.</li>
          <li class="flow-item"><strong>Google Cloud Platform:</strong> Cloud Functions untuk App Store, BigQuery Data Transfer Service untuk Playstore.</li>
          <li class="flow-item"><strong>Data Warehouse:</strong> Data Marts &amp; BigQuery ML.</li>
          <li class="flow-item"><strong>Output:</strong> Looker Studio Pro enterprise visualization.</li>
        </ul>
      </div>
    `,

    // SCM Detail
    scm_date: "Januari 2022 — Juli 2023",
    scm_b1_title: "Data Matching Nielsen × Gen21 (Python & Fuzzy ML)",
    scm_b1_desc: "Integrasi dan rekonsiliasi data penayangan iklan komersial antara sistem broadcast traffic internal dan lembaga rating independen.",
    scm_p1_title: "Pencocokan Otomatis Gen21 & Nielsen TV Ratings",
    scm_p1_text: "Mengembangkan program pencocokan data periklanan berbasis event-driven dengan Python menggunakan teknik machine learning fuzzy wuzzy. Solusi ini berhasil mengintegrasikan dataset heterogeneous dari Gen21 (traffic log) dan Nielsen Media Research untuk analisis rating pemirsa siaran TV nasional (SCTV & Indosiar).",
    scm_p1_b1: "Meningkatkan akurasi pencocokan log iklan komersial hingga <strong>90%</strong>.",
    scm_p1_b2: "Memangkas waktu komputasi pemrosesan harian sebesar <strong>80%</strong> dibanding metode manual sebelumnya.",
    scm_b2_title: "Streaming Data Pipelines Skalabilitas Tinggi",
    scm_b2_desc: "Infrastruktur pemrosesan aliran data terdistribusi untuk mengantisipasi lonjakan trafik siaran.",
    scm_p2_title: "Pipeline Streaming Kafka + Spark + Docker",
    scm_p2_text: "Membangun dan mengonfigurasi pipeline streaming data menggunakan kontainerisasi Docker, Apache Kafka sebagai message broker terdistribusi, Apache Spark untuk micro-batch processing cepat, dan MySQL sebagai storage hilir.",
    scm_p2_b1: "Mampu menangani peningkatan volume data hingga <strong>40%</strong> tanpa latensi berlebih.",
    scm_p2_b2: "Menjamin keandalan pengiriman data (zero data loss) dan kontinuitas analitik waktu nyata.",
    scm_b3_title: "Orkestrasi & Efisiensi Operasional dengan Airflow",
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
    hero_title: "Hi, I am Kharismadina Hijra Muhamad, you can call me Kharis 👋",
    hero_greeting: "Hi, I am Kharismadina Hijra Muhamad, you can call me Kharis 👋",
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
    exp_scm_h1: "<strong>Nielsen × Gen21 Data Matching (ML):</strong> A Dockerized Python program using <em>fuzzywuzzy</em> to match MySQL (Nielsen) and SQL Server (Gen21) data — daily batches via Airflow and real-time via Debezium + Kafka — into the Marketing team's PostgreSQL. Increased matching accuracy by 90% and cut processing time by 80%.",
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
    smartnet_b1_title: "Generative AI & Distributed Multi-Agent Architecture",
    smartnet_b1_desc: "Strategic initiative engineering autonomous multi-agent systems for aggregated analytics and automated marketing campaigns.",
    smartnet_p1_title: "Distributed Multi-Agent Generative AI System",
    smartnet_p1_text: "Engineered a distributed multi-agent generative AI system on GCP (Cloud Run, ADK, MCP), autonomously aggregating BigQuery analytics, external financial APIs, and Gemini/Imagen models into structured, localized marketing campaigns.",
    smartnet_p2_title: "Automated AI Data Feeding & Latency Reduction",
    smartnet_p2_text: "Implemented Airflow workflows to automate PostgreSQL data ingestion into BigQuery, reducing data latency by 30% and enhancing generative AI capabilities.",
    smartnet_b2_title: "Large-Scale Ingestion & Streaming Pipelines",
    smartnet_b2_desc: "High-volume data pipelines, real-time ingestion, and seamless NoSQL database migrations.",
    smartnet_p3_title: "ETL Firebase to Google BigQuery",
    smartnet_p3_text: "Designed and maintained ETL pipelines processing 1TB+ of data from Firebase to BigQuery, improving data accessibility for analytics teams.",
    smartnet_p4_title: "Streamlined Real-Time Data Ingestion",
    smartnet_p4_text: "Streamlined real-time data ingestion into BigQuery using Pub/Sub and Dataflow, incorporating in-flight data transformation logic to remove redundant audit columns and reduce downstream storage overhead.",
    smartnet_p5_title: "Automated NoSQL Database Migration",
    smartnet_p5_text: "Engineered and automated a seamless data migration pipeline, successfully transferring NoSQL workloads from Apache Cassandra to Cloud Bigtable.",
    smartnet_b3_title: "Data Orchestration, Transformation & Analytics",
    smartnet_b3_desc: "Standardizing business logic across data warehouse layers and accelerating exploratory queries.",
    smartnet_p6_title: "Orchestration via Apache Airflow & dbt",
    smartnet_p6_text: "Orchestrated ingestion, transformation, and quality checks using Apache Airflow and dbt, improving data freshness by 30% and ensuring consistent business logic across datasets.",
    smartnet_p7_title: "ClickHouse Columnar Storage Integration",
    smartnet_p7_text: "Integrated ClickHouse for high-performance analytics queries in proof-of-concept projects, enabling faster exploratory analysis on large datasets.",
    smartnet_p8_title: "5+ Interactive Dashboards in Looker",
    smartnet_p8_text: "Developed 5+ interactive dashboards in Looker, optimizing real-time reporting and reducing manual data processing by 40%.",
    smartnet_p9_title: "Database Design & Query Optimization",
    smartnet_p9_text: "Designed and optimized databases for 3+ applications, improving query performance by 30%.",
    smartnet_b4_title: "Technical Governance & Project Delivery",
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
    smartnet_diag2_title: "1. Architecture: Real-Time Data Analytics & Medallion Data Warehouse (Retail DWH)",
    smartnet_diag2_arch_title: "High-Level Architecture (Real-Time Streaming & Medallion DWH)",
    smartnet_diag2_desc: "End-to-end large-scale streaming data architecture ingesting from 1,200 retail store databases (DB Express) and branch systems (DB Standard) into a BigQuery Medallion Architecture with live Grafana monitoring.",
    smartnet_diag2_details: `
      <div class="flow-breakdown">
        <!-- Overview Meta Grid -->
        <div class="flow-meta-grid">
          <div class="flow-meta-box">
            <div class="flow-meta-label">Client &amp; Scale</div>
            <div class="flow-meta-value">1,200 Retail Stores</div>
            <div class="flow-meta-desc">Motorcycle repair &amp; retail chain across Indonesia</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Data Volume</div>
            <div class="flow-meta-value">~100 GB / Month</div>
            <div class="flow-meta-desc">Near real-time streaming ingestion</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Cost Efficiency</div>
            <div class="flow-meta-value">~$300 / Month</div>
            <div class="flow-meta-desc">Single consolidated multi-stream Dataflow job</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Core Tech Stack</div>
            <div class="flow-meta-value">Dataflow &amp; BigQuery</div>
            <div class="flow-meta-desc">Beam Python, Pub/Sub, Datastream, Grafana</div>
          </div>
        </div>

        <!-- Section 1: Overview & What I Built -->
        <div class="flow-section">
          <h4 class="flow-section-heading">1. Overview &amp; Project Scope</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            An end-to-end, large-scale streaming data architecture that ingests store transactions and branch master data into a BigQuery Medallion Data Warehouse, equipped with proactive observability and real-time BI delivery.
          </p>
          <ul class="flow-list">
            <li class="flow-item">
              <strong>What I built:</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Dataflow Streaming Ingestion Layer:</strong> Raw ingestion from 20 Pub/Sub streams, in-flight cleansing, stateful deduplication, and loading into BigQuery bronze (staging) via Storage Write API.</li>
                <li class="flow-subitem"><strong>Bronze-to-Silver Transformation:</strong> Automated Dataflow jobs for standardized data cleansing and preparation.</li>
                <li class="flow-subitem"><strong>Branch Master Data CDC:</strong> Google Cloud Datastream pipeline capturing change data from branch databases into BigQuery.</li>
                <li class="flow-subitem"><strong>1,200-Store Grafana Observability:</strong> Live monitoring for data transfer, arrival latency (late data), and data loss prevention across all 1,200 stores.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section 2: End-to-End Architecture Flow -->
        <div class="flow-section">
          <h4 class="flow-section-heading">2. End-to-End High-Level Architecture Flow</h4>
          
          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Description</th>
                  <th>Path into GCP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Store: DB Express</strong></td>
                  <td>Database installed on local PCs across each of the 1,200 stores, linked with a Stream App</td>
                  <td>Stream App publishes point-of-sale (POS) transactions in real time to GCP Pub/Sub table topics</td>
                </tr>
                <tr>
                  <td><strong>Branch: DB Standard</strong></td>
                  <td>Branch-level database holding organizational master data</td>
                  <td>CDC (Change Data Capture) through Datastream directly into BigQuery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item">
              <strong>1. Ingestion (Pub/Sub &amp; Datastream):</strong> Stream App sends real-time POS transactions to Pub/Sub table topics. Datastream captures branch master data changes via CDC into BigQuery.
            </li>
            <li class="flow-item">
              <strong>2. Stream Processing (Dataflow Raw Ingestion):</strong> Reads from Pub/Sub, lands raw records in Cloud Storage Data Lake, and loads BigQuery Bronze Layer with in-flight cleansing and deduplication. Bronze events are also published to Bronze Topics (Pub/Sub).
            </li>
            <li class="flow-item">
              <strong>3. Data Jobs (Dataflow):</strong> Transformation Cleansing (bronze to silver, built by me) and Business Logic Transformation (silver to gold).
            </li>
            <li class="flow-item">
              <strong>4. Medallion Layers (BigQuery):</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Bronze:</strong> Raw point-of-sale events directly from stores.</li>
                <li class="flow-subitem"><strong>Silver:</strong> Cleansed, deduplicated, and typed operational data.</li>
                <li class="flow-subitem"><strong>Gold:</strong> Aggregated sales and store inventory data marts for business intelligence.</li>
              </ul>
            </li>
            <li class="flow-item">
              <strong>5. Stock Data Path:</strong> Dedicated stock telemetry is routed via Silver Topics (Pub/Sub) to operational RDBMS targets (DB App metadata and DB Stock Monitor) powering downstream apps.
            </li>
            <li class="flow-item">
              <strong>6. Governance &amp; Monitoring:</strong> Google Cloud Dataplex for centralized data governance; Grafana for live monitoring of pipeline health and store data transmission.
            </li>
            <li class="flow-item">
              <strong>7. Delivery:</strong> Gold layer feeds executive dashboards, BI reports, and downstream business applications.
            </li>
          </ul>
        </div>

        <!-- Section 3: Dataflow Streaming Pipeline In Detail -->
        <div class="flow-section">
          <h4 class="flow-section-heading">3. Detailed Implementation: Dataflow Streaming Pipeline</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            A single consolidated streaming Dataflow job handles <strong>10 source tables across 2 store types (20 Pub/Sub subscriptions and 20 BigQuery bronze tables)</strong>. Built in a loop structure so adding new tables requires configuration rather than deploying new pipelines.
          </p>

          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Component</th>
                  <th>Processing Logic &amp; Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Read</strong></td>
                  <td>Pub/Sub I/O</td>
                  <td>Parallel ingestion from 20 Pub/Sub streaming subscriptions.</td>
                </tr>
                <tr>
                  <td><strong>2. CDC Prepare</strong></td>
                  <td>JSON Parser &amp; Formatter</td>
                  <td>Parses JSON, classifies record as UPSERT or DELETE, derives sequence number from operation time (falls back to server time if missing), normalizes store code, tags store type, and appends ingestion timestamp.</td>
                </tr>
                <tr>
                  <td><strong>3. Make Dedup Key</strong></td>
                  <td>Key Extractor</td>
                  <td>Generates composite key from table name + primary key values (always includes unique store code).</td>
                </tr>
                <tr>
                  <td><strong>4. Stateful Dedup</strong></td>
                  <td>Stateful Processing (Beam State API)</td>
                  <td>Retains highest sequence number per key and drops older or duplicate records. State automatically expires after 7 days of inactivity.</td>
                </tr>
                <tr>
                  <td><strong>5. Fix Types</strong></td>
                  <td>Defensive Schema Mapper</td>
                  <td>Strict type casting to destination BigQuery schema, strict numeric validation (preventing "N/A" crashes), removes redundant audit columns, and converts failed casts into NULL with logged warnings.</td>
                </tr>
                <tr>
                  <td><strong>6. Write</strong></td>
                  <td>Storage Write API</td>
                  <td>High-performance streaming writes into BigQuery bronze tables.</td>
                </tr>
                <tr>
                  <td><strong>Side Output</strong></td>
                  <td>Dead-Letter Queue</td>
                  <td>Unparseable records are diverted to an <code>error_logs</code> table with raw payload and error details without halting stream execution.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item">
              <strong>Key Design Decisions:</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Single Multi-Stream Job:</strong> Shared workers (<code>n2-standard-4</code>, autoscaling 1–4, Streaming Engine) reduce fixed per-job infrastructure overhead to 1x instead of 20x.</li>
                <li class="flow-subitem"><strong>At-Least-Once Delivery by Design:</strong> Zero data loss during store connectivity outages; duplicates created by retransmissions are resolved via stateful sequence deduplication.</li>
                <li class="flow-subitem"><strong>Stateful Deduplication by Sequence:</strong> Guarantees that late or out-of-order records never overwrite fresher data versions.</li>
                <li class="flow-subitem"><strong>Retry Under Load:</strong> Processing is retried automatically when workers hit maximum utilization, preventing dropped records during traffic spikes.</li>
                <li class="flow-subitem"><strong>Deletes Preserved:</strong> Deletions are tagged (<code>cdc_change_type = DELETE</code>), maintaining full audit history for downstream silver layer decisions.</li>
                <li class="flow-subitem"><strong>Defensive Type Handling:</strong> Strict validation prevents corrupt values from crashing the Storage Write API, safely converting anomalies into NULL with warnings.</li>
              </ul>
            </li>
            <li class="flow-item">
              <strong>Runtime &amp; Libraries:</strong> Apache Beam Python SDK (<code>apache_beam</code>), Storage Write API, Streaming Engine Runner v2, 7-day state expiry timers, internal Beam metrics counters, and sampled JSON logging.
            </li>
          </ul>
        </div>

        <!-- Section 4: Grafana Monitoring -->
        <div class="flow-section">
          <h4 class="flow-section-heading">4. Grafana Observability &amp; Proactive Alerting Layer</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            Real-time monitoring and alerting layer built to watch data integrity across all 1,200 stores, answering four critical operational questions:
          </p>

          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Monitor Pillar</th>
                  <th>Question Answered</th>
                  <th>Metrics &amp; Visibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Data Transfer</strong></td>
                  <td>Is each store actively sending data?</td>
                  <td>Tracks transmission status and throughput per store and table across all 1,200 retail outlets.</td>
                </tr>
                <tr>
                  <td><strong>Late Data</strong></td>
                  <td>Which tables or stores are arriving late?</td>
                  <td>Measures delta between expected arrival times and actual arrival timestamps in BigQuery.</td>
                </tr>
                <tr>
                  <td><strong>Duplicate Data</strong></td>
                  <td>Is any data arriving redundantly?</td>
                  <td>Counts duplicate records per store and table resulting from at-least-once transport delivery.</td>
                </tr>
                <tr>
                  <td><strong>Data Loss</strong></td>
                  <td>Is anything missing from BigQuery?</td>
                  <td>Reconciles source database counts against BigQuery records, plus dead-letter error logs and Beam metrics.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item">
              <strong>Alert Rules:</strong> Instant alerts trigger upon detection of data loss anomalies or duplicate spikes, dispatched via <strong>Email and WhatsApp</strong>.
            </li>
            <li class="flow-item">
              <strong>Automated Daily Report:</strong> Daily email digests summarize transmission health, late data deltas, duplicates, and missing records across all stores.
            </li>
            <li class="flow-item">
              <strong>Stakeholder Adoption:</strong> Actively used by the client's <strong>PIC IT Data Operation</strong> (pipeline health &amp; data quality) and <strong>IT Network</strong> teams (locating stores with local connectivity issues).
            </li>
          </ul>
        </div>

        <!-- Section 5: Problems Solved & Key Impact -->
        <div class="flow-section">
          <h4 class="flow-section-heading">5. Problems Solved &amp; Business Impact</h4>
          <div class="flow-keypoint">
            <ul class="flow-list" style="margin-top: 0.3rem;">
              <li class="flow-item">
                <strong>Near Real-Time Streaming at Low Cost:</strong> Consolidated 20 isolated table pipelines into a single multi-stream Dataflow job, ingesting ~100 GB/month for 1,200 stores at only <strong>~$300 per month</strong>.
              </li>
              <li class="flow-item">
                <strong>Master Data Mismatch Resolved:</strong> Diagnosed root cause to store network outages, resolved via at-least-once delivery + stateful dedup + proactive Grafana monitoring.
              </li>
              <li class="flow-item">
                <strong>10-Minute Store Outage Detection:</strong> Stores failing to transmit data are detected within <strong>10 minutes</strong> via automated WhatsApp/Email alerts (previously discovered days later during manual reconciliations).
              </li>
              <li class="flow-item">
                <strong>Zero Silent Data Loss:</strong> Dead-letter tables and pipeline metrics guarantee that no transaction is ever dropped silently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,

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

    // Use Case Accordion Controls
    usecases_section_title: "Key Case Studies & System Architectures",
    usecases_section_desc: "End-to-end data engineering architectures, high-scale streaming, mobile analytics, machine learning, and multi-agent systems.",
    usecases_count_pill: "5 End-to-End Case Studies",
    usecases_expand_all: "Expand All",
    usecases_collapse_all: "Collapse All",
    usecase_open_hint: "Click any case title to view details",
    usecase_hint_open: "View Details",
    usecase_hint_close: "Close",
    competency_divider_label: "Core Engineering Competencies & Responsibilities",

    // Use Case 1: Retail DWH
    usecase_retail_badge: "Real-Time Streaming & Medallion DWH",
    usecase_retail_title: "1. Real-Time Data Analytics & Medallion Data Warehouse Architecture (Retail DWH)",
    usecase_retail_summary: "High-scale streaming architecture ingesting 1,200 store databases (~100 GB/month, ~$300/mo) via Dataflow into BigQuery Medallion Architecture with Grafana observability.",

    // Use Case 2: Train Ticket Mobile App DWH (Firebase Analytics Phase 1, 2 & 3)
    usecase_fb_badge: "Firebase Analytics & Medallion DWH",
    usecase_fb_title: "2. Mobile App Analytics Data Warehouse (Train Ticket Booking) — Firebase Analytics (Phase 1, 2 & 3)",
    usecase_fb_summary: "BigQuery Data Warehouse (~100 GB/day) utilizing Medallion Architecture & Star Schema for an Indonesian train ticket booking app (10M+ downloads), unifying Firebase mobile analytics (Phase 1 & 2) and store-level data (Phase 3) into Looker Studio.",
    usecase_fb_details: `
      <div class="flow-breakdown">
        <!-- Overview Meta Grid -->
        <div class="flow-meta-grid">
          <div class="flow-meta-box">
            <div class="flow-meta-label">Client &amp; Reach</div>
            <div class="flow-meta-value">10M+ Downloads</div>
            <div class="flow-meta-desc">Indonesian Train Ticket Booking App (Play Store)</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Data Volume &amp; Scale</div>
            <div class="flow-meta-value">~100 GB / Day</div>
            <div class="flow-meta-desc">~3 TB / Month high-velocity analytics events</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Architecture Pattern</div>
            <div class="flow-meta-value">Medallion &amp; Star Schema</div>
            <div class="flow-meta-desc">BigQuery Bronze, Silver, Gold + Looker Studio</div>
          </div>
          <div class="flow-meta-box">
            <div class="flow-meta-label">Core Tech Stack</div>
            <div class="flow-meta-value">Firebase &amp; BigQuery</div>
            <div class="flow-meta-desc">Looker Studio Pro, Cloud Functions, BigQuery DTS, SQL</div>
          </div>
        </div>

        <!-- Section 1: Overview & My Part -->
        <div class="flow-section">
          <h4 class="flow-section-heading">1. Project Overview &amp; Scope</h4>
          <p class="flow-item" style="padding-left: 0; margin-bottom: 0.5rem;">
            Enterprise BigQuery data warehouse utilizing <strong>Medallion Architecture</strong> for a major train ticket booking app in Indonesia (10M+ downloads on Google Play Store). The warehouse ingests approximately <strong>100 GB of analytics events per day</strong> from Firebase Analytics, models them into ready-to-use <strong>Star Schema</strong> data marts in the Gold layer, and serves interactive Looker Studio dashboards for user journey monitoring. Delivered as a collaborative team project.
          </p>
          <ul class="flow-list">
            <li class="flow-item">
              <strong>Components I built (My part):</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Silver Layer Pipelines:</strong> Built several silver tables to flatten deeply nested JSON payloads (<em>nested &amp; repeated fields</em>), deduplicate events triggered by mobile network retries, and cluster analytical events.</li>
                <li class="flow-subitem"><strong>Gold Layer Data Marts:</strong> Designed and implemented Star Schema data marts (fact tables for transactions/events and dimension tables for journey attributes) optimized for fast visualization.</li>
                <li class="flow-subitem"><strong>Looker Studio &amp; Looker Studio Pro Dashboards:</strong> Built full user journey dashboards covering ticket purchase, refund, and reschedule flows.</li>
                <li class="flow-subitem"><strong>Data Quality Review &amp; Tagging Alignment:</strong> Actively contributed to the data audit that uncovered missing event tagging across key screens, aligning on a fix at the mobile app source before computing funnel metrics.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section 2: End-to-End Architecture Flow -->
        <div class="flow-section">
          <h4 class="flow-section-heading">2. End-to-End Architecture Flow</h4>
          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Data Source</th>
                  <th>Description</th>
                  <th>Path into BigQuery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mobile App (Firebase)</strong></td>
                  <td>User analytics events from Android &amp; iOS ticket booking app</td>
                  <td>Firebase native daily &amp; streaming export into BigQuery (~100 GB/day)</td>
                </tr>
                <tr>
                  <td><strong>Backend Event Tagging</strong></td>
                  <td>Screen view tags and transaction status markers</td>
                  <td>Same native Firebase export pipeline to BigQuery</td>
                </tr>
                <tr>
                  <td><strong>Multi-Store Data (Phase 3)</strong></td>
                  <td>Install &amp; app performance data from Apple App Store &amp; Google Play Store</td>
                  <td>Cloud Functions (App Store) and BigQuery Data Transfer Service (Play Store)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item"><strong>1. Ingestion:</strong> User interaction events are ingested via Firebase's native export at ~100 GB per day into BigQuery.</li>
            <li class="flow-item"><strong>2. Bronze Layer:</strong> Raw events land completely unmodified (<em>as-is</em>), preserving full auditability and traceability to original payload records.</li>
            <li class="flow-item"><strong>3. Silver Layer:</strong> Data cleaning and standardization: unnesting nested JSON structures, deduplicating repeated event rows, and event clustering.</li>
            <li class="flow-item"><strong>4. Gold Layer:</strong> Business-ready data marts structured in a Star Schema (fact and dimension tables) engineered for rapid BI dashboard queries without repeated aggregations.</li>
            <li class="flow-item"><strong>5. Delivery:</strong> Looker Studio &amp; Looker Studio Pro dashboards display real-time, trusted ticket journey analytics.</li>
          </ul>
        </div>

        <!-- Section 3: Pipeline Architecture & Phase Evolution (Phase 1, 2 & 3) -->
        <div class="flow-section">
          <h4 class="flow-section-heading">3. Pipeline Architecture &amp; Phase Evolution (Phase 1, 2 &amp; 3)</h4>

          <!-- Sub-Phase 1 & 2 -->
          <div class="phase-subcard">
            <div class="phase-subcard-header">
              <h5 class="phase-subcard-title">Phase 1 &amp; 2: Mobile App Analytics Pipeline &amp; BigQuery Data Marts</h5>
              <span class="phase-badge-pill phase-badge-1">Phase 1 &amp; 2 · Ingestion &amp; Funnels</span>
            </div>
            <div class="diagram-preview-box" data-lightbox-src="assets/firebase-analytics-fase-1&amp;2.png" data-lightbox-caption-key="usecase_fb_title" role="button" tabindex="0" aria-label="Enlarge Firebase Analytics Phase 1 &amp; 2 diagram">
              <img src="assets/firebase-analytics-fase-1&amp;2.png" alt="Firebase Analytics Phase 1 &amp; 2" class="diagram-preview-img" loading="lazy">
              <div class="diagram-zoom-hint">
                <span data-i18n="diagram_zoom_hint">Click to enlarge diagram</span>
              </div>
            </div>
            <ul class="flow-list" style="margin-top: 1rem;">
              <li class="flow-item"><strong>SDK on Device:</strong> Telemetry and user interaction events captured from Android and iOS mobile apps.</li>
              <li class="flow-item"><strong>Transport Layer:</strong> Android Transport Layer and Apple Push Notification service (APNs) stream events to Firebase backend.</li>
              <li class="flow-item"><strong>Firebase Analytics Backend:</strong> Validates payloads and streams events directly into Google BigQuery.</li>
              <li class="flow-item"><strong>Warehouse &amp; ML:</strong> Data organized into structured Data Marts, cataloged with metadata via Data Catalog, and orchestrated by Cloud Composer for BigQuery ML predictive analysis.</li>
              <li class="flow-item"><strong>3 Looker Studio Dashboards:</strong> Powers the <em>Marketing Dashboard</em>, <em>Users Monitoring Dashboard</em>, and <em>Application Dashboard</em> for conversion rate tracking.</li>
            </ul>
          </div>

          <!-- Sub-Phase 3 -->
          <div class="phase-subcard">
            <div class="phase-subcard-header">
              <h5 class="phase-subcard-title">Phase 3: Multi-Store Ingestion &amp; Looker Studio Pro</h5>
              <span class="phase-badge-pill phase-badge-3">Phase 3 · Multi-Store &amp; Pro</span>
            </div>
            <div class="diagram-preview-box" data-lightbox-src="assets/firebase-analytics-fase-3.png" data-lightbox-caption-key="usecase_fb_title" role="button" tabindex="0" aria-label="Enlarge Firebase Analytics Phase 3 diagram">
              <img src="assets/firebase-analytics-fase-3.png" alt="Firebase Analytics Phase 3 Multi-Store Ingestion" class="diagram-preview-img" loading="lazy">
              <div class="diagram-zoom-hint">
                <span data-i18n="diagram_zoom_hint">Click to enlarge diagram</span>
              </div>
            </div>
            <ul class="flow-list" style="margin-top: 1rem;">
              <li class="flow-item"><strong>Store Data Sources:</strong> Broadened data sources to external application marketplaces (Apple App Store &amp; Google Play Store).</li>
              <li class="flow-item"><strong>Automated GCP Ingestion:</strong> App Store reports extracted via Cloud Functions, while Google Play data ingested automatically via BigQuery Data Transfer Service (DTS).</li>
              <li class="flow-item"><strong>Unified Data Warehouse:</strong> Store analytics reconciled with in-app behavioral events in Star Schema Data Marts and enriched with BigQuery ML.</li>
              <li class="flow-item"><strong>Looker Studio Pro:</strong> Advanced enterprise reporting and governance features deployed for cross-functional management.</li>
            </ul>
          </div>
        </div>

        <!-- Section 4: Implementation Details & Key Design Decisions -->
        <div class="flow-section">
          <h4 class="flow-section-heading">4. Layer Breakdown &amp; Key Design Decisions</h4>
          <div class="flow-table-responsive">
            <table class="flow-table">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Architectural Purpose</th>
                  <th>My Specific Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bronze</strong></td>
                  <td>Raw Landing</td>
                  <td>Data arrives via Firebase native export, preserved as-is for auditable lineage.</td>
                </tr>
                <tr>
                  <td><strong>Silver</strong></td>
                  <td>Cleaned Data</td>
                  <td>Built pipelines to flatten nested event structures, deduplicate retried records, and cluster events.</td>
                </tr>
                <tr>
                  <td><strong>Gold</strong></td>
                  <td>Ready-to-use Marts</td>
                  <td>Designed Star Schema data marts with transaction/event facts and descriptive dimension tables.</td>
                </tr>
                <tr>
                  <td><strong>Dashboards</strong></td>
                  <td>Business Intelligence</td>
                  <td>Built Looker Studio dashboards visualizing the full ticket journey (purchase, refund, reschedule).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="flow-list">
            <li class="flow-item"><strong>Key Architectural Decisions:</strong>
              <ul class="flow-sublist">
                <li class="flow-subitem"><strong>Medallion Architecture:</strong> Clearly isolates raw, clean, and business-ready data so data anomalies can be quickly traced to a specific layer.</li>
                <li class="flow-subitem"><strong>Star Schema in Gold:</strong> Enables clean, rapid dimension joins for Looker Studio, ensuring all business units reference identical business logic.</li>
                <li class="flow-subitem"><strong>Dashboards Read from Gold Only:</strong> Eliminates runtime query strain and avoids fragmented business logic calculations in dashboard formulas.</li>
                <li class="flow-subitem"><strong>Flatten &amp; Dedup in Silver:</strong> Solves nested record complexity once at the silver layer, guaranteeing trusted downstream analytical tables.</li>
                <li class="flow-subitem"><strong>Data Quality Before Analysis:</strong> Maintained rigorous data integrity standards—insisted on fixing tracking issues at the source before launching misleading funnels.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Section 5: Problems Solved & Key Impact -->
        <div class="flow-section">
          <h4 class="flow-section-heading">5. Problems Solved &amp; Business Impact</h4>
          <div class="flow-keypoint">
            <ul class="flow-list" style="margin-top: 0.3rem;">
              <li class="flow-item">
                <strong>Problem 1 — A Client Asked for a User Journey Funnel the Data Could Not Honestly Support:</strong>
                <ul class="flow-sublist">
                  <li class="flow-subitem"><em>Request:</em> The business requested an end-to-end user journey funnel for ticket purchasing, refunds, and rescheduling.</li>
                  <li class="flow-subitem"><em>Problem:</em> Data quality review revealed several critical application screens had missing event tags, and several promo/transaction records were corrupted. A funnel built on this would falsely suggest major user drop-offs, misleading product decisions.</li>
                  <li class="flow-subitem"><em>Investigation &amp; Decision:</em> Mapped application screens against BigQuery logs to identify untagged screens. Transparently explained the business risks to the client and agreed to defer funnel release until the mobile team implemented proper event tagging.</li>
                  <li class="flow-subitem"><em>Result:</em> The client accepted a brief delay in exchange for an accurate, trusted funnel that drove genuine product optimization.</li>
                </ul>
              </li>
              <li class="flow-item" style="margin-top: 0.6rem;">
                <strong>Problem 2 — Making 100 GB per Day of Raw Nested Events Performant:</strong>
                <ul class="flow-sublist">
                  <li class="flow-subitem"><em>Challenge:</em> Raw Firebase events were deeply nested, duplicated by mobile retries, and voluminous (~100 GB/day), making direct queries sluggish and expensive.</li>
                  <li class="flow-subitem"><em>Solution:</em> Medallion warehouse pipeline with automated flattening and deduplication in silver, modeled into Star Schema data marts in gold.</li>
                  <li class="flow-subitem"><em>Result:</em> Provided Looker Studio with fast, responsive queries, reduced BigQuery compute costs, and established unified reporting across the company.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,

    // Use Case 3: Predictive Maintenance Spare Part Motor
    usecase_pm_badge: "On-Premise ML · Python",
    usecase_pm_title: "3. Machine Learning: Motorcycle Spare Part Predictive Maintenance",
    usecase_pm_summary: "Predicting spare part replacements and oil changes using computer vision OCR on odometer and license plate photos combined with historical service records.",
    usecase_pm_meta1_label: "Target Scope",
    usecase_pm_meta1_val: "1,200 Stores & Garages",
    usecase_pm_meta1_desc: "Retail motorcycle service fleet",
    usecase_pm_meta2_label: "Input Extraction",
    usecase_pm_meta2_val: "Odometer & Plate",
    usecase_pm_meta2_desc: "Smartphone photos via Python OCR",
    usecase_pm_meta3_label: "Output Estimation",
    usecase_pm_meta3_val: "Service & Oil Schedule",
    usecase_pm_meta3_desc: "Accurate parts replacement timeline",
    usecase_pm_meta4_label: "Infrastructure & Stack",
    usecase_pm_meta4_val: "On-Premise Python",
    usecase_pm_meta4_desc: "OpenCV, Tabular Data, Scikit-Learn",

    // Use Case 4: Generative AI & Distributed Multi-Agent Architecture
    usecase_genai_badge: "Enterprise AI & RAG Architecture",
    usecase_genai_title: "4. Generative AI & Distributed Multi-Agent Architecture (Gemini Enterprise)",
    usecase_genai_summary: "Autonomous distributed AI architecture on GCP aggregating BigQuery analytics, Vertex AI Search RAG, SharePoint/OneDrive connectors, and multimodal Gemini/Imagen.",
    usecase_genai_meta1_label: "Solution Domain",
    usecase_genai_meta1_val: "Autonomous Marketing AI",
    usecase_genai_meta1_desc: "Data-driven dynamic localized campaigns",
    usecase_genai_meta2_label: "Multimodal Models",
    usecase_genai_meta2_val: "Gemini & Imagen",
    usecase_genai_meta2_desc: "Dynamic text & visual content synthesis",
    usecase_genai_meta3_label: "Agent Architecture",
    usecase_genai_meta3_val: "ADK & MCP Protocol",
    usecase_genai_meta3_desc: "Distributed runtime on Cloud Run",
    usecase_genai_meta4_label: "Data Integration & RAG",
    usecase_genai_meta4_val: "BigQuery + Vertex AI",
    usecase_genai_meta4_desc: "Structured grounding & document retrieval",

    // Use Case 5: Data Lineage Transaksi Toko
    usecase_lineage_badge: "Data Lineage & CDC Ingestion",
    usecase_lineage_title: "5. Store Transaction Data Lineage: RekapTransaksiTokoDetail",
    usecase_lineage_summary: "Detailed data lineage from local store SQL Express triggers through Pub/Sub and BigQuery Direct Subscription to production analytical views.",
    usecase_lineage_meta1_label: "Origin Point",
    usecase_lineage_meta1_val: "1,200 Retail Stores",
    usecase_lineage_meta1_desc: "Local SQL Server Express POS database",
    usecase_lineage_meta2_label: "CDC Mechanism",
    usecase_lineage_meta2_val: "DB Triggers & Audit",
    usecase_lineage_meta2_desc: "Automatic transaction event mutation logs",
    usecase_lineage_meta3_label: "Transport Layer",
    usecase_lineage_meta3_val: "GCP Pub/Sub Streaming",
    usecase_lineage_meta3_desc: "Real-time stream with zero batch lag",
    usecase_lineage_meta4_label: "BigQuery Target",
    usecase_lineage_meta4_val: "Direct Sub & Views",
    usecase_lineage_meta4_desc: "Verified analytical production datasets",

    // Diagram 4: Firebase Analytics Fase 1 & 2 (Legacy Key Compatibility)
    smartnet_diag4_badge: "Firebase Analytics – Phase 1 and 2",
    smartnet_diag4_title: "1. Firebase Analytics – Phase 1 and 2",
    smartnet_fb1_details: `
      <div class="flow-breakdown">
        <ul class="flow-list">
          <li class="flow-item"><strong>SDK on Device:</strong> Telemetry collected from Android and iOS apps.</li>
          <li class="flow-item"><strong>Transport Layer:</strong> Android Transport Layer and iOS APNs stream events.</li>
          <li class="flow-item"><strong>Firebase Backend:</strong> Exported to Google BigQuery.</li>
          <li class="flow-item"><strong>Warehouse &amp; ML:</strong> Data Marts and BigQuery ML.</li>
          <li class="flow-item"><strong>Output:</strong> 3 Looker Studio Dashboards (Marketing, Users Monitoring, Application).</li>
        </ul>
      </div>
    `,

    // Diagram 5: Firebase Analytics Fase 3 (Legacy Key Compatibility)
    smartnet_diag5_badge: "Firebase Analytics – Phase 3",
    smartnet_diag5_title: "2. Firebase Analytics – Phase 3",
    smartnet_fb3_details: `
      <div class="flow-breakdown">
        <ul class="flow-list">
          <li class="flow-item"><strong>Data Sources:</strong> App Store &amp; Playstore store-level data.</li>
          <li class="flow-item"><strong>GCP Services:</strong> Cloud Functions &amp; BigQuery Data Transfer Service.</li>
          <li class="flow-item"><strong>Warehouse:</strong> Data Marts &amp; BigQuery ML.</li>
          <li class="flow-item"><strong>Output:</strong> Looker Studio Pro enterprise visualization.</li>
        </ul>
      </div>
    `,

    // SCM Detail
    scm_date: "January 2022 — July 2023",
    scm_b1_title: "Data Matching Nielsen × Gen21 (Python & Fuzzy ML)",
    scm_b1_desc: "Commercial airtime data integration and reconciliation between internal traffic logs and independent ratings agencies.",
    scm_p1_title: "Gen21 & Nielsen TV Ratings Automated Matching",
    scm_p1_text: "Developed an event-driven, Python-based advertising data matching program using fuzzy wuzzy machine learning techniques to integrate datasets from Gen21 and Nielsen for analyzing SCTV and Indosiar TV ratings.",
    scm_p1_b1: "Increased commercial log matching accuracy by <strong>90%</strong>.",
    scm_p1_b2: "Reduced computational processing time by <strong>80%</strong> compared to manual reconciliation.",
    scm_b2_title: "High-Scalability Streaming Data Pipelines",
    scm_b2_desc: "Distributed stream processing infrastructure handling significant broadcast traffic spikes.",
    scm_p2_title: "Kafka + Spark + Docker Streaming Pipeline",
    scm_p2_text: "Built robust data streaming pipelines using Docker, Apache Kafka, Apache Spark, and MySQL that handled a 40% increase in data volume while ensuring seamless, reliable data flow.",
    scm_p2_b1: "Handled a <strong>40%</strong> increase in data volume without operational friction.",
    scm_p2_b2: "Guaranteed seamless delivery with zero data loss and real-time analytics continuity.",
    scm_b3_title: "Operational Efficiency & Airflow Orchestration",
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

// ---------------------------------------------------------------------------
// Tambahan: layout minimalis & use case Machine Learning (Okt 2026)
// ---------------------------------------------------------------------------
Object.assign(translations.id, {
  exp_detail_link: "Lihat detail & arsitektur",
  cert_heading_short: "Sertifikasi",
  footer_home: "Halaman Utama",
  diagram_scroll_hint: "Geser diagram ke samping untuk melihat seluruhnya →",

  exp_smartnet_h_ml: "<strong>Predictive Maintenance (ML):</strong> Mengekstraksi foto odometer & plat nomor menjadi data tabular untuk memprediksi kebutuhan penggantian spare part dan oli motor — berjalan on-premise dengan Python.",

  // Smartnet — Predictive Maintenance
  smartnet_ml_title: "Predictive Maintenance Spare Part Motor",
  smartnet_ml_desc: "Memprediksi kapan sebuah motor perlu penggantian spare part dan ganti oli, menggunakan data yang diekstraksi dari foto odometer dan plat nomor. Seluruh pipeline berjalan on-premise dengan Python.",
  smartnet_ml_params_title: "Parameter model",
  smartnet_ml_param1: "<strong>Odometer</strong> — jarak tempuh motor (km) hasil ekstraksi dari foto odometer.",
  smartnet_ml_param2: "<strong>Pembaruan spare part</strong> — riwayat kapan dan pada kilometer berapa spare part terakhir diganti.",
  smartnet_ml_param3: "<strong>Lamanya ganti oli</strong> — rentang waktu sejak penggantian oli terakhir.",
  smartnet_ml_arch_title: "High-Level Architecture (On-Premise · Python)",
  smartnet_ml_s1: "<strong>Input gambar:</strong> foto odometer dan plat nomor motor dikumpulkan dan disimpan di server on-premise.",
  smartnet_ml_s2: "<strong>Ekstraksi gambar → tabular:</strong> program Python membaca angka odometer dan plat nomor dari gambar, lalu menyimpannya sebagai baris data tabular (plat nomor, odometer, tanggal).",
  smartnet_ml_s3: "<strong>Penggabungan riwayat servis:</strong> data tabular digabungkan berdasarkan plat nomor dengan riwayat pembaruan spare part dan ganti oli.",
  smartnet_ml_s4: "<strong>Feature engineering & model:</strong> odometer, jarak tempuh sejak spare part terakhir diganti, dan lamanya sejak ganti oli terakhir menjadi input model prediktif berbasis Python.",
  smartnet_ml_s5: "<strong>Output:</strong> prediksi kebutuhan penggantian spare part dan ganti oli per motor, sebagai dasar penjadwalan maintenance.",
  diag_pm_photo_t: "Foto Motor",
  diag_pm_photo_s: "odometer & plat nomor",
  diag_pm_extract_t: "Ekstraksi Gambar",
  diag_pm_tab_t: "Data Tabular",
  diag_pm_tab_s: "plat · km · tanggal",
  diag_pm_hist_t: "Riwayat Servis",
  diag_pm_hist_s: "spare part · ganti oli",
  diag_pm_feat_s: "join by plat nomor",
  diag_pm_model_t: "Model Prediktif",
  diag_pm_out_t: "Jadwal Servis",
  diag_pm_out_s: "prediksi maintenance",

  // SCM — Data Matching architecture
  scm_p1_stat: "+90% akurasi matching · −80% waktu proses",
  scm_p2_stat: "+40% kapasitas volume data",
  scm_p3_stat: "−35% downtime · 99.8% efisiensi operasional",
  scm_arch_title: "High-Level Architecture: Batch & Real-Time Data Matching",
  scm_arch_s1: "<strong>Sumber data:</strong> data rating Nielsen tersimpan di MySQL, sedangkan traffic log iklan Gen21 tersimpan di SQL Server.",
  scm_arch_s2: "<strong>Jalur batch (harian):</strong> DAG Apache Airflow mengekstrak data dari kedua database setiap hari lalu menjalankan program matching.",
  scm_arch_s3: "<strong>Jalur real-time:</strong> Debezium menangkap setiap perubahan data (CDC) di kedua database dan mengalirkannya ke topik Apache Kafka, yang kemudian dikonsumsi oleh program matching.",
  scm_arch_s4: "<strong>Program matching (Docker):</strong> aplikasi Python yang dikemas dalam container Docker mencocokkan record Nielsen dan Gen21 berdasarkan kemiripan string menggunakan <em>fuzzywuzzy</em>.",
  scm_arch_s5: "<strong>Output:</strong> hasil matching dari kedua jalur dikirim ke PostgreSQL milik departemen Marketing untuk analisis rating dan penayangan iklan.",
  diag_scm_batch: "BATCH · HARIAN",
  diag_scm_airflow_sub: "DAG terjadwal harian",
  diag_scm_ml_title: "Program Matching",
  diag_scm_pg_sub: "Dept. Marketing"
});

Object.assign(translations.en, {
  exp_detail_link: "View details & architecture",
  cert_heading_short: "Certifications",
  footer_home: "Home",
  diagram_scroll_hint: "Scroll the diagram sideways to see all of it →",

  exp_smartnet_h_ml: "<strong>Predictive Maintenance (ML):</strong> Extracting odometer & license-plate photos into tabular data to predict motorcycle spare-part replacement and oil changes — running on-premise in Python.",

  // Smartnet — Predictive Maintenance
  smartnet_ml_title: "Motorcycle Spare-Part Predictive Maintenance",
  smartnet_ml_desc: "Predicts when a motorcycle needs a spare-part replacement or an oil change, using data extracted from odometer and license-plate photos. The whole pipeline runs on-premise in Python.",
  smartnet_ml_params_title: "Model parameters",
  smartnet_ml_param1: "<strong>Odometer</strong> — mileage (km) extracted from the odometer photo.",
  smartnet_ml_param2: "<strong>Spare-part replacements</strong> — when, and at what mileage, each spare part was last replaced.",
  smartnet_ml_param3: "<strong>Oil-change interval</strong> — time elapsed since the last oil change.",
  smartnet_ml_arch_title: "High-Level Architecture (On-Premise · Python)",
  smartnet_ml_s1: "<strong>Image input:</strong> odometer and license-plate photos are collected and stored on an on-premise server.",
  smartnet_ml_s2: "<strong>Image → tabular extraction:</strong> a Python program reads the odometer value and plate number from each image and stores them as tabular rows (plate number, odometer, date).",
  smartnet_ml_s3: "<strong>Service-history join:</strong> the tabular data is joined on plate number with the spare-part replacement and oil-change history.",
  smartnet_ml_s4: "<strong>Feature engineering & model:</strong> odometer, mileage since the last spare-part replacement, and time since the last oil change feed a Python predictive model.",
  smartnet_ml_s5: "<strong>Output:</strong> per-motorcycle predictions of upcoming spare-part replacements and oil changes, used to schedule maintenance.",
  diag_pm_photo_t: "Vehicle Photos",
  diag_pm_photo_s: "odometer & license plate",
  diag_pm_extract_t: "Image Extraction",
  diag_pm_tab_t: "Tabular Data",
  diag_pm_tab_s: "plate · km · date",
  diag_pm_hist_t: "Service History",
  diag_pm_hist_s: "spare parts · oil change",
  diag_pm_feat_s: "join on plate number",
  diag_pm_model_t: "Predictive Model",
  diag_pm_out_t: "Service Schedule",
  diag_pm_out_s: "maintenance forecast",

  // SCM — Data Matching architecture
  scm_p1_stat: "+90% matching accuracy · −80% processing time",
  scm_p2_stat: "+40% data volume capacity",
  scm_p3_stat: "−35% downtime · 99.8% operational efficiency",
  scm_arch_title: "High-Level Architecture: Batch & Real-Time Data Matching",
  scm_arch_s1: "<strong>Sources:</strong> Nielsen ratings data lives in MySQL, while Gen21 ad traffic logs live in SQL Server.",
  scm_arch_s2: "<strong>Batch path (daily):</strong> an Apache Airflow DAG extracts data from both databases every day and runs the matching program.",
  scm_arch_s3: "<strong>Real-time path:</strong> Debezium captures every data change (CDC) in both databases and streams it to Apache Kafka topics, which the matching program consumes.",
  scm_arch_s4: "<strong>Matching program (Docker):</strong> a containerized Python application matches Nielsen and Gen21 records by string similarity using <em>fuzzywuzzy</em>.",
  scm_arch_s5: "<strong>Output:</strong> match results from both paths are written to the Marketing department's PostgreSQL for ratings and ad-airing analysis.",
  diag_scm_batch: "BATCH · DAILY",
  diag_scm_airflow_sub: "daily scheduled DAG",
  diag_scm_ml_title: "Matching Program",
  diag_scm_pg_sub: "Marketing Dept."
});

// Expose globally for vanilla browser usage
window.siteTranslations = translations;
