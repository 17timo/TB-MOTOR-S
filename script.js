const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const languageSelect = document.querySelector("[data-language-select]");
const projectSelect = document.querySelector("[data-project-select]");
const projectFields = [...document.querySelectorAll("[data-fields]")];
const mileageRange = document.querySelector("[data-mileage-range]");
const mileageInput = document.querySelector("[data-mileage-input]");

const projectValues = [
  "",
  "Achat de véhicule",
  "Revente accompagnée",
  "Reprise / estimation",
  "Import Europe",
  "Export",
  "Transport de véhicule",
  "Projet automobile",
];

const translations = {
  fr: {
    nav: ["Services", "Galerie", "Avis", "Import Europe", "Accompagnement", "Contact"],
    heroEyebrow: "Achat - Revente - Import / Export",
    heroText:
      "Votre partenaire automobile pour trouver, importer, vendre, transporter ou reprendre un véhicule avec un accompagnement clair, rapide et personnalisé.",
    heroPrimary: "Demander un accompagnement",
    heroSecondary: "Voir les services",
    introEyebrow: "Basé en France - Réseau européen",
    introTitle: "Des véhicules sélectionnés, des démarches simplifiées.",
    introText:
      "TB Motor's intervient sur l'achat, la revente, la reprise et l'importation européenne de véhicules. Nous aidons particuliers et professionnels à avancer sereinement, depuis la recherche du véhicule jusqu'à la livraison et aux formalités.",
    servicesEyebrow: "Nos expertises",
    servicesTitle: "Un service automobile complet",
    cards: {
      achat: ["Achat de véhicule", "Recherche ciblée selon votre budget, vos critères et vos attentes de fiabilité."],
      revente: ["Revente accompagnée", "Valorisation, estimation et mise en relation pour vendre dans de bonnes conditions."],
      reprise: ["Reprise possible", "Estimation détaillée de votre véhicule actuel pour faciliter votre prochain projet."],
      import: ["Import / Export", "Accompagnement France et international, avec suivi des étapes essentielles."],
    },
    serviceContent: {
      achat: ["Achat de véhicule", "Recherche personnalisée", "Vous indiquez le modèle, le budget, le kilométrage souhaité, la motorisation et le délai. TB Motor's cherche les opportunités cohérentes, vérifie les points importants et vous accompagne jusqu'à l'achat.", "Faire une demande d'achat", "Achat de véhicule"],
      revente: ["Revente accompagnée", "Vendre dans de bonnes conditions", "Nous aidons à positionner le prix, préparer les informations utiles, valoriser le véhicule et organiser une mise en relation sérieuse avec les acheteurs intéressés.", "Demander une revente", "Revente accompagnée"],
      reprise: ["Reprise possible", "Estimation complète du véhicule", "Vous renseignez marque, modèle, année, kilométrage, motorisation, état, historique, options et défauts éventuels pour obtenir une estimation plus précise.", "Faire une estimation", "Reprise / estimation"],
      import: ["Import / Export", "Projet d'importation ou d'export", "Nous cadrons le pays, le modèle, le budget total, le transport, les formalités et les contraintes de délai pour sécuriser votre projet automobile.", "Faire une demande de projet", "Import Europe"],
    },
    import: ["Importation européenne", "Un véhicule européen, sans complexité inutile.", "Nous vous accompagnons dans la sélection, la vérification, la négociation, le transport et les démarches liées à l'importation. L'objectif: un achat lisible, conforme et sécurisé.", ["Recherche personnalisée en Europe", "Contrôle des informations du véhicule", "Suivi administratif et logistique", "Accompagnement jusqu'à la livraison"], "Faire une demande de projet"],
    gallery: ["Véhicules et transport", "Cliquez sur une photo pour la voir en grand.", ["Sportive premium", "GT haut de gamme", "Achat et revente", "Présentation showroom", "Transport", "Livraison coordonnée", "Accompagnement", "Remise du véhicule", "Vente / Import", "Véhicule vendu"]],
    reviews: ["Avis clients", "Ils nous ont confié leur projet automobile.", ["Recherche rapide, suivi sérieux et véhicule conforme à ce qui avait été annoncé. L'import s'est fait simplement, avec des explications claires à chaque étape.", "Maxime D.", "Import Allemagne", "Très bon accompagnement pour la reprise de mon ancien véhicule. L'estimation était détaillée et la transition vers le nouveau projet a été fluide.", "Sabrina L.", "Reprise et achat", "Service professionnel, disponible et transparent. Les photos, le contrôle et le transport ont été suivis jusqu'à la livraison.", "Thomas R.", "Transport Europe"]],
    process: ["Méthode", "De la recherche à la livraison, un accompagnement complet.", ["Définition du projet", "Vous indiquez le modèle recherché, le budget, le kilométrage, la motorisation, les options, le délai et les critères non négociables.", "Recherche ciblée", "Nous recherchons les annonces cohérentes en France et en Europe, puis nous écartons les véhicules incohérents, trop chers ou mal documentés.", "Vérification", "Nous contrôlons les informations importantes: historique, kilométrage, entretien, options, état général, documents et cohérence du prix.", "Négociation", "Nous échangeons avec le vendeur, posons les bonnes questions, cadrons le prix et préparons les conditions d'achat ou de reprise.", "Transport et formalités", "Nous organisons le transport, suivons les démarches liées à l'importation et préparons les éléments nécessaires à l'immatriculation.", "Livraison finale", "Vous êtes accompagné jusqu'à la remise du véhicule, avec un suivi clair jusqu'à la livraison et aux dernières formalités."]],
    contact: ["Contact", "Parlez-nous de votre projet automobile.", "Achat, revente, reprise, importation ou transport: remplissez les informations utiles et nous vous recontactons pour cadrer la suite."],
    formLabels: ["Nom", "Téléphone", "Type de projet", "Message", "Marque / modèle recherché", "Budget maximum", "Kilométrage souhaité", "Énergie / boîte", "Options importantes", "Marque / modèle", "Année", "Kilométrage", "Motorisation / boîte", "État carrosserie", "Entretien / factures", "Descriptif complet du véhicule", "Pays souhaité", "Modèle visé", "Budget total", "Délai souhaité", "Demande de projet"],
    options: ["Choisir", "Achat de véhicule", "Revente accompagnée", "Reprise / estimation", "Import Europe", "Export", "Transport de véhicule", "Projet automobile"],
    placeholders: ["Décrivez votre projet, votre budget, votre délai...", "Essence, diesel, hybride, auto...", "Couleur, finition, toit ouvrant, pack sport, délai...", "Finition, options, pneus, historique, défauts connus, carte grise, contrôle technique...", "Allemagne, Belgique, Italie...", "Critères, options, transport, immatriculation, reprise éventuelle..."],
    legal: ["Informations légales", "Mentions légales", "Éditeur du site: TB Motor's. Activité: achat, revente, import, export et transport de véhicules. Adresse, SIRET, TVA intracommunautaire, responsable de publication et hébergeur: informations à compléter avec les données officielles de l'entreprise avant mise en ligne publique.", "Les informations présentées sur ce site sont fournies à titre indicatif. Les disponibilités, prix, prestations et délais peuvent évoluer selon le véhicule, le pays d'origine, le transport et les formalités.", "Utilisation du site", "Conditions d'utilisation", "L'utilisateur s'engage à transmettre des informations exactes dans les formulaires de contact, notamment pour une demande d'achat, d'importation ou d'estimation de reprise. Les demandes envoyées ne valent pas contrat, réservation ou engagement ferme sans validation écrite de TB Motor's.", "Les visuels du site servent à présenter l'univers TB Motor's. Toute reproduction du logo, des textes ou des images sans autorisation est interdite.", "Données personnelles", "Confidentialité", "Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande automobile: achat, revente, reprise, import, export ou transport. Elles ne sont pas revendues à des tiers.", "Vous pouvez demander l'accès, la correction ou la suppression de vos données en contactant TB Motor's par e-mail. Les données sont conservées uniquement pendant la durée nécessaire au traitement de votre demande et au suivi commercial."],
    submit: "Envoyer la demande",
    footer: ["TB Motor's - Achat - Revente - Import / Export de véhicules", "Mentions légales", "Conditions d'utilisation", "Confidentialité", "Retour en haut"],
    statLabels: ["Projets accompagnés", "Pays couverts", "Ans d'expérience", "Services sur mesure"],
  },
  en: {
    nav: ["Services", "Gallery", "Reviews", "Europe Import", "Support", "Contact"],
    heroEyebrow: "Buy - Resell - Import / Export",
    heroText: "Your automotive partner to find, import, sell, transport or trade in a vehicle with clear, fast and tailored support.",
    heroPrimary: "Request support",
    heroSecondary: "View services",
    introEyebrow: "Based in France - European network",
    introTitle: "Selected vehicles, simplified procedures.",
    introText: "TB Motor's handles vehicle buying, resale, trade-in and European import. We help private and professional customers move forward confidently, from vehicle search to delivery and paperwork.",
    servicesEyebrow: "Our expertise",
    servicesTitle: "A complete automotive service",
    cards: {
      achat: ["Vehicle purchase", "Targeted search based on your budget, criteria and reliability expectations."],
      revente: ["Assisted resale", "Valuation, estimate and buyer connection to sell in good conditions."],
      reprise: ["Trade-in possible", "Detailed estimate of your current vehicle to support your next project."],
      import: ["Import / Export", "France and international support with follow-up of the key steps."],
    },
    serviceContent: {
      achat: ["Vehicle purchase", "Personalized search", "You provide the model, budget, desired mileage, powertrain and timing. TB Motor's searches for relevant opportunities, checks the key points and supports you through purchase.", "Request a purchase", "Achat de véhicule"],
      revente: ["Assisted resale", "Sell in good conditions", "We help position the price, prepare useful information, showcase the vehicle and organize serious contact with interested buyers.", "Request resale support", "Revente accompagnée"],
      reprise: ["Trade-in possible", "Complete vehicle estimate", "Provide make, model, year, mileage, powertrain, condition, history, options and known issues for a more accurate estimate.", "Request an estimate", "Reprise / estimation"],
      import: ["Import / Export", "Import or export project", "We define the country, model, total budget, transport, paperwork and timing constraints to secure your automotive project.", "Request a project", "Import Europe"],
    },
    import: ["European import", "A European vehicle without unnecessary complexity.", "We support selection, verification, negotiation, transport and import-related paperwork. The goal: a clear, compliant and secure purchase.", ["Personalized search in Europe", "Vehicle information checks", "Administrative and logistics follow-up", "Support through delivery"], "Request a project"],
    gallery: ["Vehicles and transport", "Click a photo to view it large.", ["Premium sports car", "High-end GT", "Buying and resale", "Showroom presentation", "Transport", "Coordinated delivery", "Support", "Vehicle handover", "Sale / Import", "Sold vehicle"]],
    reviews: ["Customer reviews", "They trusted us with their automotive project.", ["Fast search, serious follow-up and a vehicle exactly as described. The import process was simple, with clear explanations at every step.", "Maxime D.", "Germany import", "Very good support for the trade-in of my previous vehicle. The estimate was detailed and the move to the new project was smooth.", "Sabrina L.", "Trade-in and purchase", "Professional, available and transparent service. Photos, checks and transport were followed through to delivery.", "Thomas R.", "Europe transport"]],
    process: ["Method", "From search to delivery, complete support.", ["Project definition", "You specify the model, budget, mileage, powertrain, options, timing and non-negotiable criteria.", "Targeted search", "We search relevant listings in France and Europe, then filter out vehicles that are inconsistent, overpriced or poorly documented.", "Verification", "We check key information: history, mileage, maintenance, options, general condition, documents and price consistency.", "Negotiation", "We speak with the seller, ask the right questions, frame the price and prepare purchase or trade-in conditions.", "Transport and paperwork", "We organize transport, follow import-related procedures and prepare the elements needed for registration.", "Final delivery", "You are supported through vehicle handover, with clear follow-up until delivery and final formalities."]],
    contact: ["Contact", "Tell us about your automotive project.", "Buying, resale, trade-in, import or transport: fill in the useful information and we will contact you to define the next steps."],
    formLabels: ["Name", "Phone", "Project type", "Message", "Make / model wanted", "Maximum budget", "Desired mileage", "Fuel / gearbox", "Important options", "Make / model", "Year", "Mileage", "Engine / gearbox", "Bodywork condition", "Maintenance / invoices", "Full vehicle description", "Desired country", "Target model", "Total budget", "Desired timing", "Project request"],
    options: ["Choose", "Vehicle purchase", "Assisted resale", "Trade-in / estimate", "Europe import", "Export", "Vehicle transport", "Automotive project"],
    placeholders: ["Describe your project, budget and timing...", "Petrol, diesel, hybrid, automatic...", "Color, trim, sunroof, sport pack, timing...", "Trim, options, tires, history, known defects, registration, inspection...", "Germany, Belgium, Italy...", "Criteria, options, transport, registration, possible trade-in..."],
    legal: ["Legal information", "Legal notice", "Website publisher: TB Motor's. Activity: buying, resale, import, export and transport of vehicles. Address, business registration number, VAT number, publication manager and hosting provider: to be completed with the company's official information before public launch.", "Information on this website is provided for guidance only. Availability, prices, services and delivery times may vary depending on the vehicle, country of origin, transport and paperwork.", "Website use", "Terms of use", "Users agree to provide accurate information in contact forms, especially for purchase, import or trade-in estimate requests. Submitted requests do not constitute a contract, reservation or firm commitment without written validation by TB Motor's.", "The visuals present the TB Motor's universe. Any reproduction of the logo, text or images without authorization is prohibited.", "Personal data", "Privacy", "Information sent through the contact form is used only to answer your automotive request: purchase, resale, trade-in, import, export or transport. It is not sold to third parties.", "You may request access, correction or deletion of your data by contacting TB Motor's by email. Data is kept only for the time needed to process your request and follow up commercially."],
    submit: "Send request",
    footer: ["TB Motor's - Buy - Resell - Import / Export vehicles", "Legal notice", "Terms of use", "Privacy", "Back to top"],
    statLabels: ["Projects handled", "Countries covered", "Years of experience", "Tailored services"],
  },
  nl: {
    nav: ["Diensten", "Galerij", "Reviews", "Import Europa", "Begeleiding", "Contact"],
    heroEyebrow: "Aankoop - Verkoop - Import / Export",
    heroText: "Uw autopartner om een voertuig te vinden, importeren, verkopen, vervoeren of in te ruilen met duidelijke, snelle en persoonlijke begeleiding.",
    heroPrimary: "Begeleiding aanvragen",
    heroSecondary: "Bekijk diensten",
    introEyebrow: "Gevestigd in Frankrijk - Europees netwerk",
    introTitle: "Geselecteerde voertuigen, vereenvoudigde stappen.",
    introText: "TB Motor's begeleidt aankoop, verkoop, inruil en Europese import van voertuigen. Wij helpen particulieren en professionals met vertrouwen vooruit, van zoektocht tot levering en administratie.",
    servicesEyebrow: "Onze expertise",
    servicesTitle: "Een complete autoservice",
    cards: {
      achat: ["Voertuig aankopen", "Gerichte zoektocht volgens budget, criteria en verwachtingen rond betrouwbaarheid."],
      revente: ["Verkoopbegeleiding", "Waardebepaling, schatting en contact met kopers om goed te verkopen."],
      reprise: ["Inruil mogelijk", "Gedetailleerde schatting van uw huidige voertuig voor uw volgende project."],
      import: ["Import / Export", "Begeleiding in Frankrijk en internationaal, met opvolging van de belangrijkste stappen."],
    },
    serviceContent: {
      achat: ["Voertuig aankopen", "Persoonlijke zoektocht", "U geeft model, budget, gewenste kilometerstand, motorisatie en timing door. TB Motor's zoekt relevante opportuniteiten, controleert de belangrijke punten en begeleidt tot aankoop.", "Aankoop aanvragen", "Achat de véhicule"],
      revente: ["Verkoopbegeleiding", "Verkopen onder goede voorwaarden", "Wij helpen de prijs bepalen, nuttige informatie voorbereiden, het voertuig presenteren en serieus contact met kopers organiseren.", "Verkoop aanvragen", "Revente accompagnée"],
      reprise: ["Inruil mogelijk", "Volledige voertuigschatting", "Geef merk, model, jaar, kilometerstand, motorisatie, staat, historiek, opties en gekende gebreken door voor een nauwkeuriger schatting.", "Schatting aanvragen", "Reprise / estimation"],
      import: ["Import / Export", "Import- of exportproject", "Wij bepalen land, model, totaalbudget, transport, formaliteiten en timing om uw autoproject veilig te laten verlopen.", "Project aanvragen", "Import Europe"],
    },
    import: ["Europese import", "Een Europees voertuig zonder onnodige complexiteit.", "Wij begeleiden selectie, controle, onderhandeling, transport en importformaliteiten. Doel: een duidelijke, conforme en veilige aankoop.", ["Persoonlijke zoektocht in Europa", "Controle van voertuiginformatie", "Administratieve en logistieke opvolging", "Begeleiding tot levering"], "Project aanvragen"],
    gallery: ["Voertuigen en transport", "Klik op een foto om deze groot te bekijken.", ["Premium sportwagen", "High-end GT", "Aankoop en verkoop", "Showroompresentatie", "Transport", "Gecoördineerde levering", "Begeleiding", "Overdracht voertuig", "Verkoop / Import", "Verkocht voertuig"]],
    reviews: ["Klantbeoordelingen", "Zij vertrouwden ons hun autoproject toe.", ["Snelle zoektocht, serieuze opvolging en een voertuig zoals aangekondigd. De import verliep eenvoudig, met duidelijke uitleg bij elke stap.", "Maxime D.", "Import Duitsland", "Zeer goede begeleiding voor de inruil van mijn vorige voertuig. De schatting was gedetailleerd en de overstap naar het nieuwe project verliep vlot.", "Sabrina L.", "Inruil en aankoop", "Professionele, beschikbare en transparante service. Foto's, controle en transport werden opgevolgd tot aan de levering.", "Thomas R.", "Transport Europa"]],
    process: ["Methode", "Van zoektocht tot levering, volledige begeleiding.", ["Projectbepaling", "U geeft model, budget, kilometerstand, motorisatie, opties, timing en niet-onderhandelbare criteria door.", "Gerichte zoektocht", "Wij zoeken relevante advertenties in Frankrijk en Europa en filteren voertuigen die niet kloppen, te duur zijn of slecht gedocumenteerd zijn.", "Controle", "Wij controleren belangrijke informatie: historiek, kilometerstand, onderhoud, opties, algemene staat, documenten en prijscoherentie.", "Onderhandeling", "Wij spreken met de verkoper, stellen de juiste vragen, kaderen de prijs en bereiden aankoop- of inruilvoorwaarden voor.", "Transport en formaliteiten", "Wij organiseren transport, volgen importstappen op en bereiden de elementen voor die nodig zijn voor inschrijving.", "Eindlevering", "U wordt begeleid tot de overdracht van het voertuig, met duidelijke opvolging tot levering en laatste formaliteiten."]],
    contact: ["Contact", "Vertel ons over uw autoproject.", "Aankoop, verkoop, inruil, import of transport: vul de nuttige informatie in en wij nemen contact op om de volgende stappen te bepalen."],
    formLabels: ["Naam", "Telefoon", "Type project", "Bericht", "Gewenst merk / model", "Maximaal budget", "Gewenste kilometerstand", "Brandstof / versnellingsbak", "Belangrijke opties", "Merk / model", "Jaar", "Kilometerstand", "Motor / versnellingsbak", "Staat carrosserie", "Onderhoud / facturen", "Volledige voertuigbeschrijving", "Gewenst land", "Doelmodel", "Totaalbudget", "Gewenste timing", "Projectaanvraag"],
    options: ["Kiezen", "Voertuig aankopen", "Verkoopbegeleiding", "Inruil / schatting", "Import Europa", "Export", "Voertuigtransport", "Autoproject"],
    placeholders: ["Beschrijf uw project, budget en timing...", "Benzine, diesel, hybride, automaat...", "Kleur, uitvoering, schuifdak, sportpakket, timing...", "Uitvoering, opties, banden, historiek, gekende gebreken, inschrijving, keuring...", "Duitsland, België, Italië...", "Criteria, opties, transport, registratie, mogelijke inruil..."],
    legal: ["Juridische informatie", "Juridische vermeldingen", "Uitgever van de site: TB Motor's. Activiteit: aankoop, verkoop, import, export en transport van voertuigen. Adres, ondernemingsnummer, btw-nummer, verantwoordelijke uitgever en hostingprovider: aan te vullen met officiële bedrijfsgegevens vóór publieke publicatie.", "De informatie op deze website is indicatief. Beschikbaarheid, prijzen, diensten en termijnen kunnen wijzigen volgens voertuig, land van herkomst, transport en formaliteiten.", "Gebruik van de site", "Gebruiksvoorwaarden", "De gebruiker verbindt zich ertoe correcte informatie te verstrekken via de contactformulieren, vooral bij aankoop-, import- of inruilaanvragen. Verzonden aanvragen vormen geen contract, reservatie of vaste verbintenis zonder schriftelijke bevestiging door TB Motor's.", "De beelden tonen de sfeer van TB Motor's. Reproductie van logo, teksten of beelden zonder toestemming is verboden.", "Persoonsgegevens", "Privacy", "Informatie die via het contactformulier wordt verzonden, wordt alleen gebruikt om uw autoverzoek te beantwoorden: aankoop, verkoop, inruil, import, export of transport. Deze gegevens worden niet verkocht aan derden.", "U kunt toegang, correctie of verwijdering van uw gegevens vragen door TB Motor's per e-mail te contacteren. Gegevens worden alleen bewaard zolang nodig is voor de behandeling van uw aanvraag en commerciële opvolging."],
    submit: "Aanvraag versturen",
    footer: ["TB Motor's - Aankoop - Verkoop - Import / Export voertuigen", "Juridische info", "Gebruiksvoorwaarden", "Privacy", "Terug naar boven"],
    statLabels: ["Projecten begeleid", "Landen gedekt", "Jaar ervaring", "Diensten op maat"],
  },
  de: {
    nav: ["Leistungen", "Galerie", "Bewertungen", "Import Europa", "Begleitung", "Kontakt"],
    heroEyebrow: "Ankauf - Verkauf - Import / Export",
    heroText: "Ihr Automobilpartner, um ein Fahrzeug zu finden, zu importieren, zu verkaufen, zu transportieren oder in Zahlung zu geben - klar, schnell und individuell begleitet.",
    heroPrimary: "Begleitung anfragen",
    heroSecondary: "Leistungen ansehen",
    introEyebrow: "Sitz in Frankreich - Europäisches Netzwerk",
    introTitle: "Ausgewählte Fahrzeuge, vereinfachte Abläufe.",
    introText: "TB Motor's begleitet Ankauf, Verkauf, Inzahlungnahme und europäischen Fahrzeugimport. Wir unterstützen Privat- und Geschäftskunden von der Suche bis zur Lieferung und den Formalitäten.",
    servicesEyebrow: "Unsere Expertise",
    servicesTitle: "Ein kompletter Automobilservice",
    cards: {
      achat: ["Fahrzeugkauf", "Gezielte Suche nach Budget, Kriterien und Zuverlässigkeitserwartungen."],
      revente: ["Verkaufsbegleitung", "Bewertung, Einschätzung und Kontaktvermittlung für einen guten Verkauf."],
      reprise: ["Inzahlungnahme möglich", "Detaillierte Einschätzung Ihres aktuellen Fahrzeugs für Ihr nächstes Projekt."],
      import: ["Import / Export", "Begleitung in Frankreich und international mit Nachverfolgung der wichtigsten Schritte."],
    },
    serviceContent: {
      achat: ["Fahrzeugkauf", "Personalisierte Suche", "Sie nennen Modell, Budget, gewünschte Laufleistung, Motorisierung und Zeitrahmen. TB Motor's sucht passende Angebote, prüft wichtige Punkte und begleitet Sie bis zum Kauf.", "Kaufanfrage stellen", "Achat de véhicule"],
      revente: ["Verkaufsbegleitung", "Unter guten Bedingungen verkaufen", "Wir helfen bei Preispositionierung, Informationen, Fahrzeugpräsentation und seriösem Kontakt mit interessierten Käufern.", "Verkauf anfragen", "Revente accompagnée"],
      reprise: ["Inzahlungnahme möglich", "Vollständige Fahrzeugeinschätzung", "Geben Sie Marke, Modell, Jahr, Kilometerstand, Motorisierung, Zustand, Historie, Optionen und bekannte Mängel an, um eine genauere Einschätzung zu erhalten.", "Einschätzung anfragen", "Reprise / estimation"],
      import: ["Import / Export", "Import- oder Exportprojekt", "Wir klären Land, Modell, Gesamtbudget, Transport, Formalitäten und Zeitvorgaben, um Ihr Automobilprojekt abzusichern.", "Projekt anfragen", "Import Europe"],
    },
    import: ["Europäischer Import", "Ein europäisches Fahrzeug ohne unnötige Komplexität.", "Wir begleiten Auswahl, Prüfung, Verhandlung, Transport und Importformalitäten. Ziel: ein klarer, konformer und sicherer Kauf.", ["Personalisierte Suche in Europa", "Prüfung der Fahrzeuginformationen", "Administrative und logistische Nachverfolgung", "Begleitung bis zur Lieferung"], "Projekt anfragen"],
    gallery: ["Fahrzeuge und Transport", "Klicken Sie auf ein Foto, um es groß zu sehen.", ["Premium-Sportwagen", "High-End GT", "Ankauf und Verkauf", "Showroom-Präsentation", "Transport", "Koordinierte Lieferung", "Begleitung", "Fahrzeugübergabe", "Verkauf / Import", "Verkauftes Fahrzeug"]],
    reviews: ["Kundenbewertungen", "Sie haben uns ihr Automobilprojekt anvertraut.", ["Schnelle Suche, seriöse Betreuung und ein Fahrzeug wie angekündigt. Der Import verlief einfach, mit klaren Erklärungen in jeder Phase.", "Maxime D.", "Import Deutschland", "Sehr gute Begleitung bei der Inzahlungnahme meines alten Fahrzeugs. Die Einschätzung war detailliert und der Übergang zum neuen Projekt verlief reibungslos.", "Sabrina L.", "Inzahlungnahme und Kauf", "Professioneller, verfügbarer und transparenter Service. Fotos, Prüfung und Transport wurden bis zur Lieferung begleitet.", "Thomas R.", "Transport Europa"]],
    process: ["Methode", "Von der Suche bis zur Lieferung: vollständige Begleitung.", ["Projektdefinition", "Sie nennen Modell, Budget, Laufleistung, Motorisierung, Optionen, Zeitrahmen und nicht verhandelbare Kriterien.", "Gezielte Suche", "Wir suchen passende Angebote in Frankreich und Europa und sortieren Fahrzeuge aus, die unstimmig, zu teuer oder schlecht dokumentiert sind.", "Prüfung", "Wir prüfen wichtige Informationen: Historie, Laufleistung, Wartung, Optionen, Allgemeinzustand, Dokumente und Preislogik.", "Verhandlung", "Wir sprechen mit dem Verkäufer, stellen die richtigen Fragen, klären den Preis und bereiten Kauf- oder Inzahlungnahmebedingungen vor.", "Transport und Formalitäten", "Wir organisieren den Transport, begleiten importbezogene Schritte und bereiten die nötigen Elemente für die Zulassung vor.", "Finale Lieferung", "Sie werden bis zur Fahrzeugübergabe begleitet, mit klarer Nachverfolgung bis zur Lieferung und den letzten Formalitäten."]],
    contact: ["Kontakt", "Erzählen Sie uns von Ihrem Automobilprojekt.", "Kauf, Verkauf, Inzahlungnahme, Import oder Transport: Füllen Sie die wichtigen Informationen aus, und wir melden uns zur Abstimmung der nächsten Schritte."],
    formLabels: ["Name", "Telefon", "Projekttyp", "Nachricht", "Gesuchte Marke / Modell", "Maximales Budget", "Gewünschte Laufleistung", "Kraftstoff / Getriebe", "Wichtige Optionen", "Marke / Modell", "Jahr", "Kilometerstand", "Motor / Getriebe", "Karosseriezustand", "Wartung / Rechnungen", "Vollständige Fahrzeugbeschreibung", "Gewünschtes Land", "Zielmodell", "Gesamtbudget", "Gewünschter Zeitraum", "Projektanfrage"],
    options: ["Auswählen", "Fahrzeugkauf", "Verkaufsbegleitung", "Inzahlungnahme / Einschätzung", "Import Europa", "Export", "Fahrzeugtransport", "Automobilprojekt"],
    placeholders: ["Beschreiben Sie Projekt, Budget und Zeitraum...", "Benzin, Diesel, Hybrid, Automatik...", "Farbe, Ausstattung, Schiebedach, Sportpaket, Zeitraum...", "Ausstattung, Optionen, Reifen, Historie, bekannte Mängel, Zulassung, Prüfung...", "Deutschland, Belgien, Italien...", "Kriterien, Optionen, Transport, Zulassung, mögliche Inzahlungnahme..."],
    legal: ["Rechtliche Informationen", "Impressum", "Herausgeber der Website: TB Motor's. Tätigkeit: Ankauf, Verkauf, Import, Export und Transport von Fahrzeugen. Adresse, Handelsregisternummer, Umsatzsteuer-ID, Verantwortlicher und Hostinganbieter: vor öffentlicher Veröffentlichung mit offiziellen Unternehmensdaten zu ergänzen.", "Die Informationen auf dieser Website dienen nur zur Orientierung. Verfügbarkeit, Preise, Leistungen und Fristen können je nach Fahrzeug, Herkunftsland, Transport und Formalitäten variieren.", "Nutzung der Website", "Nutzungsbedingungen", "Der Nutzer verpflichtet sich, in den Kontaktformularen korrekte Informationen anzugeben, insbesondere bei Kauf-, Import- oder Inzahlungnahme-Anfragen. Gesendete Anfragen stellen ohne schriftliche Bestätigung durch TB Motor's keinen Vertrag, keine Reservierung und keine feste Verpflichtung dar.", "Die Bilder präsentieren die Welt von TB Motor's. Jede Vervielfältigung von Logo, Texten oder Bildern ohne Genehmigung ist untersagt.", "Personenbezogene Daten", "Datenschutz", "Informationen, die über das Kontaktformular gesendet werden, werden nur verwendet, um Ihre Automobilanfrage zu beantworten: Kauf, Verkauf, Inzahlungnahme, Import, Export oder Transport. Sie werden nicht an Dritte verkauft.", "Sie können Zugriff, Berichtigung oder Löschung Ihrer Daten verlangen, indem Sie TB Motor's per E-Mail kontaktieren. Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage und die geschäftliche Nachverfolgung erforderlich ist."],
    submit: "Anfrage senden",
    footer: ["TB Motor's - Ankauf - Verkauf - Import / Export von Fahrzeugen", "Impressum", "Nutzungsbedingungen", "Datenschutz", "Nach oben"],
    statLabels: ["Begleitete Projekte", "Länder abgedeckt", "Jahre Erfahrung", "Dienste auf Maß"],
  },
};

