// Services data for Gimitaro Analytics Platform

export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'konfiguracja-google-analytics-4',
    title: 'Konfiguracja Google Analytics 4',
    short: 'Profesjonalne wdrożenie GA4 z zaawansowaną konfiguracją zdarzeń, konwersji i raportów dostosowanych do Twoich celów biznesowych.',
    price: 'od 2 500 zł',
    features: [
      'Audyt obecnej konfiguracji',
      'Implementacja GTM i GA4',
      'Konfiguracja celów i konwersji',
      'Enhanced e-commerce tracking',
      'Szkolenie zespołu',
      'Dokumentacja techniczna'
    ],
    icon: '/src/assets/service-ga4.png',
    contentHtml: `
      <h2>Profesjonalna konfiguracja Google Analytics 4</h2>
      <p>Google Analytics 4 to przyszłość analityki internetowej. Nasze wdrożenie zapewnia pełną kontrolę nad danymi marketingowymi i użytkownikami, umożliwiając podejmowanie decyzji w oparciu o rzetelne informacje.</p>
      
      <h3>Co obejmuje nasza usługa?</h3>
      <p>Rozpoczynamy od szczegółowego audytu Twojej obecnej konfiguracji analitycznej. Następnie projektujemy architekturę danych zgodną z Twoimi celami biznesowymi. Implementujemy Google Tag Manager jako warstwę pośrednią, co zapewnia elastyczność w zarządzaniu tagami bez ingerencji w kod strony.</p>
      
      <p>Konfigurujemy zaawansowane śledzenie zdarzeń – od podstawowych interakcji po złożone ścieżki użytkownika. Dla sklepów e-commerce wdrażamy enhanced e-commerce tracking, który śledzi każdy etap ścieżki zakupowej: wyświetlenia produktów, dodania do koszyka, inicjację płatności oraz transakcje.</p>
      
      <h3>Konwersje i cele dostosowane do biznesu</h3>
      <p>Definiujemy kluczowe konwersje i mikrokonwersje zgodne z Twoim modelem biznesowym. Konfigurujemy śledzenie wartości konwersji, co pozwala na precyzyjne obliczanie ROI z kampanii marketingowych. Tworzymy niestandardowe zdarzenia monitorujące krytyczne akcje użytkowników.</p>
      
      <h3>Raporty i wizualizacje</h3>
      <p>Budujemy niestandardowe raporty i eksploracje danych w interfejsie GA4. Konfigurujemy automatyczne alerty dla nietypowych zmian w ruchu lub konwersjach. Integrujemy GA4 z BigQuery dla zaawansowanej analizy surowych danych.</p>
      
      <h3>Szkolenie i wsparcie</h3>
      <p>Po wdrożeniu przeprowadzamy szkolenie zespołu z obsługi GA4 i interpretacji raportów. Przekazujemy kompletną dokumentację techniczną konfiguracji oraz zapewniamy 30-dniowe wsparcie pouwdrożeniowe.</p>
      
      <h3>Korzyści dla Twojego biznesu</h3>
      <ul>
        <li>Pełna kontrola nad danymi marketingowymi</li>
        <li>Precyzyjne mierzenie skuteczności kampanii</li>
        <li>Lepsze zrozumienie ścieżek użytkowników</li>
        <li>Zgodność z przepisami RODO i privacy-first</li>
        <li>Gotowość na przyszłość bez Universal Analytics</li>
      </ul>
    `
  },
  {
    slug: 'integracja-bigquery-hurtownia-danych',
    title: 'Integracja BigQuery i hurtownia danych',
    short: 'Budowa centralnej hurtowni danych w BigQuery z integracją źródeł marketingowych, sprzedażowych i operacyjnych.',
    price: 'od 4 500 zł',
    features: [
      'Projektowanie architektury danych',
      'Integracja źródeł danych',
      'ETL i automatyzacja pipeline\'ów',
      'Optymalizacja zapytań SQL',
      'Kontrola kosztów BigQuery',
      'Dokumentacja modelu danych'
    ],
    icon: '/src/assets/service-bigquery.png',
    contentHtml: `
      <h2>BigQuery jako centrum Twoich danych</h2>
      <p>BigQuery to hurtownia danych w chmurze Google Cloud, która pozwala na błyskawiczną analizę petabajtów informacji. Budujemy dla Ciebie centralne repozytorium, które agreguje dane ze wszystkich źródeł marketingowych, sprzedażowych i operacyjnych.</p>
      
      <h3>Architektura i projektowanie</h3>
      <p>Rozpoczynamy od zrozumienia Twoich potrzeb analitycznych i źródeł danych. Projektujemy model danych oparty o najlepsze praktyki data warehousing – struktury wymiarowe i fakty, które umożliwiają szybkie i efektywne raportowanie.</p>
      
      <p>Definiujemy strategie partycjonowania i klastrowania tabel dla optymalnej wydajności i kontroli kosztów. Tworzymy dokumentację architektury danych, która służy jako mapa dla przyszłych rozszerzeń systemu.</p>
      
      <h3>Integracja źródeł danych</h3>
      <p>Łączymy BigQuery z różnorodnymi źródłami danych:</p>
      <ul>
        <li>Google Analytics 4 i Google Ads (natywna integracja)</li>
        <li>Facebook Ads, LinkedIn Ads (przez API)</li>
        <li>Systemy CRM i ERP (Salesforce, HubSpot)</li>
        <li>Platformy e-commerce (Shopify, WooCommerce)</li>
        <li>Bazy danych transakcyjne (PostgreSQL, MySQL)</li>
        <li>Arkusze Google i pliki CSV</li>
      </ul>
      
      <h3>Automatyzacja i ETL</h3>
      <p>Budujemy zautomatyzowane pipeline'y ETL (Extract, Transform, Load), które codziennie pobierają świeże dane ze wszystkich źródeł. Wykorzystujemy narzędzia takie jak Cloud Functions, Airflow lub Dataform do orkiestracji procesów.</p>
      
      <p>Implementujemy walidację jakości danych i mechanizmy alertowania w przypadku anomalii. Optymalizujemy zapytania SQL pod kątem wydajności i kosztów, stosując najlepsze praktyki BigQuery.</p>
      
      <h3>Korzyści biznesowe</h3>
      <ul>
        <li>Jeden punkt dostępu do wszystkich danych</li>
        <li>Błyskawiczne zapytania nawet na ogromnych zbiorach</li>
        <li>Skalowalna infrastruktura bez administracji</li>
        <li>Integracja z narzędziami BI (Looker Studio, Power BI)</li>
        <li>Niskie koszty przechowywania danych</li>
      </ul>
    `
  },
  {
    slug: 'dashboardy-bi-looker-studio',
    title: 'Dashboardy BI w Looker Studio',
    short: 'Projektowanie i wdrożenie interaktywnych dashboardów BI z wizualizacją KPI i automatycznym odświeżaniem danych.',
    price: 'od 1 800 zł',
    features: [
      'Warsztaty definicji KPI',
      'Projektowanie UX dashboardów',
      'Połączenie ze źródłami danych',
      'Interaktywne filtry i segmenty',
      'Automatyzacja raportów',
      'Szkolenie użytkowników'
    ],
    icon: '/src/assets/service-dashboard.png',
    contentHtml: `
      <h2>Dashboardy BI dopasowane do Twojego biznesu</h2>
      <p>Looker Studio (dawniej Google Data Studio) to potężne narzędzie do wizualizacji danych. Tworzymy intuicyjne dashboardy, które przekształcają surowe dane w zrozumiałe insights dla zespołów marketingu, sprzedaży i zarządu.</p>
      
      <h3>Warsztaty i definicja KPI</h3>
      <p>Rozpoczynamy od warsztatów z kluczowymi interesariuszami, aby zrozumieć cele biznesowe i zdefiniować najważniejsze wskaźniki (KPI). Identyfikujemy pytania biznesowe, na które dashboardy mają odpowiadać.</p>
      
      <p>Tworzymy hierarchię metryk – od wskaźników operacyjnych po strategiczne OKR. Definiujemy benchmarki i cele dla każdego KPI, co umożliwia monitoring postępów.</p>
      
      <h3>Projektowanie doświadczenia użytkownika</h3>
      <p>Projektujemy layout dashboardów zgodnie z zasadami information design. Najważniejsze metryki umieszczamy na początku, tworząc przejrzystą narrację danych. Stosujemy spójną kolorystykę i typografię dla lepszej czytelności.</p>
      
      <p>Implementujemy interaktywne filtry, które pozwalają użytkownikom eksplorować dane według różnych wymiarów: czasu, kanałów, produktów, segmentów klientów. Dodajemy drill-down dla szczegółowej analizy.</p>
      
      <h3>Połączenia i automatyzacja</h3>
      <p>Łączymy dashboardy z wieloma źródłami danych – Google Analytics, Google Ads, Facebook Ads, BigQuery, arkusze Google i inne. Konfigurujemy automatyczne odświeżanie danych, aby informacje były zawsze aktualne.</p>
      
      <p>Implementujemy calculated fields i blended data dla zaawansowanych obliczeń. Tworzymy templatey dla regularnych raportów, które można łatwo powielać.</p>
      
      <h3>Przykładowe dashboardy</h3>
      <ul>
        <li>Marketing Performance – ROI, CAC, konwersje, funnel</li>
        <li>E-commerce Analytics – przychody, koszyk, produkty</li>
        <li>Traffic Overview – sesje, źródła, engagement</li>
        <li>Campaign Dashboard – wydatki, ROAS, CPC po kampaniach</li>
        <li>Executive Summary – kluczowe KPI dla zarządu</li>
      </ul>
      
      <h3>Szkolenie i wsparcie</h3>
      <p>Szkolimy zespoły z samodzielnej obsługi dashboardów i tworzenia własnych raportów. Przekazujemy best practices analizy danych i interpretacji wyników.</p>
    `
  },
  {
    slug: 'modele-atrybucji-marketingowej',
    title: 'Modele atrybucji marketingowej',
    short: 'Wdrożenie zaawansowanych modeli atrybucji do rzetelnej oceny wkładu każdego kanału marketingowego w konwersje.',
    price: 'od 3 200 zł',
    features: [
      'Analiza customer journey',
      'Modele multi-touch attribution',
      'Algorytmiczna atrybucja (ML)',
      'Raportowanie cross-channel',
      'Integracja z platformami reklamowymi',
      'Rekomendacje optymalizacyjne'
    ],
    icon: '/src/assets/service-attribution.png',
    contentHtml: `
      <h2>Zrozum prawdziwą wartość swoich kanałów</h2>
      <p>Tradycyjna atrybucja last-click nie pokazuje pełnego obrazu ścieżki klienta. Wdrażamy zaawansowane modele atrybucji, które doceniają wkład wszystkich touchpointów w proces konwersji.</p>
      
      <h3>Analiza ścieżek użytkowników</h3>
      <p>Rozpoczynamy od dogłębnej analizy customer journey w Twoim biznesie. Mapujemy typowe ścieżki od pierwszego kontaktu z marką do finalizacji zakupu. Identyfikujemy kluczowe punkty styku i ich rolę w procesie decyzyjnym.</p>
      
      <p>Analizujemy długość cyklu zakupowego i liczbę interakcji potrzebnych do konwersji. Segmentujemy użytkowników według zachowań i preferencji kanałowych.</p>
      
      <h3>Modele atrybucji multi-touch</h3>
      <p>Wdrażamy różne modele atrybucji dopasowane do specyfiki Twojego biznesu:</p>
      <ul>
        <li>Linear – równomierne rozłożenie kredytu</li>
        <li>Time decay – większa waga dla ostatnich interakcji</li>
        <li>Position based (U-shaped) – nacisk na pierwszy i ostatni touchpoint</li>
        <li>Data-driven (algorytmiczna) – uczenie maszynowe analizujące wzorce</li>
      </ul>
      
      <h3>Implementacja techniczna</h3>
      <p>Konfigurujemy śledzenie wszystkich kanałów marketingowych z odpowiednimi parametrami UTM. Budujemy hurtownię danych w BigQuery, która agreguje dane z Google Analytics, platform reklamowych i CRM.</p>
      
      <p>Implementujemy algorytmy atrybucji w SQL lub Python, przetwarzając surowe dane o ścieżkach użytkowników. Tworzymy dashboardy porównujące różne modele atrybucji side-by-side.</p>
      
      <h3>Algorytmiczna atrybucja (ML)</h3>
      <p>Dla zaawansowanych potrzeb wdrażamy model data-driven attribution wykorzystujący uczenie maszynowe. Algorytm analizuje tysiące ścieżek konwersji i automatycznie przypisuje kredyt na podstawie rzeczywistego wpływu każdego touchpointu.</p>
      
      <p>Model uczy się na bieżąco, dostosowując się do zmian w zachowaniach użytkowników i skuteczności kanałów. To najbardziej precyzyjna forma atrybucji dostępna obecnie.</p>
      
      <h3>Rekomendacje biznesowe</h3>
      <p>Na podstawie wyników atrybucji dostarczamy konkretne rekomendacje optymalizacyjne:</p>
      <ul>
        <li>Przesunięcia budżetów między kanałami</li>
        <li>Identyfikacja niedocenianych touchpointów</li>
        <li>Optymalizacja sekwencji kampanii remarketingowych</li>
        <li>Strategie bidding uwzględniające pełną ścieżkę</li>
      </ul>
      
      <h3>Korzyści</h3>
      <ul>
        <li>Rzetelna ocena ROI każdego kanału</li>
        <li>Lepsze decyzje budżetowe</li>
        <li>Optymalizacja mix marketingowego</li>
        <li>Eliminacja marnowania budżetu na nieefektywne kanały</li>
      </ul>
    `
  },
  {
    slug: 'integracja-platform-marketingowych',
    title: 'Integracja platform marketingowych',
    short: 'Połączenie Google Ads, Facebook Ads, LinkedIn Ads i innych platform w jeden spójny system raportowania.',
    price: 'od 2 800 zł',
    features: [
      'Integracja przez API',
      'Normalizacja danych cross-platform',
      'Unified reporting',
      'Automatyczne importy codzienne',
      'Mapowanie konwersji',
      'Historyczne backfill danych'
    ],
    icon: '/src/assets/service-integration.png',
    contentHtml: `
      <h2>Jeden dashboard dla wszystkich kampanii</h2>
      <p>Zarządzanie wieloma platformami reklamowymi to wyzwanie. Tworzymy zunifikowany system, który agreguje dane ze wszystkich źródeł w jednym miejscu, umożliwiając holistyczny widok na wydajność marketingu.</p>
      
      <h3>Integracja przez API</h3>
      <p>Łączymy się z API głównych platform reklamowych:</p>
      <ul>
        <li>Google Ads API – kampanie search, display, shopping, YouTube</li>
        <li>Facebook Marketing API – Facebook i Instagram Ads</li>
        <li>LinkedIn Marketing API – sponsored content, InMail</li>
        <li>Microsoft Advertising API – Bing Ads</li>
        <li>TikTok Ads API – kampanie wideo</li>
        <li>Twitter Ads API – promoted tweets i accounts</li>
      </ul>
      
      <p>Konfigurujemy bezpieczne OAuth autoryzacje i zarządzanie tokenami. Implementujemy retry logic i error handling dla niezawodnego pobierania danych.</p>
      
      <h3>Normalizacja i standaryzacja</h3>
      <p>Każda platforma ma własną nomenkaturę i strukturę danych. Normalizujemy metryki do wspólnego standardu – koszty, wyświetlenia, kliknięcia, konwersje. Mapujemy nazwy kampanii i grup reklamowych według spójnej konwencji.</p>
      
      <p>Ujednolicamy waluty i strefy czasowe dla rzetelnych porównań. Tworzymy wspólny słownik biznesowy, który rozumieją wszyscy w organizacji.</p>
      
      <h3>Automatyzacja pipeline'ów</h3>
      <p>Budujemy zautomatyzowane procesy ETL, które codziennie pobierają dane ze wszystkich platform i ładują je do centralnej hurtowni (BigQuery). Konfigurujemy orkiestrację z wykorzystaniem Cloud Scheduler i Cloud Functions.</p>
      
      <p>Implementujemy walidację jakości danych – sprawdzamy kompletność, spójność i poprawność importowanych rekordów. Konfigurujemy alerty dla niepowodzeń w pipeline'ach.</p>
      
      <h3>Mapowanie konwersji</h3>
      <p>Każda platforma śledzi konwersje na swój sposób. Tworzymy jednolite mapowanie konwersji, które łączy dane z pikseli, tagów i konwersji offline. Synchronizujemy definicje konwersji między platformami dla spójnego raportowania.</p>
      
      <p>Implementujemy deduplikację konwersji cross-platform, aby uniknąć podwójnego liczenia. Uwzględniamy okna atrybucji każdej platformy.</p>
      
      <h3>Unified reporting</h3>
      <p>Tworzymy dashboardy Looker Studio agregujące dane ze wszystkich platform:</p>
      <ul>
        <li>Cross-platform performance – wydatki, konwersje, ROAS</li>
        <li>Porównanie kanałów – który przynosi najlepszy ROI</li>
        <li>Funnel analysis – od wyświetlenia do sprzedaży</li>
        <li>Creative performance – które kreacje działają najlepiej</li>
      </ul>
      
      <h3>Historyczne backfill</h3>
      <p>Importujemy historyczne dane za ostatnie 12-24 miesięcy dla pełnego kontekstu i analizy trendów. Tworzysz w ten sposób solidną bazę do machine learning i prognozowania.</p>
      
      <h3>Korzyści</h3>
      <ul>
        <li>Oszczędność czasu na manualnym raportowaniu</li>
        <li>Holistyczny widok na wydajność marketingu</li>
        <li>Łatwiejsze porównania między platformami</li>
        <li>Szybsze podejmowanie decyzji optymalizacyjnych</li>
        <li>Eliminacja błędów manualnych</li>
      </ul>
    `
  },
  {
    slug: 'analytics-ecommerce-sklepy-online',
    title: 'Analytics dla sklepów e-commerce',
    short: 'Kompleksowa analityka e-commerce: śledzenie transakcji, analiza koszyka, segmentacja klientów, LTV i product analytics.',
    price: 'od 3 500 zł',
    features: [
      'Enhanced e-commerce GA4',
      'Analiza lejka zakupowego',
      'Segmentacja klientów RFM',
      'Product performance analytics',
      'Cohort analysis i LTV',
      'Personalizacja i rekomendacje'
    ],
    icon: '/src/assets/service-ecommerce.png',
    contentHtml: `
      <h2>Analityka e-commerce dla wzrostu sprzedaży</h2>
      <p>Sklepy online generują ogromne ilości danych. Pomagamy wykorzystać je do zwiększenia konwersji, optymalizacji asortymentu i maksymalizacji wartości życiowej klienta (LTV).</p>
      
      <h3>Enhanced E-commerce w GA4</h3>
      <p>Wdrażamy pełną konfigurację enhanced e-commerce w Google Analytics 4, która śledzi każdy etap ścieżki zakupowej:</p>
      <ul>
        <li>Wyświetlenia produktów (impressions)</li>
        <li>Kliknięcia w produkty (product clicks)</li>
        <li>Szczegóły produktu (product details)</li>
        <li>Dodania do koszyka (add to cart)</li>
        <li>Usunięcia z koszyka (remove from cart)</li>
        <li>Rozpoczęcie checkout (begin checkout)</li>
        <li>Dodanie informacji o płatności (add payment info)</li>
        <li>Transakcja (purchase)</li>
      </ul>
      
      <p>Śledzmy wartość produktów, kategorie, warianty, kupony i koszty wysyłki. Przekazujemy dane o marżach produktów dla analizy rentowności.</p>
      
      <h3>Analiza lejka zakupowego</h3>
      <p>Budujemy wizualizacje lejka sprzedażowego, które pokazują, gdzie użytkownicy opuszczają proces zakupowy. Identyfikujemy wąskie gardła i problemy UX, które blokują konwersje.</p>
      
      <p>Analizujemy przyczyny porzucania koszyka – czy to wysokie koszty wysyłki, skomplikowany checkout, czy brak preferowanych metod płatności. Dostarczamy konkretne rekomendacje optymalizacyjne.</p>
      
      <h3>Product Analytics</h3>
      <p>Tworzymy raporty wydajności produktów, które pokazują:</p>
      <ul>
        <li>Bestsellery i produkty o najwyższej marży</li>
        <li>Cross-sell i up-sell opportunities</li>
        <li>Produkty często kupowane razem</li>
        <li>Produkty o najwyższym bounce rate</li>
        <li>Wpływ recenzji na konwersje</li>
      </ul>
      
      <p>Analizujemy, które kategorie generują najwięcej przychodów i jakie są trendy sezonowe. Identyfikujemy produkty z niską rotacją, które obciążają magazyn.</p>
      
      <h3>Segmentacja klientów</h3>
      <p>Implementujemy segmentację RFM (Recency, Frequency, Monetary):</p>
      <ul>
        <li>Champions – najlepsi klienci, często kupują za dużo</li>
        <li>Loyal – stali klienci o wysokiej wartości</li>
        <li>At Risk – byli aktywni, teraz nie kupują</li>
        <li>Hibernating – długi czas bez zakupu</li>
        <li>Lost – prawdopodobnie odeszli na zawsze</li>
      </ul>
      
      <p>Dla każdego segmentu tworzymy strategie remarketingu i retention. Personalizujemy komunikację i oferty pod konkretne grupy.</p>
      
      <h3>Cohort Analysis i LTV</h3>
      <p>Budujemy analizy kohortowe, które śledzą zachowanie grup klientów w czasie. Obliczamy Customer Lifetime Value (LTV) – ile przeciętnie zarabia się na kliencie przez cały czas jego relacji z marką.</p>
      
      <p>Analizujemy retention rate – jaki procent klientów wraca po pierwszym zakupie. Mierzymy czas do drugiego zakupu i repeat purchase rate. Te metryki są kluczowe do oceny zdrowia biznesu e-commerce.</p>
      
      <h3>Integracja z narzędziami personalizacji</h3>
      <p>Łączymy dane analityczne z systemami rekomendacji produktów. Przekazujemy segmenty klientów do platform ESP dla targetowanych kampanii email. Integrujemy z narzędziami A/B testowania dla optymalizacji UX.</p>
      
      <h3>Korzyści</h3>
      <ul>
        <li>Wzrost współczynnika konwersji</li>
        <li>Optymalizacja asortymentu i pricing</li>
        <li>Lepsze zarządzanie magazynem</li>
        <li>Skuteczniejszy remarketing</li>
        <li>Zwiększenie wartości życiowej klienta</li>
      </ul>
    `
  }
];
