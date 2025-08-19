/* WPlace AutoBOT — uso bajo tu responsabilidad. Compilado 2025-08-19T16:22:24.942Z */
(()=>{var s=(...u)=>console.log("[WPA-UI]",...u);var Q={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"Selecci\xF3n",user:"Usuario",charges:"Cargas",backend:"Backend",database:"Database",uptime:"Uptime",close:"Cerrar",launch:"Lanzar",loading:"Cargando\u2026",executing:"Ejecutando\u2026",downloading:"Descargando script\u2026",chooseBot:"Elige un bot y presiona Lanzar",readyToLaunch:"Listo para lanzar",loadError:"Error al cargar",loadErrorMsg:"No se pudo cargar el bot seleccionado. Revisa tu conexi\xF3n o int\xE9ntalo de nuevo.",checking:"\u{1F504} Verificando...",online:"\u{1F7E2} Online",offline:"\u{1F534} Offline",ok:"\u{1F7E2} OK",error:"\u{1F534} Error",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Iniciar Auto-BOT",uploadImage:"Subir Imagen",resizeImage:"Redimensionar Imagen",selectPosition:"Seleccionar Posici\xF3n",startPainting:"Iniciar Pintura",stopPainting:"Detener Pintura",saveProgress:"Guardar Progreso",loadProgress:"Cargar Progreso",checkingColors:"\u{1F50D} Verificando colores disponibles...",noColorsFound:"\u274C \xA1Abre la paleta de colores en el sitio e int\xE9ntalo de nuevo!",colorsFound:"\u2705 {count} colores disponibles encontrados",loadingImage:"\u{1F5BC}\uFE0F Cargando imagen...",imageLoaded:"\u2705 Imagen cargada con {count} p\xEDxeles v\xE1lidos",imageError:"\u274C Error al cargar la imagen",selectPositionAlert:"\xA1Pinta el primer p\xEDxel en la ubicaci\xF3n donde quieres que comience el arte!",waitingPosition:"\u{1F446} Esperando que pintes el p\xEDxel de referencia...",positionSet:"\u2705 \xA1Posici\xF3n establecida con \xE9xito!",positionTimeout:"\u274C Tiempo agotado para seleccionar posici\xF3n",positionDetected:"\u{1F3AF} Posici\xF3n detectada, procesando...",positionError:"\u274C Error detectando posici\xF3n, int\xE9ntalo de nuevo",startPaintingMsg:"\u{1F3A8} Iniciando pintura...",paintingProgress:"\u{1F9F1} Progreso: {painted}/{total} p\xEDxeles...",noCharges:"\u231B Sin cargas. Esperando {time}...",paintingStopped:"\u23F9\uFE0F Pintura detenida por el usuario",paintingComplete:"\u2705 \xA1Pintura completada! {count} p\xEDxeles pintados.",paintingError:"\u274C Error durante la pintura",missingRequirements:"\u274C Carga una imagen y selecciona una posici\xF3n primero",progress:"Progreso",userName:"Usuario",pixels:"P\xEDxeles",charges:"Cargas",estimatedTime:"Tiempo estimado",initMessage:"Haz clic en 'Iniciar Auto-BOT' para comenzar",waitingInit:"Esperando inicializaci\xF3n...",resizeSuccess:"\u2705 Imagen redimensionada a {width}x{height}",paintingPaused:"\u23F8\uFE0F Pintura pausada en la posici\xF3n X: {x}, Y: {y}",pixelsPerBatch:"P\xEDxeles por lote",batchSize:"Tama\xF1o del lote",nextBatchTime:"Siguiente lote en",useAllCharges:"Usar todas las cargas disponibles",showOverlay:"Mostrar overlay",maxCharges:"Cargas m\xE1ximas por lote",waitingForCharges:"\u23F3 Esperando cargas: {current}/{needed}",timeRemaining:"Tiempo restante",cooldownWaiting:"\u23F3 Esperando {time} para continuar...",progressSaved:"\u2705 Progreso guardado como {filename}",progressLoaded:"\u2705 Progreso cargado: {painted}/{total} p\xEDxeles pintados",progressLoadError:"\u274C Error al cargar progreso: {error}",progressSaveError:"\u274C Error al guardar progreso: {error}",confirmSaveProgress:"\xBFDeseas guardar el progreso actual antes de detener?",saveProgressTitle:"Guardar Progreso",discardProgress:"Descartar",cancel:"Cancelar",minimize:"Minimizar",width:"Ancho",height:"Alto",keepAspect:"Mantener proporci\xF3n",apply:"Aplicar",overlayOn:"Overlay: ON",overlayOff:"Overlay: OFF",passCompleted:"\u2705 Pasada completada: {painted} p\xEDxeles pintados | Progreso: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Esperando regeneraci\xF3n de cargas: {current}/{needed} - Tiempo: {time}",waitingChargesCountdown:"\u23F3 Esperando cargas: {current}/{needed} - Quedan: {time}",autoInitializing:"\u{1F916} Inicializando autom\xE1ticamente...",autoInitSuccess:"\u2705 Bot iniciado autom\xE1ticamente",autoInitFailed:"\u26A0\uFE0F No se pudo iniciar autom\xE1ticamente. Usa el bot\xF3n manual.",paletteDetected:"\u{1F3A8} Paleta de colores detectada",paletteNotFound:"\u{1F50D} Buscando paleta de colores...",clickingPaintButton:"\u{1F446} Haciendo clic en el bot\xF3n Paint...",paintButtonNotFound:"\u274C Bot\xF3n Paint no encontrado",manualInitRequired:"\u{1F527} Inicio manual requerido",retryAttempt:"\u{1F504} Reintento {attempt}/{maxAttempts} en {delay}s...",retryError:"\u{1F4A5} Error en intento {attempt}/{maxAttempts}, reintentando en {delay}s...",retryFailed:"\u274C Fall\xF3 despu\xE9s de {maxAttempts} intentos. Continuando con siguiente lote...",networkError:"\u{1F310} Error de red. Reintentando...",serverError:"\u{1F525} Error del servidor. Reintentando...",timeoutError:"\u23F0 Timeout del servidor. Reintentando..."},farm:{title:"WPlace Farm Bot",start:"Iniciar",stop:"Detener",stopped:"Bot detenido",calibrate:"Calibrar",paintOnce:"Una vez",checkingStatus:"Verificando estado...",configuration:"Configuraci\xF3n",delay:"Delay (ms)",pixelsPerBatch:"P\xEDxeles/lote",minCharges:"Cargas m\xEDn",colorMode:"Modo color",random:"Aleatorio",fixed:"Fijo",range:"Rango",fixedColor:"Color fijo",advanced:"Avanzado",tileX:"Tile X",tileY:"Tile Y",customPalette:"Paleta personalizada",paletteExample:"ej: #FF0000,#00FF00,#0000FF",capture:"Capturar",painted:"Pintados",charges:"Cargas",retries:"Fallos",tile:"Tile",configSaved:"Configuraci\xF3n guardada",configLoaded:"Configuraci\xF3n cargada",configReset:"Configuraci\xF3n reiniciada",captureInstructions:"Pinta un p\xEDxel manualmente para capturar coordenadas...",backendOnline:"Backend Online",backendOffline:"Backend Offline",startingBot:"Iniciando bot...",stoppingBot:"Deteniendo bot...",calibrating:"Calibrando...",alreadyRunning:"Auto-Farm ya est\xE1 corriendo.",imageRunningWarning:"Auto-Image est\xE1 ejecut\xE1ndose. Ci\xE9rralo antes de iniciar Auto-Farm.",selectPosition:"Seleccionar Zona",selectPositionAlert:"\u{1F3AF} Pinta un p\xEDxel en una zona DESPOBLADA del mapa para establecer el \xE1rea de farming",waitingPosition:"\u{1F446} Esperando que pintes el p\xEDxel de referencia...",positionSet:"\u2705 \xA1Zona establecida! Radio: 500px",positionTimeout:"\u274C Tiempo agotado para seleccionar zona",missingPosition:"\u274C Selecciona una zona primero usando 'Seleccionar Zona'",farmRadius:"Radio farm",positionInfo:"Zona actual",farmingInRadius:"\u{1F33E} Farming en radio {radius}px desde ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANTE: Selecciona una zona DESPOBLADA para evitar conflictos",noPosition:"Sin zona",currentZone:"Zona: ({x},{y})",autoSelectPosition:"\u{1F3AF} Selecciona una zona primero. Pinta un p\xEDxel en el mapa para establecer la zona de farming"},common:{yes:"S\xED",no:"No",ok:"Aceptar",cancel:"Cancelar",close:"Cerrar",save:"Guardar",load:"Cargar",delete:"Eliminar",edit:"Editar",start:"Iniciar",stop:"Detener",pause:"Pausar",resume:"Reanudar",reset:"Reiniciar",settings:"Configuraci\xF3n",help:"Ayuda",about:"Acerca de",language:"Idioma",loading:"Cargando...",error:"Error",success:"\xC9xito",warning:"Advertencia",info:"Informaci\xF3n",languageChanged:"Idioma cambiado a {language}"}};var K={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"Selection",user:"User",charges:"Charges",backend:"Backend",database:"Database",uptime:"Uptime",close:"Close",launch:"Launch",loading:"Loading\u2026",executing:"Executing\u2026",downloading:"Downloading script\u2026",chooseBot:"Choose a bot and press Launch",readyToLaunch:"Ready to launch",loadError:"Load error",loadErrorMsg:"Could not load the selected bot. Check your connection or try again.",checking:"\u{1F504} Checking...",online:"\u{1F7E2} Online",offline:"\u{1F534} Offline",ok:"\u{1F7E2} OK",error:"\u{1F534} Error",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Initialize Auto-BOT",uploadImage:"Upload Image",resizeImage:"Resize Image",selectPosition:"Select Position",startPainting:"Start Painting",stopPainting:"Stop Painting",saveProgress:"Save Progress",loadProgress:"Load Progress",checkingColors:"\u{1F50D} Checking available colors...",noColorsFound:"\u274C Open the color palette on the site and try again!",colorsFound:"\u2705 Found {count} available colors",loadingImage:"\u{1F5BC}\uFE0F Loading image...",imageLoaded:"\u2705 Image loaded with {count} valid pixels",imageError:"\u274C Error loading image",selectPositionAlert:"Paint the first pixel at the location where you want the art to start!",waitingPosition:"\u{1F446} Waiting for you to paint the reference pixel...",positionSet:"\u2705 Position set successfully!",positionTimeout:"\u274C Timeout for position selection",positionDetected:"\u{1F3AF} Position detected, processing...",positionError:"\u274C Error detecting position, please try again",startPaintingMsg:"\u{1F3A8} Starting painting...",paintingProgress:"\u{1F9F1} Progress: {painted}/{total} pixels...",noCharges:"\u231B No charges. Waiting {time}...",paintingStopped:"\u23F9\uFE0F Painting stopped by user",paintingComplete:"\u2705 Painting completed! {count} pixels painted.",paintingError:"\u274C Error during painting",missingRequirements:"\u274C Load an image and select a position first",progress:"Progress",userName:"User",pixels:"Pixels",charges:"Charges",estimatedTime:"Estimated time",initMessage:"Click 'Initialize Auto-BOT' to begin",waitingInit:"Waiting for initialization...",resizeSuccess:"\u2705 Image resized to {width}x{height}",paintingPaused:"\u23F8\uFE0F Painting paused at position X: {x}, Y: {y}",pixelsPerBatch:"Pixels per batch",batchSize:"Batch size",nextBatchTime:"Next batch in",useAllCharges:"Use all available charges",showOverlay:"Show overlay",maxCharges:"Max charges per batch",waitingForCharges:"\u23F3 Waiting for charges: {current}/{needed}",timeRemaining:"Time remaining",cooldownWaiting:"\u23F3 Waiting {time} to continue...",progressSaved:"\u2705 Progress saved as {filename}",progressLoaded:"\u2705 Progress loaded: {painted}/{total} pixels painted",progressLoadError:"\u274C Error loading progress: {error}",progressSaveError:"\u274C Error saving progress: {error}",confirmSaveProgress:"Do you want to save the current progress before stopping?",saveProgressTitle:"Save Progress",discardProgress:"Discard",cancel:"Cancel",minimize:"Minimize",width:"Width",height:"Height",keepAspect:"Keep aspect ratio",apply:"Apply",overlayOn:"Overlay: ON",overlayOff:"Overlay: OFF",passCompleted:"\u2705 Pass completed: {painted} pixels painted | Progress: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Waiting for charge regeneration: {current}/{needed} - Time: {time}",waitingChargesCountdown:"\u23F3 Waiting for charges: {current}/{needed} - Remaining: {time}",autoInitializing:"\u{1F916} Auto-initializing...",autoInitSuccess:"\u2705 Bot auto-started successfully",autoInitFailed:"\u26A0\uFE0F Could not auto-start. Use manual button.",paletteDetected:"\u{1F3A8} Color palette detected",paletteNotFound:"\u{1F50D} Searching for color palette...",clickingPaintButton:"\u{1F446} Clicking Paint button...",paintButtonNotFound:"\u274C Paint button not found",manualInitRequired:"\u{1F527} Manual initialization required",retryAttempt:"\u{1F504} Retry {attempt}/{maxAttempts} in {delay}s...",retryError:"\u{1F4A5} Error in attempt {attempt}/{maxAttempts}, retrying in {delay}s...",retryFailed:"\u274C Failed after {maxAttempts} attempts. Continuing with next batch...",networkError:"\u{1F310} Network error. Retrying...",serverError:"\u{1F525} Server error. Retrying...",timeoutError:"\u23F0 Server timeout. Retrying..."},farm:{title:"WPlace Farm Bot",start:"Start",stop:"Stop",stopped:"Bot stopped",calibrate:"Calibrate",paintOnce:"Once",checkingStatus:"Checking status...",configuration:"Configuration",delay:"Delay (ms)",pixelsPerBatch:"Pixels/batch",minCharges:"Min charges",colorMode:"Color mode",random:"Random",fixed:"Fixed",range:"Range",fixedColor:"Fixed color",advanced:"Advanced",tileX:"Tile X",tileY:"Tile Y",customPalette:"Custom palette",paletteExample:"e.g: #FF0000,#00FF00,#0000FF",capture:"Capture",painted:"Painted",charges:"Charges",retries:"Retries",tile:"Tile",configSaved:"Configuration saved",configLoaded:"Configuration loaded",configReset:"Configuration reset",captureInstructions:"Paint a pixel manually to capture coordinates...",backendOnline:"Backend Online",backendOffline:"Backend Offline",startingBot:"Starting bot...",stoppingBot:"Stopping bot...",calibrating:"Calibrating...",alreadyRunning:"Auto-Farm is already running.",imageRunningWarning:"Auto-Image is running. Close it before starting Auto-Farm.",selectPosition:"Select Area",selectPositionAlert:"\u{1F3AF} Paint a pixel in an EMPTY area of the map to set the farming zone",waitingPosition:"\u{1F446} Waiting for you to paint the reference pixel...",positionSet:"\u2705 Area set! Radius: 500px",positionTimeout:"\u274C Timeout for area selection",missingPosition:"\u274C Select an area first using 'Select Area'",farmRadius:"Farm radius",positionInfo:"Current area",farmingInRadius:"\u{1F33E} Farming in {radius}px radius from ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANT: Select an EMPTY area to avoid conflicts",noPosition:"No area",currentZone:"Zone: ({x},{y})",autoSelectPosition:"\u{1F3AF} Select an area first. Paint a pixel on the map to set the farming zone"},common:{yes:"Yes",no:"No",ok:"OK",cancel:"Cancel",close:"Close",save:"Save",load:"Load",delete:"Delete",edit:"Edit",start:"Start",stop:"Stop",pause:"Pause",resume:"Resume",reset:"Reset",settings:"Settings",help:"Help",about:"About",language:"Language",loading:"Loading...",error:"Error",success:"Success",warning:"Warning",info:"Information",languageChanged:"Language changed to {language}"}};var J={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"S\xE9lection",user:"Utilisateur",charges:"Charges",backend:"Backend",database:"Base de donn\xE9es",uptime:"Temps actif",close:"Fermer",launch:"Lancer",loading:"Chargement\u2026",executing:"Ex\xE9cution\u2026",downloading:"T\xE9l\xE9chargement du script\u2026",chooseBot:"Choisissez un bot et appuyez sur Lancer",readyToLaunch:"Pr\xEAt \xE0 lancer",loadError:"Erreur de chargement",loadErrorMsg:"Impossible de charger le bot s\xE9lectionn\xE9. V\xE9rifiez votre connexion ou r\xE9essayez.",checking:"\u{1F504} V\xE9rification...",online:"\u{1F7E2} En ligne",offline:"\u{1F534} Hors ligne",ok:"\u{1F7E2} OK",error:"\u{1F534} Erreur",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Initialiser Auto-BOT",uploadImage:"T\xE9l\xE9charger Image",resizeImage:"Redimensionner Image",selectPosition:"S\xE9lectionner Position",startPainting:"Commencer Peinture",stopPainting:"Arr\xEAter Peinture",saveProgress:"Sauvegarder Progr\xE8s",loadProgress:"Charger Progr\xE8s",checkingColors:"\u{1F50D} V\xE9rification des couleurs disponibles...",noColorsFound:"\u274C Ouvrez la palette de couleurs sur le site et r\xE9essayez!",colorsFound:"\u2705 {count} couleurs disponibles trouv\xE9es",loadingImage:"\u{1F5BC}\uFE0F Chargement de l'image...",imageLoaded:"\u2705 Image charg\xE9e avec {count} pixels valides",imageError:"\u274C Erreur lors du chargement de l'image",selectPositionAlert:"Peignez le premier pixel \xE0 l'emplacement o\xF9 vous voulez que l'art commence!",waitingPosition:"\u{1F446} En attente que vous peigniez le pixel de r\xE9f\xE9rence...",positionSet:"\u2705 Position d\xE9finie avec succ\xE8s!",positionTimeout:"\u274C D\xE9lai d\xE9pass\xE9 pour la s\xE9lection de position",positionDetected:"\u{1F3AF} Position d\xE9tect\xE9e, traitement...",positionError:"\u274C Erreur d\xE9tectant la position, essayez \xE0 nouveau",startPaintingMsg:"\u{1F3A8} D\xE9but de la peinture...",paintingProgress:"\u{1F9F1} Progr\xE8s: {painted}/{total} pixels...",noCharges:"\u231B Aucune charge. Attendre {time}...",paintingStopped:"\u23F9\uFE0F Peinture arr\xEAt\xE9e par l'utilisateur",paintingComplete:"\u2705 Peinture termin\xE9e! {count} pixels peints.",paintingError:"\u274C Erreur pendant la peinture",missingRequirements:"\u274C Chargez une image et s\xE9lectionnez une position d'abord",progress:"Progr\xE8s",userName:"Usager",pixels:"Pixels",charges:"Charges",estimatedTime:"Temps estim\xE9",initMessage:"Cliquez sur 'Initialiser Auto-BOT' pour commencer",waitingInit:"En attente d'initialisation...",resizeSuccess:"\u2705 Image redimensionn\xE9e \xE0 {width}x{height}",paintingPaused:"\u23F8\uFE0F Peinture mise en pause \xE0 la position X: {x}, Y: {y}",pixelsPerBatch:"Pixels par lot",batchSize:"Taille du lot",nextBatchTime:"Prochain lot dans",useAllCharges:"Utiliser toutes les charges disponibles",showOverlay:"Afficher l'overlay",maxCharges:"Charges max par lot",waitingForCharges:"\u23F3 En attente de charges: {current}/{needed}",timeRemaining:"Temps restant",cooldownWaiting:"\u23F3 Attendre {time} pour continuer...",progressSaved:"\u2705 Progr\xE8s sauvegard\xE9 sous {filename}",progressLoaded:"\u2705 Progr\xE8s charg\xE9: {painted}/{total} pixels peints",progressLoadError:"\u274C Erreur lors du chargement du progr\xE8s: {error}",progressSaveError:"\u274C Erreur lors de la sauvegarde du progr\xE8s: {error}",confirmSaveProgress:"Voulez-vous sauvegarder le progr\xE8s actuel avant d'arr\xEAter?",saveProgressTitle:"Sauvegarder Progr\xE8s",discardProgress:"Abandonner",cancel:"Annuler",minimize:"Minimiser",width:"Largeur",height:"Hauteur",keepAspect:"Garder les proportions",apply:"Appliquer",overlayOn:"Overlay : ON",overlayOff:"Overlay : OFF",passCompleted:"\u2705 Passage termin\xE9: {painted} pixels peints | Progr\xE8s: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Attente de r\xE9g\xE9n\xE9ration des charges: {current}/{needed} - Temps: {time}",waitingChargesCountdown:"\u23F3 Attente des charges: {current}/{needed} - Restant: {time}",autoInitializing:"\u{1F916} Initialisation automatique...",autoInitSuccess:"\u2705 Bot d\xE9marr\xE9 automatiquement",autoInitFailed:"\u26A0\uFE0F Impossible de d\xE9marrer automatiquement. Utilisez le bouton manuel.",paletteDetected:"\u{1F3A8} Palette de couleurs d\xE9tect\xE9e",paletteNotFound:"\u{1F50D} Recherche de la palette de couleurs...",clickingPaintButton:"\u{1F446} Clic sur le bouton Paint...",paintButtonNotFound:"\u274C Bouton Paint introuvable",manualInitRequired:"\u{1F527} Initialisation manuelle requise",retryAttempt:"\u{1F504} Tentative {attempt}/{maxAttempts} dans {delay}s...",retryError:"\u{1F4A5} Erreur dans tentative {attempt}/{maxAttempts}, nouvel essai dans {delay}s...",retryFailed:"\u274C \xC9chec apr\xE8s {maxAttempts} tentatives. Continuant avec le lot suivant...",networkError:"\u{1F310} Erreur r\xE9seau. Nouvel essai...",serverError:"\u{1F525} Erreur serveur. Nouvel essai...",timeoutError:"\u23F0 Timeout serveur. Nouvel essai..."},farm:{title:"WPlace Farm Bot",start:"D\xE9marrer",stop:"Arr\xEAter",stopped:"Bot arr\xEAt\xE9",calibrate:"Calibrer",paintOnce:"Une fois",checkingStatus:"V\xE9rification du statut...",configuration:"Configuration",delay:"D\xE9lai (ms)",pixelsPerBatch:"Pixels/lot",minCharges:"Charges min",colorMode:"Mode couleur",random:"Al\xE9atoire",fixed:"Fixe",range:"Plage",fixedColor:"Couleur fixe",advanced:"Avanc\xE9",tileX:"Tuile X",tileY:"Tuile Y",customPalette:"Palette personnalis\xE9e",paletteExample:"ex: #FF0000,#00FF00,#0000FF",capture:"Capturer",painted:"Peints",charges:"Charges",retries:"\xC9checs",tile:"Tuile",configSaved:"Configuration sauvegard\xE9e",configLoaded:"Configuration charg\xE9e",configReset:"Configuration r\xE9initialis\xE9e",captureInstructions:"Peindre un pixel manuellement pour capturer les coordonn\xE9es...",backendOnline:"Backend En ligne",backendOffline:"Backend Hors ligne",startingBot:"D\xE9marrage du bot...",stoppingBot:"Arr\xEAt du bot...",calibrating:"Calibrage...",alreadyRunning:"Auto-Farm est d\xE9j\xE0 en cours d'ex\xE9cution.",imageRunningWarning:"Auto-Image est en cours d'ex\xE9cution. Fermez-le avant de d\xE9marrer Auto-Farm.",selectPosition:"S\xE9lectionner Zone",selectPositionAlert:"\u{1F3AF} Peignez un pixel dans une zone VIDE de la carte pour d\xE9finir la zone de farming",waitingPosition:"\u{1F446} En attente que vous peigniez le pixel de r\xE9f\xE9rence...",positionSet:"\u2705 Zone d\xE9finie! Rayon: 500px",positionTimeout:"\u274C D\xE9lai d\xE9pass\xE9 pour la s\xE9lection de zone",missingPosition:"\u274C S\xE9lectionnez une zone d'abord en utilisant 'S\xE9lectionner Zone'",farmRadius:"Rayon farm",positionInfo:"Zone actuelle",farmingInRadius:"\u{1F33E} Farming dans un rayon de {radius}px depuis ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANT: S\xE9lectionnez une zone VIDE pour \xE9viter les conflits",noPosition:"Aucune zone",currentZone:"Zone: ({x},{y})",autoSelectPosition:"\u{1F3AF} S\xE9lectionnez une zone d'abord. Peignez un pixel sur la carte pour d\xE9finir la zone de farming"},common:{yes:"Oui",no:"Non",ok:"OK",cancel:"Annuler",close:"Fermer",save:"Sauvegarder",load:"Charger",delete:"Supprimer",edit:"Modifier",start:"D\xE9marrer",stop:"Arr\xEAter",pause:"Pause",resume:"Reprendre",reset:"R\xE9initialiser",settings:"Param\xE8tres",help:"Aide",about:"\xC0 propos",language:"Langue",loading:"Chargement...",error:"Erreur",success:"Succ\xE8s",warning:"Avertissement",info:"Information",languageChanged:"Langue chang\xE9e en {language}"}};var ee={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C",autoImage:"\u{1F3A8} \u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",selection:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",user:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",charges:"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",backend:"\u0411\u044D\u043A\u0435\u043D\u0434",database:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445",uptime:"\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",launch:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",executing:"\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",downloading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430...",chooseBot:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043E\u0442\u0430 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",readyToLaunch:"\u0413\u043E\u0442\u043E\u0432\u043E \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443",loadError:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",loadErrorMsg:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u043E\u0442\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",checking:"\u{1F504} \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430...",online:"\u{1F7E2} \u041E\u043D\u043B\u0430\u0439\u043D",offline:"\u{1F534} \u041E\u0444\u043B\u0430\u0439\u043D",ok:"\u{1F7E2} \u041E\u041A",error:"\u{1F534} \u041E\u0448\u0438\u0431\u043A\u0430",unknown:"-"},image:{title:"WPlace \u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",initBot:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C Auto-BOT",uploadImage:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",resizeImage:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",selectPosition:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u0430",startPainting:"\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C",stopPainting:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",saveProgress:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",loadProgress:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",checkingColors:"\u{1F50D} \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432...",noColorsFound:"\u274C \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0446\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430!",colorsFound:"\u2705 \u041D\u0430\u0439\u0434\u0435\u043D\u043E {count} \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432",loadingImage:"\u{1F5BC}\uFE0F \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F...",imageLoaded:"\u2705 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0441 {count} \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u043C\u0438",imageError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",selectPositionAlert:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u0442\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u0433\u0434\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0441\u044F!",waitingPosition:"\u{1F446} \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u043A\u0441\u0435\u043B\u044F....",positionSet:"\u2705 \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!",positionTimeout:"\u274C \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",positionDetected:"\u{1F3AF} \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u0430, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430...",positionError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",startPaintingMsg:"\u{1F3A8} \u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F...",paintingProgress:"\u{1F9F1} \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: {painted} \u0438\u0437 {total} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439...",noCharges:"\u231B \u041D\u0435\u0442 \u0437\u0430\u0440\u044F\u0434\u043E\u0432. \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 {time}...",paintingStopped:"\u23F9\uFE0F \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C",paintingComplete:"\u2705 \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E! {count} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E.",paintingError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F",missingRequirements:"\u274C \u0421\u043F\u0435\u0440\u0432\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u0430",progress:"\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",userName:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",pixels:"\u041F\u0438\u043A\u0441\u0435\u043B\u0438",charges:"\u0417\u0430\u0440\u044F\u0434\u044B",estimatedTime:"\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",initMessage:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C Auto-BOT\xBB, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C",waitingInit:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438...",resizeSuccess:"\u2705 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E \u0434\u043E {width}x{height}",paintingPaused:"\u23F8\uFE0F \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 X: {x}, Y: {y}",pixelsPerBatch:"\u041F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0432 \u043F\u0440\u043E\u0445\u043E\u0434\u0435",batchSize:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u0440\u043E\u0445\u043E\u0434\u0430",nextBatchTime:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437",useAllCharges:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0437\u0430\u0440\u044F\u0434\u044B",showOverlay:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435",maxCharges:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0437\u0430\u0440\u044F\u0434\u043E\u0432 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0434",waitingForCharges:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u043E\u0432: {current} \u0438\u0437 {needed}",timeRemaining:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",cooldownWaiting:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 {time} \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F...",progressSaved:"\u2705 \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u043A\u0430\u043A {filename}",progressLoaded:"\u2705 \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D: {painted} \u0438\u0437 {total} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E",progressLoadError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430: {error}",progressSaveError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430: {error}",confirmSaveProgress:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043F\u0435\u0440\u0435\u0434 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439?",saveProgressTitle:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",discardProgress:"\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",minimize:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",width:"\u0428\u0438\u0440\u0438\u043D\u0430",height:"\u0412\u044B\u0441\u043E\u0442\u0430",keepAspect:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",apply:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",passCompleted:"\u2705 \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D: {painted} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E | \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: {percent}% ({current} \u0438\u0437 {total})",waitingChargesRegen:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0440\u044F\u0434\u0430: {current} \u0438\u0437 {needed} - \u0412\u0440\u0435\u043C\u044F: {time}",waitingChargesCountdown:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u043E\u0432: {current} \u0438\u0437 {needed} - \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F: {time}",autoInitializing:"\u{1F916} \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F...",autoInitSuccess:"\u2705 \u0411\u043E\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438",autoInitFailed:"\u26A0\uFE0F \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0443\u0441\u043A. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.",paletteDetected:"\u{1F3A8} \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430",paletteNotFound:"\u{1F50D} \u041F\u043E\u0438\u0441\u043A \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u044B...",clickingPaintButton:"\u{1F446} \u041D\u0430\u0436\u0430\u0442\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \xABPaint\xBB...",paintButtonNotFound:"\u274C \u041A\u043D\u043E\u043F\u043A\u0430 \xABPaint\xBB \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",manualInitRequired:"\u{1F527} \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",retryAttempt:"\u{1F504} \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430 {attempt} \u0438\u0437 {maxAttempts} \u0447\u0435\u0440\u0435\u0437 {delay}s...",retryError:"\u{1F4A5} \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 {attempt} \u0438\u0437 {maxAttempts}, \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 {delay}s...",retryFailed:"\u274C \u041F\u0440\u043E\u0432\u0430\u043B\u0435\u043D\u043E \u0441\u043F\u0443\u0441\u0442\u044F {maxAttempts} \u043F\u043E\u043F\u044B\u0442\u043E\u043A. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u043E\u0445\u043E\u0434\u0435...",networkError:"\u{1F310} \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...",serverError:"\u{1F525} \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...",timeoutError:"\u23F0 \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430..."},farm:{title:"WPlace \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C",start:"\u041D\u0430\u0447\u0430\u0442\u044C",stop:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",stopped:"\u0411\u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",calibrate:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u0430\u0442\u044C",paintOnce:"\u0415\u0434\u0438\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u043E",checkingStatus:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430...",configuration:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F",delay:"\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 (\u043C\u0441)",pixelsPerBatch:"\u041F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0434",minCharges:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E",colorMode:"\u0420\u0435\u0436\u0438\u043C \u0446\u0432\u0435\u0442\u043E\u0432",random:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",range:"\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D",fixedColor:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",advanced:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435",tileX:"\u041F\u043B\u0438\u0442\u043A\u0430 X",tileY:"\u041F\u043B\u0438\u0442\u043A\u0430 Y",customPalette:"\u0421\u0432\u043E\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430",paletteExample:"\u043F\u0440\u0438\u043C\u0435\u0440: #FF0000,#00FF00,#0000FF",capture:"\u0417\u0430\u0445\u0432\u0430\u0442",painted:"\u0417\u0430\u043A\u0440\u0430\u0448\u0435\u043D\u043E",charges:"\u0417\u0430\u0440\u044F\u0434\u044B",retries:"\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0438",tile:"\u041F\u043B\u0438\u0442\u043A\u0430",configSaved:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",configLoaded:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430",configReset:"\u0421\u0431\u0440\u043E\u0441 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",captureInstructions:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043B\u044F \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442...",backendOnline:"\u0411\u044D\u043A\u044D\u043D\u0434 \u041E\u043D\u043B\u0430\u0439\u043D",backendOffline:"\u0411\u044D\u043A\u044D\u043D\u0434",startingBot:"\u0417\u0430\u043F\u0443\u0441\u043A \u0431\u043E\u0442\u0430...",stoppingBot:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u043E\u0442\u0430...",calibrating:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430...",alreadyRunning:"\u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C \u0443\u0436\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D",imageRunningWarning:"\u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043E. \u0417\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C\u0430.",selectPosition:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",selectPositionAlert:"\u{1F3AF} \u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u041F\u0423\u0421\u0422\u041E\u0419 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0444\u0430\u0440\u043C\u0430.",waitingPosition:"\u{1F446} \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u043A\u0441\u0435\u043B\u044F....",positionSet:"\u2705 \u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430! \u0420\u0430\u0434\u0438\u0443\u0441: 500px",positionTimeout:"\u274C \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",missingPosition:"\u274C \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \xAB\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C\xBB",farmRadius:"\u0420\u0430\u0434\u0438\u0443\u0441 \u0444\u0430\u0440\u043C\u0430",positionInfo:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C",farmingInRadius:"\u{1F33E} \u0424\u0430\u0440\u043C \u0432 \u0440\u0430\u0434\u0438\u0443\u0441\u0435 {radius}px \u043E\u0442 ({x},{y})",selectEmptyArea:"\u26A0\uFE0F \u0412\u0410\u0416\u041D\u041E: \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041F\u0423\u0421\u0422\u0423\u042E \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432.",noPosition:"\u041D\u0435\u0442 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",currentZone:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C: ({x},{y})",autoSelectPosition:"\u{1F3AF} \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C. \u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0444\u0430\u0440\u043C\u0430."},common:{yes:"\u0414\u0430",no:"\u041D\u0435\u0442",ok:"\u041E\u041A",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",load:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",edit:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",start:"\u041D\u0430\u0447\u0430\u0442\u044C",stop:"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C",pause:"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",resume:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",help:"\u041F\u043E\u043C\u043E\u0449\u044C",about:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",language:"\u042F\u0437\u044B\u043A",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",error:"\u041E\u0448\u0438\u0431\u043A\u0430",success:"\u0423\u0441\u043F\u0435\u0445",warning:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",info:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",languageChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043D\u0430 {language}"}};var k={es:Q,en:K,fr:J,ru:ee},N="es",Y=k[N];function Pe(){let t=(window.navigator.language||window.navigator.userLanguage||"es").split("-")[0].toLowerCase();return k[t]?t:"es"}function we(){return null}function q(){let u=we(),t=Pe(),d="es";return u&&k[u]?d=u:t&&k[t]&&(d=t),be(d),d}function be(u){if(!k[u]){console.warn(`Idioma '${u}' no disponible. Usando '${N}'`);return}N=u,Y=k[u],typeof window!="undefined"&&window.CustomEvent&&window.dispatchEvent(new window.CustomEvent("languageChanged",{detail:{language:u,translations:Y}}))}function te(){return N}function b(u,t={}){let d=u.split("."),a=Y;for(let i of d)if(a&&typeof a=="object"&&i in a)a=a[i];else return console.warn(`Clave de traducci\xF3n no encontrada: '${u}'`),u;return typeof a!="string"?(console.warn(`Clave de traducci\xF3n no es string: '${u}'`),u):ye(a,t)}function ye(u,t){return!t||Object.keys(t).length===0?u:u.replace(/\{(\w+)\}/g,(d,a)=>t[a]!==void 0?t[a]:d)}function W(u){return Y[u]?Y[u]:(console.warn(`Secci\xF3n de traducci\xF3n no encontrada: '${u}'`),{})}q();var B={SITEKEY:"0x4AAAAAABpqJe8FO0N84q0F",COOLDOWN_DEFAULT:31e3,TRANSPARENCY_THRESHOLD:100,WHITE_THRESHOLD:250,LOG_INTERVAL:10,TILE_SIZE:4e3,PIXELS_PER_BATCH:20,CHARGE_REGEN_MS:3e4,THEME:{primary:"#000000",secondary:"#111111",accent:"#222222",text:"#ffffff",highlight:"#775ce3",success:"#00ff00",error:"#ff0000",warning:"#ffaa00"}};var e={running:!1,imageLoaded:!1,processing:!1,totalPixels:0,paintedPixels:0,availableColors:[],currentCharges:0,cooldown:B.COOLDOWN_DEFAULT,imageData:null,stopFlag:!1,colorsChecked:!1,startPosition:null,selectingPosition:!1,positionTimeoutId:null,cleanupObserver:null,region:null,minimized:!1,lastPosition:{x:0,y:0},estimatedTime:0,language:"es",tileX:null,tileY:null,pixelsPerBatch:B.PIXELS_PER_BATCH,useAllChargesFirst:!0,isFirstBatch:!0,maxCharges:50,nextBatchCooldown:0,inCooldown:!1,cooldownEndTime:0,remainingPixels:[],lastChargeUpdate:0,chargeDecimalPart:0,originalImageName:null,retryCount:0};var U=class{constructor(){this.detectedSize=null,this.confidence=0}detectFromUrl(){try{let t=window.location.href,d=new URLSearchParams(window.location.search),a=window.location.hash,i=null;if(d.has("x")&&d.has("y"))i=[parseInt(d.get("x")),parseInt(d.get("y"))];else if(a){let l=a.match(/#(-?\d+),(-?\d+)/);l&&(i=[parseInt(l[1]),parseInt(l[2])])}if(i&&(Math.abs(i[0])>1e4||Math.abs(i[1])>1e4)){let l=[3e3,4e3,2048,5e3];for(let g of l){let o=Math.floor(i[0]/g),m=Math.floor(i[1]/g),r=i[0]%g,n=i[1]%g;if(r>=0&&r<g&&n>=0&&n<g)return s(`[TILE DETECTOR] URL suggests tile size: ${g} (tile: ${o},${m} local: ${r},${n})`),g}}}catch(t){s("[TILE DETECTOR] Error detecting from URL:",t)}return null}detectFromDOM(){var t;try{let d=["[data-tile-size]",".tile-info",".coordinates",".position-info"];for(let l of d){let g=document.querySelectorAll(l);for(let o of g){let m=o.getAttribute("data-tile-size")||o.dataset.tileSize||((t=o.textContent.match(/tile.*?(\d{4,})/i))==null?void 0:t[1]);if(m){let r=parseInt(m);if(r>=1e3&&r<=1e4)return s(`[TILE DETECTOR] DOM suggests tile size: ${r}`),r}}}let a=document.body.textContent||"",i=a.match(/tile.*?(\d{4,})/i)||a.match(/(\d{4,}).*?tile/i);if(i){let l=parseInt(i[1]);if(l>=1e3&&l<=1e4)return s(`[TILE DETECTOR] Text content suggests tile size: ${l}`),l}}catch(d){s("[TILE DETECTOR] Error detecting from DOM:",d)}return null}async detectFromNetwork(t=1e4){return new Promise(d=>{let a=window.fetch,i=!1,l=setTimeout(()=>{i||(i=!0,window.fetch=a,d(null))},t);window.fetch=async function(g,o){try{if(g.includes("/s0/pixel/")&&o&&o.body){let m=g.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/),r;try{r=JSON.parse(o.body)}catch{r=o.body}if(m&&r&&r.coords){let n=parseInt(m[1]),c=parseInt(m[2]),h=r.coords[0],y=r.coords[1],E=[3e3,4e3,2048,5e3];for(let p of E){let x=n*p+h,P=c*p+y;if(h>=0&&h<p&&y>=0&&y<p&&!i){i=!0,clearTimeout(l),window.fetch=a,s(`[TILE DETECTOR] Network request suggests tile size: ${p} (tile: ${n},${c} local: ${h},${y})`),d(p);return}}}}}catch(m){s("[TILE DETECTOR] Error intercepting network:",m)}return a(g,o)}})}async autoDetect(){s("[TILE DETECTOR] Auto-detecting tile size...");let t=this.detectFromUrl();if(t)return this.detectedSize=t,this.confidence=.8,t;if(t=this.detectFromDOM(),t)return this.detectedSize=t,this.confidence=.6,t;if(t=await this.detectFromNetwork(5e3),t)return this.detectedSize=t,this.confidence=.9,t;s("[TILE DETECTOR] Could not auto-detect, trying common sizes...");let a=document.querySelector('meta[name="viewport"]')||document.querySelector('[class*="modern"]')||document.querySelector('[class*="v2"]')||window.location.href.includes("v2")?4e3:3e3;return this.detectedSize=a,this.confidence=.3,s(`[TILE DETECTOR] Using fallback size: ${a} (confidence: ${this.confidence})`),a}getDetectedSize(){return this.detectedSize}getConfidence(){return this.confidence}},V=new U;function H(){s("\u{1F3A8} Detectando colores disponibles...");let u=document.querySelectorAll('[id^="color-"]'),t=[];for(let d of u){if(d.querySelector("svg"))continue;let a=d.id.replace("color-",""),i=parseInt(a);if(i===0||i===5)continue;let l=d.style.backgroundColor;if(l){let g=l.match(/\d+/g);if(g&&g.length>=3){let o={r:parseInt(g[0]),g:parseInt(g[1]),b:parseInt(g[2])};t.push({id:i,element:d,...o}),s(`Color detectado: id=${i}, rgb(${o.r},${o.g},${o.b})`)}}}return s(`\u2705 ${t.length} colores disponibles detectados`),t}var X=class{constructor(t){this.imageSrc=t,this.img=new window.Image,this.originalName=null,this.tileSize=1e3,this.drawMult=3,this.shreadSize=3,this.actualTileSize=B.TILE_SIZE,this.bitmap=null,this.imageWidth=0,this.imageHeight=0,this.totalPixels=0,this.requiredPixelCount=0,this.defacePixelCount=0,this.colorPalette={},this.allowedColorsSet=new Set,this.rgbToMeta=new Map,this.coords=[0,0,0,0],this.templateTiles={},this.templateTilesBuffers={},this.tilePrefixes=new Set,this.initializeTileSize()}async initializeTileSize(){try{let t=await V.autoDetect();t?(this.actualTileSize=t,s(`[BLUE MARBLE] Using detected tile size: ${t}`)):s(`[BLUE MARBLE] Using default tile size: ${this.actualTileSize}`)}catch(t){s("[BLUE MARBLE] Error detecting tile size, using default:",t)}}async load(){return new Promise((t,d)=>{this.img.onload=async()=>{try{this.bitmap=await createImageBitmap(this.img),this.imageWidth=this.bitmap.width,this.imageHeight=this.bitmap.height,this.totalPixels=this.imageWidth*this.imageHeight,s(`[BLUE MARBLE] Imagen cargada: ${this.imageWidth}\xD7${this.imageHeight} = ${this.totalPixels.toLocaleString()} p\xEDxeles`),t()}catch(a){d(a)}},this.img.onerror=d,this.img.src=this.imageSrc})}initializeColorPalette(){s("[BLUE MARBLE] Inicializando paleta de colores...");let t=this.detectSiteColors();this.allowedColorsSet=new Set(t.filter(a=>a.name&&a.name.toLowerCase()!=="transparent"&&Array.isArray(a.rgb)).map(a=>`${a.rgb[0]},${a.rgb[1]},${a.rgb[2]}`));let d="222,250,206";this.allowedColorsSet.add(d),this.rgbToMeta=new Map(t.filter(a=>Array.isArray(a.rgb)).map(a=>[`${a.rgb[0]},${a.rgb[1]},${a.rgb[2]}`,{id:a.id,premium:!!a.premium,name:a.name||`Color ${a.id}`}]));try{let a=t.find(i=>i.name&&i.name.toLowerCase()==="transparent");a&&Array.isArray(a.rgb)&&this.rgbToMeta.set(d,{id:a.id,premium:!!a.premium,name:a.name})}catch{}return s(`[BLUE MARBLE] Paleta inicializada: ${this.allowedColorsSet.size} colores permitidos`),Array.from(t)}detectSiteColors(){let t=document.querySelectorAll('[id^="color-"]'),d=[];for(let a of t){if(a.querySelector("svg"))continue;let i=a.id.replace("color-",""),l=parseInt(i),g=a.style.backgroundColor;if(g){let o=g.match(/\d+/g);if(o&&o.length>=3){let m=[parseInt(o[0]),parseInt(o[1]),parseInt(o[2])];d.push({id:l,element:a,rgb:m,name:a.title||a.getAttribute("aria-label")||`Color ${l}`,premium:a.classList.contains("premium")||a.querySelector(".premium")})}}}return s(`[BLUE MARBLE] ${d.length} colores detectados del sitio`),d}setCoords(t,d,a,i){this.coords=[t,d,a,i],s(`[BLUE MARBLE] Coordenadas establecidas: tile(${t},${d}) pixel(${a},${i})`)}async analyzePixels(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");s("[BLUE MARBLE] Analizando p\xEDxeles de la imagen...");try{let d=new OffscreenCanvas(this.imageWidth,this.imageHeight).getContext("2d",{willReadFrequently:!0});d.imageSmoothingEnabled=!1,d.clearRect(0,0,this.imageWidth,this.imageHeight),d.drawImage(this.bitmap,0,0);let a=d.getImageData(0,0,this.imageWidth,this.imageHeight).data,i=0,l=0,g=new Map;for(let m=0;m<this.imageHeight;m++)for(let r=0;r<this.imageWidth;r++){let n=(m*this.imageWidth+r)*4,c=a[n],h=a[n+1],y=a[n+2];if(a[n+3]===0)continue;let p=`${c},${h},${y}`;c===222&&h===250&&y===206&&l++,this.allowedColorsSet.has(p)&&(i++,g.set(p,(g.get(p)||0)+1))}this.requiredPixelCount=i,this.defacePixelCount=l;let o={};for(let[m,r]of g.entries())o[m]={count:r,enabled:!0};return this.colorPalette=o,s("[BLUE MARBLE] An\xE1lisis completado:"),s(`  - P\xEDxeles requeridos: ${i.toLocaleString()}`),s(`  - P\xEDxeles #deface: ${l.toLocaleString()}`),s(`  - Colores \xFAnicos: ${g.size}`),{totalPixels:this.totalPixels,requiredPixels:i,defacePixels:l,uniqueColors:g.size,colorPalette:o}}catch{return this.requiredPixelCount=Math.max(0,this.totalPixels),this.defacePixelCount=0,s("[BLUE MARBLE] Fallback: usando total de p\xEDxeles como requeridos"),{totalPixels:this.totalPixels,requiredPixels:this.totalPixels,defacePixels:0,uniqueColors:0,colorPalette:{}}}}async createTemplateTiles(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");s("[BLUE MARBLE] Creando tiles de template...");let t={},d={},a=new OffscreenCanvas(this.tileSize,this.tileSize),i=a.getContext("2d",{willReadFrequently:!0});for(let l=this.coords[3];l<this.imageHeight+this.coords[3];){let g=Math.min(this.tileSize-l%this.tileSize,this.imageHeight-(l-this.coords[3]));for(let o=this.coords[2];o<this.imageWidth+this.coords[2];){let m=Math.min(this.tileSize-o%this.tileSize,this.imageWidth-(o-this.coords[2])),r=m*this.shreadSize,n=g*this.shreadSize;a.width=r,a.height=n,i.imageSmoothingEnabled=!1,i.clearRect(0,0,r,n),i.drawImage(this.bitmap,o-this.coords[2],l-this.coords[3],m,g,0,0,m*this.shreadSize,g*this.shreadSize);let c=i.getImageData(0,0,r,n);for(let p=0;p<n;p++)for(let x=0;x<r;x++){let P=(p*r+x)*4;if(c.data[P]===222&&c.data[P+1]===250&&c.data[P+2]===206)(x+p)%2===0?(c.data[P]=0,c.data[P+1]=0,c.data[P+2]=0):(c.data[P]=255,c.data[P+1]=255,c.data[P+2]=255),c.data[P+3]=32;else if(x%this.shreadSize!==1||p%this.shreadSize!==1)c.data[P+3]=0;else{let v=c.data[P],C=c.data[P+1],A=c.data[P+2];this.allowedColorsSet.has(`${v},${C},${A}`)||(c.data[P+3]=0)}}i.putImageData(c,0,0);let h=`${(this.coords[0]+Math.floor(o/1e3)).toString().padStart(4,"0")},${(this.coords[1]+Math.floor(l/1e3)).toString().padStart(4,"0")},${(o%1e3).toString().padStart(3,"0")},${(l%1e3).toString().padStart(3,"0")}`;t[h]=await createImageBitmap(a),this.tilePrefixes.add(h.split(",").slice(0,2).join(","));let E=await(await a.convertToBlob()).arrayBuffer();d[h]=E,o+=m}l+=g}return this.templateTiles=t,this.templateTilesBuffers=d,s(`[BLUE MARBLE] Tiles creados: ${Object.keys(t).length} tiles`),s(`[BLUE MARBLE] Prefijos registrados: ${this.tilePrefixes.size} tiles \xFAnicos`),{templateTiles:t,templateTilesBuffers:d}}generatePixelQueue(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");s("[BLUE MARBLE] Generando cola de p\xEDxeles...");let t=[],d=this.coords[0]*this.actualTileSize+(this.coords[2]||0),a=this.coords[1]*this.actualTileSize+(this.coords[3]||0),l=new OffscreenCanvas(this.imageWidth,this.imageHeight).getContext("2d",{willReadFrequently:!0});l.imageSmoothingEnabled=!1,l.drawImage(this.bitmap,0,0);let g=l.getImageData(0,0,this.imageWidth,this.imageHeight).data;for(let o=0;o<this.imageHeight;o++)for(let m=0;m<this.imageWidth;m++){let r=(o*this.imageWidth+m)*4,n=g[r],c=g[r+1],h=g[r+2],y=g[r+3];if(y===0||n===222&&c===250&&h===206)continue;let E=`${n},${c},${h}`;if(!this.allowedColorsSet.has(E))continue;let p=d+m,x=a+o,P=Math.floor(p/this.actualTileSize),v=Math.floor(x/this.actualTileSize),C=p%this.actualTileSize,A=x%this.actualTileSize,w=this.rgbToMeta.get(E)||{id:0,name:"Unknown"};t.push({imageX:m,imageY:o,globalX:p,globalY:x,tileX:P,tileY:v,localX:C,localY:A,color:{r:n,g:c,b:h,id:w.id,name:w.name},originalColor:{r:n,g:c,b:h,alpha:y}})}return s(`[BLUE MARBLE] Cola generada: ${t.length} p\xEDxeles v\xE1lidos`),t}async resize(t,d,a=!0){if(!this.img)throw new Error("Imagen no cargada. Llama a load() primero.");let i=this.img.width,l=this.img.height;if(a){let r=i/l;t/d>r?t=d*r:d=t/r}let g=document.createElement("canvas");g.width=t,g.height=d;let o=g.getContext("2d");o.imageSmoothingEnabled=!1,o.drawImage(this.img,0,0,t,d);let m=g.toDataURL();return this.img.src=m,this.imageSrc=m,await new Promise(r=>{this.img.onload=async()=>{this.bitmap=await createImageBitmap(this.img),this.imageWidth=this.bitmap.width,this.imageHeight=this.bitmap.height,this.totalPixels=this.imageWidth*this.imageHeight,r()}}),s(`[BLUE MARBLE] Imagen redimensionada: ${i}\xD7${l} \u2192 ${this.imageWidth}\xD7${this.imageHeight}`),{width:this.imageWidth,height:this.imageHeight}}getImageData(){return{width:this.imageWidth,height:this.imageHeight,totalPixels:this.totalPixels,requiredPixels:this.requiredPixelCount,defacePixels:this.defacePixelCount,colorPalette:this.colorPalette,coords:[...this.coords],originalName:this.originalName||"image.png",pixels:this.generatePixelQueue()}}generatePreview(t=200,d=200){if(!this.img)return null;let a=document.createElement("canvas"),i=a.getContext("2d"),{width:l,height:g}=this.img,o=l/g,m,r;return t/d>o?(r=d,m=d*o):(m=t,r=t/o),a.width=m,a.height=r,i.imageSmoothingEnabled=!1,i.drawImage(this.img,0,0,m,r),a.toDataURL()}getDimensions(){return{width:this.imageWidth,height:this.imageHeight}}};var z=u=>new Promise(t=>setTimeout(t,u));var ie="https://backend.wplace.live";async function ae(){var u,t,d;try{let a=await fetch(`${ie}/me`,{credentials:"include"}).then(o=>o.json()),i=a||null,l=(a==null?void 0:a.charges)||{},g={count:(u=l.count)!=null?u:0,max:(t=l.max)!=null?t:0,cooldownMs:(d=l.cooldownMs)!=null?d:3e4};return{success:!0,data:{user:i,charges:g.count,maxCharges:g.max,chargeRegen:g.cooldownMs}}}catch(a){return{success:!1,error:a.message,data:{user:null,charges:0,maxCharges:0,chargeRegen:3e4}}}}async function ne(u,t,d,a,i){try{let l=JSON.stringify({colors:a,coords:d,t:i}),g=await fetch(`${ie}/s0/pixel/${u}/${t}`,{method:"POST",credentials:"include",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:l}),o=null;try{o=await g.json()}catch{o={}}return{status:g.status,json:o,success:g.ok,painted:(o==null?void 0:o.painted)||0}}catch(l){return{status:0,json:{error:l.message},success:!1,painted:0}}}var oe=!1;async function ve(){if(!(oe||window.turnstile))return new Promise((u,t)=>{let d=document.createElement("script");d.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",d.async=!0,d.defer=!0,d.onload=()=>{oe=!0,u()},d.onerror=()=>t(new Error("No se pudo cargar Turnstile")),document.head.appendChild(d)})}async function Ce(u,t="paint"){var d;if(await ve(),typeof((d=window.turnstile)==null?void 0:d.execute)=="function")try{let a=await window.turnstile.execute(u,{action:t});if(a&&a.length>20)return a}catch{}return await new Promise(a=>{let i=document.createElement("div");i.style.position="fixed",i.style.left="-9999px",document.body.appendChild(i),window.turnstile.render(i,{sitekey:u,callback:l=>{document.body.removeChild(i),a(l)}})})}async function re(u){return Ce(u,"paint")}async function se(u,t,d,a,i){let{width:l,height:g}=u,{x:o,y:m}=t;if(s(`Iniciando pintado: imagen(${l}x${g}) inicio LOCAL(${o},${m}) tile(${e.tileX},${e.tileY})`),!e.remainingPixels||e.remainingPixels.length===0||e.lastPosition.x===0&&e.lastPosition.y===0){s("Generando cola de p\xEDxeles..."),e.remainingPixels=Le(u,t,e.tileX,e.tileY),(e.lastPosition.x>0||e.lastPosition.y>0)&&(e.remainingPixels=e.remainingPixels.filter(r=>{let n=r.imageY*l+r.imageX,c=e.lastPosition.y*l+e.lastPosition.x;return n>=c})),s(`Cola generada: ${e.remainingPixels.length} p\xEDxeles pendientes`);try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),e.startPosition&&e.tileX!==void 0&&e.tileY!==void 0&&window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y}),window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch}),s(`\u2705 Plan overlay actualizado con ${e.remainingPixels.length} p\xEDxeles en cola`))}catch(r){s("\u26A0\uFE0F Error actualizando plan overlay:",r)}}try{for(;e.remainingPixels.length>0&&!e.stopFlag;){let r=Math.floor(e.currentCharges),n;if(e.isFirstBatch&&e.useAllChargesFirst&&r>0?(n=Math.min(r,e.remainingPixels.length),e.isFirstBatch=!1,s(`Primera pasada: usando ${n} cargas de ${r} disponibles`)):n=Math.min(e.pixelsPerBatch,e.remainingPixels.length),r<n){s(`Cargas insuficientes: ${r}/${n} necesarias`),await Ae(n-r,d),r=Math.floor(e.currentCharges),e.isFirstBatch||(n=Math.min(e.pixelsPerBatch,e.remainingPixels.length,r));continue}let c=e.remainingPixels.splice(0,n);s(`Pintando lote de ${c.length} p\xEDxeles...`);try{window.__WPA_PLAN_OVERLAY__&&window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch})}catch(y){s("\u26A0\uFE0F Error actualizando plan overlay durante pintado:",y)}let h=await Se(c,d);if(h.success&&h.painted>0){if(e.paintedPixels+=h.painted,e.currentCharges=Math.max(0,e.currentCharges-h.painted),s(`Cargas despu\xE9s del lote: ${e.currentCharges.toFixed(1)} (consumidas: ${h.painted})`),c.length>0){let x=c[c.length-1];e.lastPosition={x:x.imageX,y:x.imageY}}s(`Lote exitoso: ${h.painted}/${c.length} p\xEDxeles pintados. Total: ${e.paintedPixels}/${e.totalPixels}`);let y=Ie(),E=(e.paintedPixels/e.totalPixels*100).toFixed(1),p=b("image.passCompleted",{painted:h.painted,percent:E,current:e.paintedPixels,total:e.totalPixels});d&&d(e.paintedPixels,e.totalPixels,p,y),await z(2e3)}else h.shouldContinue?s("Lote fall\xF3 despu\xE9s de todos los reintentos, continuando con siguiente lote..."):(e.remainingPixels.unshift(...c),s("Lote fall\xF3: reintentando en 5 segundos..."),await z(5e3));await z(500)}if(e.stopFlag)s(`Pintado pausado en p\xEDxel imagen(${e.lastPosition.x},${e.lastPosition.y})`),a&&a(!1,e.paintedPixels);else{s(`Pintado completado: ${e.paintedPixels} p\xEDxeles pintados`),e.lastPosition={x:0,y:0},e.remainingPixels=[];try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.setPlan([],{enabled:!0,nextBatchCount:0}),s("\u2705 Plan overlay limpiado al completar pintado"))}catch(r){s("\u26A0\uFE0F Error limpiando plan overlay:",r)}a&&a(!0,e.paintedPixels)}}catch(r){s("Error en proceso de pintado:",r),i&&i(r)}}async function Ee(u){try{if(!u||u.length===0)return{success:!1,painted:0,error:"Lote vac\xEDo"};let t=new Map;for(let i of u){if(!i){s("paintPixelBatch: skipping undefined pixel");continue}if(!i.localX||!i.localY||i.tileX==null||i.tileY==null){s("paintPixelBatch: skipping pixel with missing coordinates",i);continue}if(!i.color){s("paintPixelBatch: skipping pixel with missing color",i);continue}let l=i.color.id||i.color.value||null;if(l===null){s("paintPixelBatch: skipping pixel with invalid color",i);continue}let g=`${i.tileX}:${i.tileY}`;t.has(g)||t.set(g,{tileX:i.tileX,tileY:i.tileY,coords:[],colors:[]});let o=t.get(g);o.coords.push(i.localX,i.localY),o.colors.push(l)}if(t.size===0)return{success:!1,painted:0,error:"No valid pixels in batch"};let d=await re(B.SITEKEY),a=0;for(let[i,l]of t.entries())try{let g=await ne(l.tileX,l.tileY,l.coords,l.colors,d);g.status===200?a+=g.painted||0:s("paintPixelBatch: API error for tile",i,g==null?void 0:g.status,g==null?void 0:g.json)}catch(g){s("Error sending pixels for tile group:",i,g)}return{success:a>0,painted:a}}catch(t){return s("Error en paintPixelBatch:",t),{success:!1,painted:0,error:t.message}}}async function Se(u,t){for(let l=1;l<=5;l++)try{let g=await Ee(u);if(g.success)return e.retryCount=0,g;if(e.retryCount=l,l<5){let o=3e3*Math.pow(2,l-1),m=Math.round(o/1e3),r;g.status===0||g.status==="NetworkError"?r=b("image.networkError"):g.status>=500?r=b("image.serverError"):g.status===408?r=b("image.timeoutError"):r=b("image.retryAttempt",{attempt:l,maxAttempts:5,delay:m}),t&&t(e.paintedPixels,e.totalPixels,r),s(`Reintento ${l}/5 despu\xE9s de ${m}s. Error: ${g.error}`),await z(o)}}catch(g){if(s(`Error en intento ${l}:`,g),e.retryCount=l,l<5){let o=3e3*Math.pow(2,l-1),m=Math.round(o/1e3),r=b("image.retryError",{attempt:l,maxAttempts:5,delay:m});t&&t(e.paintedPixels,e.totalPixels,r),await z(o)}}e.retryCount=5;let i=b("image.retryFailed",{maxAttempts:5});return t&&t(e.paintedPixels,e.totalPixels,i),s("Fall\xF3 despu\xE9s de 5 intentos, continuando con siguiente lote"),{success:!1,painted:0,error:"Fall\xF3 despu\xE9s de 5 intentos",shouldContinue:!0}}async function Ae(u,t){let a=B.CHARGE_REGEN_MS*u+5e3;if(s(`Esperando ${Math.round(a/1e3)}s para obtener ${u} cargas`),e.inCooldown=!0,e.cooldownEndTime=Date.now()+a,e.nextBatchCooldown=Math.round(a/1e3),t){let i=Math.floor(a/6e4),l=Math.floor(a%6e4/1e3),g=i>0?`${i}m ${l}s`:`${l}s`,o=b("image.waitingChargesRegen",{current:Math.floor(e.currentCharges),needed:u,time:g});t(e.paintedPixels,e.totalPixels,o)}for(let i=Math.round(a/1e3);i>0&&!e.stopFlag;i--){if(e.nextBatchCooldown=i,t&&(i%5===0||i<=10||i===Math.round(a/1e3))){let l=Math.floor(i/60),g=i%60,o=l>0?`${l}m ${g}s`:`${g}s`,m=b("image.waitingChargesCountdown",{current:Math.floor(e.currentCharges),needed:u,time:o});t(e.paintedPixels,e.totalPixels,m)}await z(1e3)}e.inCooldown=!1,e.nextBatchCooldown=0,e.currentCharges=Math.min(e.maxCharges||50,e.currentCharges+a/B.CHARGE_REGEN_MS)}function Le(u,t,d,a){var r,n;let{pixels:i}=u,{x:l,y:g}=t,o=[],m=0;for(let c of i){let h=typeof c.x=="number"&&typeof c.y=="number"||typeof c.imageX=="number"&&typeof c.imageY=="number";if(!c||!h){m++,s("generatePixelQueue: skipping pixel with missing coordinates",c);continue}let y=(r=c.imageX)!=null?r:c.x,E=(n=c.imageY)!=null?n:c.y,p=c.color||c.targetColor;if(!p||!p.id&&!p.value){m++,s("generatePixelQueue: skipping pixel with missing/invalid color",c);continue}let x,P,v,C;if(c.tileX!=null&&c.tileY!=null&&c.localX!=null&&c.localY!=null)x=c.tileX,P=c.tileY,v=c.localX,C=c.localY;else{let A=l+y,w=g+E;x=d,P=a,v=A,C=w}o.push({imageX:y,imageY:E,localX:v,localY:C,tileX:x,tileY:P,color:p,originalColor:c.originalColor})}return m>0&&s(`\u26A0\uFE0F Se omitieron ${m} p\xEDxeles inv\xE1lidos durante la generaci\xF3n de la cola`),s(`Cola de p\xEDxeles generada: ${o.length} p\xEDxeles para pintar`),o}function Ie(){if(!e.remainingPixels||e.remainingPixels.length===0)return 0;let u=e.remainingPixels.length,t=e.pixelsPerBatch,d=B.CHARGE_REGEN_MS/1e3,a=Math.ceil(u/t),i=t*d,l=(a-1)*i,g=a*2;return Math.ceil(l+g)}function j(){e.stopFlag=!0,e.running=!1,s("\u{1F6D1} Deteniendo proceso de pintado...")}function Z(u=null){try{if(!e.imageData||e.paintedPixels===0)throw new Error("No hay progreso para guardar");let t={version:"1.0",timestamp:Date.now(),imageData:{width:e.imageData.width,height:e.imageData.height,originalName:e.originalImageName},progress:{paintedPixels:e.paintedPixels,totalPixels:e.totalPixels,lastPosition:{...e.lastPosition}},position:{startPosition:{...e.startPosition},tileX:e.tileX,tileY:e.tileY},config:{pixelsPerBatch:e.pixelsPerBatch,useAllChargesFirst:e.useAllChargesFirst,isFirstBatch:e.isFirstBatch,maxCharges:e.maxCharges},colors:e.availableColors.map(o=>({id:o.id,r:o.r,g:o.g,b:o.b})),remainingPixels:e.remainingPixels||[]},d=JSON.stringify(t,null,2),a=new window.Blob([d],{type:"application/json"}),i=u||`wplace_progress_${e.originalImageName||"image"}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,l=window.URL.createObjectURL(a),g=document.createElement("a");return g.href=l,g.download=i,document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(l),s(`\u2705 Progreso guardado: ${i}`),{success:!0,filename:i}}catch(t){return s("\u274C Error guardando progreso:",t),{success:!1,error:t.message}}}async function ce(u){return new Promise(t=>{try{let d=new window.FileReader;d.onload=a=>{try{let i=JSON.parse(a.target.result),g=["imageData","progress","position","colors"].filter(o=>!(o in i));if(g.length>0)throw new Error(`Campos requeridos faltantes: ${g.join(", ")}`);if(e.availableColors.length>0){let o=i.colors.map(n=>n.id),m=e.availableColors.map(n=>n.id);o.filter(n=>m.includes(n)).length<o.length*.8&&s("\u26A0\uFE0F Los colores guardados no coinciden completamente con los actuales")}e.imageData={...i.imageData,pixels:[]},e.paintedPixels=i.progress.paintedPixels,e.totalPixels=i.progress.totalPixels,i.progress.lastPosition?e.lastPosition=i.progress.lastPosition:i.position.lastX!==void 0&&i.position.lastY!==void 0&&(e.lastPosition={x:i.position.lastX,y:i.position.lastY}),i.position.startPosition?e.startPosition=i.position.startPosition:i.position.startX!==void 0&&i.position.startY!==void 0&&(e.startPosition={x:i.position.startX,y:i.position.startY}),e.tileX=i.position.tileX,e.tileY=i.position.tileY,e.originalImageName=i.imageData.originalName,e.remainingPixels=i.remainingPixels||i.progress.remainingPixels||[];try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),e.startPosition&&e.tileX!==void 0&&e.tileY!==void 0&&(window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y}),s(`\u2705 Plan overlay anclado con posici\xF3n cargada: tile(${e.tileX},${e.tileY}) local(${e.startPosition.x},${e.startPosition.y})`)),window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch}),s(`\u2705 Plan overlay activado con ${e.remainingPixels.length} p\xEDxeles restantes`))}catch(o){s("\u26A0\uFE0F Error activando plan overlay al cargar progreso:",o)}i.config&&(e.pixelsPerBatch=i.config.pixelsPerBatch||e.pixelsPerBatch,e.useAllChargesFirst=i.config.useAllChargesFirst!==void 0?i.config.useAllChargesFirst:e.useAllChargesFirst,e.isFirstBatch=i.config.isFirstBatch!==void 0?i.config.isFirstBatch:!0,e.maxCharges=i.config.maxCharges||e.maxCharges),e.imageLoaded=!0,e.colorsChecked=!0,s(`\u2705 Progreso cargado: ${e.paintedPixels}/${e.totalPixels} p\xEDxeles`),t({success:!0,data:i,painted:e.paintedPixels,total:e.totalPixels,canContinue:e.remainingPixels.length>0})}catch(i){s("\u274C Error parseando archivo de progreso:",i),t({success:!1,error:i.message})}},d.onerror=()=>{let a="Error leyendo archivo";s("\u274C",a),t({success:!1,error:a})},d.readAsText(u)}catch(d){s("\u274C Error cargando progreso:",d),t({success:!1,error:d.message})}})}function de(){e.paintedPixels=0,e.totalPixels=0,e.lastPosition={x:0,y:0},e.remainingPixels=[],e.imageData=null,e.startPosition=null,e.imageLoaded=!1,e.originalImageName=null,e.isFirstBatch=!0,e.nextBatchCooldown=0,s("\u{1F9F9} Progreso limpiado")}function le(){return e.imageLoaded&&e.paintedPixels>0&&e.remainingPixels&&e.remainingPixels.length>0}function ue(){return{hasProgress:le(),painted:e.paintedPixels,total:e.totalPixels,remaining:e.remainingPixels?e.remainingPixels.length:0,percentage:e.totalPixels>0?e.paintedPixels/e.totalPixels*100:0,lastPosition:{...e.lastPosition},canContinue:le()}}function ge(u=null){let t=document.createElement("div");u&&(t.id=u),t.style.cssText=`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 2147483647;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  `;let d=t.attachShadow({mode:"open"});return document.body.appendChild(t),{host:t,root:d}}function pe(u,t){let d=0,a=0,i=0,l=0;u.style.cursor="move",u.addEventListener("mousedown",g);function g(r){r.target.closest(".header-btn, .wplace-header-btn")||(r.preventDefault(),i=r.clientX,l=r.clientY,document.addEventListener("mouseup",m),document.addEventListener("mousemove",o))}function o(r){r.preventDefault(),d=i-r.clientX,a=l-r.clientY,i=r.clientX,l=r.clientY,t.style.top=t.offsetTop-a+"px",t.style.left=t.offsetLeft-d+"px"}function m(){document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",o)}}async function me({texts:u,...t}){if(s("\u{1F3A8} Creando interfaz de Auto-Image"),!document.querySelector('link[href*="font-awesome"]')){let f=document.createElement("link");f.rel="stylesheet",f.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(f),s("\u{1F4E6} FontAwesome a\xF1adido al document.head")}let{host:d,root:a}=ge(),i=document.createElement("style");i.textContent=`
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
  `,a.appendChild(l);let g=document.createElement("input");g.type="file",g.accept="image/png,image/jpeg",g.style.display="none",a.appendChild(g);let o=document.createElement("input");o.type="file",o.accept=".json",o.style.display="none",a.appendChild(o);let m=document.createElement("div");m.className="resize-overlay",a.appendChild(m);let r=document.createElement("div");r.className="resize-container",r.innerHTML=`
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
  `,a.appendChild(r);let n={header:l.querySelector(".header"),configBtn:l.querySelector(".config-btn"),minimizeBtn:l.querySelector(".minimize-btn"),configPanel:l.querySelector(".config-panel"),pixelsPerBatch:l.querySelector(".pixels-per-batch"),useAllCharges:l.querySelector(".use-all-charges"),showOverlay:l.querySelector(".show-overlay"),batchValue:l.querySelector(".batch-value"),cooldownValue:l.querySelector(".cooldown-value"),initBtn:l.querySelector(".init-btn"),uploadBtn:l.querySelector(".upload-btn"),loadProgressBtn:l.querySelector(".load-progress-btn"),resizeBtn:l.querySelector(".resize-btn"),selectPosBtn:l.querySelector(".select-pos-btn"),startBtn:l.querySelector(".start-btn"),stopBtn:l.querySelector(".stop-btn"),progressBar:l.querySelector(".progress-bar"),statsArea:l.querySelector(".stats-area"),status:l.querySelector(".status"),content:l.querySelector(".content")},c={overlay:m,container:r,widthSlider:r.querySelector(".width-slider"),heightSlider:r.querySelector(".height-slider"),widthValue:r.querySelector(".width-value"),heightValue:r.querySelector(".height-value"),keepAspect:r.querySelector(".keep-aspect"),preview:r.querySelector(".resize-preview"),confirmBtn:r.querySelector(".confirm-resize"),cancelBtn:r.querySelector(".cancel-resize")},h={minimized:!1,configVisible:!1};pe(n.header,l),n.minimizeBtn.addEventListener("click",()=>{h.minimized=!h.minimized,h.minimized?(l.classList.add("minimized"),n.minimizeBtn.innerHTML="\u{1F53C}"):(l.classList.remove("minimized"),n.minimizeBtn.innerHTML="\u{1F53D}")}),n.configBtn.addEventListener("click",()=>{h.configVisible=!h.configVisible,h.configVisible?(n.configPanel.classList.add("visible"),n.configBtn.innerHTML="\u274C"):(n.configPanel.classList.remove("visible"),n.configBtn.innerHTML="\u2699\uFE0F")}),n.pixelsPerBatch.addEventListener("change",()=>{let f=parseInt(n.pixelsPerBatch.value)||20;n.batchValue.textContent=f,t.onConfigChange&&t.onConfigChange({pixelsPerBatch:f})}),n.useAllCharges.addEventListener("change",()=>{t.onConfigChange&&t.onConfigChange({useAllCharges:n.useAllCharges.checked})});function y(){n.uploadBtn.disabled=!1,n.loadProgressBtn.disabled=!1}n.initBtn.addEventListener("click",async()=>{n.initBtn.disabled=!0,t.onInitBot&&await t.onInitBot()&&y(),n.initBtn.disabled=!1}),n.uploadBtn.addEventListener("click",()=>{g.click()}),g.addEventListener("change",async()=>{g.files.length>0&&t.onUploadImage&&await t.onUploadImage(g.files[0])&&(n.selectPosBtn.disabled=!1,n.resizeBtn.disabled=!1)}),n.loadProgressBtn.addEventListener("click",()=>{o.click()}),o.addEventListener("change",async()=>{o.files.length>0&&t.onLoadProgress&&await t.onLoadProgress(o.files[0])&&(n.selectPosBtn.disabled=!1,n.startBtn.disabled=!1,n.resizeBtn.disabled=!1)}),n.resizeBtn.addEventListener("click",()=>{t.onResizeImage&&t.onResizeImage()}),n.selectPosBtn.addEventListener("click",async()=>{t.onSelectPosition&&(n.selectPosBtn.disabled=!0,await t.onSelectPosition()&&(n.startBtn.disabled=!1),n.selectPosBtn.disabled=!1)}),n.showOverlay.addEventListener("change",()=>{if(!window.__WPA_PLAN_OVERLAY__)return;window.__WPA_PLAN_OVERLAY__.injectStyles();let f=n.showOverlay.checked;window.__WPA_PLAN_OVERLAY__.setEnabled(f)}),n.startBtn.addEventListener("click",async()=>{t.onStartPainting&&(n.startBtn.disabled=!0,n.stopBtn.disabled=!1,await t.onStartPainting()||(n.startBtn.disabled=!1,n.stopBtn.disabled=!0))}),n.stopBtn.addEventListener("click",async()=>{t.onStopPainting&&await t.onStopPainting()&&(n.startBtn.disabled=!1,n.stopBtn.disabled=!0)});function E(f,L="default"){n.status.textContent=f,n.status.className=`status status-${L}`,n.status.style.animation="none",n.status.offsetWidth,n.status.style.animation="slideIn 0.3s ease-out"}function p(f){let{width:L,height:I}=f.getDimensions(),$=L/I;c.widthSlider.value=L,c.heightSlider.value=I,c.widthValue.textContent=L,c.heightValue.textContent=I,c.preview.src=f.img.src,c.overlay.style.display="block",c.container.style.display="block";let T=()=>{let _=parseInt(c.widthSlider.value),R=parseInt(c.heightSlider.value);c.widthValue.textContent=_,c.heightValue.textContent=R,c.preview.src=f.generatePreview(_,R)},O=()=>{if(c.keepAspect.checked){let _=parseInt(c.widthSlider.value),R=Math.round(_/$);c.heightSlider.value=R}T()},M=()=>{if(c.keepAspect.checked){let _=parseInt(c.heightSlider.value),R=Math.round(_*$);c.widthSlider.value=R}T()};c.widthSlider.addEventListener("input",O),c.heightSlider.addEventListener("input",M);let F=()=>{let _=parseInt(c.widthSlider.value),R=parseInt(c.heightSlider.value);t.onConfirmResize&&t.onConfirmResize(f,_,R),x()},D=()=>{x()};c.confirmBtn.addEventListener("click",F),c.cancelBtn.addEventListener("click",D),c.overlay.addEventListener("click",D),window.cleanupResizeDialog=()=>{c.widthSlider.removeEventListener("input",O),c.heightSlider.removeEventListener("input",M),c.confirmBtn.removeEventListener("click",F),c.cancelBtn.removeEventListener("click",D),c.overlay.removeEventListener("click",D)},T()}function x(){c.overlay.style.display="none",c.container.style.display="none",window.cleanupResizeDialog&&(window.cleanupResizeDialog(),delete window.cleanupResizeDialog)}function P(f,L,I=null){let $=L>0?f/L*100:0;n.progressBar.style.width=`${$}%`;let T=`
      <div class="stat-item">
        <div class="stat-label">\u{1F3A8} ${u.progress}</div>
        <div>${f}/${L} (${$.toFixed(1)}%)</div>
      </div>
    `;if(I&&(I.username&&(T+=`
          <div class="stat-item">
            <div class="stat-label">\u{1F464} ${u.userName}</div>
            <div>${I.username}</div>
          </div>
        `),I.charges!==void 0&&(T+=`
          <div class="stat-item">
            <div class="stat-label">\u26A1 ${u.charges}</div>
            <div>${Math.floor(I.charges)}</div>
          </div>
        `),I.pixels!==void 0&&(T+=`
          <div class="stat-item">
            <div class="stat-label">\u{1F533} ${u.pixels}</div>
            <div>${I.pixels.toLocaleString()}</div>
          </div>
        `),I.estimatedTime!==void 0&&I.estimatedTime>0)){let O=Math.floor(I.estimatedTime/3600),M=Math.floor(I.estimatedTime%3600/60),F=O>0?`${O}h ${M}m`:`${M}m`;T+=`
          <div class="stat-item">
            <div class="stat-label">\u23F0 ${u.timeRemaining}</div>
            <div>${F}</div>
          </div>
        `}n.statsArea.innerHTML=T}function v(f){if(f>0){let L=Math.floor(f/60),I=f%60,$=L>0?`${L}m ${I}s`:`${I}s`;n.cooldownValue.textContent=$}else n.cooldownValue.textContent="--"}function C(f){f&&f.includes("\u23F3")?(n.status.textContent=f,n.status.className="status status-info"):f&&E(f,"info")}function A(f){f?(n.initBtn.disabled=!0,n.initBtn.style.opacity="0.6",n.initBtn.innerHTML=`\u2705 <span>${u.initBot} - Completado</span>`):(n.initBtn.disabled=!1,n.initBtn.style.opacity="1",n.initBtn.innerHTML=`\u{1F916} <span>${u.initBot}</span>`)}function w(f){n.initBtn.style.display=f?"flex":"none"}function S(){d.remove()}return s("\u2705 Interfaz de Auto-Image creada"),{setStatus:E,updateProgress:P,updateCooldownDisplay:v,updateCooldownMessage:C,setInitialized:A,setInitButtonVisible:w,enableButtonsAfterInit:y,showResizeDialog:p,closeResizeDialog:x,destroy:S}}function he(u,t,d={}){return new Promise(a=>{let i=document.createElement("div");i.className="modal-overlay",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.background="rgba(0,0,0,0.7)",i.style.zIndex="10001",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center";let l=document.createElement("div");l.style.background="#1a1a1a",l.style.border="2px solid #333",l.style.borderRadius="15px",l.style.padding="25px",l.style.color="#eee",l.style.minWidth="350px",l.style.maxWidth="400px",l.style.boxShadow="0 10px 30px rgba(0,0,0,0.5)",l.style.fontFamily="'Segoe UI', Roboto, sans-serif",l.innerHTML=`
      <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 18px;">${t}</h3>
      <p style="margin: 0 0 20px 0; text-align: center; line-height: 1.4;">${u}</p>
      <div style="display: flex; gap: 10px; justify-content: center;">
        ${d.save?`<button class="save-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #10b981; color: white;">${d.save}</button>`:""}
        ${d.discard?`<button class="discard-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #ef4444; color: white;">${d.discard}</button>`:""}
        ${d.cancel?`<button class="cancel-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #2d3748; color: white;">${d.cancel}</button>`:""}
      </div>
    `,i.appendChild(l),document.body.appendChild(i);let g=l.querySelector(".save-btn"),o=l.querySelector(".discard-btn"),m=l.querySelector(".cancel-btn"),r=()=>{document.body.removeChild(i)};g&&g.addEventListener("click",()=>{r(),a("save")}),o&&o.addEventListener("click",()=>{r(),a("discard")}),m&&m.addEventListener("click",()=>{r(),a("cancel")}),i.addEventListener("click",n=>{n.target===i&&(r(),a("cancel"))})})}function G(){let u=['[data-testid="color-picker"]',".color-picker",".palette",'[class*="color"][class*="picker"]','[class*="palette"]'];for(let a of u){let i=document.querySelector(a);if(i&&i.offsetParent!==null)return!0}let t=document.querySelectorAll('[style*="background-color"], [style*="background:"], .color, [class*="color"]'),d=0;for(let a of t)if(a.offsetParent!==null&&a.offsetWidth>10&&a.offsetHeight>10&&(d++,d>=5))return!0;return!1}function fe(){let u=document.querySelector("button.btn.btn-primary.btn-lg, button.btn.btn-primary.sm\\:btn-xl");if(u){let a=u.textContent.toLowerCase().includes("paint"),i=u.querySelector('svg path[d*="240-120"]');if(a||i)return u.click(),!0}let t=document.querySelectorAll("button");for(let d of t)if(d.textContent.toLowerCase().includes("paint")&&d.offsetParent!==null&&!d.disabled)return d.click(),!0;return!1}(()=>{let t={enabled:!1,templates:[],templatesShouldBeDrawn:!0,tileSize:1e3,drawMult:3,pixelPlan:null,nextBatchCount:0,anchor:null,imageWidth:null,imageHeight:null,originalFetch:null,fetchedBlobQueue:new Map,isIntercepting:!1};function d(){console.log("[PLAN OVERLAY] Blue Marble tile system initialized")}function a(){t.isIntercepting||(t.originalFetch=window.fetch,t.isIntercepting=!0,window.fetch=async function(...p){var A;let x=await t.originalFetch.apply(this,p),P=x.clone(),v=(p[0]instanceof Request?(A=p[0])==null?void 0:A.url:p[0])||"ignore";if((P.headers.get("content-type")||"").includes("image/")&&v.includes("/tiles/")&&!v.includes("openfreemap")&&!v.includes("maps")){console.log("[PLAN OVERLAY] Intercepting tile request:",v);try{let w=await P.blob(),S=await l(w,v);return new Response(S,{headers:P.headers,status:P.status,statusText:P.statusText})}catch(w){return console.error("[PLAN OVERLAY] Error processing tile:",w),x}}return x},console.log("[PLAN OVERLAY] Fetch interception started"))}function i(){!t.isIntercepting||!t.originalFetch||(window.fetch=t.originalFetch,t.isIntercepting=!1,console.log("[PLAN OVERLAY] Fetch interception stopped"))}async function l(p,x){if(!t.enabled||!t.templatesShouldBeDrawn||!t.pixelPlan)return p;let P=x.split("/"),v=parseInt(P[P.length-1].replace(".png","")),C=parseInt(P[P.length-2]);if(isNaN(C)||isNaN(v))return console.warn("[PLAN OVERLAY] Could not extract tile coordinates from URL:",x),p;console.log(`[PLAN OVERLAY] Processing tile: ${C},${v}`);let A=g(C,v);if(A.length===0)return p;console.log(`[PLAN OVERLAY] Found ${A.length} pixels for tile ${C},${v}`);let w=t.tileSize*t.drawMult,S=await createImageBitmap(p),f=new OffscreenCanvas(w,w),L=f.getContext("2d");return L.imageSmoothingEnabled=!1,L.clearRect(0,0,w,w),L.drawImage(S,0,0,w,w),o(L,A,C,v),await f.convertToBlob({type:"image/png"})}function g(p,x){return!t.pixelPlan||!t.pixelPlan.pixels?[]:t.pixelPlan.pixels.filter(P=>{let v=Math.floor(P.globalX/4e3),C=Math.floor(P.globalY/4e3);return v===p&&C===x})}function o(p,x,P,v){let C=P*4e3,A=v*4e3;p.globalAlpha=.7;for(let w of x){let S=(w.globalX-C)*t.drawMult+1,f=(w.globalY-A)*t.drawMult+1;S>=0&&S<t.tileSize*t.drawMult&&f>=0&&f<t.tileSize*t.drawMult&&(p.fillStyle=`rgb(${w.r},${w.g},${w.b})`,p.fillRect(S,f,1,1))}if(t.nextBatchCount>0){p.globalAlpha=1;let w=x.slice(0,t.nextBatchCount);for(let S of w){let f=(S.globalX-C)*t.drawMult+1,L=(S.globalY-A)*t.drawMult+1;f>=0&&f<t.tileSize*t.drawMult&&L>=0&&L<t.tileSize*t.drawMult&&(p.fillStyle=`rgb(${S.r},${S.g},${S.b})`,p.fillRect(f,L,1,1))}}}function m(p){t.enabled=!!p,t.enabled?a():i(),console.log(`[PLAN OVERLAY] setEnabled: ${t.enabled}`)}function r(p,x={}){var v,C,A;if(!p||p.length===0){t.pixelPlan=null,console.log("[PLAN OVERLAY] Plan cleared");return}let P=[];for(let w of p){let S,f;if(typeof w.tileX=="number"&&typeof w.localX=="number")S=w.tileX*4e3+w.localX,f=w.tileY*4e3+w.localY;else if(x.anchor&&typeof w.imageX=="number"){let L=x.anchor.tileX*4e3+(x.anchor.pxX||0),I=x.anchor.tileY*4e3+(x.anchor.pxY||0);S=L+w.imageX,f=I+w.imageY}else continue;P.push({globalX:S,globalY:f,r:((v=w.color)==null?void 0:v.r)||0,g:((C=w.color)==null?void 0:C.g)||0,b:((A=w.color)==null?void 0:A.b)||0})}t.pixelPlan={pixels:P},t.nextBatchCount=x.nextBatchCount||0,t.anchor=x.anchor||null,t.imageWidth=x.imageWidth||null,t.imageHeight=x.imageHeight||null,console.log(`[PLAN OVERLAY] Plan set: ${P.length} pixels`),typeof x.enabled=="boolean"&&m(x.enabled)}function n(p){t.nextBatchCount=Math.max(0,Number(p||0)),console.log(`[PLAN OVERLAY] Next batch count: ${t.nextBatchCount}`)}function c(p){t.anchor=p,console.log("[PLAN OVERLAY] Anchor set:",p)}function h(p,x){console.log("[PLAN OVERLAY] CSS anchor set (ignored in tile system):",{x:p,y:x})}function y(){console.log("[PLAN OVERLAY] Selection mode ended (ignored in tile system)")}function E(){i(),t.pixelPlan=null,t.fetchedBlobQueue.clear(),console.log("[PLAN OVERLAY] Cleanup completed")}window.__WPA_PLAN_OVERLAY__={injectStyles:d,setEnabled:m,setPlan:r,setPlanItemsFromTileList:r,setNextBatchCount:n,setAnchor:c,setAnchorCss:h,endSelectionMode:y,render:()=>{},cleanup:E,get state(){return t}},console.log("[PLAN OVERLAY] Blue Marble tile system ready")})();async function xe(){s("\u{1F680} Iniciando WPlace Auto-Image (versi\xF3n modular)"),q(),window.__wplaceBot={...window.__wplaceBot,imageRunning:!0};let u=null,t=window.fetch,d=()=>{window.fetch!==t&&(window.fetch=t,s("\u{1F504} Fetch original restaurado")),e.positionTimeoutId&&(clearTimeout(e.positionTimeoutId),e.positionTimeoutId=null),e.cleanupObserver&&(e.cleanupObserver(),e.cleanupObserver=null),e.selectingPosition=!1};try{let a={...B},i=W("image");if(e.language=te(),!a.SITEKEY){let r=document.querySelector("*[data-sitekey]");r?(a.SITEKEY=r.getAttribute("data-sitekey"),s(`\u{1F4DD} Sitekey encontrada autom\xE1ticamente: ${a.SITEKEY.substring(0,20)}...`)):s("\u26A0\uFE0F No se pudo encontrar la sitekey autom\xE1ticamente")}async function l(){return s("\u{1F916} Intentando auto-inicio..."),G()?(s("\u{1F3A8} Paleta de colores ya est\xE1 abierta"),!0):(s("\u{1F50D} Paleta no encontrada, buscando bot\xF3n Paint..."),fe()?(s("\u{1F446} Bot\xF3n Paint encontrado y presionado"),await z(2e3),G()?(s("\u2705 Paleta abierta exitosamente"),!0):(s("\u274C La paleta no se abri\xF3 despu\xE9s de hacer clic"),!1)):(s("\u274C Bot\xF3n Paint no encontrado"),!1))}async function g(r=!1){s("\u{1F916} Inicializando Auto-Image..."),o.setStatus(b("image.checkingColors"),"info");let n=H();if(n.length===0)return o.setStatus(b("image.noColorsFound"),"error"),!1;let c=await ae(),h=null;c.success&&c.data.user?(h={username:c.data.user.name||"An\xF3nimo",charges:c.data.charges,maxCharges:c.data.maxCharges,pixels:c.data.user.pixelsPainted||0},u=h,e.currentCharges=c.data.charges,e.maxCharges=c.data.maxCharges||50,s(`\u{1F464} Usuario conectado: ${c.data.user.name||"An\xF3nimo"} - Cargas: ${h.charges}/${h.maxCharges} - P\xEDxeles: ${h.pixels}`)):s("\u26A0\uFE0F No se pudo obtener informaci\xF3n del usuario"),e.availableColors=n,e.colorsChecked=!0,o.setStatus(b("image.colorsFound",{count:n.length}),"success"),o.updateProgress(0,0,h),r||s(`\u2705 ${n.length} colores disponibles detectados`),o.setInitialized(!0),o.enableButtonsAfterInit();try{}catch{}return!0}let o=await me({texts:i,onConfigChange:r=>{r.pixelsPerBatch!==void 0&&(e.pixelsPerBatch=r.pixelsPerBatch),r.useAllCharges!==void 0&&(e.useAllChargesFirst=r.useAllCharges),s("Configuraci\xF3n actualizada:",r)},onInitBot:g,onUploadImage:async r=>{try{o.setStatus(b("image.loadingImage"),"info");let n=window.URL.createObjectURL(r),c=new X(n);c.originalName=r.name,await c.load();let h=c.initializeColorPalette();e.availableColors=h;let y=await c.analyzePixels();c.setCoords(0,0,0,0);let E=c.getImageData();e.imageData=E,e.imageData.processor=c,e.totalPixels=y.requiredPixels,e.paintedPixels=0,e.originalImageName=r.name,e.imageLoaded=!0,o.setStatus(b("image.imageLoaded",{count:y.requiredPixels}),"success"),o.updateProgress(0,y.requiredPixels,u),s(`\u2705 [BLUE MARBLE] Imagen cargada: ${E.width}x${E.height}, ${y.requiredPixels} p\xEDxeles v\xE1lidos`),s(`\u2705 [BLUE MARBLE] An\xE1lisis: ${y.uniqueColors} colores \xFAnicos, ${y.defacePixels} p\xEDxeles #deface`),window.URL.revokeObjectURL(n);try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),window.__WPA_PLAN_OVERLAY__.setPlan([],{enabled:!0,nextBatchCount:0}),s("\u2705 Plan overlay activado autom\xE1ticamente al cargar imagen"))}catch(p){s("\u26A0\uFE0F Error activando plan overlay:",p)}return!0}catch(n){return o.setStatus(b("image.imageError"),"error"),s("\u274C Error cargando imagen:",n),!1}},onSelectPosition:async()=>new Promise(r=>{o.setStatus(b("image.selectPositionAlert"),"info"),o.setStatus(b("image.waitingPosition"),"info"),e.selectingPosition=!0;let n=!1,c=()=>{window.fetch=async(E,p)=>{if(e.selectingPosition&&!n&&typeof E=="string"&&E.includes("/s0/pixel/")&&p&&p.method==="POST")try{s(`\u{1F3AF} Interceptando request de pintado: ${E}`);let x=await t(E,p);if(x.ok&&p.body){let P;try{P=JSON.parse(p.body)}catch(v){return s("Error parseando body del request:",v),x}if(P.coords&&Array.isArray(P.coords)&&P.coords.length>=2){let v=P.coords[0],C=P.coords[1],A=E.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/);if(A&&!n){n=!0;let w=parseInt(A[1]),S=parseInt(A[2]);if(e.tileX=w,e.tileY=S,e.startPosition={x:v,y:C},e.selectingPosition=!1,e.imageData&&e.imageData.processor){let f=e.imageData.processor;f.setCoords(w,S,v,C);try{await f.createTemplateTiles(),s(`\u2705 [BLUE MARBLE] Template tiles creados para posici\xF3n tile(${w},${S}) pixel(${v},${C})`)}catch(I){s(`\u274C [BLUE MARBLE] Error creando template tiles: ${I.message}`)}let L=f.generatePixelQueue();e.remainingPixels=L,e.totalPixels=L.length,s(`\u2705 Cola de p\xEDxeles generada: ${L.length} p\xEDxeles para overlay`)}try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:w,tileY:S,pxX:v,pxY:C}),e.remainingPixels&&e.remainingPixels.length>0?(window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{anchor:{tileX:w,tileY:S,pxX:v,pxY:C},imageWidth:e.imageData.width,imageHeight:e.imageData.height,enabled:!0}),s(`\u2705 Plan overlay anclado en tile(${w},${S}) local(${v},${C})`)):s("\u26A0\uFE0F No hay p\xEDxeles para mostrar en overlay"))}catch(f){s(`\u274C Error configurando overlay: ${f.message}`)}d(),o.setStatus(b("image.positionSet"),"success"),s(`\u2705 Posici\xF3n establecida: tile(${e.tileX},${e.tileY}) local(${v},${C})`),r(!0)}else s("\u26A0\uFE0F No se pudo extraer tile de la URL:",E)}}return x}catch(x){if(s("\u274C Error interceptando pixel:",x),!n)return d(),t(E,p)}return t(E,p)}},h=()=>{let E=document.querySelectorAll("canvas");if(E.length===0){s("\u26A0\uFE0F No se encontraron elementos canvas");return}s(`\u{1F4CA} Configurando observer para ${E.length} canvas`);let p=x=>{var v;if(!e.selectingPosition||n)return;let P=x.target;if(P&&P.tagName==="CANVAS"){s("\u{1F5B1}\uFE0F Click detectado en canvas durante selecci\xF3n");try{let A=(((v=document.querySelector("canvas"))==null?void 0:v.parentElement)||document.body).getBoundingClientRect(),w=x.clientX-A.left,S=x.clientY-A.top;window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.setAnchorCss(w,S),s(`Plan overlay: ancla CSS establecida en (${w}, ${S})`))}catch(C){s("Plan Overlay: error calculando ancla CSS",C)}setTimeout(()=>{!n&&e.selectingPosition&&s("\u{1F50D} Buscando requests recientes de pintado...")},500)}};document.addEventListener("click",p),e.cleanupObserver=()=>{document.removeEventListener("click",p)}};c(),h();let y=setTimeout(()=>{e.selectingPosition&&!n&&(d(),e.cleanupObserver&&e.cleanupObserver(),o.setStatus(b("image.positionTimeout"),"error"),s("\u23F0 Timeout en selecci\xF3n de posici\xF3n"),r(!1))},12e4);e.positionTimeoutId=y}),onStartPainting:async()=>{var r;if(s("\u{1F50D} Estado para iniciar pintura:",{imageLoaded:e.imageLoaded,startPosition:e.startPosition,tileX:e.tileX,tileY:e.tileY,totalPixels:e.totalPixels,remainingPixels:((r=e.remainingPixels)==null?void 0:r.length)||0}),!e.imageLoaded||!e.startPosition)return o.setStatus(b("image.missingRequirements"),"error"),s(`\u274C Validaci\xF3n fallida: imageLoaded=${e.imageLoaded}, startPosition=${!!e.startPosition}`),!1;e.running=!0,e.stopFlag=!1,e.isFirstBatch=!0,o.setStatus(b("image.startPaintingMsg"),"success");try{return await se(e.imageData,e.startPosition,(n,c,h,y)=>{u&&(u.charges=Math.floor(e.currentCharges),y!==void 0&&(u.estimatedTime=y)),o.updateProgress(n,c,u),e.inCooldown&&e.nextBatchCooldown>0?o.updateCooldownDisplay(e.nextBatchCooldown):o.updateCooldownDisplay(0),h?h.includes("\u23F3")&&e.inCooldown?o.updateCooldownMessage(h):o.setStatus(h,"info"):o.setStatus(b("image.paintingProgress",{painted:n,total:c}),"info")},(n,c)=>{n?(o.setStatus(b("image.paintingComplete",{count:c}),"success"),de()):o.setStatus(b("image.paintingStopped"),"warning"),e.running=!1},n=>{o.setStatus(b("image.paintingError"),"error"),s("\u274C Error en proceso de pintado:",n),e.running=!1}),!0}catch(n){return o.setStatus(b("image.paintingError"),"error"),s("\u274C Error iniciando pintado:",n),e.running=!1,!1}},onStopPainting:async()=>{if(ue().hasProgress){let n=await he(b("image.confirmSaveProgress"),b("image.saveProgressTitle"),{save:b("image.saveProgress"),discard:b("image.discardProgress"),cancel:b("image.cancel")});if(n==="save"){let c=Z();c.success?o.setStatus(b("image.progressSaved",{filename:c.filename}),"success"):o.setStatus(b("image.progressSaveError",{error:c.error}),"error")}else if(n==="cancel")return!1}return j(),o.setStatus(b("image.paintingStopped"),"warning"),!0},onSaveProgress:async()=>{let r=Z();return r.success?o.setStatus(b("image.progressSaved",{filename:r.filename}),"success"):o.setStatus(b("image.progressSaveError",{error:r.error}),"error"),r.success},onLoadProgress:async r=>{try{let n=await ce(r);return n.success?(o.setStatus(b("image.progressLoaded",{painted:n.painted,total:n.total}),"success"),o.updateProgress(n.painted,n.total,u),s("\u2705 Progreso cargado - habilitando botones de inicio"),!0):(o.setStatus(b("image.progressLoadError",{error:n.error}),"error"),!1)}catch(n){return o.setStatus(b("image.progressLoadError",{error:n.message}),"error"),!1}},onResizeImage:()=>{e.imageLoaded&&e.imageData&&e.imageData.processor&&o.showResizeDialog(e.imageData.processor)},onConfirmResize:async(r,n,c)=>{s(`\u{1F504} Redimensionando imagen de ${r.getDimensions().width}x${r.getDimensions().height} a ${n}x${c}`);try{await r.resize(n,c);let h=await r.analyzePixels();e.imageData={processor:r,width:n,height:c,validPixelCount:h.validPixelCount,totalPixels:h.totalPixels,unknownPixels:h.unknownPixels},e.totalPixels=h.validPixelCount,e.paintedPixels=0,e.remainingPixels=[],e.lastPosition={x:0,y:0},o.updateProgress(0,h.validPixelCount,u),o.setStatus(b("image.resizeSuccess",{width:n,height:c}),"success"),s(`\u2705 Imagen redimensionada: ${h.validPixelCount} p\xEDxeles v\xE1lidos de ${h.totalPixels} totales`);try{if(window.__WPA_PLAN_OVERLAY__&&e.startPosition&&e.tileX!=null&&e.tileY!=null){await r.createTemplateTiles();let y=r.generatePixelQueue();e.remainingPixels=y,e.totalPixels=y.length,window.__WPA_PLAN_OVERLAY__.setPlan(y,{anchor:{tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y},imageWidth:n,imageHeight:c,enabled:!0}),s(`\u2705 Overlay actualizado con ${y.length} p\xEDxeles despu\xE9s del resize`)}}catch(y){s(`\u26A0\uFE0F Error actualizando overlay despu\xE9s del resize: ${y.message}`)}}catch(h){s(`\u274C Error redimensionando imagen: ${h.message}`),o.setStatus(b("image.imageError"),"error")}}}),m=r=>{let{language:n}=r.detail;s(`\u{1F30D} Imagen: Detectado cambio de idioma desde launcher: ${n}`),e.language=n};window.addEventListener("launcherLanguageChanged",m),window.addEventListener("languageChanged",m),window.addEventListener("beforeunload",()=>{d(),j(),o.destroy(),window.removeEventListener("launcherLanguageChanged",m),window.removeEventListener("languageChanged",m),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1)}),s("\u2705 Auto-Image inicializado correctamente"),setTimeout(async()=>{try{o.setStatus(b("image.autoInitializing"),"info"),s("\u{1F916} Intentando auto-inicio..."),await l()?(o.setStatus(b("image.autoInitSuccess"),"success"),s("\u2705 Auto-inicio exitoso"),o.setInitButtonVisible(!1),await g(!0)&&s("\u{1F680} Bot auto-iniciado completamente")):(o.setStatus(b("image.autoInitFailed"),"warning"),s("\u26A0\uFE0F Auto-inicio fall\xF3, se requiere inicio manual"))}catch(r){s("\u274C Error en auto-inicio:",r),o.setStatus(b("image.manualInitRequired"),"warning")}},1e3)}catch(a){throw s("\u274C Error inicializando Auto-Image:",a),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1),a}}(()=>{"use strict";var u,t;if((u=window.__wplaceBot)!=null&&u.imageRunning){alert("Auto-Image ya est\xE1 corriendo.");return}if((t=window.__wplaceBot)!=null&&t.farmRunning){alert("Auto-Farm est\xE1 ejecut\xE1ndose. Ci\xE9rralo antes de iniciar Auto-Image.");return}window.__wplaceBot||(window.__wplaceBot={}),window.__wplaceBot.imageRunning=!0,xe().catch(d=>{console.error("[BOT] Error en Auto-Image:",d),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1),alert("Auto-Image: error inesperado. Revisa consola.")})})();})();