let currentLanguage = "fr";

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setMany = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
};

const setLabel = (label, value) => {
  [...label.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) node.remove();
  });
  label.insertBefore(document.createTextNode(value), label.firstChild);
};

const getActiveService = () => document.querySelector("[data-service].is-active")?.dataset.service || "achat";

const updateServiceDetail = (serviceKey = getActiveService()) => {
  const [kicker, title, text, actionText, project] = translations[currentLanguage].serviceContent[serviceKey];
  setText("[data-detail-kicker]", kicker);
  setText("[data-detail-title]", title);
  setText("[data-detail-text]", text);
  const action = document.querySelector("[data-detail-action]");
  if (action) {
    action.textContent = actionText;
    action.dataset.projectShortcut = project;
  }
};

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : "fr";
  const t = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;

  setMany(".main-nav > a", t.nav);
  setText(".hero-content .eyebrow", t.heroEyebrow);
  setText(".hero-content p:not(.eyebrow)", t.heroText);
  setText(".hero-actions .primary", t.heroPrimary);
  setText(".hero-actions .secondary", t.heroSecondary);

  setText(".intro .eyebrow", t.introEyebrow);
  setText(".intro h2", t.introTitle);
  setText(".intro .two-col > p", t.introText);

  setText("#services .section-title .eyebrow", t.servicesEyebrow);
  setText("#services .section-title h2", t.servicesTitle);
  Object.entries(t.cards).forEach(([key, [title, text]]) => {
    setText(`[data-service="${key}"] h3`, title);
    setText(`[data-service="${key}"] p`, text);
  });
  updateServiceDetail();

  setText("#import .eyebrow", t.import[0]);
  setText("#import h2", t.import[1]);
  setText("#import p:not(.eyebrow)", t.import[2]);
  setMany("#import .check-list li", t.import[3]);
  setText("#import .inline-action", t.import[4]);

  setText("#galerie .eyebrow", t.gallery[0]);
  setText("#galerie h2", t.gallery[1]);
  setMany(".gallery-card span, .gallery-card h3", t.gallery[2]);

  setText("#avis .eyebrow", t.reviews[0]);
  setText("#avis h2", t.reviews[1]);
  setMany(".review-card p, .review-card strong, .review-card span", t.reviews[2]);

  setText("#process .eyebrow", t.process[0]);
  setText("#process .section-title h2", t.process[1]);
  setMany(".steps h3, .steps p", t.process[2]);

  setText("#contact .eyebrow", t.contact[0]);
  setText("#contact h2", t.contact[1]);
  setText("#contact .contact-layout > div > p:not(.eyebrow)", t.contact[2]);
  document.querySelectorAll(".contact-form label").forEach((label, index) => {
    if (t.formLabels[index]) setLabel(label, t.formLabels[index]);
  });
  projectSelect?.querySelectorAll("option").forEach((option, index) => {
    option.value = projectValues[index] || "";
    option.textContent = t.options[index] || option.textContent;
  });
  document.querySelectorAll("textarea[placeholder], input[placeholder]").forEach((field, index) => {
    if (t.placeholders[index]) field.placeholder = t.placeholders[index];
  });
  setText(".contact-form button[type='submit']", t.submit);

  setMany("#mentions-legales .eyebrow, #mentions-legales h2, #mentions-legales p", t.legal);
  setMany(".site-footer p, .site-footer a", t.footer);
  document.querySelectorAll(".stat-label").forEach((el, i) => {
    if (t.statLabels?.[i] !== undefined) el.textContent = t.statLabels[i];
  });
  try {
    localStorage.setItem("tbmotors-language", currentLanguage);
  } catch {
    // Nothing to persist when storage is unavailable.
  }
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

