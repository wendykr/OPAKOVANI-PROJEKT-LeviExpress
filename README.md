# Opakování: LeviExpress

## Založení aplikace a rozběhání routování

### 1. Seznámení s projektem

V praxi často začnete pracovat na projektu, na kterém už pracoval někdo před vámi. V tomto cvičení tomu nebude jinak a také začneme s projektem, který již obsahuje nějaký kód.

![Úvod.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-1/cv-zalozeni/seznameni-s-projektem/uvod.png "Úvod")

1. Nejprve si prohlédněte dopředu připravený [design webu LeviExpress](https://czechitas-podklady.cz/leviexpress-design/), ze kterého budeme vycházet. V připraveném designu najdete kromě úvodní stránky taky stránku s [detailem jízdenky](https://czechitas-podklady.cz/leviexpress-design/reservation). Jde o statické stránky, které nemají žádnou funkčnost. Obsahují pouze HTML a CSS. Zdrojové kódy najdete v [leviexpress-design](https://github.com/Czechitas-podklady-WEB/leviexpress-design) (tento repositář si klonovat nemusíte, slouží hlavně pro inspiraci). Odsud můžete vzít všechny potřebné styly, HTML a obrázky pro váš projekt.

2. Vytvořte si repozitář ze šablony [leviexpress-starter](https://github.com/Czechitas-podklady-WEB/leviexpress-starter). V tomto repozitáři najdete již rozpracovaný základ aplikace.

3. Svůj repozitář si naklonujte do počítače a otevřete ve VS Code.

4. Nainstalujte všechny závislosti pomocí `npm install` a spusťte projekt pomocí `npm run dev`.

5. Prohlédněte si strukturu projektu a projděte si kód připravených komponent.


### 2. Routování

Hned na začátku rozběháme routování, abychom ho pak nemuseli složitě roubovat do již rozpracovaného projektu. Knihovna `react-router` už je v naklonovaném projektu nainstalovaná, můžete ji rovnou začít používat.

Naše aplikace bude mít dvě hlavní stránky: *Home* a *Reservation*. Obě obsahují stejnou hlavičku i patičku. Stránka *Home* bude pod routou `/`, stránka s detaily rezervace bude mít adresu `/reservation`.

1. Uvnitř komponenty `App` již máte připravenou strukturu s hlavičkou a patičkou stránky. Dále máte již hotovou kostru komponenty `Home`. Sestavte router tak, aby komponenty `Header` a `Footer` byly na stránce zobrazeny vždy. Mezi ně vložte prvek `RouterProvider` z React Routeru a předejte do něho konfigurační objekt, ve kterém budete mít vytvořené dvě routy: `/` a `/reservation`. V první routě zobrazte komponentu `Home`, ve druhé zatím necháme jen nadpis `h2` s textem "Detail jízdenky". Vyzkoušejte, že vaše stránka správně zobrazuje obě stránky. Odkazy (`Link`) na stránku nedávejte – uživatel přijde vždy na hlavní stránku `/`. Na stránku `/reservation` se dostane až po kliknutí na tlačítko pro objednání, které zprovozníte až později.
2. Vytvořte komponentu `Reservation`. Tuto komponentu zobrazte na adrese `/reservation`. Zatím může vracet pouze nadpis `h2`, abychom viděli, že se na stránce něco děje. Obsah komponenty vytvoříme později.
3. Vyzkoušejte, že vaše stránka správně funguje (adresu `/reservation` vyzkoušejte tak, že ji napíšete do adresního řádku prohlížeče).
4. Proveďte commit změn se smysluplnou commit zprávou.


## Výběr startovní a cílové lokace

### 1. Údaje o cestě

Ve svém projektu již máte vytvořen základy komponenty s názvem `JourneyPicker`. Ta je součástí komponenty `Home` a zatím vrací pouze statické JSX

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-1/cv-vyber-lokace/udaje-o-ceste/nahled.png "Náhled")

1. V komponentě `JourneyPicker` si připravte funkci `handleSubmit(event)`, která se bude volat při odeslání formuláře. Ošetřete, aby prohlížeč sám neodesílal formulář a zatím si ve funkci jen vypište do konzole text `'Odesílám formulář s cestou'`.
2. Napojte funkci `handleSubmit` na událost submit ve formuláři. Ověřte v prohlížeči, že po kliknutí na *Vyhledat spoj* se v konzoli objeví výše uvedený text.
3. Pomocí `useState` si v komponentě připravte tři stavy: `fromCity`, `toCity` a `date`. Výchozí hodnotou bude ve všech třech případech prázdný řetězec `''`;
4. Napojte každý ze stavů na správý `<select>` tak, aby `select` zobrazoval vybraný stav a změna v `select`u se promítla do stavu. Vytvoříte tedy dvoucestný databinding, kdy se např. stav `fromCity` bude promítat do `value` příslušného `select`u, a při události `onChange` na `select`u se nová hodnota zapíše do stavu `fromCity`. Obdobně i pro další dva `select`y a stavy `toCity` a `date`.
5. Upravte funkci `handleSubmit` tak, aby do konzole vypsala všechny tři stavy. Vyzkoušejte, že výběrem stavu v `select`u se změní stav – po kliknutí na tlačítko se do konzole vypíše změněný stav. Tím, že si dočasně změnit výchozí hodnotu v `useState('')` na některou z hodnot (atribut `value`) v `<option>` můžete ověřit, že funguje správně nastavení výchozího stavu `select`u.
6. Commitněte změny.


### 2. Výběr města

Na konci tohoto cvičení si uživatel bude schopen vybrat startovní a cílové město ze seznamu měst stažených z API. Vytvoříte komponentu `CityOptions`, která dostane na vstupu pole se seznamem destinací a vytvoří z něj elementy `<option>` do `select`ů pro výběr výchozího a cílového města. Seznam měst se bude stahovat v komponentě `JourneyPicker` z API endpointu [/api/cities](https://apps.kodim.cz/daweb/leviexpress/api/cities). Prohlédněte si strukturu dat, která endpoint vrací.

1. Přímo v souboru `index.jsx` komponenty `JourneyPicker` si vytvořte novou komponentu `CityOptions`. Přesuňte do ní všechny `<option>` ze `select`u pro výběr výchozího města. Komponentu `CityOptions` použijte v obou `select`ech pro výběr města. Zkontrolujte, že v prohlížeči vše funguje stejně.
2. V komponentě `JourneyPicker` si vytvořte pomocí `useState` další stav `cities`. V tomto stavu bude seznam měst, mezi kterými lze cestovat. Pro otestování nastavte do seznamu dvě města:

    ```
    [
      { name: 'Praha', code: 'CZ-PRG' },
      { name: 'Brno', code: 'CZ-BRQ' },
    ];
    ```

3. Komponenta `CityOptions` bude v `props` přijímat `cities`. V něm bude pole – seznam měst, které může uživatel vybrat. Upravte tedy příslušným způsobem hlavičku komponenty `CityOptions` a získanou property `cities` si vypište do konzole.
4. Na obou místech, kde máte komponentu `CityOptions` použitou, nastavte property/atribut `cities` na hodnotu stavu `cities`. V prohlížeči se teď při zobrazení stránky vypíše dvakrát do konzole seznam měst – Praha a Brno.
5. Upravte komponentu `CityOptions` tak, aby se na základě seznamu měst v property `cities` vypsaly jednotlivé `<option>`. Pro text `option` se použije název destinace, jako hodnota (atribut `value`) a také jako klíč pro React (`key`) se použije kód destinace.
6. Nechceme, aby při zobrazení stránky byla rovnou vybraná první města ze seznamu. Proto před elementy `option` vytvořené z pole ještě ručně vložíme jeden `option` s textem „Vyberte“. Atribut `value` tohoto `option` bude prázdný.
7. Odstraňte z komponenty `CityOptions` výpis do konzole a zkontrolujte v prohlížeči, že se v seznamu výchozích i cílových měst zobrazuje Praha a Brno a že stále správně funguje výběr měst.
8. Do hlavní komponenty `JourneyPicker` přidejte `useEffect`, který se bude volat při prvním zobrazení komponenty. Přesuňte do něj nastavení stavu `cities` – naše dvě testovací města. Výchozí stav pro `cities` tedy bude prázdné pole, teprve `useEffect` nastaví seznam měst na Prahu a Brno. Ověřte v prohlížeči, že se v `select`ech stále zobrazují obě města. Dejte pozor na to, aby se efekt volal opravdu jen při prvním zobrazení komponenty – můžete si to ověřit pomocným výpisem do konzole prohlížeče, který se musí objevit jen jednou – když budete překlikávat na jiná města, výpis už se nebude opakovat.
9. Upravte useEffect tak, že bude seznam měst získávat z API. Endpoint je na adrese  

    [https://apps.kodim.cz/daweb/leviexpress/api/cities](https://apps.kodim.cz/daweb/leviexpress/api/cities)  

    a vrací seznam měst jako JSON ve formátu, který jsme použili výše. Získaná data použijte místo Prahy a Brna ve stavu `cities`. Ověřte v prohlížeči, že se v seznamu měst objeví i další města.
10. Commitněte změny.


### 3. Výběr data cesty

Na konci tohoto cvičení bude uživatel schopen vybrat datum cesty podle dat stažených z API. Budeme postupovat obdobně jako s komponentou `CityOptions`. Tentokrát však vytvoříme komponentu `DatesOptions`, která vygeneruje elementy `option` do výběru termínů cesty. Termíny cest se budou získávat z API endpointu [/api/dates](https://apps.kodim.cz/daweb/leviexpress/api/dates). Prohlédněte si strukturu dat, která tento endpoint vrací.

1. Komponentu `DatesOptions` vytvořte opět přímo v souboru s komponentami `JourneyPicker` a `CityOptions`.
2. HTML kód s elementy `<option>` pro výběr termínu přesuňte ze `select`u pro výběr data do komponenty `DatesOptions`. V `select`u použijte vytvořenou komponentu `DatesOptions`. Zkontrolujte v prohlížeči, že se výběr termínů zobrazuje stále stejně.
3. Podobně jako `CityOptions` získává seznam měst v property `cities`, bude i `DatesOptions` získávat seznam termínů v property `dates`. V elementech `<option>` (s výjimkou prvního ručně vloženého s textem „Vyberte“) použijte jako `value` a `key` hodnotu `dateBasic` a jako hodnotu `dateCs` použijte jako obsah.
4. Připravte si pomocí `useState` další stav `dates`. Pro otestování si do něj vložte tato data:

    ```
    [
      {
        "dateBasic": "28.05.2021",
        "dateCs": "pá 28. květen 2021"
      },
      {
        "dateBasic": "29.05.2021",
        "dateCs": "so 29. květen 2021"
      }
    ]
    ```

5. Použijte stav `dates` pro naplnění hodnot property `dates` tam, kde je použita komponenta `DatesOptions`. Ověřte v prohlížeči, že se ve výběru termínů zobrazují dvě uvedená data.
6. Upravte `useEffect` volaný při prvním zobrazení komponenty. Vedle seznamu měst bude z API získávat také seznam termínů. Endpoint je na adrese  

    [https://apps.kodim.cz/daweb/leviexpress/api/dates](https://apps.kodim.cz/daweb/leviexpress/api/dates)  

    a vrací seznam termínů ve formátu, který máme připraven. Změňte výchozí stav `dates` na prázdné pole a poté do něj nastavte výsledek volání uvedeného endpointu.
7. Ověřte v prohlížeči, že se do `select`ů načítají data (města a termíny) a že po kliknutí na tlačítko „Vyhledat spoj“ se uživatelem zvolené údaje vypíší do konzole prohlížeče.
8. Commitněte změny.


### 4. Vyhledání spoje

V tomto cvičení dokončíte komponentu pro vyhledání spojení. V komponentě už funguje výběr výchozího a cílového města a také data cesty. Nyní napojíte komponentu na API pro vyhledávání spojení.

1. Pokračujte v komponentě `JourneyPicker`. Do tlačítka „Vyhledat spoj“ přidejte atribut `disabled` tak, aby tlačítko bylo povolené pouze v případě, že jsou vybrána obě města i datum.
2. Při kliknutí na tlačítko „Vyhledat spoj“ se volá funkce `handleSubmit`, která vypíše údaje zadané uživatelem. Nyní výpis do konzole nahradíte voláním API. Bude se volat následující API endpoint  

    [https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=…&toCity=…&date=…](https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=…&toCity=…&date=…)  

    Vytečkovaná místa se nahradí hodnotami vybranými uživatelem, které jsou uložené ve stavech `fromCity`, `toCity` a `date`.

3. Volání tohoto API vrací JSON s nalezenými spoji. Vypište si výstup do konzole prohlížeče.
4. Nalezená spojení budeme potřebovat zobrazit v další komponentě na stránce. Potřebujeme je tedy poslat z komponenty `JourneyPicker` jejímu rodiči – to uděláme v následujících krocích.
5. V komponentě `Home` si připravte funkci `handleJourneyChange`. Funkce `handleJourneyChange` bude očekávat jeden parametr – objekt s údaji o nalezeném spojení. Nazvěte jej třeba `journey`. Ve funkci zatím vypište tento parametr do konzole. Funkce se zatím nebude nikde volat – volání zajistíme v následujících krocích, kde bude funkce `handleJourneyChange` sloužit jako callback předaný do komponenty `JourneyPicker`.
6. V komponentě `Home` používáte komponentu `JourneyPicker`. Této komponentě předejte property jménem `onJourneyChange`, jako hodnotu jí předejte funkci (callback) `handleJourneyChange`.
7. V komponentě `JourneyPicker` bude property `onJourneyChange`, do které rodič (`Home`) vkládá funkci, která se zavolá s údaji nalezeném spoji. Všimněte si, že v hlavičce komponenty `JourneyPicker` už je property `onJourneyChange` připravená.
8. Ve funkci `handleSubmit` v komponentě `JourneyPicker` máte nyní výpis nalezených spojení do konzole prohlížeče. Tento výpis nahraďte voláním funkce uložené v property `onJourneyChange`, které jako paramter předáte data získaná z volání API pod klíčem `results`.
9. Vraťte se do komponenty `Home`, ze které se volá komponenta `JourneyPicker`. V komponentě `Home` vytvořte pomocí `useState` nový stav `journey`, výchozí hodnota bude `null`.
10. Propojte komponentu `JourneyPicker` se stavem `journey` – když je volán callback `handleJourneyChange` s údaji o nalezeném spoji, nastaví se toto spojení do stavu `journey`.
11. Upravte komponentu `Home` tak, aby v případě, kdy ve stavu `journey` je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude `journeyId` z dat o nalezeném spojení.
12. Ověřte, že funguje výběr měst a data, že po zadání všech třech údajů můžete kliknout na „Vyhledat spoj“ a že se po kliknutí vyhledá nějaké spojení a vypíše se do stránky jeho id.
13. Commitněte změny.


## Detail cesty a rezervace

### 1. Podrobnosti cesty

V tomto cvičení vytvoříte komponentu pro zobrazení detailu cesty a komponentu pro zobrazení zastávky. Využijí se informace, které vrátilo API pro vyhledání spoje.

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-1/cv-detail-cesty/podrobnosti-cesty/nahled.png "Náhled")

1. Ve svém projektu vytvořte komponentu s názvem JourneyDetail. Do komponenty `JourneyDetail` zatím zkopírujte HTML kód ze zadání – celý element `div` s třídami `journey-detail` a `container` i s jeho obsahem. Vytvořte v komponentě také soubor `style.css`, do kterého zkopírujte ze zadání styly pro třídy `stops` a `journey-detail`. Naimportujte soubor se styly do komponenty.
2. Použijete komponentu `JourneyDetail` v komponentě `Home` na místě, kde se nyní vypisuje id nalezeného spoje. Komponenta se bude zobrazovat jenom tehdy, když ve stavu `journey` v komponentě `Home` je něco jiného, než `null`. Ověřte, že po vyhledání spojení se na stránce zobrazí podrobnosti cesty s městy 1 až 4.
3. V samostatné složce vytvořte komponentu s názvem `BusStop`. V komponentě vytvořte také soubor se styly, do kterého ze zadání zkopírujete všechny styly pro třídy začínající `bus-stop`.
4. Do komponenty `BusStop` vložte ze zadání celý element `div`, který má třídu `bus-stop`. Je to jeden prvek ze seznamu zastávek.
5. V komponentě `JourneyDetail` smažte HTML kód se seznamem zastávek. Zůstane tam jen kontejner, v něm `h2` s textem „Podrobnosti cesty“ a pod ním `div` s třídou `stops`. Do tohoto divu vložte komponentu `BusStop`. Zkontrolujte v prohlížeči, že se zobrazí jedna zastávka.
6. Komponenta `BusStop` bude očekávat tři props – `name`, `station` a `time`. Tam, kde používáte komponentu `BusStop`, přidejte komponentě odpovídající atributy a nastavte jim hodnoty „Praha“, „ÚAN Florenc“ a „15:55“. Komponentu `BusStop` upravte tak, aby se tyto hodnoty propsaly na správná místa v HTML. Zkontrolujte, že se v prohlížeči zobrazují správné údaje pro jednu zastávku.
7. Komponenta `JourneyDetail` bude v `props` očekávat property `journey` s údaji o cestě. V property `journey` bude objekt, který má v sobě v property `stops` seznam zastávek. Property `journey` si můžete vypsat do konzole prohlížeče.
8. Místo jedné komponenty `BusStop` použité v komponentě napište kód, který projde všechny zastávky v `journey.stops` a pro každou zastávku vloží jednu komponentu `BusStop`, které předá správné údaje. Můžete si pomoci tak, že nejprve upravíte vloženou komponentu `BusStop`, ve které máte „Praha“, „ÚAN Florenc“ a „15:55“ tak, aby se místo těchto údajů vložily údaje z první zastávky v `journey.stops[0]` a následně kód upravíte tak, aby pomocí funkce `map` prošel všechny zastávky v `journey.stops`. Jako klíč (`key`) pro React můžete použít property `code`, která je uvedená v `journey.stops` u každé zastávky.
9. Nyní už zbývá jen poslat z komponenty `Home` do komponenty `JourneyDetail` údaje o cestě. Vraťte se do komponenty `Home`. Ve stavu `journey` tam jsou uloženy údaje o cestě. Nyní už jen stačí tento stav předat do prop `journey` komponenty `JourneyDetail`.
10. Ověřte v prohlížeči, že funguje vyhledání spojení a že se pod vyhledávacím formulářem zobrazí „jízdní řád“ spoje – seznam zastávek s časy. Zastávek je u spoje víc a když vyhledáte jiné spojení, změní se i seznam zastávek.
11. Commitněte změny.


### 2. Zobrazení sedadla

V první fázi projektu bude sedadlo pro cestujícího přidělovat automaticky backend. Jistě jste si všimli, že API endpoint `/journey` vrací JSON s vlastností `autoSeat`. Tato vlastnost obsahuje automaticky vybrané volné sedadlo. V tomto cvičení jej zobrazíme uživateli na stránce.

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-1/cv-detail-cesty/zobrazeni-sedadla/nahled.png "Náhled")

1. Na vzorové stránce vidíte sekci s nadpisem „Vaše sedadlo“. Vytvořte pro tuto sekci React komponentu s názvem `SelectedSeat`. Její obsah vyplňte dle vzorové stránky. Všimněte si, že obrázek sedadla je vytvořen pomocí SVG.
2. Najděte, kde se ve struktuře SVG nastavuje číslo sedadlo. Zařiďte, aby šlo komponentě `SelectedSeat` nastavit číslo sedadla skrze prop `number`.
3. Zkontrolujte v prohlížeči, že se správně zobrazuje sekce se sedadlem a že je možné pomocí prop `number` měnit číslo sedadla.
4. V komponentě `Home` máme ve stavu `journey` uložen výsledek vyhledané cesty. Stačí tedy vlastnost `autoSeat` předat komponentě `SelectedSeat`. Dejte však pozor na to, že při načtení stránky je ve stavu `journey` hodnota `null`. V takovém případě komponentu `SelectedSeat` vůbec nezobrazujte.


### 3. Potvrzení rezervace

Nyní již máme ve stavu `journey` uložené všechny potřebné informace k tomu, abychom mohli provést rezervaci jízdenky. V tomto cvičení potvrdíme rezervaci kliknutím na tlačíko, zpracujeme odpověď ze serveru a přesměrujeme uživatele na detail rezervované jízdenky.

1. Vložte do komponenty `Home` oddíl s tlačítkem „Rezervovat". Stále v komponentě `Home` vytvořte funkci `handleBuy` a zařiďte, aby byla tato funkce volána při kliknutí na tlačítko „Rezervovat". Ve funkci si zatím můžete vypsat nějakou zprávu do konzole `('Funguju!')`.
2. Podle [dokumentace](https://reactrouter.com/en/main/hooks/use-navigate) React Routeru se podívejte, jak lze pomocí hooku `useNavigate` přímo v kódu změnit stránku, na které se uživatel nachází. Tedy jak uživatele přesměrovat.
3. Na začátku komponenty `Home` vytvořte proměnnou `navigate` s použitím hooku `useNavigate()`, nezapomeňte hook naimportovat z `react-router-dom`. Za moment tuto proměnnou použijeme.
4. Nákup jízdenky se ve funkci `handleBuy` provede tak, že metodou POST zavoláte API endpoint

    `
    https://apps.kodim.cz/daweb/leviexpress/api/reservation
    `
    Tělo požadavku bude obsahovat akci `create`, vlastnost `seat` – číslo sedadla vybrané uživatelem, a vlastnost `journeyId` – hodnota `journeyId` ze stavu. Příklad:
    
    ```
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    });
    ```

5. Volání tohoto API vrací JSON s daty, ze kterých nás bude zajímat hodnota `reservationId`. Vypište si ji do konzole.
6. Pomocí funkce `navigate` a hodnoty `reservationId` přesměrujte uživatele na stránku detailu rezervace. Takové volání bude vypadat následovně:

    ```
    navigate(`/reservation/${reservationId}`);
    ```

7. Zkontrolujte, že po kliknutí na tlačítko „Rezervovat" se stránka přesměruje například na adresu
    ```
    http://localhost:8080/reservation/HAQBAQASf7M
    ```

    kde záhy vytvoříme detail jízdenky!

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-1/cv-detail-cesty/potvrzeni-rezervace/nahled.png "Náhled")

8. Commitněte změny.


## Zobrazení rezervované jízdenky

### 1. Detail jízdenky

V předešlé lekci jsme dospěli k vytvoření rezervace a získání `reservationId`. K dokončení základní verze projektu tak stačí vytvořit detail pro jednu jízdenku a zobrazit její data.

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-2/cv-jizdenka/detail-jizdenky/nahled.png "Náhled")

1. V komponentě `App` připravte již existující komponentu na správné zpracování detailu jízdenky. Upravte `path` v routeru tak, aby dynamicky zpracovávala `:id` parametr. Výsledná path bude vypadat takto: `path="/reservation/:id"`.
2. Do komponenty `Reservation` zkopírujte HTML kód ze zadání. Ze souboru `reservation.html` převezměte element `div` s třídou `reservation` i s jeho obsahem.
3. Vytvořte v komponentě soubor `style.css`, do kterého zkopírujte ze zadání styly pro třídy začínající `reservation`. Naimportujte soubor se styly do komponenty.
4. Komponenta musí zjistit, na detailu které jízdenky se nachází. Naimportujte si `useParams` hook z `react-router-dom`. Uvnitř komponenty tento hook zavolejte a získejte z něj parametr `id`. [Příklad použití](https://reactrouter.com/en/6.10.0/hooks/use-params).
5. Pomocí `useState` vytvořte nový stav `reservation`, výchozí hodnota bude `null`.
6. Přidejte `useEffect` volaný při prvním zobrazení komponenty. Bude z API získávat podrobné informace o jedné jízdence. Endpoint je na adrese
https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=…
kde tečky nahradí `id` konkrétní jízdenky. Toto `id` vezměte z vytvořené proměnné `id` z `useParams` hooku.
7. Endpoint vrací údaje o jízdence, pomocí funkce `setReservation` z `useState` hooku nastavte do proměnné `reservation` výsledek volání uvedeného endpointu.
8. Data z endpointu si také můžete vypsat do konzole. Podívejte se na jejich formát a porovnejte strukturu dat s daty, která jsou natvrdo v JSX (vykopírované z `reservation.html`).
9. Nahraďte data jízdenky vepsaná natvrdo za ta, která jsou nyní uložená v proměnné `reservation`. Nezapomeňte zobrazení dat podmínit tím, že stav `reservation` nemá hodnotu `null`, jinak bude prohlížeč hlásit chybu, že nelze číst z `undefined`.
10. Zkontrolujte, že stránka vzhledově odpovídá [zadání](https://czechitas-podklady.cz/leviexpress-design/reservation).
11. Commitněte a pushněte změny. Nyní máte zcela hotovou první část projektu. Pokochejte se hotovou aplikací a pochvalte se za pořádný kus dobře odvedené práce. Po malé oslavě svých úspěchů se můžete vrhnout na druhou část.


## Plánek sedadel

V druhé fázi projektu zprovozníme výběr sedadla uživatelem.

### 1. Zobrazení sedadla

V tomto cvičení vytvoříme komponentu zobrazující plánek autobusu se sedadly. Obsazená sedadla budou zobrazena šedě a nepůjde na ně kliknout. API vrací seznam sedadel po řadách – nemusíte tedy řešit rozmístění sedadel. Zobrazíte jednoduše každou řadu zvlášť a v ní sedadla zleva doprava.

1. Smažte z projektu komponentu `SelectedSeat`. V této verzi projektu už ji nebudeme potřebovat. Sedadlo vybereme z plánku.
2. Vytvořte komponentu `SeatPicker` a přidejte styly pro třídy `seat-picker` a `seats` ze zadání projektu. Do komponenty `SeatPicker` zkopírujte ze zadání celý `div` s třídami `seat-picker` a `container`. Obsah `div` u `seats` nechte však prázdný.
3. Přidejte komponentu `SeatPicker` do komponenty `Home` tam, kde před tím byla komponenta `SelectedSeat`. Bude tak umístěna pod `JourneyDetail`. Komponentu budeme chtít zobrazit jen v případě, kdy stav `journey` neobsahuje `null`. Pro vývoj komponenty ale nyní bude rychlejší, když se prozatím bude zobrazovat stále.
4. Dále v projektu vytvořte komponentu `Seat` představující jedno sedadlo v autobusu. Sedadlo je vytvořeno pomocí SVG, které najdete v zadání projektu. Do komponenty `Seat` přidejte všechny styly týkající se jednoho sedadla.
5. Komponenta `Seat` bude mít zatím jednu prop s názvem `number`, ve které bude číslo sedadla.
6. Zkusmo vložte do komponenty `SeatPicker` pár sedadel s různými čísly, například 1, 17 a 33. Zatím jen tak pod sebe, abychom si vyzkoušeli, že je vůbec dokážeme správně zobrazit.
7. Zkontrolujte v prohlížeči, že se zobrazuje nadpis „Vyberte sedadlo“ a pod ním tři modrá sedadla 1, 17 a 33.


### 2. Řady sedadel

Nyní zařídíme zobrazování sedadel v řadách. Plánek sedadel bude vypadat tak, že v HTML bude pro každou řadu sedadel jedna komponenta `SeatRow` a teprve uvnitř této komponenty budou jednotlivá sedadla – komponenty `Seat`.

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-2/cv-planek-sedadel/rady-sedadel/nahled.png "Náhled")

1. V projektu vytvořte komponentu `SeatRow`, která představuje jednu řadu sedadel. Bude vracet `div` s třídou `seat-row`, který v dalších krocích naplníme sedadly tak, jak nám přijdou z API. Zatím do komponenty natvrdo vložte pár sedadel jen pro testovací účely. Komponentu `SeatRow` pak vložte do `div`u `seats` v komponentě `SeatPicker`.
2. Komponenta `SeatRow` bode očekávat prop s názvem `row`, ve které budou data pro jednu řadu sedadel. Pro testovací účely si vytvořte proměnnou `testRow`, která bude obsahovat takovýto objekt.

    ```
    const testRow = [
      {
        number: 33,
        isOccupied: false,
      },
      {
        number: 29,
        isOccupied: true,
      },
      {
        number: 25,
        isOccupied: false,
      },
    ];
    ```

3. Předejte tuto proměnou komponentě `SeatRow` a uvnitř ní pomocí funkce `map` zobrazte jednotlivá sedadla. Jako `key` prop u jednotlivých sedadel můžete použít samotné číslo sedadla.
4. Nyní máme vše připraveno pro zobrazení správného plánku sedadel podle dat z API. Pracovat budeme v komponentě `SeatPicker` – tam, kde máme testovací řadu sedadel. Když se podíváte do konzole na výpis objektu uloženého ve stavu `journey` komponenty `Home`, uvidíte, že máte velké štěstí. Ve vlastnosti `seats` je pole, které představuje přímo jednotlivé řady v autobusu.
5. Nyní je tedy potřeba údaje o sedadlech předat z komponenty `Home` do komponenty `SeatPicker`. Zároveň se bude později hodit i identifikátor spoje. Do komponenty `SeatPicker` tedy přidejte dvě props – `seats` (vloží se do ní `journey.seats`) a `journeyId` (sem přijde `journey.journeyId`).
6. Ještě je potřeba upravit komponentu `Home` tak, aby komponenta `SeatPicker` byla vidět jedině v případě, že je stav `journey` jiný než `null` – tedy stejně, jako se zobrazuje komponenta `JourneyDetail`. Ověřte v prohlížeči, že po vyhledání spoje se zobrazí podrobnosti cesty a také komponenta pro výběr sedadel – zatím s vašimi testovacími sedadly.
7. Uvnitř komponenty `SeatPicker` projděte pole `seats` pomocí funkce `map`, a pro každý řádek pole vytvořte jednu komponentu `SeatRow`. I komponenty `SeatRow` potřebují prop `key`. Zde bohužel nemáme žádnou rozumnou datovou položku, kterou bychom jako klíč mohli použít. Vzpomeňme si však, že funkce vložená do funkce `map` může mít dva parametry, druhý parametr je pořadové číslo (takzvaný index) aktuálního prvku. V tomto případě jej výjimečně můžeme použít jako `key` pro `SeatRow`.
8. Pokud jste všechno zařídili správně, měli byste po vyhledání cesty vidět sedadla rozmístěná stejně jako ve vzorovém designu stránky. V tuto chvíli už nám stačí pouze správně zobrazit zabraná sedadla. Zda je sedadlo zabrané udává vlastnost `isOccupied` v datech z API. Stačí tedy komponentě `Seat` přidat prop `isOccupied` a poslat do ní hodnotu obdrženou z API.
9. Uvnitř komponenty `Seat` zařiďte, aby se na element `svg` přidala CSS třída `seat--occupied` ve chvíli, kdy je sedadlo zabrené.
10. Pokochejte se krásným plánkem sedadel a commitněte změny.


## Výběr sedadla

### 1. Zobrazení vybraného sedadla

Když už dokážeme zobrazit plánek autobusu, je na čase zobrazit vybrané sedadlo. Zde bude potřeba hodně komunikace směrem od rodiče k dítěti.

![Náhled.](https://kodim.cz/cms/assets/czechitas/react1/lekce/leviexpress-2/cv-vyber-sedadla/zobrazeni-sedadla/nahled.png "Náhled")

1. Nejprve musíme upravit komponentu `Seat` tak, aby správně zobrazovala vybrané sedadlo. Přidáme jí tedy novou prop `isSelected`. Pokud je sedadlo vybrané (prop `isSelected` je nastavena na `true`), bude mít sedadlo nastavenu vedle `seat` také třídu `seat--selected`.
2. V komponentě `SeatRow` budeme nyní potřebovat prop `rowSelectedSeat`, do které vložíme číslo vybraného sedadla. Na komponentách `Seat` uvnitř `SeatRow` pak změníme atribut `isSelected`. Místo statické hodnoty `true` nebo `false` nastavujte jeho hodnotu v závislosti na tom, zda číslo sedadla je shodné s číslem v prop `rowSelectedSeat`.
3. Odkud však má komponenta `SeatRow` vzít číslo vybraného sedadla? Získá jej od rodiče `SeatPicker`. Do komponenty `SeatPicker` tedy přidejte prop s názvem `selectedSeat`. Hodnotu v této prop` pak předejte komponentám `SeatRow` jako `rowSelectedSeat`.
4. Nyní si v prohlížeči vyzkoušejte, že pomocí prop `selectedSeat` komponenty `SeatPicker` můžete nastavit libovolné sedadlo jako vybrané.
5. Zkuste nyní jako vybrané nastavit sedadlo, které přišlo v hodnotě `autoSeat` z backendu.
6. Commitněte změny.

Nyní jsme ve stavu, kdy uživatel vidí automaticky vybrané sedadlo přímo na plánku autobusu.


### 2. Stav pro výběr sedadla

V předchozí verzi projektu jsme sedadlo pro rezervaci získali z hodnoty `autoSeat` stavu journey v komponentě `Home`. Nyní však sedadlo bude vybírat uživatel. Potřebujeme tedy nový stav v komponentě `Home`. Zde si užijeme hodně komunikace od potomka k předkovi.

1. V komponentě `Home` vytvořte nový stav s názvem `userSeat`. Jeho hodnota bude na začátku `null`.
2. Na začátku budeme chtít, aby se uživateli nabídlo sedadlo, které server vybral automaticky. Ve funkci `handleJourneyChange` tak nastavte stav `userSeat` na hodnotu `autoSeat`, která přišla ze serveru při výběru cesty.
3. Hodnotu ze stavu `userSeat` pošlete do prop `selectedSeat` komponenty `SeatPicker`.
4. Do komponenty `Seat` přidejte prop `onSelect`. V této prop bude funkce, kterou `Seat` zavolá, když uživatel vybere sedadlo. Jako parametr této funkci předejte číslo sedadla.
5. Nyní chceme být schopní změnit stav `userSeat` při kliknutí na komponentu `Seat`, která je ovšem zanořena v hlubinách komponenty `SeatPicker`. Mezi komponentami `Seat` a `Home` je vztah potomek - pra-prarodič. Komunikace mezi nimi tedy musí probíhat skrze komponenty `SeatRow` a `SeatPicker`.
6. Obě komponenty `SeatPicker` i `SeatRow` musí mít proto prop `onSeatSelected`. Komponenta `SeatRow` tuto funkci předá všem svým `Seat` jako prop `onSelect`. Komponenta `SeatPicker` funkci `onSeatSelected` předá dolů komponentě `SeatRow` skrze stejnojmennou prop. Takto můžeme z prarodiče `SeatPicker` propašovat funkci do vnuka `Seat`.
7. Nyní stačí komponentě `SeatPicker` skrze prop `onSeatSelected` předat funkci `setUserSeat`, která nastaví stav v komponentě `Home`. Pokud se povedlo vše správně propojit, při kliknutí na sedadlo se změní stav `userSeat` v komponentě `Home` a plánek zobrazí vybrané sedadlo. Vyzkoušejte v prohlížeči, že vše správně funguje.
8. Pokud jste došli až sem, váš projekt je téměř hotový. Stačí už je v obsluze tlačítka pro rezervaci místo `autoSeat` použít stavu `userSeat`.
9. Pokud se vše povedlo, váš projekt LeviExpress je hotový. Umožní uživateli vybrat, odkud kam chce jet, datum cesty i sedadlo, a rezervovat si jízdenku. Commitněte změny a kochejte se fungující aplikací.