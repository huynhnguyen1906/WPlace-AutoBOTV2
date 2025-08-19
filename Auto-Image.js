/* WPlace AutoBOT — uso bajo tu responsabilidad. Compilado 2025-08-19T16:36:24.776Z */
(()=>{var n=(...u)=>console.log("[WPA-UI]",...u);var Q={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"Selecci\xF3n",user:"Usuario",charges:"Cargas",backend:"Backend",database:"Database",uptime:"Uptime",close:"Cerrar",launch:"Lanzar",loading:"Cargando\u2026",executing:"Ejecutando\u2026",downloading:"Descargando script\u2026",chooseBot:"Elige un bot y presiona Lanzar",readyToLaunch:"Listo para lanzar",loadError:"Error al cargar",loadErrorMsg:"No se pudo cargar el bot seleccionado. Revisa tu conexi\xF3n o int\xE9ntalo de nuevo.",checking:"\u{1F504} Verificando...",online:"\u{1F7E2} Online",offline:"\u{1F534} Offline",ok:"\u{1F7E2} OK",error:"\u{1F534} Error",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Iniciar Auto-BOT",uploadImage:"Subir Imagen",resizeImage:"Redimensionar Imagen",selectPosition:"Seleccionar Posici\xF3n",startPainting:"Iniciar Pintura",stopPainting:"Detener Pintura",saveProgress:"Guardar Progreso",loadProgress:"Cargar Progreso",checkingColors:"\u{1F50D} Verificando colores disponibles...",noColorsFound:"\u274C \xA1Abre la paleta de colores en el sitio e int\xE9ntalo de nuevo!",colorsFound:"\u2705 {count} colores disponibles encontrados",loadingImage:"\u{1F5BC}\uFE0F Cargando imagen...",imageLoaded:"\u2705 Imagen cargada con {count} p\xEDxeles v\xE1lidos",imageError:"\u274C Error al cargar la imagen",selectPositionAlert:"\xA1Pinta el primer p\xEDxel en la ubicaci\xF3n donde quieres que comience el arte!",waitingPosition:"\u{1F446} Esperando que pintes el p\xEDxel de referencia...",positionSet:"\u2705 \xA1Posici\xF3n establecida con \xE9xito!",positionTimeout:"\u274C Tiempo agotado para seleccionar posici\xF3n",positionDetected:"\u{1F3AF} Posici\xF3n detectada, procesando...",positionError:"\u274C Error detectando posici\xF3n, int\xE9ntalo de nuevo",startPaintingMsg:"\u{1F3A8} Iniciando pintura...",paintingProgress:"\u{1F9F1} Progreso: {painted}/{total} p\xEDxeles...",noCharges:"\u231B Sin cargas. Esperando {time}...",paintingStopped:"\u23F9\uFE0F Pintura detenida por el usuario",paintingComplete:"\u2705 \xA1Pintura completada! {count} p\xEDxeles pintados.",paintingError:"\u274C Error durante la pintura",missingRequirements:"\u274C Carga una imagen y selecciona una posici\xF3n primero",progress:"Progreso",userName:"Usuario",pixels:"P\xEDxeles",charges:"Cargas",estimatedTime:"Tiempo estimado",initMessage:"Haz clic en 'Iniciar Auto-BOT' para comenzar",waitingInit:"Esperando inicializaci\xF3n...",resizeSuccess:"\u2705 Imagen redimensionada a {width}x{height}",paintingPaused:"\u23F8\uFE0F Pintura pausada en la posici\xF3n X: {x}, Y: {y}",pixelsPerBatch:"P\xEDxeles por lote",batchSize:"Tama\xF1o del lote",nextBatchTime:"Siguiente lote en",useAllCharges:"Usar todas las cargas disponibles",showOverlay:"Mostrar overlay",maxCharges:"Cargas m\xE1ximas por lote",waitingForCharges:"\u23F3 Esperando cargas: {current}/{needed}",timeRemaining:"Tiempo restante",cooldownWaiting:"\u23F3 Esperando {time} para continuar...",progressSaved:"\u2705 Progreso guardado como {filename}",progressLoaded:"\u2705 Progreso cargado: {painted}/{total} p\xEDxeles pintados",progressLoadError:"\u274C Error al cargar progreso: {error}",progressSaveError:"\u274C Error al guardar progreso: {error}",confirmSaveProgress:"\xBFDeseas guardar el progreso actual antes de detener?",saveProgressTitle:"Guardar Progreso",discardProgress:"Descartar",cancel:"Cancelar",minimize:"Minimizar",width:"Ancho",height:"Alto",keepAspect:"Mantener proporci\xF3n",apply:"Aplicar",overlayOn:"Overlay: ON",overlayOff:"Overlay: OFF",passCompleted:"\u2705 Pasada completada: {painted} p\xEDxeles pintados | Progreso: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Esperando regeneraci\xF3n de cargas: {current}/{needed} - Tiempo: {time}",waitingChargesCountdown:"\u23F3 Esperando cargas: {current}/{needed} - Quedan: {time}",autoInitializing:"\u{1F916} Inicializando autom\xE1ticamente...",autoInitSuccess:"\u2705 Bot iniciado autom\xE1ticamente",autoInitFailed:"\u26A0\uFE0F No se pudo iniciar autom\xE1ticamente. Usa el bot\xF3n manual.",paletteDetected:"\u{1F3A8} Paleta de colores detectada",paletteNotFound:"\u{1F50D} Buscando paleta de colores...",clickingPaintButton:"\u{1F446} Haciendo clic en el bot\xF3n Paint...",paintButtonNotFound:"\u274C Bot\xF3n Paint no encontrado",manualInitRequired:"\u{1F527} Inicio manual requerido",retryAttempt:"\u{1F504} Reintento {attempt}/{maxAttempts} en {delay}s...",retryError:"\u{1F4A5} Error en intento {attempt}/{maxAttempts}, reintentando en {delay}s...",retryFailed:"\u274C Fall\xF3 despu\xE9s de {maxAttempts} intentos. Continuando con siguiente lote...",networkError:"\u{1F310} Error de red. Reintentando...",serverError:"\u{1F525} Error del servidor. Reintentando...",timeoutError:"\u23F0 Timeout del servidor. Reintentando..."},farm:{title:"WPlace Farm Bot",start:"Iniciar",stop:"Detener",stopped:"Bot detenido",calibrate:"Calibrar",paintOnce:"Una vez",checkingStatus:"Verificando estado...",configuration:"Configuraci\xF3n",delay:"Delay (ms)",pixelsPerBatch:"P\xEDxeles/lote",minCharges:"Cargas m\xEDn",colorMode:"Modo color",random:"Aleatorio",fixed:"Fijo",range:"Rango",fixedColor:"Color fijo",advanced:"Avanzado",tileX:"Tile X",tileY:"Tile Y",customPalette:"Paleta personalizada",paletteExample:"ej: #FF0000,#00FF00,#0000FF",capture:"Capturar",painted:"Pintados",charges:"Cargas",retries:"Fallos",tile:"Tile",configSaved:"Configuraci\xF3n guardada",configLoaded:"Configuraci\xF3n cargada",configReset:"Configuraci\xF3n reiniciada",captureInstructions:"Pinta un p\xEDxel manualmente para capturar coordenadas...",backendOnline:"Backend Online",backendOffline:"Backend Offline",startingBot:"Iniciando bot...",stoppingBot:"Deteniendo bot...",calibrating:"Calibrando...",alreadyRunning:"Auto-Farm ya est\xE1 corriendo.",imageRunningWarning:"Auto-Image est\xE1 ejecut\xE1ndose. Ci\xE9rralo antes de iniciar Auto-Farm.",selectPosition:"Seleccionar Zona",selectPositionAlert:"\u{1F3AF} Pinta un p\xEDxel en una zona DESPOBLADA del mapa para establecer el \xE1rea de farming",waitingPosition:"\u{1F446} Esperando que pintes el p\xEDxel de referencia...",positionSet:"\u2705 \xA1Zona establecida! Radio: 500px",positionTimeout:"\u274C Tiempo agotado para seleccionar zona",missingPosition:"\u274C Selecciona una zona primero usando 'Seleccionar Zona'",farmRadius:"Radio farm",positionInfo:"Zona actual",farmingInRadius:"\u{1F33E} Farming en radio {radius}px desde ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANTE: Selecciona una zona DESPOBLADA para evitar conflictos",noPosition:"Sin zona",currentZone:"Zona: ({x},{y})",autoSelectPosition:"\u{1F3AF} Selecciona una zona primero. Pinta un p\xEDxel en el mapa para establecer la zona de farming"},common:{yes:"S\xED",no:"No",ok:"Aceptar",cancel:"Cancelar",close:"Cerrar",save:"Guardar",load:"Cargar",delete:"Eliminar",edit:"Editar",start:"Iniciar",stop:"Detener",pause:"Pausar",resume:"Reanudar",reset:"Reiniciar",settings:"Configuraci\xF3n",help:"Ayuda",about:"Acerca de",language:"Idioma",loading:"Cargando...",error:"Error",success:"\xC9xito",warning:"Advertencia",info:"Informaci\xF3n",languageChanged:"Idioma cambiado a {language}"}};var K={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"Selection",user:"User",charges:"Charges",backend:"Backend",database:"Database",uptime:"Uptime",close:"Close",launch:"Launch",loading:"Loading\u2026",executing:"Executing\u2026",downloading:"Downloading script\u2026",chooseBot:"Choose a bot and press Launch",readyToLaunch:"Ready to launch",loadError:"Load error",loadErrorMsg:"Could not load the selected bot. Check your connection or try again.",checking:"\u{1F504} Checking...",online:"\u{1F7E2} Online",offline:"\u{1F534} Offline",ok:"\u{1F7E2} OK",error:"\u{1F534} Error",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Initialize Auto-BOT",uploadImage:"Upload Image",resizeImage:"Resize Image",selectPosition:"Select Position",startPainting:"Start Painting",stopPainting:"Stop Painting",saveProgress:"Save Progress",loadProgress:"Load Progress",checkingColors:"\u{1F50D} Checking available colors...",noColorsFound:"\u274C Open the color palette on the site and try again!",colorsFound:"\u2705 Found {count} available colors",loadingImage:"\u{1F5BC}\uFE0F Loading image...",imageLoaded:"\u2705 Image loaded with {count} valid pixels",imageError:"\u274C Error loading image",selectPositionAlert:"Paint the first pixel at the location where you want the art to start!",waitingPosition:"\u{1F446} Waiting for you to paint the reference pixel...",positionSet:"\u2705 Position set successfully!",positionTimeout:"\u274C Timeout for position selection",positionDetected:"\u{1F3AF} Position detected, processing...",positionError:"\u274C Error detecting position, please try again",startPaintingMsg:"\u{1F3A8} Starting painting...",paintingProgress:"\u{1F9F1} Progress: {painted}/{total} pixels...",noCharges:"\u231B No charges. Waiting {time}...",paintingStopped:"\u23F9\uFE0F Painting stopped by user",paintingComplete:"\u2705 Painting completed! {count} pixels painted.",paintingError:"\u274C Error during painting",missingRequirements:"\u274C Load an image and select a position first",progress:"Progress",userName:"User",pixels:"Pixels",charges:"Charges",estimatedTime:"Estimated time",initMessage:"Click 'Initialize Auto-BOT' to begin",waitingInit:"Waiting for initialization...",resizeSuccess:"\u2705 Image resized to {width}x{height}",paintingPaused:"\u23F8\uFE0F Painting paused at position X: {x}, Y: {y}",pixelsPerBatch:"Pixels per batch",batchSize:"Batch size",nextBatchTime:"Next batch in",useAllCharges:"Use all available charges",showOverlay:"Show overlay",maxCharges:"Max charges per batch",waitingForCharges:"\u23F3 Waiting for charges: {current}/{needed}",timeRemaining:"Time remaining",cooldownWaiting:"\u23F3 Waiting {time} to continue...",progressSaved:"\u2705 Progress saved as {filename}",progressLoaded:"\u2705 Progress loaded: {painted}/{total} pixels painted",progressLoadError:"\u274C Error loading progress: {error}",progressSaveError:"\u274C Error saving progress: {error}",confirmSaveProgress:"Do you want to save the current progress before stopping?",saveProgressTitle:"Save Progress",discardProgress:"Discard",cancel:"Cancel",minimize:"Minimize",width:"Width",height:"Height",keepAspect:"Keep aspect ratio",apply:"Apply",overlayOn:"Overlay: ON",overlayOff:"Overlay: OFF",passCompleted:"\u2705 Pass completed: {painted} pixels painted | Progress: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Waiting for charge regeneration: {current}/{needed} - Time: {time}",waitingChargesCountdown:"\u23F3 Waiting for charges: {current}/{needed} - Remaining: {time}",autoInitializing:"\u{1F916} Auto-initializing...",autoInitSuccess:"\u2705 Bot auto-started successfully",autoInitFailed:"\u26A0\uFE0F Could not auto-start. Use manual button.",paletteDetected:"\u{1F3A8} Color palette detected",paletteNotFound:"\u{1F50D} Searching for color palette...",clickingPaintButton:"\u{1F446} Clicking Paint button...",paintButtonNotFound:"\u274C Paint button not found",manualInitRequired:"\u{1F527} Manual initialization required",retryAttempt:"\u{1F504} Retry {attempt}/{maxAttempts} in {delay}s...",retryError:"\u{1F4A5} Error in attempt {attempt}/{maxAttempts}, retrying in {delay}s...",retryFailed:"\u274C Failed after {maxAttempts} attempts. Continuing with next batch...",networkError:"\u{1F310} Network error. Retrying...",serverError:"\u{1F525} Server error. Retrying...",timeoutError:"\u23F0 Server timeout. Retrying..."},farm:{title:"WPlace Farm Bot",start:"Start",stop:"Stop",stopped:"Bot stopped",calibrate:"Calibrate",paintOnce:"Once",checkingStatus:"Checking status...",configuration:"Configuration",delay:"Delay (ms)",pixelsPerBatch:"Pixels/batch",minCharges:"Min charges",colorMode:"Color mode",random:"Random",fixed:"Fixed",range:"Range",fixedColor:"Fixed color",advanced:"Advanced",tileX:"Tile X",tileY:"Tile Y",customPalette:"Custom palette",paletteExample:"e.g: #FF0000,#00FF00,#0000FF",capture:"Capture",painted:"Painted",charges:"Charges",retries:"Retries",tile:"Tile",configSaved:"Configuration saved",configLoaded:"Configuration loaded",configReset:"Configuration reset",captureInstructions:"Paint a pixel manually to capture coordinates...",backendOnline:"Backend Online",backendOffline:"Backend Offline",startingBot:"Starting bot...",stoppingBot:"Stopping bot...",calibrating:"Calibrating...",alreadyRunning:"Auto-Farm is already running.",imageRunningWarning:"Auto-Image is running. Close it before starting Auto-Farm.",selectPosition:"Select Area",selectPositionAlert:"\u{1F3AF} Paint a pixel in an EMPTY area of the map to set the farming zone",waitingPosition:"\u{1F446} Waiting for you to paint the reference pixel...",positionSet:"\u2705 Area set! Radius: 500px",positionTimeout:"\u274C Timeout for area selection",missingPosition:"\u274C Select an area first using 'Select Area'",farmRadius:"Farm radius",positionInfo:"Current area",farmingInRadius:"\u{1F33E} Farming in {radius}px radius from ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANT: Select an EMPTY area to avoid conflicts",noPosition:"No area",currentZone:"Zone: ({x},{y})",autoSelectPosition:"\u{1F3AF} Select an area first. Paint a pixel on the map to set the farming zone"},common:{yes:"Yes",no:"No",ok:"OK",cancel:"Cancel",close:"Close",save:"Save",load:"Load",delete:"Delete",edit:"Edit",start:"Start",stop:"Stop",pause:"Pause",resume:"Resume",reset:"Reset",settings:"Settings",help:"Help",about:"About",language:"Language",loading:"Loading...",error:"Error",success:"Success",warning:"Warning",info:"Information",languageChanged:"Language changed to {language}"}};var J={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"S\xE9lection",user:"Utilisateur",charges:"Charges",backend:"Backend",database:"Base de donn\xE9es",uptime:"Temps actif",close:"Fermer",launch:"Lancer",loading:"Chargement\u2026",executing:"Ex\xE9cution\u2026",downloading:"T\xE9l\xE9chargement du script\u2026",chooseBot:"Choisissez un bot et appuyez sur Lancer",readyToLaunch:"Pr\xEAt \xE0 lancer",loadError:"Erreur de chargement",loadErrorMsg:"Impossible de charger le bot s\xE9lectionn\xE9. V\xE9rifiez votre connexion ou r\xE9essayez.",checking:"\u{1F504} V\xE9rification...",online:"\u{1F7E2} En ligne",offline:"\u{1F534} Hors ligne",ok:"\u{1F7E2} OK",error:"\u{1F534} Erreur",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Initialiser Auto-BOT",uploadImage:"T\xE9l\xE9charger Image",resizeImage:"Redimensionner Image",selectPosition:"S\xE9lectionner Position",startPainting:"Commencer Peinture",stopPainting:"Arr\xEAter Peinture",saveProgress:"Sauvegarder Progr\xE8s",loadProgress:"Charger Progr\xE8s",checkingColors:"\u{1F50D} V\xE9rification des couleurs disponibles...",noColorsFound:"\u274C Ouvrez la palette de couleurs sur le site et r\xE9essayez!",colorsFound:"\u2705 {count} couleurs disponibles trouv\xE9es",loadingImage:"\u{1F5BC}\uFE0F Chargement de l'image...",imageLoaded:"\u2705 Image charg\xE9e avec {count} pixels valides",imageError:"\u274C Erreur lors du chargement de l'image",selectPositionAlert:"Peignez le premier pixel \xE0 l'emplacement o\xF9 vous voulez que l'art commence!",waitingPosition:"\u{1F446} En attente que vous peigniez le pixel de r\xE9f\xE9rence...",positionSet:"\u2705 Position d\xE9finie avec succ\xE8s!",positionTimeout:"\u274C D\xE9lai d\xE9pass\xE9 pour la s\xE9lection de position",positionDetected:"\u{1F3AF} Position d\xE9tect\xE9e, traitement...",positionError:"\u274C Erreur d\xE9tectant la position, essayez \xE0 nouveau",startPaintingMsg:"\u{1F3A8} D\xE9but de la peinture...",paintingProgress:"\u{1F9F1} Progr\xE8s: {painted}/{total} pixels...",noCharges:"\u231B Aucune charge. Attendre {time}...",paintingStopped:"\u23F9\uFE0F Peinture arr\xEAt\xE9e par l'utilisateur",paintingComplete:"\u2705 Peinture termin\xE9e! {count} pixels peints.",paintingError:"\u274C Erreur pendant la peinture",missingRequirements:"\u274C Chargez une image et s\xE9lectionnez une position d'abord",progress:"Progr\xE8s",userName:"Usager",pixels:"Pixels",charges:"Charges",estimatedTime:"Temps estim\xE9",initMessage:"Cliquez sur 'Initialiser Auto-BOT' pour commencer",waitingInit:"En attente d'initialisation...",resizeSuccess:"\u2705 Image redimensionn\xE9e \xE0 {width}x{height}",paintingPaused:"\u23F8\uFE0F Peinture mise en pause \xE0 la position X: {x}, Y: {y}",pixelsPerBatch:"Pixels par lot",batchSize:"Taille du lot",nextBatchTime:"Prochain lot dans",useAllCharges:"Utiliser toutes les charges disponibles",showOverlay:"Afficher l'overlay",maxCharges:"Charges max par lot",waitingForCharges:"\u23F3 En attente de charges: {current}/{needed}",timeRemaining:"Temps restant",cooldownWaiting:"\u23F3 Attendre {time} pour continuer...",progressSaved:"\u2705 Progr\xE8s sauvegard\xE9 sous {filename}",progressLoaded:"\u2705 Progr\xE8s charg\xE9: {painted}/{total} pixels peints",progressLoadError:"\u274C Erreur lors du chargement du progr\xE8s: {error}",progressSaveError:"\u274C Erreur lors de la sauvegarde du progr\xE8s: {error}",confirmSaveProgress:"Voulez-vous sauvegarder le progr\xE8s actuel avant d'arr\xEAter?",saveProgressTitle:"Sauvegarder Progr\xE8s",discardProgress:"Abandonner",cancel:"Annuler",minimize:"Minimiser",width:"Largeur",height:"Hauteur",keepAspect:"Garder les proportions",apply:"Appliquer",overlayOn:"Overlay : ON",overlayOff:"Overlay : OFF",passCompleted:"\u2705 Passage termin\xE9: {painted} pixels peints | Progr\xE8s: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Attente de r\xE9g\xE9n\xE9ration des charges: {current}/{needed} - Temps: {time}",waitingChargesCountdown:"\u23F3 Attente des charges: {current}/{needed} - Restant: {time}",autoInitializing:"\u{1F916} Initialisation automatique...",autoInitSuccess:"\u2705 Bot d\xE9marr\xE9 automatiquement",autoInitFailed:"\u26A0\uFE0F Impossible de d\xE9marrer automatiquement. Utilisez le bouton manuel.",paletteDetected:"\u{1F3A8} Palette de couleurs d\xE9tect\xE9e",paletteNotFound:"\u{1F50D} Recherche de la palette de couleurs...",clickingPaintButton:"\u{1F446} Clic sur le bouton Paint...",paintButtonNotFound:"\u274C Bouton Paint introuvable",manualInitRequired:"\u{1F527} Initialisation manuelle requise",retryAttempt:"\u{1F504} Tentative {attempt}/{maxAttempts} dans {delay}s...",retryError:"\u{1F4A5} Erreur dans tentative {attempt}/{maxAttempts}, nouvel essai dans {delay}s...",retryFailed:"\u274C \xC9chec apr\xE8s {maxAttempts} tentatives. Continuant avec le lot suivant...",networkError:"\u{1F310} Erreur r\xE9seau. Nouvel essai...",serverError:"\u{1F525} Erreur serveur. Nouvel essai...",timeoutError:"\u23F0 Timeout serveur. Nouvel essai..."},farm:{title:"WPlace Farm Bot",start:"D\xE9marrer",stop:"Arr\xEAter",stopped:"Bot arr\xEAt\xE9",calibrate:"Calibrer",paintOnce:"Une fois",checkingStatus:"V\xE9rification du statut...",configuration:"Configuration",delay:"D\xE9lai (ms)",pixelsPerBatch:"Pixels/lot",minCharges:"Charges min",colorMode:"Mode couleur",random:"Al\xE9atoire",fixed:"Fixe",range:"Plage",fixedColor:"Couleur fixe",advanced:"Avanc\xE9",tileX:"Tuile X",tileY:"Tuile Y",customPalette:"Palette personnalis\xE9e",paletteExample:"ex: #FF0000,#00FF00,#0000FF",capture:"Capturer",painted:"Peints",charges:"Charges",retries:"\xC9checs",tile:"Tuile",configSaved:"Configuration sauvegard\xE9e",configLoaded:"Configuration charg\xE9e",configReset:"Configuration r\xE9initialis\xE9e",captureInstructions:"Peindre un pixel manuellement pour capturer les coordonn\xE9es...",backendOnline:"Backend En ligne",backendOffline:"Backend Hors ligne",startingBot:"D\xE9marrage du bot...",stoppingBot:"Arr\xEAt du bot...",calibrating:"Calibrage...",alreadyRunning:"Auto-Farm est d\xE9j\xE0 en cours d'ex\xE9cution.",imageRunningWarning:"Auto-Image est en cours d'ex\xE9cution. Fermez-le avant de d\xE9marrer Auto-Farm.",selectPosition:"S\xE9lectionner Zone",selectPositionAlert:"\u{1F3AF} Peignez un pixel dans une zone VIDE de la carte pour d\xE9finir la zone de farming",waitingPosition:"\u{1F446} En attente que vous peigniez le pixel de r\xE9f\xE9rence...",positionSet:"\u2705 Zone d\xE9finie! Rayon: 500px",positionTimeout:"\u274C D\xE9lai d\xE9pass\xE9 pour la s\xE9lection de zone",missingPosition:"\u274C S\xE9lectionnez une zone d'abord en utilisant 'S\xE9lectionner Zone'",farmRadius:"Rayon farm",positionInfo:"Zone actuelle",farmingInRadius:"\u{1F33E} Farming dans un rayon de {radius}px depuis ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANT: S\xE9lectionnez une zone VIDE pour \xE9viter les conflits",noPosition:"Aucune zone",currentZone:"Zone: ({x},{y})",autoSelectPosition:"\u{1F3AF} S\xE9lectionnez une zone d'abord. Peignez un pixel sur la carte pour d\xE9finir la zone de farming"},common:{yes:"Oui",no:"Non",ok:"OK",cancel:"Annuler",close:"Fermer",save:"Sauvegarder",load:"Charger",delete:"Supprimer",edit:"Modifier",start:"D\xE9marrer",stop:"Arr\xEAter",pause:"Pause",resume:"Reprendre",reset:"R\xE9initialiser",settings:"Param\xE8tres",help:"Aide",about:"\xC0 propos",language:"Langue",loading:"Chargement...",error:"Erreur",success:"Succ\xE8s",warning:"Avertissement",info:"Information",languageChanged:"Langue chang\xE9e en {language}"}};var ee={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C",autoImage:"\u{1F3A8} \u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",selection:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",user:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",charges:"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",backend:"\u0411\u044D\u043A\u0435\u043D\u0434",database:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445",uptime:"\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",launch:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",executing:"\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",downloading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430...",chooseBot:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043E\u0442\u0430 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",readyToLaunch:"\u0413\u043E\u0442\u043E\u0432\u043E \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443",loadError:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",loadErrorMsg:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u043E\u0442\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",checking:"\u{1F504} \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430...",online:"\u{1F7E2} \u041E\u043D\u043B\u0430\u0439\u043D",offline:"\u{1F534} \u041E\u0444\u043B\u0430\u0439\u043D",ok:"\u{1F7E2} \u041E\u041A",error:"\u{1F534} \u041E\u0448\u0438\u0431\u043A\u0430",unknown:"-"},image:{title:"WPlace \u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",initBot:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C Auto-BOT",uploadImage:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",resizeImage:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",selectPosition:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u0430",startPainting:"\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C",stopPainting:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",saveProgress:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",loadProgress:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",checkingColors:"\u{1F50D} \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432...",noColorsFound:"\u274C \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0446\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430!",colorsFound:"\u2705 \u041D\u0430\u0439\u0434\u0435\u043D\u043E {count} \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432",loadingImage:"\u{1F5BC}\uFE0F \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F...",imageLoaded:"\u2705 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0441 {count} \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u043C\u0438",imageError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",selectPositionAlert:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u0442\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u0433\u0434\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0441\u044F!",waitingPosition:"\u{1F446} \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u043A\u0441\u0435\u043B\u044F....",positionSet:"\u2705 \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!",positionTimeout:"\u274C \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",positionDetected:"\u{1F3AF} \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u0430, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430...",positionError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",startPaintingMsg:"\u{1F3A8} \u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F...",paintingProgress:"\u{1F9F1} \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: {painted} \u0438\u0437 {total} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439...",noCharges:"\u231B \u041D\u0435\u0442 \u0437\u0430\u0440\u044F\u0434\u043E\u0432. \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 {time}...",paintingStopped:"\u23F9\uFE0F \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C",paintingComplete:"\u2705 \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E! {count} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E.",paintingError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F",missingRequirements:"\u274C \u0421\u043F\u0435\u0440\u0432\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u0430",progress:"\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",userName:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",pixels:"\u041F\u0438\u043A\u0441\u0435\u043B\u0438",charges:"\u0417\u0430\u0440\u044F\u0434\u044B",estimatedTime:"\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",initMessage:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C Auto-BOT\xBB, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C",waitingInit:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438...",resizeSuccess:"\u2705 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E \u0434\u043E {width}x{height}",paintingPaused:"\u23F8\uFE0F \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 X: {x}, Y: {y}",pixelsPerBatch:"\u041F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0432 \u043F\u0440\u043E\u0445\u043E\u0434\u0435",batchSize:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u0440\u043E\u0445\u043E\u0434\u0430",nextBatchTime:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437",useAllCharges:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0437\u0430\u0440\u044F\u0434\u044B",showOverlay:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435",maxCharges:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0437\u0430\u0440\u044F\u0434\u043E\u0432 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0434",waitingForCharges:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u043E\u0432: {current} \u0438\u0437 {needed}",timeRemaining:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",cooldownWaiting:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 {time} \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F...",progressSaved:"\u2705 \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u043A\u0430\u043A {filename}",progressLoaded:"\u2705 \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D: {painted} \u0438\u0437 {total} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E",progressLoadError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430: {error}",progressSaveError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430: {error}",confirmSaveProgress:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043F\u0435\u0440\u0435\u0434 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439?",saveProgressTitle:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",discardProgress:"\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",minimize:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",width:"\u0428\u0438\u0440\u0438\u043D\u0430",height:"\u0412\u044B\u0441\u043E\u0442\u0430",keepAspect:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",apply:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",passCompleted:"\u2705 \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D: {painted} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E | \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: {percent}% ({current} \u0438\u0437 {total})",waitingChargesRegen:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0440\u044F\u0434\u0430: {current} \u0438\u0437 {needed} - \u0412\u0440\u0435\u043C\u044F: {time}",waitingChargesCountdown:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u043E\u0432: {current} \u0438\u0437 {needed} - \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F: {time}",autoInitializing:"\u{1F916} \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F...",autoInitSuccess:"\u2705 \u0411\u043E\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438",autoInitFailed:"\u26A0\uFE0F \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0443\u0441\u043A. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.",paletteDetected:"\u{1F3A8} \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430",paletteNotFound:"\u{1F50D} \u041F\u043E\u0438\u0441\u043A \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u044B...",clickingPaintButton:"\u{1F446} \u041D\u0430\u0436\u0430\u0442\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \xABPaint\xBB...",paintButtonNotFound:"\u274C \u041A\u043D\u043E\u043F\u043A\u0430 \xABPaint\xBB \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",manualInitRequired:"\u{1F527} \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",retryAttempt:"\u{1F504} \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430 {attempt} \u0438\u0437 {maxAttempts} \u0447\u0435\u0440\u0435\u0437 {delay}s...",retryError:"\u{1F4A5} \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 {attempt} \u0438\u0437 {maxAttempts}, \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 {delay}s...",retryFailed:"\u274C \u041F\u0440\u043E\u0432\u0430\u043B\u0435\u043D\u043E \u0441\u043F\u0443\u0441\u0442\u044F {maxAttempts} \u043F\u043E\u043F\u044B\u0442\u043E\u043A. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u043E\u0445\u043E\u0434\u0435...",networkError:"\u{1F310} \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...",serverError:"\u{1F525} \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...",timeoutError:"\u23F0 \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430..."},farm:{title:"WPlace \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C",start:"\u041D\u0430\u0447\u0430\u0442\u044C",stop:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",stopped:"\u0411\u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",calibrate:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u0430\u0442\u044C",paintOnce:"\u0415\u0434\u0438\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u043E",checkingStatus:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430...",configuration:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F",delay:"\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 (\u043C\u0441)",pixelsPerBatch:"\u041F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0434",minCharges:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E",colorMode:"\u0420\u0435\u0436\u0438\u043C \u0446\u0432\u0435\u0442\u043E\u0432",random:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",range:"\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D",fixedColor:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",advanced:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435",tileX:"\u041F\u043B\u0438\u0442\u043A\u0430 X",tileY:"\u041F\u043B\u0438\u0442\u043A\u0430 Y",customPalette:"\u0421\u0432\u043E\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430",paletteExample:"\u043F\u0440\u0438\u043C\u0435\u0440: #FF0000,#00FF00,#0000FF",capture:"\u0417\u0430\u0445\u0432\u0430\u0442",painted:"\u0417\u0430\u043A\u0440\u0430\u0448\u0435\u043D\u043E",charges:"\u0417\u0430\u0440\u044F\u0434\u044B",retries:"\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0438",tile:"\u041F\u043B\u0438\u0442\u043A\u0430",configSaved:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",configLoaded:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430",configReset:"\u0421\u0431\u0440\u043E\u0441 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",captureInstructions:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043B\u044F \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442...",backendOnline:"\u0411\u044D\u043A\u044D\u043D\u0434 \u041E\u043D\u043B\u0430\u0439\u043D",backendOffline:"\u0411\u044D\u043A\u044D\u043D\u0434",startingBot:"\u0417\u0430\u043F\u0443\u0441\u043A \u0431\u043E\u0442\u0430...",stoppingBot:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u043E\u0442\u0430...",calibrating:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430...",alreadyRunning:"\u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C \u0443\u0436\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D",imageRunningWarning:"\u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043E. \u0417\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C\u0430.",selectPosition:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",selectPositionAlert:"\u{1F3AF} \u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u041F\u0423\u0421\u0422\u041E\u0419 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0444\u0430\u0440\u043C\u0430.",waitingPosition:"\u{1F446} \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u043A\u0441\u0435\u043B\u044F....",positionSet:"\u2705 \u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430! \u0420\u0430\u0434\u0438\u0443\u0441: 500px",positionTimeout:"\u274C \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",missingPosition:"\u274C \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \xAB\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C\xBB",farmRadius:"\u0420\u0430\u0434\u0438\u0443\u0441 \u0444\u0430\u0440\u043C\u0430",positionInfo:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C",farmingInRadius:"\u{1F33E} \u0424\u0430\u0440\u043C \u0432 \u0440\u0430\u0434\u0438\u0443\u0441\u0435 {radius}px \u043E\u0442 ({x},{y})",selectEmptyArea:"\u26A0\uFE0F \u0412\u0410\u0416\u041D\u041E: \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041F\u0423\u0421\u0422\u0423\u042E \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432.",noPosition:"\u041D\u0435\u0442 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",currentZone:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C: ({x},{y})",autoSelectPosition:"\u{1F3AF} \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C. \u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0444\u0430\u0440\u043C\u0430."},common:{yes:"\u0414\u0430",no:"\u041D\u0435\u0442",ok:"\u041E\u041A",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",load:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",edit:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",start:"\u041D\u0430\u0447\u0430\u0442\u044C",stop:"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C",pause:"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",resume:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",help:"\u041F\u043E\u043C\u043E\u0449\u044C",about:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",language:"\u042F\u0437\u044B\u043A",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",error:"\u041E\u0448\u0438\u0431\u043A\u0430",success:"\u0423\u0441\u043F\u0435\u0445",warning:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",info:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",languageChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043D\u0430 {language}"}};var k={es:Q,en:K,fr:J,ru:ee},N="es",Y=k[N];function Pe(){let t=(window.navigator.language||window.navigator.userLanguage||"es").split("-")[0].toLowerCase();return k[t]?t:"es"}function be(){return null}function q(){let u=be(),t=Pe(),c="es";return u&&k[u]?c=u:t&&k[t]&&(c=t),we(c),c}function we(u){if(!k[u]){console.warn(`Idioma '${u}' no disponible. Usando '${N}'`);return}N=u,Y=k[u],typeof window!="undefined"&&window.CustomEvent&&window.dispatchEvent(new window.CustomEvent("languageChanged",{detail:{language:u,translations:Y}}))}function te(){return N}function w(u,t={}){let c=u.split("."),a=Y;for(let i of c)if(a&&typeof a=="object"&&i in a)a=a[i];else return console.warn(`Clave de traducci\xF3n no encontrada: '${u}'`),u;return typeof a!="string"?(console.warn(`Clave de traducci\xF3n no es string: '${u}'`),u):ye(a,t)}function ye(u,t){return!t||Object.keys(t).length===0?u:u.replace(/\{(\w+)\}/g,(c,a)=>t[a]!==void 0?t[a]:c)}function U(u){return Y[u]?Y[u]:(console.warn(`Secci\xF3n de traducci\xF3n no encontrada: '${u}'`),{})}q();var I={SITEKEY:"0x4AAAAAABpqJe8FO0N84q0F",COOLDOWN_DEFAULT:31e3,TRANSPARENCY_THRESHOLD:100,WHITE_THRESHOLD:250,LOG_INTERVAL:10,TILE_SIZE:4e3,PIXELS_PER_BATCH:20,CHARGE_REGEN_MS:3e4,THEME:{primary:"#000000",secondary:"#111111",accent:"#222222",text:"#ffffff",highlight:"#775ce3",success:"#00ff00",error:"#ff0000",warning:"#ffaa00"}};var e={running:!1,imageLoaded:!1,processing:!1,totalPixels:0,paintedPixels:0,availableColors:[],currentCharges:0,cooldown:I.COOLDOWN_DEFAULT,imageData:null,stopFlag:!1,colorsChecked:!1,startPosition:null,selectingPosition:!1,positionTimeoutId:null,cleanupObserver:null,region:null,minimized:!1,lastPosition:{x:0,y:0},estimatedTime:0,language:"es",tileX:null,tileY:null,pixelsPerBatch:I.PIXELS_PER_BATCH,useAllChargesFirst:!0,isFirstBatch:!0,maxCharges:50,nextBatchCooldown:0,inCooldown:!1,cooldownEndTime:0,remainingPixels:[],lastChargeUpdate:0,chargeDecimalPart:0,originalImageName:null,retryCount:0};var W=class{constructor(){this.detectedSize=null,this.confidence=0}detectFromUrl(){try{let t=window.location.href,c=new URLSearchParams(window.location.search),a=window.location.hash,i=null;if(c.has("x")&&c.has("y"))i=[parseInt(c.get("x")),parseInt(c.get("y"))];else if(a){let l=a.match(/#(-?\d+),(-?\d+)/);l&&(i=[parseInt(l[1]),parseInt(l[2])])}if(i&&(Math.abs(i[0])>1e4||Math.abs(i[1])>1e4)){let l=[3e3,4e3,2048,5e3];for(let g of l){let o=Math.floor(i[0]/g),p=Math.floor(i[1]/g),s=i[0]%g,r=i[1]%g;if(s>=0&&s<g&&r>=0&&r<g)return n(`[TILE DETECTOR] URL suggests tile size: ${g} (tile: ${o},${p} local: ${s},${r})`),g}}}catch(t){n("[TILE DETECTOR] Error detecting from URL:",t)}return null}detectFromDOM(){var t;try{let c=["[data-tile-size]",".tile-info",".coordinates",".position-info"];for(let l of c){let g=document.querySelectorAll(l);for(let o of g){let p=o.getAttribute("data-tile-size")||o.dataset.tileSize||((t=o.textContent.match(/tile.*?(\d{4,})/i))==null?void 0:t[1]);if(p){let s=parseInt(p);if(s>=1e3&&s<=1e4)return n(`[TILE DETECTOR] DOM suggests tile size: ${s}`),s}}}let a=document.body.textContent||"",i=a.match(/tile.*?(\d{4,})/i)||a.match(/(\d{4,}).*?tile/i);if(i){let l=parseInt(i[1]);if(l>=1e3&&l<=1e4)return n(`[TILE DETECTOR] Text content suggests tile size: ${l}`),l}}catch(c){n("[TILE DETECTOR] Error detecting from DOM:",c)}return null}async detectFromNetwork(t=1e4){return new Promise(c=>{let a=window.fetch,i=!1,l=setTimeout(()=>{i||(i=!0,window.fetch=a,c(null))},t);window.fetch=async function(g,o){try{if(g.includes("/s0/pixel/")&&o&&o.body){let p=g.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/),s;try{s=JSON.parse(o.body)}catch{s=o.body}if(p&&s&&s.coords){let r=parseInt(p[1]),d=parseInt(p[2]),h=s.coords[0],E=s.coords[1],C=[3e3,4e3,2048,5e3];for(let m of C){let f=r*m+h,P=d*m+E;if(h>=0&&h<m&&E>=0&&E<m&&!i){i=!0,clearTimeout(l),window.fetch=a,n(`[TILE DETECTOR] Network request suggests tile size: ${m} (tile: ${r},${d} local: ${h},${E})`),c(m);return}}}}}catch(p){n("[TILE DETECTOR] Error intercepting network:",p)}return a(g,o)}})}async autoDetect(){n("[TILE DETECTOR] Auto-detecting tile size...");let t=this.detectFromUrl();if(t)return this.detectedSize=t,this.confidence=.8,t;if(t=this.detectFromDOM(),t)return this.detectedSize=t,this.confidence=.6,t;if(t=await this.detectFromNetwork(5e3),t)return this.detectedSize=t,this.confidence=.9,t;n("[TILE DETECTOR] Could not auto-detect, trying common sizes...");let a=document.querySelector('meta[name="viewport"]')||document.querySelector('[class*="modern"]')||document.querySelector('[class*="v2"]')||window.location.href.includes("v2")?4e3:3e3;return this.detectedSize=a,this.confidence=.3,n(`[TILE DETECTOR] Using fallback size: ${a} (confidence: ${this.confidence})`),a}getDetectedSize(){return this.detectedSize}getConfidence(){return this.confidence}},V=new W;function H(){n("\u{1F3A8} Detectando colores disponibles...");let u=document.querySelectorAll('[id^="color-"]'),t=[];for(let c of u){if(c.querySelector("svg"))continue;let a=c.id.replace("color-",""),i=parseInt(a);if(i===0||i===5)continue;let l=c.style.backgroundColor;if(l){let g=l.match(/\d+/g);if(g&&g.length>=3){let o={r:parseInt(g[0]),g:parseInt(g[1]),b:parseInt(g[2])};t.push({id:i,element:c,...o}),n(`Color detectado: id=${i}, rgb(${o.r},${o.g},${o.b})`)}}}return n(`\u2705 ${t.length} colores disponibles detectados`),t}var X=class{constructor(t){this.imageSrc=t,this.img=new window.Image,this.originalName=null,this.tileSize=1e3,this.drawMult=3,this.shreadSize=3,this.actualTileSize=I.TILE_SIZE,this.bitmap=null,this.imageWidth=0,this.imageHeight=0,this.totalPixels=0,this.requiredPixelCount=0,this.defacePixelCount=0,this.colorPalette={},this.allowedColorsSet=new Set,this.rgbToMeta=new Map,this.coords=[0,0,0,0],this.templateTiles={},this.templateTilesBuffers={},this.tilePrefixes=new Set,this.initializeTileSize()}async initializeTileSize(){try{let t=await V.autoDetect();t?(this.actualTileSize=t,n(`[BLUE MARBLE] Using detected tile size: ${t}`)):n(`[BLUE MARBLE] Using default tile size: ${this.actualTileSize}`)}catch(t){n("[BLUE MARBLE] Error detecting tile size, using default:",t)}}async load(){return new Promise((t,c)=>{this.img.onload=async()=>{try{this.bitmap=await createImageBitmap(this.img),this.imageWidth=this.bitmap.width,this.imageHeight=this.bitmap.height,this.totalPixels=this.imageWidth*this.imageHeight,n(`[BLUE MARBLE] Imagen cargada: ${this.imageWidth}\xD7${this.imageHeight} = ${this.totalPixels.toLocaleString()} p\xEDxeles`),t()}catch(a){c(a)}},this.img.onerror=c,this.img.src=this.imageSrc})}initializeColorPalette(){n("[BLUE MARBLE] Inicializando paleta de colores...");let t=this.detectSiteColors();this.allowedColorsSet=new Set(t.filter(a=>a.name&&a.name.toLowerCase()!=="transparent"&&Array.isArray(a.rgb)).map(a=>`${a.rgb[0]},${a.rgb[1]},${a.rgb[2]}`));let c="222,250,206";this.allowedColorsSet.add(c),this.rgbToMeta=new Map(t.filter(a=>Array.isArray(a.rgb)).map(a=>[`${a.rgb[0]},${a.rgb[1]},${a.rgb[2]}`,{id:a.id,premium:!!a.premium,name:a.name||`Color ${a.id}`}]));try{let a=t.find(i=>i.name&&i.name.toLowerCase()==="transparent");a&&Array.isArray(a.rgb)&&this.rgbToMeta.set(c,{id:a.id,premium:!!a.premium,name:a.name})}catch{}return n(`[BLUE MARBLE] Paleta inicializada: ${this.allowedColorsSet.size} colores permitidos`),Array.from(t)}detectSiteColors(){let t=document.querySelectorAll('[id^="color-"]'),c=[];for(let a of t){if(a.querySelector("svg"))continue;let i=a.id.replace("color-",""),l=parseInt(i),g=a.style.backgroundColor;if(g){let o=g.match(/\d+/g);if(o&&o.length>=3){let p=[parseInt(o[0]),parseInt(o[1]),parseInt(o[2])];c.push({id:l,element:a,rgb:p,name:a.title||a.getAttribute("aria-label")||`Color ${l}`,premium:a.classList.contains("premium")||a.querySelector(".premium")})}}}return n(`[BLUE MARBLE] ${c.length} colores detectados del sitio`),c}setCoords(t,c,a,i){this.coords=[t,c,a,i],n(`[BLUE MARBLE] \u2705 Coordenadas establecidas: tile(${t},${c}) pixel(${a},${i})`),n(`[BLUE MARBLE] \u{1F4CD} Esto significa: imagen empezar\xE1 en posici\xF3n global (${t*this.actualTileSize+a}, ${c*this.actualTileSize+i})`)}async analyzePixels(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");n("[BLUE MARBLE] Analizando p\xEDxeles de la imagen...");try{let c=new OffscreenCanvas(this.imageWidth,this.imageHeight).getContext("2d",{willReadFrequently:!0});c.imageSmoothingEnabled=!1,c.clearRect(0,0,this.imageWidth,this.imageHeight),c.drawImage(this.bitmap,0,0);let a=c.getImageData(0,0,this.imageWidth,this.imageHeight).data,i=0,l=0,g=new Map;for(let p=0;p<this.imageHeight;p++)for(let s=0;s<this.imageWidth;s++){let r=(p*this.imageWidth+s)*4,d=a[r],h=a[r+1],E=a[r+2];if(a[r+3]===0)continue;let m=`${d},${h},${E}`;d===222&&h===250&&E===206&&l++,this.allowedColorsSet.has(m)&&(i++,g.set(m,(g.get(m)||0)+1))}this.requiredPixelCount=i,this.defacePixelCount=l;let o={};for(let[p,s]of g.entries())o[p]={count:s,enabled:!0};return this.colorPalette=o,n("[BLUE MARBLE] An\xE1lisis completado:"),n(`  - P\xEDxeles requeridos: ${i.toLocaleString()}`),n(`  - P\xEDxeles #deface: ${l.toLocaleString()}`),n(`  - Colores \xFAnicos: ${g.size}`),{totalPixels:this.totalPixels,requiredPixels:i,defacePixels:l,uniqueColors:g.size,colorPalette:o}}catch{return this.requiredPixelCount=Math.max(0,this.totalPixels),this.defacePixelCount=0,n("[BLUE MARBLE] Fallback: usando total de p\xEDxeles como requeridos"),{totalPixels:this.totalPixels,requiredPixels:this.totalPixels,defacePixels:0,uniqueColors:0,colorPalette:{}}}}async createTemplateTiles(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");n("[BLUE MARBLE] Creando tiles de template...");let t={},c={},a=new OffscreenCanvas(this.tileSize,this.tileSize),i=a.getContext("2d",{willReadFrequently:!0});for(let l=this.coords[3];l<this.imageHeight+this.coords[3];){let g=Math.min(this.tileSize-l%this.tileSize,this.imageHeight-(l-this.coords[3]));for(let o=this.coords[2];o<this.imageWidth+this.coords[2];){let p=Math.min(this.tileSize-o%this.tileSize,this.imageWidth-(o-this.coords[2])),s=p*this.shreadSize,r=g*this.shreadSize;a.width=s,a.height=r,i.imageSmoothingEnabled=!1,i.clearRect(0,0,s,r),i.drawImage(this.bitmap,o-this.coords[2],l-this.coords[3],p,g,0,0,p*this.shreadSize,g*this.shreadSize);let d=i.getImageData(0,0,s,r);for(let m=0;m<r;m++)for(let f=0;f<s;f++){let P=(m*s+f)*4;if(d.data[P]===222&&d.data[P+1]===250&&d.data[P+2]===206)(f+m)%2===0?(d.data[P]=0,d.data[P+1]=0,d.data[P+2]=0):(d.data[P]=255,d.data[P+1]=255,d.data[P+2]=255),d.data[P+3]=32;else if(f%this.shreadSize!==1||m%this.shreadSize!==1)d.data[P+3]=0;else{let y=d.data[P],v=d.data[P+1],A=d.data[P+2];this.allowedColorsSet.has(`${y},${v},${A}`)||(d.data[P+3]=0)}}i.putImageData(d,0,0);let h=`${(this.coords[0]+Math.floor(o/1e3)).toString().padStart(4,"0")},${(this.coords[1]+Math.floor(l/1e3)).toString().padStart(4,"0")},${(o%1e3).toString().padStart(3,"0")},${(l%1e3).toString().padStart(3,"0")}`;t[h]=await createImageBitmap(a),this.tilePrefixes.add(h.split(",").slice(0,2).join(","));let C=await(await a.convertToBlob()).arrayBuffer();c[h]=C,o+=p}l+=g}return this.templateTiles=t,this.templateTilesBuffers=c,n(`[BLUE MARBLE] Tiles creados: ${Object.keys(t).length} tiles`),n(`[BLUE MARBLE] Prefijos registrados: ${this.tilePrefixes.size} tiles \xFAnicos`),{templateTiles:t,templateTilesBuffers:c}}generatePixelQueue(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");n("[BLUE MARBLE] \u{1F3AF} Iniciando generaci\xF3n de cola de p\xEDxeles..."),n(`[BLUE MARBLE] \u{1F4D0} Tama\xF1o actual de tile: ${this.actualTileSize}`),n(`[BLUE MARBLE] \u{1F5C2}\uFE0F Coordenadas almacenadas: tile(${this.coords[0]},${this.coords[1]}) pixel(${this.coords[2]||0},${this.coords[3]||0})`);let t=[],c=this.coords[0]*this.actualTileSize+(this.coords[2]||0),a=this.coords[1]*this.actualTileSize+(this.coords[3]||0);n(`[BLUE MARBLE] \u{1F4CD} Posici\xF3n base calculada: global(${c}, ${a})`),n(`[BLUE MARBLE] \u{1F4CF} Dimensiones imagen: ${this.imageWidth}x${this.imageHeight}`);let l=new OffscreenCanvas(this.imageWidth,this.imageHeight).getContext("2d",{willReadFrequently:!0});l.imageSmoothingEnabled=!1,l.drawImage(this.bitmap,0,0);let g=l.getImageData(0,0,this.imageWidth,this.imageHeight).data;for(let o=0;o<this.imageHeight;o++)for(let p=0;p<this.imageWidth;p++){let s=(o*this.imageWidth+p)*4,r=g[s],d=g[s+1],h=g[s+2],E=g[s+3];if(E===0||r===222&&d===250&&h===206)continue;let C=`${r},${d},${h}`;if(!this.allowedColorsSet.has(C))continue;let m=c+p,f=a+o;t.length===0&&(n("[BLUE MARBLE] \u{1F50D} AN\xC1LISIS PRIMER P\xCDXEL:"),n(`[BLUE MARBLE] \u{1F4CA} User clicked: pixel(${this.coords[2]}, ${this.coords[3]}) en tile(${this.coords[0]}, ${this.coords[1]})`),n(`[BLUE MARBLE] \u{1F4CA} baseX = ${this.coords[0]} * ${this.actualTileSize} + ${this.coords[2]} = ${c}`),n(`[BLUE MARBLE] \u{1F4CA} baseY = ${this.coords[1]} * ${this.actualTileSize} + ${this.coords[3]} = ${a}`),n(`[BLUE MARBLE] \u{1F4CA} First valid pixel in image: imagen(${p}, ${o})`),n(`[BLUE MARBLE] \u{1F4CA} Calculated global position: (${m}, ${f})`),n("[BLUE MARBLE] \u2753 \xBFDeber\xEDa ser: user_click_global + offset_in_image?"));let P=Math.floor(m/this.actualTileSize),y=Math.floor(f/this.actualTileSize),v=m%this.actualTileSize,A=f%this.actualTileSize,b=this.rgbToMeta.get(C)||{id:0,name:"Unknown"};t.push({imageX:p,imageY:o,globalX:m,globalY:f,tileX:P,tileY:y,localX:v,localY:A,color:{r,g:d,b:h,id:b.id,name:b.name},originalColor:{r,g:d,b:h,alpha:E}}),t.length===1&&n(`[BLUE MARBLE] \u{1F3A8} Primer p\xEDxel v\xE1lido: imagen(${p},${o}) \u2192 global(${m},${f}) \u2192 tile(${P},${y}) local(${v},${A}) color(${r},${d},${h})`)}if(n(`[BLUE MARBLE] \u2705 Cola generada: ${t.length} p\xEDxeles v\xE1lidos`),n(`[BLUE MARBLE] \u{1F4CA} Rango de p\xEDxeles: X(${c}-${c+this.imageWidth-1}), Y(${a}-${a+this.imageHeight-1})`),t.length>0){let o=t[0],p=t[t.length-1];n(`[BLUE MARBLE] \u{1F4CB} Primer p\xEDxel: global(${o.globalX},${o.globalY})`),n(`[BLUE MARBLE] \u{1F4CB} \xDAltimo p\xEDxel: global(${p.globalX},${p.globalY})`)}return t}async resize(t,c,a=!0){if(!this.img)throw new Error("Imagen no cargada. Llama a load() primero.");let i=this.img.width,l=this.img.height;if(a){let s=i/l;t/c>s?t=c*s:c=t/s}let g=document.createElement("canvas");g.width=t,g.height=c;let o=g.getContext("2d");o.imageSmoothingEnabled=!1,o.drawImage(this.img,0,0,t,c);let p=g.toDataURL();return this.img.src=p,this.imageSrc=p,await new Promise(s=>{this.img.onload=async()=>{this.bitmap=await createImageBitmap(this.img),this.imageWidth=this.bitmap.width,this.imageHeight=this.bitmap.height,this.totalPixels=this.imageWidth*this.imageHeight,s()}}),n(`[BLUE MARBLE] Imagen redimensionada: ${i}\xD7${l} \u2192 ${this.imageWidth}\xD7${this.imageHeight}`),{width:this.imageWidth,height:this.imageHeight}}getImageData(){return{width:this.imageWidth,height:this.imageHeight,totalPixels:this.totalPixels,requiredPixels:this.requiredPixelCount,defacePixels:this.defacePixelCount,colorPalette:this.colorPalette,coords:[...this.coords],originalName:this.originalName||"image.png",pixels:this.generatePixelQueue()}}generatePreview(t=200,c=200){if(!this.img)return null;let a=document.createElement("canvas"),i=a.getContext("2d"),{width:l,height:g}=this.img,o=l/g,p,s;return t/c>o?(s=c,p=c*o):(p=t,s=t/o),a.width=p,a.height=s,i.imageSmoothingEnabled=!1,i.drawImage(this.img,0,0,p,s),a.toDataURL()}getDimensions(){return{width:this.imageWidth,height:this.imageHeight}}};var T=u=>new Promise(t=>setTimeout(t,u));var ie="https://backend.wplace.live";async function ae(){var u,t,c;try{let a=await fetch(`${ie}/me`,{credentials:"include"}).then(o=>o.json()),i=a||null,l=(a==null?void 0:a.charges)||{},g={count:(u=l.count)!=null?u:0,max:(t=l.max)!=null?t:0,cooldownMs:(c=l.cooldownMs)!=null?c:3e4};return{success:!0,data:{user:i,charges:g.count,maxCharges:g.max,chargeRegen:g.cooldownMs}}}catch(a){return{success:!1,error:a.message,data:{user:null,charges:0,maxCharges:0,chargeRegen:3e4}}}}async function ne(u,t,c,a,i){try{let l=JSON.stringify({colors:a,coords:c,t:i}),g=await fetch(`${ie}/s0/pixel/${u}/${t}`,{method:"POST",credentials:"include",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:l}),o=null;try{o=await g.json()}catch{o={}}return{status:g.status,json:o,success:g.ok,painted:(o==null?void 0:o.painted)||0}}catch(l){return{status:0,json:{error:l.message},success:!1,painted:0}}}var oe=!1;async function Ee(){if(!(oe||window.turnstile))return new Promise((u,t)=>{let c=document.createElement("script");c.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",c.async=!0,c.defer=!0,c.onload=()=>{oe=!0,u()},c.onerror=()=>t(new Error("No se pudo cargar Turnstile")),document.head.appendChild(c)})}async function ve(u,t="paint"){var c;if(await Ee(),typeof((c=window.turnstile)==null?void 0:c.execute)=="function")try{let a=await window.turnstile.execute(u,{action:t});if(a&&a.length>20)return a}catch{}return await new Promise(a=>{let i=document.createElement("div");i.style.position="fixed",i.style.left="-9999px",document.body.appendChild(i),window.turnstile.render(i,{sitekey:u,callback:l=>{document.body.removeChild(i),a(l)}})})}async function re(u){return ve(u,"paint")}async function se(u,t,c,a,i){let{width:l,height:g}=u,{x:o,y:p}=t;if(n(`Iniciando pintado: imagen(${l}x${g}) inicio LOCAL(${o},${p}) tile(${e.tileX},${e.tileY})`),!e.remainingPixels||e.remainingPixels.length===0||e.lastPosition.x===0&&e.lastPosition.y===0){n("Generando cola de p\xEDxeles..."),e.remainingPixels=Le(u,t,e.tileX,e.tileY),(e.lastPosition.x>0||e.lastPosition.y>0)&&(e.remainingPixels=e.remainingPixels.filter(s=>{let r=s.imageY*l+s.imageX,d=e.lastPosition.y*l+e.lastPosition.x;return r>=d})),n(`Cola generada: ${e.remainingPixels.length} p\xEDxeles pendientes`);try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),e.startPosition&&e.tileX!==void 0&&e.tileY!==void 0&&window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y}),window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch}),n(`\u2705 Plan overlay actualizado con ${e.remainingPixels.length} p\xEDxeles en cola`))}catch(s){n("\u26A0\uFE0F Error actualizando plan overlay:",s)}}try{for(;e.remainingPixels.length>0&&!e.stopFlag;){let s=Math.floor(e.currentCharges),r;if(e.isFirstBatch&&e.useAllChargesFirst&&s>0?(r=Math.min(s,e.remainingPixels.length),e.isFirstBatch=!1,n(`Primera pasada: usando ${r} cargas de ${s} disponibles`)):r=Math.min(e.pixelsPerBatch,e.remainingPixels.length),s<r){n(`Cargas insuficientes: ${s}/${r} necesarias`),await Ae(r-s,c),s=Math.floor(e.currentCharges),e.isFirstBatch||(r=Math.min(e.pixelsPerBatch,e.remainingPixels.length,s));continue}let d=e.remainingPixels.splice(0,r);n(`Pintando lote de ${d.length} p\xEDxeles...`);try{window.__WPA_PLAN_OVERLAY__&&window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch})}catch(E){n("\u26A0\uFE0F Error actualizando plan overlay durante pintado:",E)}let h=await Se(d,c);if(h.success&&h.painted>0){if(e.paintedPixels+=h.painted,e.currentCharges=Math.max(0,e.currentCharges-h.painted),n(`Cargas despu\xE9s del lote: ${e.currentCharges.toFixed(1)} (consumidas: ${h.painted})`),d.length>0){let f=d[d.length-1];e.lastPosition={x:f.imageX,y:f.imageY}}n(`Lote exitoso: ${h.painted}/${d.length} p\xEDxeles pintados. Total: ${e.paintedPixels}/${e.totalPixels}`);let E=Be(),C=(e.paintedPixels/e.totalPixels*100).toFixed(1),m=w("image.passCompleted",{painted:h.painted,percent:C,current:e.paintedPixels,total:e.totalPixels});c&&c(e.paintedPixels,e.totalPixels,m,E),await T(2e3)}else h.shouldContinue?n("Lote fall\xF3 despu\xE9s de todos los reintentos, continuando con siguiente lote..."):(e.remainingPixels.unshift(...d),n("Lote fall\xF3: reintentando en 5 segundos..."),await T(5e3));await T(500)}if(e.stopFlag)n(`Pintado pausado en p\xEDxel imagen(${e.lastPosition.x},${e.lastPosition.y})`),a&&a(!1,e.paintedPixels);else{n(`Pintado completado: ${e.paintedPixels} p\xEDxeles pintados`),e.lastPosition={x:0,y:0},e.remainingPixels=[];try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.setPlan([],{enabled:!0,nextBatchCount:0}),n("\u2705 Plan overlay limpiado al completar pintado"))}catch(s){n("\u26A0\uFE0F Error limpiando plan overlay:",s)}a&&a(!0,e.paintedPixels)}}catch(s){n("Error en proceso de pintado:",s),i&&i(s)}}async function Ce(u){try{if(!u||u.length===0)return{success:!1,painted:0,error:"Lote vac\xEDo"};let t=new Map;for(let i of u){if(!i){n("paintPixelBatch: skipping undefined pixel");continue}if(!i.localX||!i.localY||i.tileX==null||i.tileY==null){n("paintPixelBatch: skipping pixel with missing coordinates",i);continue}if(!i.color){n("paintPixelBatch: skipping pixel with missing color",i);continue}let l=i.color.id||i.color.value||null;if(l===null){n("paintPixelBatch: skipping pixel with invalid color",i);continue}let g=`${i.tileX}:${i.tileY}`;t.has(g)||t.set(g,{tileX:i.tileX,tileY:i.tileY,coords:[],colors:[]});let o=t.get(g);o.coords.push(i.localX,i.localY),o.colors.push(l)}if(t.size===0)return{success:!1,painted:0,error:"No valid pixels in batch"};let c=await re(I.SITEKEY),a=0;for(let[i,l]of t.entries())try{let g=await ne(l.tileX,l.tileY,l.coords,l.colors,c);g.status===200?a+=g.painted||0:n("paintPixelBatch: API error for tile",i,g==null?void 0:g.status,g==null?void 0:g.json)}catch(g){n("Error sending pixels for tile group:",i,g)}return{success:a>0,painted:a}}catch(t){return n("Error en paintPixelBatch:",t),{success:!1,painted:0,error:t.message}}}async function Se(u,t){for(let l=1;l<=5;l++)try{let g=await Ce(u);if(g.success)return e.retryCount=0,g;if(e.retryCount=l,l<5){let o=3e3*Math.pow(2,l-1),p=Math.round(o/1e3),s;g.status===0||g.status==="NetworkError"?s=w("image.networkError"):g.status>=500?s=w("image.serverError"):g.status===408?s=w("image.timeoutError"):s=w("image.retryAttempt",{attempt:l,maxAttempts:5,delay:p}),t&&t(e.paintedPixels,e.totalPixels,s),n(`Reintento ${l}/5 despu\xE9s de ${p}s. Error: ${g.error}`),await T(o)}}catch(g){if(n(`Error en intento ${l}:`,g),e.retryCount=l,l<5){let o=3e3*Math.pow(2,l-1),p=Math.round(o/1e3),s=w("image.retryError",{attempt:l,maxAttempts:5,delay:p});t&&t(e.paintedPixels,e.totalPixels,s),await T(o)}}e.retryCount=5;let i=w("image.retryFailed",{maxAttempts:5});return t&&t(e.paintedPixels,e.totalPixels,i),n("Fall\xF3 despu\xE9s de 5 intentos, continuando con siguiente lote"),{success:!1,painted:0,error:"Fall\xF3 despu\xE9s de 5 intentos",shouldContinue:!0}}async function Ae(u,t){let a=I.CHARGE_REGEN_MS*u+5e3;if(n(`Esperando ${Math.round(a/1e3)}s para obtener ${u} cargas`),e.inCooldown=!0,e.cooldownEndTime=Date.now()+a,e.nextBatchCooldown=Math.round(a/1e3),t){let i=Math.floor(a/6e4),l=Math.floor(a%6e4/1e3),g=i>0?`${i}m ${l}s`:`${l}s`,o=w("image.waitingChargesRegen",{current:Math.floor(e.currentCharges),needed:u,time:g});t(e.paintedPixels,e.totalPixels,o)}for(let i=Math.round(a/1e3);i>0&&!e.stopFlag;i--){if(e.nextBatchCooldown=i,t&&(i%5===0||i<=10||i===Math.round(a/1e3))){let l=Math.floor(i/60),g=i%60,o=l>0?`${l}m ${g}s`:`${g}s`,p=w("image.waitingChargesCountdown",{current:Math.floor(e.currentCharges),needed:u,time:o});t(e.paintedPixels,e.totalPixels,p)}await T(1e3)}e.inCooldown=!1,e.nextBatchCooldown=0,e.currentCharges=Math.min(e.maxCharges||50,e.currentCharges+a/I.CHARGE_REGEN_MS)}function Le(u,t,c,a){var s,r;let{pixels:i}=u,{x:l,y:g}=t,o=[],p=0;for(let d of i){let h=typeof d.x=="number"&&typeof d.y=="number"||typeof d.imageX=="number"&&typeof d.imageY=="number";if(!d||!h){p++,n("generatePixelQueue: skipping pixel with missing coordinates",d);continue}let E=(s=d.imageX)!=null?s:d.x,C=(r=d.imageY)!=null?r:d.y,m=d.color||d.targetColor;if(!m||!m.id&&!m.value){p++,n("generatePixelQueue: skipping pixel with missing/invalid color",d);continue}let f,P,y,v;if(d.tileX!=null&&d.tileY!=null&&d.localX!=null&&d.localY!=null)f=d.tileX,P=d.tileY,y=d.localX,v=d.localY;else{let A=l+E,b=g+C;f=c,P=a,y=A,v=b}o.push({imageX:E,imageY:C,localX:y,localY:v,tileX:f,tileY:P,color:m,originalColor:d.originalColor})}return p>0&&n(`\u26A0\uFE0F Se omitieron ${p} p\xEDxeles inv\xE1lidos durante la generaci\xF3n de la cola`),n(`Cola de p\xEDxeles generada: ${o.length} p\xEDxeles para pintar`),o}function Be(){if(!e.remainingPixels||e.remainingPixels.length===0)return 0;let u=e.remainingPixels.length,t=e.pixelsPerBatch,c=I.CHARGE_REGEN_MS/1e3,a=Math.ceil(u/t),i=t*c,l=(a-1)*i,g=a*2;return Math.ceil(l+g)}function j(){e.stopFlag=!0,e.running=!1,n("\u{1F6D1} Deteniendo proceso de pintado...")}function G(u=null){try{if(!e.imageData||e.paintedPixels===0)throw new Error("No hay progreso para guardar");let t={version:"1.0",timestamp:Date.now(),imageData:{width:e.imageData.width,height:e.imageData.height,originalName:e.originalImageName},progress:{paintedPixels:e.paintedPixels,totalPixels:e.totalPixels,lastPosition:{...e.lastPosition}},position:{startPosition:{...e.startPosition},tileX:e.tileX,tileY:e.tileY},config:{pixelsPerBatch:e.pixelsPerBatch,useAllChargesFirst:e.useAllChargesFirst,isFirstBatch:e.isFirstBatch,maxCharges:e.maxCharges},colors:e.availableColors.map(o=>({id:o.id,r:o.r,g:o.g,b:o.b})),remainingPixels:e.remainingPixels||[]},c=JSON.stringify(t,null,2),a=new window.Blob([c],{type:"application/json"}),i=u||`wplace_progress_${e.originalImageName||"image"}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,l=window.URL.createObjectURL(a),g=document.createElement("a");return g.href=l,g.download=i,document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(l),n(`\u2705 Progreso guardado: ${i}`),{success:!0,filename:i}}catch(t){return n("\u274C Error guardando progreso:",t),{success:!1,error:t.message}}}async function ce(u){return new Promise(t=>{try{let c=new window.FileReader;c.onload=a=>{try{let i=JSON.parse(a.target.result),g=["imageData","progress","position","colors"].filter(o=>!(o in i));if(g.length>0)throw new Error(`Campos requeridos faltantes: ${g.join(", ")}`);if(e.availableColors.length>0){let o=i.colors.map(r=>r.id),p=e.availableColors.map(r=>r.id);o.filter(r=>p.includes(r)).length<o.length*.8&&n("\u26A0\uFE0F Los colores guardados no coinciden completamente con los actuales")}e.imageData={...i.imageData,pixels:[]},e.paintedPixels=i.progress.paintedPixels,e.totalPixels=i.progress.totalPixels,i.progress.lastPosition?e.lastPosition=i.progress.lastPosition:i.position.lastX!==void 0&&i.position.lastY!==void 0&&(e.lastPosition={x:i.position.lastX,y:i.position.lastY}),i.position.startPosition?e.startPosition=i.position.startPosition:i.position.startX!==void 0&&i.position.startY!==void 0&&(e.startPosition={x:i.position.startX,y:i.position.startY}),e.tileX=i.position.tileX,e.tileY=i.position.tileY,e.originalImageName=i.imageData.originalName,e.remainingPixels=i.remainingPixels||i.progress.remainingPixels||[];try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),e.startPosition&&e.tileX!==void 0&&e.tileY!==void 0&&(window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y}),n(`\u2705 Plan overlay anclado con posici\xF3n cargada: tile(${e.tileX},${e.tileY}) local(${e.startPosition.x},${e.startPosition.y})`)),window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch}),n(`\u2705 Plan overlay activado con ${e.remainingPixels.length} p\xEDxeles restantes`))}catch(o){n("\u26A0\uFE0F Error activando plan overlay al cargar progreso:",o)}i.config&&(e.pixelsPerBatch=i.config.pixelsPerBatch||e.pixelsPerBatch,e.useAllChargesFirst=i.config.useAllChargesFirst!==void 0?i.config.useAllChargesFirst:e.useAllChargesFirst,e.isFirstBatch=i.config.isFirstBatch!==void 0?i.config.isFirstBatch:!0,e.maxCharges=i.config.maxCharges||e.maxCharges),e.imageLoaded=!0,e.colorsChecked=!0,n(`\u2705 Progreso cargado: ${e.paintedPixels}/${e.totalPixels} p\xEDxeles`),t({success:!0,data:i,painted:e.paintedPixels,total:e.totalPixels,canContinue:e.remainingPixels.length>0})}catch(i){n("\u274C Error parseando archivo de progreso:",i),t({success:!1,error:i.message})}},c.onerror=()=>{let a="Error leyendo archivo";n("\u274C",a),t({success:!1,error:a})},c.readAsText(u)}catch(c){n("\u274C Error cargando progreso:",c),t({success:!1,error:c.message})}})}function de(){e.paintedPixels=0,e.totalPixels=0,e.lastPosition={x:0,y:0},e.remainingPixels=[],e.imageData=null,e.startPosition=null,e.imageLoaded=!1,e.originalImageName=null,e.isFirstBatch=!0,e.nextBatchCooldown=0,n("\u{1F9F9} Progreso limpiado")}function le(){return e.imageLoaded&&e.paintedPixels>0&&e.remainingPixels&&e.remainingPixels.length>0}function ue(){return{hasProgress:le(),painted:e.paintedPixels,total:e.totalPixels,remaining:e.remainingPixels?e.remainingPixels.length:0,percentage:e.totalPixels>0?e.paintedPixels/e.totalPixels*100:0,lastPosition:{...e.lastPosition},canContinue:le()}}function ge(u=null){let t=document.createElement("div");u&&(t.id=u),t.style.cssText=`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 2147483647;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  `;let c=t.attachShadow({mode:"open"});return document.body.appendChild(t),{host:t,root:c}}function pe(u,t){let c=0,a=0,i=0,l=0;u.style.cursor="move",u.addEventListener("mousedown",g);function g(s){s.target.closest(".header-btn, .wplace-header-btn")||(s.preventDefault(),i=s.clientX,l=s.clientY,document.addEventListener("mouseup",p),document.addEventListener("mousemove",o))}function o(s){s.preventDefault(),c=i-s.clientX,a=l-s.clientY,i=s.clientX,l=s.clientY,t.style.top=t.offsetTop-a+"px",t.style.left=t.offsetLeft-c+"px"}function p(){document.removeEventListener("mouseup",p),document.removeEventListener("mousemove",o)}}async function me({texts:u,...t}){if(n("\u{1F3A8} Creando interfaz de Auto-Image"),!document.querySelector('link[href*="font-awesome"]')){let x=document.createElement("link");x.rel="stylesheet",x.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(x),n("\u{1F4E6} FontAwesome a\xF1adido al document.head")}let{host:c,root:a}=ge(),i=document.createElement("style");i.textContent=`
    @keyframes slideIn {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); }
    }
    
    .container {
      position: fixed;
      top: 20px;
      right: 20px;
      width: 300px;
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 0;
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      z-index: 9998;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #eee;
      animation: slideIn 0.4s ease-out;
      overflow: hidden;
    }
    
    .header {
      padding: 12px 15px;
      background: #2d3748;
      color: #60a5fa;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: move;
      user-select: none;
    }
    
    .header-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .header-controls {
      display: flex;
      gap: 10px;
    }
    
    .header-btn {
      background: none;
      border: none;
      color: #eee;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s;
      padding: 5px;
    }
    
    .header-btn:hover {
      opacity: 1;
    }
    
    .content {
      padding: 15px;
      display: block;
    }
    
    .controls {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 15px;
    }
    
    .config-panel {
      display: none;
      background: #2d3748;
      padding: 10px;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    
    .config-panel.visible {
      display: block;
    }
    
    .config-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    .config-input {
      width: 60px;
      padding: 4px;
      border: 1px solid #333;
      border-radius: 4px;
      background: #1a1a1a;
      color: #eee;
      text-align: center;
    }
    
    .config-checkbox {
      margin-right: 8px;
    }
    
    .main-config {
      background: #2d3748;
      padding: 10px;
      border-radius: 6px;
      margin-bottom: 10px;
      border: 1px solid #3a4553;
    }
    
    .config-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    
    .config-label {
      font-size: 13px;
      color: #cbd5e0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .batch-value, .cooldown-value {
      font-weight: bold;
      color: #60a5fa;
    }
    
    .btn {
      padding: 10px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s;
      font-size: 14px;
    }
    
    .btn:hover:not(:disabled) {
      transform: translateY(-2px);
    }
    
    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none !important;
    }
    
    .btn-primary {
      background: #60a5fa;
      color: white;
    }
    
    .btn-upload {
      background: #2d3748;
      color: white;
      border: 1px dashed #eee;
    }
    
    .btn-load {
      background: #2196F3;
      color: white;
    }
    
    .btn-start {
      background: #10b981;
      color: white;
    }
    
    .btn-stop {
      background: #ef4444;
      color: white;
    }
    
    .btn-select {
      background: #f59e0b;
      color: black;
    }
    
    .progress {
      width: 100%;
      background: #2d3748;
      border-radius: 4px;
      margin: 10px 0;
      overflow: hidden;
      height: 10px;
    }
    
    .progress-bar {
      height: 100%;
      background: #60a5fa;
      transition: width 0.3s;
      width: 0%;
    }
    
    .stats {
      background: #2d3748;
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 15px;
    }
    
    .stat-item {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      font-size: 14px;
    }
    
    .stat-label {
      display: flex;
      align-items: center;
      gap: 6px;
      opacity: 0.8;
    }
    
    .status {
      padding: 8px;
      border-radius: 4px;
      text-align: center;
      font-size: 13px;
    }
    
    .status-default {
      background: rgba(255,255,255,0.1);
    }
    
    .status-success {
      background: rgba(0, 255, 0, 0.1);
      color: #10b981;
    }
    
    .status-error {
      background: rgba(255, 0, 0, 0.1);
      color: #ef4444;
    }
    
    .status-warning {
      background: rgba(255, 165, 0, 0.1);
      color: orange;
    }
    
    .status-info {
      background: rgba(0, 150, 255, 0.1);
      color: #60a5fa;
    }
    
    .minimized .content {
      display: none;
    }
    
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .modal {
      background: #1a1a1a;
      border: 2px solid #333;
      border-radius: 15px;
      padding: 25px;
      color: #eee;
      min-width: 350px;
      max-width: 400px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    
    .modal h3 {
      margin: 0 0 15px 0;
      text-align: center;
      font-size: 18px;
    }
    
    .modal p {
      margin: 0 0 20px 0;
      text-align: center;
      line-height: 1.4;
    }
    
    .modal-buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    
    .modal-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      min-width: 100px;
    }
    
    .modal-btn-save {
      background: #10b981;
      color: white;
    }
    
    .modal-btn-discard {
      background: #ef4444;
      color: white;
    }
    
    .modal-btn-cancel {
      background: #2d3748;
      color: white;
    }
    
    .modal-btn:hover {
      transform: translateY(-2px);
    }
    
    /* Resize Dialog Styles */
    .resize-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 9999;
      display: none;
    }
    
    .resize-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #1a1a1a;
      padding: 20px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      max-width: 90%;
      max-height: 90%;
      overflow: auto;
      color: #ffffff;
      display: none;
    }
    
    .resize-container h3 {
      margin: 0 0 15px 0;
      color: #ffffff;
    }
    
    .resize-controls {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;
    }
    
    .resize-controls label {
      color: #ffffff;
      font-size: 14px;
    }
    
    .resize-slider {
      width: 100%;
      margin: 5px 0;
    }
    
    .resize-preview {
      max-width: 100%;
      max-height: 300px;
      margin: 10px 0;
      border: 1px solid #333;
      display: block;
    }
    
    .resize-buttons {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
  `,a.appendChild(i);let l=document.createElement("div");l.className="container",l.innerHTML=`
    <div class="header">
      <div class="header-title">
        \u{1F5BC}\uFE0F
        <span>${u.title}</span>
      </div>
      <div class="header-controls">
        <button class="header-btn config-btn" title="Configuraci\xF3n">
          \u2699\uFE0F
        </button>
        <button class="header-btn minimize-btn" title="${u.minimize}">
          \u2796
        </button>
      </div>
    </div>
    <div class="content">
      <div class="config-panel">
        <div class="config-item">
          <label>${u.batchSize}:</label>
          <input class="config-input pixels-per-batch" type="number" min="1" max="50" value="20">
        </div>
        <div class="config-item">
          <label>
            <input class="config-checkbox use-all-charges" type="checkbox" checked>
            ${u.useAllCharges}
          </label>
        </div>
        <div class="config-item">
          <label>
            <input class="config-checkbox show-overlay" type="checkbox" checked>
            ${u.showOverlay||"Mostrar overlay"}
          </label>
        </div>
      </div>
      
      <!-- Configuraci\xF3n visible en la interfaz principal -->
      <div class="main-config">
        <div class="config-row">
          <div class="config-label">
            \u{1F3AF} ${u.batchSize}:
            <span class="batch-value">20</span>
          </div>
          <div class="config-label">
            \u23F1\uFE0F ${u.nextBatchTime}:
            <span class="cooldown-value">--</span>
          </div>
        </div>
      </div>
      
      <div class="controls">
        <button class="btn btn-primary init-btn">
          \u{1F916}
          <span>${u.initBot}</span>
        </button>
        <button class="btn btn-upload upload-btn" disabled>
          \u{1F4E4}
          <span>${u.uploadImage}</span>
        </button>
        <button class="btn btn-load load-progress-btn" disabled>
          \u{1F4C1}
          <span>${u.loadProgress}</span>
        </button>
        <button class="btn btn-primary resize-btn" disabled>
          \u{1F504}
          <span>${u.resizeImage}</span>
        </button>
        <button class="btn btn-select select-pos-btn" disabled>
          \u{1F3AF}
          <span>${u.selectPosition}</span>
        </button>
        <button class="btn btn-start start-btn" disabled>
          \u25B6\uFE0F
          <span>${u.startPainting}</span>
        </button>
        <button class="btn btn-stop stop-btn" disabled>
          \u23F9\uFE0F
          <span>${u.stopPainting}</span>
        </button>
      </div>
      
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
      
      <div class="stats">
        <div class="stats-area">
          <div class="stat-item">
            <div class="stat-label">\u2139\uFE0F ${u.initMessage}</div>
          </div>
        </div>
      </div>
      
      <div class="status status-default">
        ${u.waitingInit}
      </div>
    </div>
  `,a.appendChild(l);let g=document.createElement("input");g.type="file",g.accept="image/png,image/jpeg",g.style.display="none",a.appendChild(g);let o=document.createElement("input");o.type="file",o.accept=".json",o.style.display="none",a.appendChild(o);let p=document.createElement("div");p.className="resize-overlay",a.appendChild(p);let s=document.createElement("div");s.className="resize-container",s.innerHTML=`
    <h3>${u.resizeImage}</h3>
    <div class="resize-controls">
      <label>
        ${u.width}: <span class="width-value">0</span>px
        <input type="range" class="resize-slider width-slider" min="10" max="500" value="100">
      </label>
      <label>
        ${u.height}: <span class="height-value">0</span>px
        <input type="range" class="resize-slider height-slider" min="10" max="500" value="100">
      </label>
      <label>
        <input type="checkbox" class="keep-aspect" checked>
        ${u.keepAspect}
      </label>
      <img class="resize-preview" src="" alt="Preview">
      <div class="resize-buttons">
        <button class="btn btn-primary confirm-resize">
          \u2705
          <span>${u.apply}</span>
        </button>
        <button class="btn btn-stop cancel-resize">
          \u274C
          <span>${u.cancel}</span>
        </button>
      </div>
    </div>
  `,a.appendChild(s);let r={header:l.querySelector(".header"),configBtn:l.querySelector(".config-btn"),minimizeBtn:l.querySelector(".minimize-btn"),configPanel:l.querySelector(".config-panel"),pixelsPerBatch:l.querySelector(".pixels-per-batch"),useAllCharges:l.querySelector(".use-all-charges"),showOverlay:l.querySelector(".show-overlay"),batchValue:l.querySelector(".batch-value"),cooldownValue:l.querySelector(".cooldown-value"),initBtn:l.querySelector(".init-btn"),uploadBtn:l.querySelector(".upload-btn"),loadProgressBtn:l.querySelector(".load-progress-btn"),resizeBtn:l.querySelector(".resize-btn"),selectPosBtn:l.querySelector(".select-pos-btn"),startBtn:l.querySelector(".start-btn"),stopBtn:l.querySelector(".stop-btn"),progressBar:l.querySelector(".progress-bar"),statsArea:l.querySelector(".stats-area"),status:l.querySelector(".status"),content:l.querySelector(".content")},d={overlay:p,container:s,widthSlider:s.querySelector(".width-slider"),heightSlider:s.querySelector(".height-slider"),widthValue:s.querySelector(".width-value"),heightValue:s.querySelector(".height-value"),keepAspect:s.querySelector(".keep-aspect"),preview:s.querySelector(".resize-preview"),confirmBtn:s.querySelector(".confirm-resize"),cancelBtn:s.querySelector(".cancel-resize")},h={minimized:!1,configVisible:!1};pe(r.header,l),r.minimizeBtn.addEventListener("click",()=>{h.minimized=!h.minimized,h.minimized?(l.classList.add("minimized"),r.minimizeBtn.innerHTML="\u{1F53C}"):(l.classList.remove("minimized"),r.minimizeBtn.innerHTML="\u{1F53D}")}),r.configBtn.addEventListener("click",()=>{h.configVisible=!h.configVisible,h.configVisible?(r.configPanel.classList.add("visible"),r.configBtn.innerHTML="\u274C"):(r.configPanel.classList.remove("visible"),r.configBtn.innerHTML="\u2699\uFE0F")}),r.pixelsPerBatch.addEventListener("change",()=>{let x=parseInt(r.pixelsPerBatch.value)||20;r.batchValue.textContent=x,t.onConfigChange&&t.onConfigChange({pixelsPerBatch:x})}),r.useAllCharges.addEventListener("change",()=>{t.onConfigChange&&t.onConfigChange({useAllCharges:r.useAllCharges.checked})});function E(){r.uploadBtn.disabled=!1,r.loadProgressBtn.disabled=!1}r.initBtn.addEventListener("click",async()=>{r.initBtn.disabled=!0,t.onInitBot&&await t.onInitBot()&&E(),r.initBtn.disabled=!1}),r.uploadBtn.addEventListener("click",()=>{g.click()}),g.addEventListener("change",async()=>{g.files.length>0&&t.onUploadImage&&await t.onUploadImage(g.files[0])&&(r.selectPosBtn.disabled=!1,r.resizeBtn.disabled=!1)}),r.loadProgressBtn.addEventListener("click",()=>{o.click()}),o.addEventListener("change",async()=>{o.files.length>0&&t.onLoadProgress&&await t.onLoadProgress(o.files[0])&&(r.selectPosBtn.disabled=!1,r.startBtn.disabled=!1,r.resizeBtn.disabled=!1)}),r.resizeBtn.addEventListener("click",()=>{t.onResizeImage&&t.onResizeImage()}),r.selectPosBtn.addEventListener("click",async()=>{t.onSelectPosition&&(r.selectPosBtn.disabled=!0,await t.onSelectPosition()&&(r.startBtn.disabled=!1),r.selectPosBtn.disabled=!1)}),r.showOverlay.addEventListener("change",()=>{if(!window.__WPA_PLAN_OVERLAY__)return;window.__WPA_PLAN_OVERLAY__.injectStyles();let x=r.showOverlay.checked;window.__WPA_PLAN_OVERLAY__.setEnabled(x)}),r.startBtn.addEventListener("click",async()=>{t.onStartPainting&&(r.startBtn.disabled=!0,r.stopBtn.disabled=!1,await t.onStartPainting()||(r.startBtn.disabled=!1,r.stopBtn.disabled=!0))}),r.stopBtn.addEventListener("click",async()=>{t.onStopPainting&&await t.onStopPainting()&&(r.startBtn.disabled=!1,r.stopBtn.disabled=!0)});function C(x,L="default"){r.status.textContent=x,r.status.className=`status status-${L}`,r.status.style.animation="none",r.status.offsetWidth,r.status.style.animation="slideIn 0.3s ease-out"}function m(x){let{width:L,height:B}=x.getDimensions(),_=L/B;d.widthSlider.value=L,d.heightSlider.value=B,d.widthValue.textContent=L,d.heightValue.textContent=B,d.preview.src=x.img.src,d.overlay.style.display="block",d.container.style.display="block";let $=()=>{let z=parseInt(d.widthSlider.value),R=parseInt(d.heightSlider.value);d.widthValue.textContent=z,d.heightValue.textContent=R,d.preview.src=x.generatePreview(z,R)},M=()=>{if(d.keepAspect.checked){let z=parseInt(d.widthSlider.value),R=Math.round(z/_);d.heightSlider.value=R}$()},O=()=>{if(d.keepAspect.checked){let z=parseInt(d.heightSlider.value),R=Math.round(z*_);d.widthSlider.value=R}$()};d.widthSlider.addEventListener("input",M),d.heightSlider.addEventListener("input",O);let F=()=>{let z=parseInt(d.widthSlider.value),R=parseInt(d.heightSlider.value);t.onConfirmResize&&t.onConfirmResize(x,z,R),f()},D=()=>{f()};d.confirmBtn.addEventListener("click",F),d.cancelBtn.addEventListener("click",D),d.overlay.addEventListener("click",D),window.cleanupResizeDialog=()=>{d.widthSlider.removeEventListener("input",M),d.heightSlider.removeEventListener("input",O),d.confirmBtn.removeEventListener("click",F),d.cancelBtn.removeEventListener("click",D),d.overlay.removeEventListener("click",D)},$()}function f(){d.overlay.style.display="none",d.container.style.display="none",window.cleanupResizeDialog&&(window.cleanupResizeDialog(),delete window.cleanupResizeDialog)}function P(x,L,B=null){let _=L>0?x/L*100:0;r.progressBar.style.width=`${_}%`;let $=`
      <div class="stat-item">
        <div class="stat-label">\u{1F3A8} ${u.progress}</div>
        <div>${x}/${L} (${_.toFixed(1)}%)</div>
      </div>
    `;if(B&&(B.username&&($+=`
          <div class="stat-item">
            <div class="stat-label">\u{1F464} ${u.userName}</div>
            <div>${B.username}</div>
          </div>
        `),B.charges!==void 0&&($+=`
          <div class="stat-item">
            <div class="stat-label">\u26A1 ${u.charges}</div>
            <div>${Math.floor(B.charges)}</div>
          </div>
        `),B.pixels!==void 0&&($+=`
          <div class="stat-item">
            <div class="stat-label">\u{1F533} ${u.pixels}</div>
            <div>${B.pixels.toLocaleString()}</div>
          </div>
        `),B.estimatedTime!==void 0&&B.estimatedTime>0)){let M=Math.floor(B.estimatedTime/3600),O=Math.floor(B.estimatedTime%3600/60),F=M>0?`${M}h ${O}m`:`${O}m`;$+=`
          <div class="stat-item">
            <div class="stat-label">\u23F0 ${u.timeRemaining}</div>
            <div>${F}</div>
          </div>
        `}r.statsArea.innerHTML=$}function y(x){if(x>0){let L=Math.floor(x/60),B=x%60,_=L>0?`${L}m ${B}s`:`${B}s`;r.cooldownValue.textContent=_}else r.cooldownValue.textContent="--"}function v(x){x&&x.includes("\u23F3")?(r.status.textContent=x,r.status.className="status status-info"):x&&C(x,"info")}function A(x){x?(r.initBtn.disabled=!0,r.initBtn.style.opacity="0.6",r.initBtn.innerHTML=`\u2705 <span>${u.initBot} - Completado</span>`):(r.initBtn.disabled=!1,r.initBtn.style.opacity="1",r.initBtn.innerHTML=`\u{1F916} <span>${u.initBot}</span>`)}function b(x){r.initBtn.style.display=x?"flex":"none"}function S(){c.remove()}return n("\u2705 Interfaz de Auto-Image creada"),{setStatus:C,updateProgress:P,updateCooldownDisplay:y,updateCooldownMessage:v,setInitialized:A,setInitButtonVisible:b,enableButtonsAfterInit:E,showResizeDialog:m,closeResizeDialog:f,destroy:S}}function he(u,t,c={}){return new Promise(a=>{let i=document.createElement("div");i.className="modal-overlay",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.background="rgba(0,0,0,0.7)",i.style.zIndex="10001",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center";let l=document.createElement("div");l.style.background="#1a1a1a",l.style.border="2px solid #333",l.style.borderRadius="15px",l.style.padding="25px",l.style.color="#eee",l.style.minWidth="350px",l.style.maxWidth="400px",l.style.boxShadow="0 10px 30px rgba(0,0,0,0.5)",l.style.fontFamily="'Segoe UI', Roboto, sans-serif",l.innerHTML=`
      <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 18px;">${t}</h3>
      <p style="margin: 0 0 20px 0; text-align: center; line-height: 1.4;">${u}</p>
      <div style="display: flex; gap: 10px; justify-content: center;">
        ${c.save?`<button class="save-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #10b981; color: white;">${c.save}</button>`:""}
        ${c.discard?`<button class="discard-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #ef4444; color: white;">${c.discard}</button>`:""}
        ${c.cancel?`<button class="cancel-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #2d3748; color: white;">${c.cancel}</button>`:""}
      </div>
    `,i.appendChild(l),document.body.appendChild(i);let g=l.querySelector(".save-btn"),o=l.querySelector(".discard-btn"),p=l.querySelector(".cancel-btn"),s=()=>{document.body.removeChild(i)};g&&g.addEventListener("click",()=>{s(),a("save")}),o&&o.addEventListener("click",()=>{s(),a("discard")}),p&&p.addEventListener("click",()=>{s(),a("cancel")}),i.addEventListener("click",r=>{r.target===i&&(s(),a("cancel"))})})}function Z(){let u=['[data-testid="color-picker"]',".color-picker",".palette",'[class*="color"][class*="picker"]','[class*="palette"]'];for(let a of u){let i=document.querySelector(a);if(i&&i.offsetParent!==null)return!0}let t=document.querySelectorAll('[style*="background-color"], [style*="background:"], .color, [class*="color"]'),c=0;for(let a of t)if(a.offsetParent!==null&&a.offsetWidth>10&&a.offsetHeight>10&&(c++,c>=5))return!0;return!1}function fe(){let u=document.querySelector("button.btn.btn-primary.btn-lg, button.btn.btn-primary.sm\\:btn-xl");if(u){let a=u.textContent.toLowerCase().includes("paint"),i=u.querySelector('svg path[d*="240-120"]');if(a||i)return u.click(),!0}let t=document.querySelectorAll("button");for(let c of t)if(c.textContent.toLowerCase().includes("paint")&&c.offsetParent!==null&&!c.disabled)return c.click(),!0;return!1}(()=>{let t={enabled:!1,templates:[],templatesShouldBeDrawn:!0,tileSize:1e3,drawMult:3,pixelPlan:null,nextBatchCount:0,anchor:null,imageWidth:null,imageHeight:null,originalFetch:null,fetchedBlobQueue:new Map,isIntercepting:!1};function c(){console.log("[PLAN OVERLAY] Blue Marble tile system initialized")}function a(){t.isIntercepting||(t.originalFetch=window.fetch,t.isIntercepting=!0,window.fetch=async function(...m){var A;let f=await t.originalFetch.apply(this,m),P=f.clone(),y=(m[0]instanceof Request?(A=m[0])==null?void 0:A.url:m[0])||"ignore";if((P.headers.get("content-type")||"").includes("image/")&&y.includes("/tiles/")&&!y.includes("openfreemap")&&!y.includes("maps")){console.log("[PLAN OVERLAY] Intercepting tile request:",y);try{let b=await P.blob(),S=await l(b,y);return new Response(S,{headers:P.headers,status:P.status,statusText:P.statusText})}catch(b){return console.error("[PLAN OVERLAY] Error processing tile:",b),f}}return f},console.log("[PLAN OVERLAY] Fetch interception started"))}function i(){!t.isIntercepting||!t.originalFetch||(window.fetch=t.originalFetch,t.isIntercepting=!1,console.log("[PLAN OVERLAY] Fetch interception stopped"))}async function l(m,f){if(!t.enabled||!t.templatesShouldBeDrawn||!t.pixelPlan)return m;let P=f.split("/"),y=parseInt(P[P.length-1].replace(".png","")),v=parseInt(P[P.length-2]);if(isNaN(v)||isNaN(y))return console.warn("[PLAN OVERLAY] Could not extract tile coordinates from URL:",f),m;console.log(`[PLAN OVERLAY] Processing tile: ${v},${y}`);let A=g(v,y);if(A.length===0)return m;console.log(`[PLAN OVERLAY] Found ${A.length} pixels for tile ${v},${y}`);let b=t.tileSize*t.drawMult,S=await createImageBitmap(m),x=new OffscreenCanvas(b,b),L=x.getContext("2d");return L.imageSmoothingEnabled=!1,L.clearRect(0,0,b,b),L.drawImage(S,0,0,b,b),o(L,A,v,y),await x.convertToBlob({type:"image/png"})}function g(m,f){return!t.pixelPlan||!t.pixelPlan.pixels?[]:t.pixelPlan.pixels.filter(P=>{let y=Math.floor(P.globalX/4e3),v=Math.floor(P.globalY/4e3);return y===m&&v===f})}function o(m,f,P,y){let v=P*4e3,A=y*4e3;m.globalAlpha=.7;for(let b of f){let S=(b.globalX-v)*t.drawMult+1,x=(b.globalY-A)*t.drawMult+1;S>=0&&S<t.tileSize*t.drawMult&&x>=0&&x<t.tileSize*t.drawMult&&(m.fillStyle=`rgb(${b.r},${b.g},${b.b})`,m.fillRect(S,x,1,1))}if(t.nextBatchCount>0){m.globalAlpha=1;let b=f.slice(0,t.nextBatchCount);for(let S of b){let x=(S.globalX-v)*t.drawMult+1,L=(S.globalY-A)*t.drawMult+1;x>=0&&x<t.tileSize*t.drawMult&&L>=0&&L<t.tileSize*t.drawMult&&(m.fillStyle=`rgb(${S.r},${S.g},${S.b})`,m.fillRect(x,L,1,1))}}}function p(m){t.enabled=!!m,t.enabled?a():i(),console.log(`[PLAN OVERLAY] setEnabled: ${t.enabled}`)}function s(m,f={}){var y,v,A;if(!m||m.length===0){t.pixelPlan=null,console.log("[PLAN OVERLAY] Plan cleared");return}let P=[];for(let b of m){let S,x;if(typeof b.tileX=="number"&&typeof b.localX=="number")S=b.tileX*4e3+b.localX,x=b.tileY*4e3+b.localY;else if(f.anchor&&typeof b.imageX=="number"){let L=f.anchor.tileX*4e3+(f.anchor.pxX||0),B=f.anchor.tileY*4e3+(f.anchor.pxY||0);S=L+b.imageX,x=B+b.imageY}else continue;P.push({globalX:S,globalY:x,r:((y=b.color)==null?void 0:y.r)||0,g:((v=b.color)==null?void 0:v.g)||0,b:((A=b.color)==null?void 0:A.b)||0})}t.pixelPlan={pixels:P},t.nextBatchCount=f.nextBatchCount||0,t.anchor=f.anchor||null,t.imageWidth=f.imageWidth||null,t.imageHeight=f.imageHeight||null,console.log(`[PLAN OVERLAY] Plan set: ${P.length} pixels`),typeof f.enabled=="boolean"&&p(f.enabled)}function r(m){t.nextBatchCount=Math.max(0,Number(m||0)),console.log(`[PLAN OVERLAY] Next batch count: ${t.nextBatchCount}`)}function d(m){t.anchor=m,console.log("[PLAN OVERLAY] Anchor set:",m)}function h(m,f){console.log("[PLAN OVERLAY] CSS anchor set (ignored in tile system):",{x:m,y:f})}function E(){console.log("[PLAN OVERLAY] Selection mode ended (ignored in tile system)")}function C(){i(),t.pixelPlan=null,t.fetchedBlobQueue.clear(),console.log("[PLAN OVERLAY] Cleanup completed")}window.__WPA_PLAN_OVERLAY__={injectStyles:c,setEnabled:p,setPlan:s,setPlanItemsFromTileList:s,setNextBatchCount:r,setAnchor:d,setAnchorCss:h,endSelectionMode:E,render:()=>{},cleanup:C,get state(){return t}},console.log("[PLAN OVERLAY] Blue Marble tile system ready")})();async function xe(){n("\u{1F680} Iniciando WPlace Auto-Image (versi\xF3n modular)"),q(),window.__wplaceBot={...window.__wplaceBot,imageRunning:!0};let u=null,t=window.fetch,c=()=>{window.fetch!==t&&(window.fetch=t,n("\u{1F504} Fetch original restaurado")),e.positionTimeoutId&&(clearTimeout(e.positionTimeoutId),e.positionTimeoutId=null),e.cleanupObserver&&(e.cleanupObserver(),e.cleanupObserver=null),e.selectingPosition=!1};try{let a={...I},i=U("image");if(e.language=te(),!a.SITEKEY){let s=document.querySelector("*[data-sitekey]");s?(a.SITEKEY=s.getAttribute("data-sitekey"),n(`\u{1F4DD} Sitekey encontrada autom\xE1ticamente: ${a.SITEKEY.substring(0,20)}...`)):n("\u26A0\uFE0F No se pudo encontrar la sitekey autom\xE1ticamente")}async function l(){return n("\u{1F916} Intentando auto-inicio..."),Z()?(n("\u{1F3A8} Paleta de colores ya est\xE1 abierta"),!0):(n("\u{1F50D} Paleta no encontrada, buscando bot\xF3n Paint..."),fe()?(n("\u{1F446} Bot\xF3n Paint encontrado y presionado"),await T(2e3),Z()?(n("\u2705 Paleta abierta exitosamente"),!0):(n("\u274C La paleta no se abri\xF3 despu\xE9s de hacer clic"),!1)):(n("\u274C Bot\xF3n Paint no encontrado"),!1))}async function g(s=!1){n("\u{1F916} Inicializando Auto-Image..."),o.setStatus(w("image.checkingColors"),"info");let r=H();if(r.length===0)return o.setStatus(w("image.noColorsFound"),"error"),!1;let d=await ae(),h=null;d.success&&d.data.user?(h={username:d.data.user.name||"An\xF3nimo",charges:d.data.charges,maxCharges:d.data.maxCharges,pixels:d.data.user.pixelsPainted||0},u=h,e.currentCharges=d.data.charges,e.maxCharges=d.data.maxCharges||50,n(`\u{1F464} Usuario conectado: ${d.data.user.name||"An\xF3nimo"} - Cargas: ${h.charges}/${h.maxCharges} - P\xEDxeles: ${h.pixels}`)):n("\u26A0\uFE0F No se pudo obtener informaci\xF3n del usuario"),e.availableColors=r,e.colorsChecked=!0,o.setStatus(w("image.colorsFound",{count:r.length}),"success"),o.updateProgress(0,0,h),s||n(`\u2705 ${r.length} colores disponibles detectados`),o.setInitialized(!0),o.enableButtonsAfterInit();try{}catch{}return!0}let o=await me({texts:i,onConfigChange:s=>{s.pixelsPerBatch!==void 0&&(e.pixelsPerBatch=s.pixelsPerBatch),s.useAllCharges!==void 0&&(e.useAllChargesFirst=s.useAllCharges),n("Configuraci\xF3n actualizada:",s)},onInitBot:g,onUploadImage:async s=>{try{o.setStatus(w("image.loadingImage"),"info");let r=window.URL.createObjectURL(s),d=new X(r);d.originalName=s.name,await d.load();let h=d.initializeColorPalette();e.availableColors=h;let E=await d.analyzePixels();d.setCoords(0,0,0,0);let C=d.getImageData();e.imageData=C,e.imageData.processor=d,e.totalPixels=E.requiredPixels,e.paintedPixels=0,e.originalImageName=s.name,e.imageLoaded=!0,o.setStatus(w("image.imageLoaded",{count:E.requiredPixels}),"success"),o.updateProgress(0,E.requiredPixels,u),n(`\u2705 [BLUE MARBLE] Imagen cargada: ${C.width}x${C.height}, ${E.requiredPixels} p\xEDxeles v\xE1lidos`),n(`\u2705 [BLUE MARBLE] An\xE1lisis: ${E.uniqueColors} colores \xFAnicos, ${E.defacePixels} p\xEDxeles #deface`),window.URL.revokeObjectURL(r);try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),window.__WPA_PLAN_OVERLAY__.setPlan([],{enabled:!0,nextBatchCount:0}),n("\u2705 Plan overlay activado autom\xE1ticamente al cargar imagen"))}catch(m){n("\u26A0\uFE0F Error activando plan overlay:",m)}return!0}catch(r){return o.setStatus(w("image.imageError"),"error"),n("\u274C Error cargando imagen:",r),!1}},onSelectPosition:async()=>new Promise(s=>{o.setStatus(w("image.selectPositionAlert"),"info"),o.setStatus(w("image.waitingPosition"),"info"),e.selectingPosition=!0;let r=!1,d=()=>{window.fetch=async(C,m)=>{if(e.selectingPosition&&!r&&typeof C=="string"&&C.includes("/s0/pixel/")&&m&&m.method==="POST")try{n(`\u{1F3AF} Interceptando request de pintado: ${C}`);let f=await t(C,m);if(f.ok&&m.body){let P;try{P=JSON.parse(m.body)}catch(y){return n("Error parseando body del request:",y),f}if(P.coords&&Array.isArray(P.coords)&&P.coords.length>=2){let y=P.coords[0],v=P.coords[1];n(`[AUTO-IMAGE] \u{1F446} Usuario hizo clic: local(${y}, ${v})`);let A=C.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/);if(A&&!r){r=!0;let b=parseInt(A[1]),S=parseInt(A[2]);if(n(`[AUTO-IMAGE] \u{1F4CD} Posici\xF3n capturada: tile(${b}, ${S}) + pixel(${y}, ${v})`),n(`[AUTO-IMAGE] \u{1F30D} Esto corresponde a coordenada global: (${b*4e3+y}, ${S*4e3+v})`),e.tileX=b,e.tileY=S,e.startPosition={x:y,y:v},e.selectingPosition=!1,e.imageData&&e.imageData.processor){let x=e.imageData.processor;n(`[AUTO-IMAGE] \u{1F504} Llamando setCoords(${b}, ${S}, ${y}, ${v})`),x.setCoords(b,S,y,v);try{await x.createTemplateTiles(),n(`\u2705 [BLUE MARBLE] Template tiles creados para posici\xF3n tile(${b},${S}) pixel(${y},${v})`)}catch(B){n(`\u274C [BLUE MARBLE] Error creando template tiles: ${B.message}`)}let L=x.generatePixelQueue();e.remainingPixels=L,e.totalPixels=L.length,n(`\u2705 Cola de p\xEDxeles generada: ${L.length} p\xEDxeles para overlay`)}try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:b,tileY:S,pxX:y,pxY:v}),e.remainingPixels&&e.remainingPixels.length>0?(window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{anchor:{tileX:b,tileY:S,pxX:y,pxY:v},imageWidth:e.imageData.width,imageHeight:e.imageData.height,enabled:!0}),n(`\u2705 Plan overlay anclado en tile(${b},${S}) local(${y},${v})`)):n("\u26A0\uFE0F No hay p\xEDxeles para mostrar en overlay"))}catch(x){n(`\u274C Error configurando overlay: ${x.message}`)}c(),o.setStatus(w("image.positionSet"),"success"),n(`\u2705 Posici\xF3n establecida: tile(${e.tileX},${e.tileY}) local(${y},${v})`),s(!0)}else n("\u26A0\uFE0F No se pudo extraer tile de la URL:",C)}}return f}catch(f){if(n("\u274C Error interceptando pixel:",f),!r)return c(),t(C,m)}return t(C,m)}},h=()=>{let C=document.querySelectorAll("canvas");if(C.length===0){n("\u26A0\uFE0F No se encontraron elementos canvas");return}n(`\u{1F4CA} Configurando observer para ${C.length} canvas`);let m=f=>{var y;if(!e.selectingPosition||r)return;let P=f.target;if(P&&P.tagName==="CANVAS"){n("\u{1F5B1}\uFE0F Click detectado en canvas durante selecci\xF3n");try{let A=(((y=document.querySelector("canvas"))==null?void 0:y.parentElement)||document.body).getBoundingClientRect(),b=f.clientX-A.left,S=f.clientY-A.top;window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.setAnchorCss(b,S),n(`Plan overlay: ancla CSS establecida en (${b}, ${S})`))}catch(v){n("Plan Overlay: error calculando ancla CSS",v)}setTimeout(()=>{!r&&e.selectingPosition&&n("\u{1F50D} Buscando requests recientes de pintado...")},500)}};document.addEventListener("click",m),e.cleanupObserver=()=>{document.removeEventListener("click",m)}};d(),h();let E=setTimeout(()=>{e.selectingPosition&&!r&&(c(),e.cleanupObserver&&e.cleanupObserver(),o.setStatus(w("image.positionTimeout"),"error"),n("\u23F0 Timeout en selecci\xF3n de posici\xF3n"),s(!1))},12e4);e.positionTimeoutId=E}),onStartPainting:async()=>{var s;if(n("\u{1F50D} Estado para iniciar pintura:",{imageLoaded:e.imageLoaded,startPosition:e.startPosition,tileX:e.tileX,tileY:e.tileY,totalPixels:e.totalPixels,remainingPixels:((s=e.remainingPixels)==null?void 0:s.length)||0}),!e.imageLoaded||!e.startPosition)return o.setStatus(w("image.missingRequirements"),"error"),n(`\u274C Validaci\xF3n fallida: imageLoaded=${e.imageLoaded}, startPosition=${!!e.startPosition}`),!1;e.running=!0,e.stopFlag=!1,e.isFirstBatch=!0,o.setStatus(w("image.startPaintingMsg"),"success");try{return await se(e.imageData,e.startPosition,(r,d,h,E)=>{u&&(u.charges=Math.floor(e.currentCharges),E!==void 0&&(u.estimatedTime=E)),o.updateProgress(r,d,u),e.inCooldown&&e.nextBatchCooldown>0?o.updateCooldownDisplay(e.nextBatchCooldown):o.updateCooldownDisplay(0),h?h.includes("\u23F3")&&e.inCooldown?o.updateCooldownMessage(h):o.setStatus(h,"info"):o.setStatus(w("image.paintingProgress",{painted:r,total:d}),"info")},(r,d)=>{r?(o.setStatus(w("image.paintingComplete",{count:d}),"success"),de()):o.setStatus(w("image.paintingStopped"),"warning"),e.running=!1},r=>{o.setStatus(w("image.paintingError"),"error"),n("\u274C Error en proceso de pintado:",r),e.running=!1}),!0}catch(r){return o.setStatus(w("image.paintingError"),"error"),n("\u274C Error iniciando pintado:",r),e.running=!1,!1}},onStopPainting:async()=>{if(ue().hasProgress){let r=await he(w("image.confirmSaveProgress"),w("image.saveProgressTitle"),{save:w("image.saveProgress"),discard:w("image.discardProgress"),cancel:w("image.cancel")});if(r==="save"){let d=G();d.success?o.setStatus(w("image.progressSaved",{filename:d.filename}),"success"):o.setStatus(w("image.progressSaveError",{error:d.error}),"error")}else if(r==="cancel")return!1}return j(),o.setStatus(w("image.paintingStopped"),"warning"),!0},onSaveProgress:async()=>{let s=G();return s.success?o.setStatus(w("image.progressSaved",{filename:s.filename}),"success"):o.setStatus(w("image.progressSaveError",{error:s.error}),"error"),s.success},onLoadProgress:async s=>{try{let r=await ce(s);return r.success?(o.setStatus(w("image.progressLoaded",{painted:r.painted,total:r.total}),"success"),o.updateProgress(r.painted,r.total,u),n("\u2705 Progreso cargado - habilitando botones de inicio"),!0):(o.setStatus(w("image.progressLoadError",{error:r.error}),"error"),!1)}catch(r){return o.setStatus(w("image.progressLoadError",{error:r.message}),"error"),!1}},onResizeImage:()=>{e.imageLoaded&&e.imageData&&e.imageData.processor&&o.showResizeDialog(e.imageData.processor)},onConfirmResize:async(s,r,d)=>{n(`\u{1F504} Redimensionando imagen de ${s.getDimensions().width}x${s.getDimensions().height} a ${r}x${d}`);try{await s.resize(r,d);let h=await s.analyzePixels();e.imageData={processor:s,width:r,height:d,validPixelCount:h.validPixelCount,totalPixels:h.totalPixels,unknownPixels:h.unknownPixels},e.totalPixels=h.validPixelCount,e.paintedPixels=0,e.remainingPixels=[],e.lastPosition={x:0,y:0},o.updateProgress(0,h.validPixelCount,u),o.setStatus(w("image.resizeSuccess",{width:r,height:d}),"success"),n(`\u2705 Imagen redimensionada: ${h.validPixelCount} p\xEDxeles v\xE1lidos de ${h.totalPixels} totales`);try{if(window.__WPA_PLAN_OVERLAY__&&e.startPosition&&e.tileX!=null&&e.tileY!=null){await s.createTemplateTiles();let E=s.generatePixelQueue();e.remainingPixels=E,e.totalPixels=E.length,window.__WPA_PLAN_OVERLAY__.setPlan(E,{anchor:{tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y},imageWidth:r,imageHeight:d,enabled:!0}),n(`\u2705 Overlay actualizado con ${E.length} p\xEDxeles despu\xE9s del resize`)}}catch(E){n(`\u26A0\uFE0F Error actualizando overlay despu\xE9s del resize: ${E.message}`)}}catch(h){n(`\u274C Error redimensionando imagen: ${h.message}`),o.setStatus(w("image.imageError"),"error")}}}),p=s=>{let{language:r}=s.detail;n(`\u{1F30D} Imagen: Detectado cambio de idioma desde launcher: ${r}`),e.language=r};window.addEventListener("launcherLanguageChanged",p),window.addEventListener("languageChanged",p),window.addEventListener("beforeunload",()=>{c(),j(),o.destroy(),window.removeEventListener("launcherLanguageChanged",p),window.removeEventListener("languageChanged",p),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1)}),n("\u2705 Auto-Image inicializado correctamente"),setTimeout(async()=>{try{o.setStatus(w("image.autoInitializing"),"info"),n("\u{1F916} Intentando auto-inicio..."),await l()?(o.setStatus(w("image.autoInitSuccess"),"success"),n("\u2705 Auto-inicio exitoso"),o.setInitButtonVisible(!1),await g(!0)&&n("\u{1F680} Bot auto-iniciado completamente")):(o.setStatus(w("image.autoInitFailed"),"warning"),n("\u26A0\uFE0F Auto-inicio fall\xF3, se requiere inicio manual"))}catch(s){n("\u274C Error en auto-inicio:",s),o.setStatus(w("image.manualInitRequired"),"warning")}},1e3)}catch(a){throw n("\u274C Error inicializando Auto-Image:",a),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1),a}}(()=>{"use strict";var u,t;if((u=window.__wplaceBot)!=null&&u.imageRunning){alert("Auto-Image ya est\xE1 corriendo.");return}if((t=window.__wplaceBot)!=null&&t.farmRunning){alert("Auto-Farm est\xE1 ejecut\xE1ndose. Ci\xE9rralo antes de iniciar Auto-Image.");return}window.__wplaceBot||(window.__wplaceBot={}),window.__wplaceBot.imageRunning=!0,xe().catch(c=>{console.error("[BOT] Error en Auto-Image:",c),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1),alert("Auto-Image: error inesperado. Revisa consola.")})})();})();