const closeMenu = () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
};

const showProjectFields = (value) => {
  const hasSpecificFields = projectFields.some((group) => group.dataset.fields === value);
  projectFields.forEach((group) => {
    const isDefault = group.dataset.fields === "default";
    group.classList.toggle("is-visible", group.dataset.fields === value || (isDefault && !hasSpecificFields));
  });
};

const selectProject = (value) => {
  if (projectSelect) {
    projectSelect.value = value;
    showProjectFields(value);
  }
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
};

const syncMileage = (source) => {
  if (!mileageRange || !mileageInput) return;
  const value = Math.max(0, Number(source.value || 0));
  if (source === mileageRange) {
    mileageInput.value = String(value);
    return;
  }
  mileageRange.value = String(Math.min(value, Number(mileageRange.max)));
};

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeMenu();
});

document.querySelectorAll("[data-service]").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll("[data-service]").forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
    updateServiceDetail(card.dataset.service);
  });
});

document.querySelectorAll("[data-project-shortcut]").forEach((button) => {
  button.addEventListener("click", () => selectProject(button.dataset.projectShortcut));
});

projectSelect?.addEventListener("change", () => showProjectFields(projectSelect.value));
languageSelect?.addEventListener("change", () => applyLanguage(languageSelect.value));
mileageRange?.addEventListener("input", () => syncMileage(mileageRange));
mileageInput?.addEventListener("input", () => syncMileage(mileageInput));

const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.removeAttribute("alt");
};

document.querySelectorAll("[data-lightbox]").forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");
    lightboxImage.src = card.dataset.lightbox;
    lightboxImage.alt = image?.alt || "Photo TB Motor's";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  });
});

document.querySelector("[data-lightbox-close]")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) closeLightbox();
});

let savedLanguage = "fr";
try {
  savedLanguage = localStorage.getItem("tbmotors-language") || "fr";
} catch {
  savedLanguage = "fr";
}
if (languageSelect) languageSelect.value = translations[savedLanguage] ? savedLanguage : "fr";

window.addEventListener("scroll", updateHeader, { passive: true });
applyLanguage(languageSelect?.value || "fr");
showProjectFields(projectSelect?.value || "");
updateHeader();

// Scroll reveal
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
}

// ─── Loading screen ───
const loader = document.getElementById('loader');
const hideLoader = () => {
  if (loader) {
    loader.classList.add('is-gone');
  }
};
if (document.readyState === 'complete') {
  setTimeout(hideLoader, 1600);
} else {
  window.addEventListener('load', () => setTimeout(hideLoader, 1600));
}

// ─── Custom cursor ───
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
  let dotX = -200;
  let dotY = -200;
  let ringX = -200;
  let ringY = -200;
  let ringVisible = false;

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    if (!ringVisible) {
      ringX = dotX;
      ringY = dotY;
      ringVisible = true;
    }
  });

  const animateRing = () => {
    ringX += (dotX - ringX) * 0.13;
    ringY += (dotY - ringY) * 0.13;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  };
  animateRing();

  const hoverSelectors = 'a, button, [role="button"], .gallery-card, .service-card, .float-cta, label, select, input, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelectors)) {
      cursorDot.classList.add('is-hovering');
      cursorRing.classList.add('is-hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelectors)) {
      cursorDot.classList.remove('is-hovering');
      cursorRing.classList.remove('is-hovering');
    }
  });
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorRing.style.opacity = '1';
  });
}

// ─── Hero parallax ───
const heroEl = document.querySelector('.hero');
const heroContentEl = document.querySelector('.hero-content');
const heroMediaEl = document.querySelector('.hero-media');

if (heroEl && heroContentEl && heroMediaEl) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroH = heroEl.offsetHeight;
    if (scrollY < heroH) {
      const p = scrollY / heroH;
      heroContentEl.style.transform = `translateY(${scrollY * 0.22}px)`;
      heroContentEl.style.opacity = String(Math.max(0, 1 - p * 1.9));
      heroMediaEl.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
  }, { passive: true });
}

// ─── Active nav highlight ───
const navLinks = [...document.querySelectorAll('.main-nav > a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('is-active'));
        const link = navLinks.find(a => a.getAttribute('href') === '#' + entry.target.id);
        if (link) link.classList.add('is-active');
      }
    });
  },
  { threshold: 0.35 }
);
sections.forEach(s => s && navObserver.observe(s));

// ─── 3D card tilt ───
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.review-card, .gallery-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const deg = card.classList.contains('gallery-card') ? 6 : 9;
      card.style.transform = `perspective(1000px) rotateY(${x * deg}deg) rotateX(${-y * deg}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ─── Magnetic buttons ───
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.button.primary, .float-cta').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.26;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.26;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 450ms cubic-bezier(0.33,1,0.68,1)';
      btn.style.transform = '';
      setTimeout(() => { btn.style.transition = ''; }, 450);
    });
  });
}

// Stat counter animation
const countUp = (el) => {
  const target = Number(el.dataset.count);
  const duration = 1600;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));
}
