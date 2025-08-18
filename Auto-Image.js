/* WPlace AutoBOT — uso bajo tu responsabilidad. Compilado 2025-08-18T15:22:44.979Z */
(()=>{var s=(...c)=>console.log("[WPA-UI]",...c);var Z={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"Selecci\xF3n",user:"Usuario",charges:"Cargas",backend:"Backend",database:"Database",uptime:"Uptime",close:"Cerrar",launch:"Lanzar",loading:"Cargando\u2026",executing:"Ejecutando\u2026",downloading:"Descargando script\u2026",chooseBot:"Elige un bot y presiona Lanzar",readyToLaunch:"Listo para lanzar",loadError:"Error al cargar",loadErrorMsg:"No se pudo cargar el bot seleccionado. Revisa tu conexi\xF3n o int\xE9ntalo de nuevo.",checking:"\u{1F504} Verificando...",online:"\u{1F7E2} Online",offline:"\u{1F534} Offline",ok:"\u{1F7E2} OK",error:"\u{1F534} Error",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Iniciar Auto-BOT",uploadImage:"Subir Imagen",resizeImage:"Redimensionar Imagen",selectPosition:"Seleccionar Posici\xF3n",startPainting:"Iniciar Pintura",stopPainting:"Detener Pintura",saveProgress:"Guardar Progreso",loadProgress:"Cargar Progreso",checkingColors:"\u{1F50D} Verificando colores disponibles...",noColorsFound:"\u274C \xA1Abre la paleta de colores en el sitio e int\xE9ntalo de nuevo!",colorsFound:"\u2705 {count} colores disponibles encontrados",loadingImage:"\u{1F5BC}\uFE0F Cargando imagen...",imageLoaded:"\u2705 Imagen cargada con {count} p\xEDxeles v\xE1lidos",imageError:"\u274C Error al cargar la imagen",selectPositionAlert:"\xA1Pinta el primer p\xEDxel en la ubicaci\xF3n donde quieres que comience el arte!",waitingPosition:"\u{1F446} Esperando que pintes el p\xEDxel de referencia...",positionSet:"\u2705 \xA1Posici\xF3n establecida con \xE9xito!",positionTimeout:"\u274C Tiempo agotado para seleccionar posici\xF3n",positionDetected:"\u{1F3AF} Posici\xF3n detectada, procesando...",positionError:"\u274C Error detectando posici\xF3n, int\xE9ntalo de nuevo",startPaintingMsg:"\u{1F3A8} Iniciando pintura...",paintingProgress:"\u{1F9F1} Progreso: {painted}/{total} p\xEDxeles...",noCharges:"\u231B Sin cargas. Esperando {time}...",paintingStopped:"\u23F9\uFE0F Pintura detenida por el usuario",paintingComplete:"\u2705 \xA1Pintura completada! {count} p\xEDxeles pintados.",paintingError:"\u274C Error durante la pintura",missingRequirements:"\u274C Carga una imagen y selecciona una posici\xF3n primero",progress:"Progreso",userName:"Usuario",pixels:"P\xEDxeles",charges:"Cargas",estimatedTime:"Tiempo estimado",initMessage:"Haz clic en 'Iniciar Auto-BOT' para comenzar",waitingInit:"Esperando inicializaci\xF3n...",resizeSuccess:"\u2705 Imagen redimensionada a {width}x{height}",paintingPaused:"\u23F8\uFE0F Pintura pausada en la posici\xF3n X: {x}, Y: {y}",pixelsPerBatch:"P\xEDxeles por lote",batchSize:"Tama\xF1o del lote",nextBatchTime:"Siguiente lote en",useAllCharges:"Usar todas las cargas disponibles",showOverlay:"Mostrar overlay",maxCharges:"Cargas m\xE1ximas por lote",waitingForCharges:"\u23F3 Esperando cargas: {current}/{needed}",timeRemaining:"Tiempo restante",cooldownWaiting:"\u23F3 Esperando {time} para continuar...",progressSaved:"\u2705 Progreso guardado como {filename}",progressLoaded:"\u2705 Progreso cargado: {painted}/{total} p\xEDxeles pintados",progressLoadError:"\u274C Error al cargar progreso: {error}",progressSaveError:"\u274C Error al guardar progreso: {error}",confirmSaveProgress:"\xBFDeseas guardar el progreso actual antes de detener?",saveProgressTitle:"Guardar Progreso",discardProgress:"Descartar",cancel:"Cancelar",minimize:"Minimizar",width:"Ancho",height:"Alto",keepAspect:"Mantener proporci\xF3n",apply:"Aplicar",overlayOn:"Overlay: ON",overlayOff:"Overlay: OFF",passCompleted:"\u2705 Pasada completada: {painted} p\xEDxeles pintados | Progreso: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Esperando regeneraci\xF3n de cargas: {current}/{needed} - Tiempo: {time}",waitingChargesCountdown:"\u23F3 Esperando cargas: {current}/{needed} - Quedan: {time}",autoInitializing:"\u{1F916} Inicializando autom\xE1ticamente...",autoInitSuccess:"\u2705 Bot iniciado autom\xE1ticamente",autoInitFailed:"\u26A0\uFE0F No se pudo iniciar autom\xE1ticamente. Usa el bot\xF3n manual.",paletteDetected:"\u{1F3A8} Paleta de colores detectada",paletteNotFound:"\u{1F50D} Buscando paleta de colores...",clickingPaintButton:"\u{1F446} Haciendo clic en el bot\xF3n Paint...",paintButtonNotFound:"\u274C Bot\xF3n Paint no encontrado",manualInitRequired:"\u{1F527} Inicio manual requerido",retryAttempt:"\u{1F504} Reintento {attempt}/{maxAttempts} en {delay}s...",retryError:"\u{1F4A5} Error en intento {attempt}/{maxAttempts}, reintentando en {delay}s...",retryFailed:"\u274C Fall\xF3 despu\xE9s de {maxAttempts} intentos. Continuando con siguiente lote...",networkError:"\u{1F310} Error de red. Reintentando...",serverError:"\u{1F525} Error del servidor. Reintentando...",timeoutError:"\u23F0 Timeout del servidor. Reintentando..."},farm:{title:"WPlace Farm Bot",start:"Iniciar",stop:"Detener",stopped:"Bot detenido",calibrate:"Calibrar",paintOnce:"Una vez",checkingStatus:"Verificando estado...",configuration:"Configuraci\xF3n",delay:"Delay (ms)",pixelsPerBatch:"P\xEDxeles/lote",minCharges:"Cargas m\xEDn",colorMode:"Modo color",random:"Aleatorio",fixed:"Fijo",range:"Rango",fixedColor:"Color fijo",advanced:"Avanzado",tileX:"Tile X",tileY:"Tile Y",customPalette:"Paleta personalizada",paletteExample:"ej: #FF0000,#00FF00,#0000FF",capture:"Capturar",painted:"Pintados",charges:"Cargas",retries:"Fallos",tile:"Tile",configSaved:"Configuraci\xF3n guardada",configLoaded:"Configuraci\xF3n cargada",configReset:"Configuraci\xF3n reiniciada",captureInstructions:"Pinta un p\xEDxel manualmente para capturar coordenadas...",backendOnline:"Backend Online",backendOffline:"Backend Offline",startingBot:"Iniciando bot...",stoppingBot:"Deteniendo bot...",calibrating:"Calibrando...",alreadyRunning:"Auto-Farm ya est\xE1 corriendo.",imageRunningWarning:"Auto-Image est\xE1 ejecut\xE1ndose. Ci\xE9rralo antes de iniciar Auto-Farm.",selectPosition:"Seleccionar Zona",selectPositionAlert:"\u{1F3AF} Pinta un p\xEDxel en una zona DESPOBLADA del mapa para establecer el \xE1rea de farming",waitingPosition:"\u{1F446} Esperando que pintes el p\xEDxel de referencia...",positionSet:"\u2705 \xA1Zona establecida! Radio: 500px",positionTimeout:"\u274C Tiempo agotado para seleccionar zona",missingPosition:"\u274C Selecciona una zona primero usando 'Seleccionar Zona'",farmRadius:"Radio farm",positionInfo:"Zona actual",farmingInRadius:"\u{1F33E} Farming en radio {radius}px desde ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANTE: Selecciona una zona DESPOBLADA para evitar conflictos",noPosition:"Sin zona",currentZone:"Zona: ({x},{y})",autoSelectPosition:"\u{1F3AF} Selecciona una zona primero. Pinta un p\xEDxel en el mapa para establecer la zona de farming"},common:{yes:"S\xED",no:"No",ok:"Aceptar",cancel:"Cancelar",close:"Cerrar",save:"Guardar",load:"Cargar",delete:"Eliminar",edit:"Editar",start:"Iniciar",stop:"Detener",pause:"Pausar",resume:"Reanudar",reset:"Reiniciar",settings:"Configuraci\xF3n",help:"Ayuda",about:"Acerca de",language:"Idioma",loading:"Cargando...",error:"Error",success:"\xC9xito",warning:"Advertencia",info:"Informaci\xF3n",languageChanged:"Idioma cambiado a {language}"}};var G={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"Selection",user:"User",charges:"Charges",backend:"Backend",database:"Database",uptime:"Uptime",close:"Close",launch:"Launch",loading:"Loading\u2026",executing:"Executing\u2026",downloading:"Downloading script\u2026",chooseBot:"Choose a bot and press Launch",readyToLaunch:"Ready to launch",loadError:"Load error",loadErrorMsg:"Could not load the selected bot. Check your connection or try again.",checking:"\u{1F504} Checking...",online:"\u{1F7E2} Online",offline:"\u{1F534} Offline",ok:"\u{1F7E2} OK",error:"\u{1F534} Error",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Initialize Auto-BOT",uploadImage:"Upload Image",resizeImage:"Resize Image",selectPosition:"Select Position",startPainting:"Start Painting",stopPainting:"Stop Painting",saveProgress:"Save Progress",loadProgress:"Load Progress",checkingColors:"\u{1F50D} Checking available colors...",noColorsFound:"\u274C Open the color palette on the site and try again!",colorsFound:"\u2705 Found {count} available colors",loadingImage:"\u{1F5BC}\uFE0F Loading image...",imageLoaded:"\u2705 Image loaded with {count} valid pixels",imageError:"\u274C Error loading image",selectPositionAlert:"Paint the first pixel at the location where you want the art to start!",waitingPosition:"\u{1F446} Waiting for you to paint the reference pixel...",positionSet:"\u2705 Position set successfully!",positionTimeout:"\u274C Timeout for position selection",positionDetected:"\u{1F3AF} Position detected, processing...",positionError:"\u274C Error detecting position, please try again",startPaintingMsg:"\u{1F3A8} Starting painting...",paintingProgress:"\u{1F9F1} Progress: {painted}/{total} pixels...",noCharges:"\u231B No charges. Waiting {time}...",paintingStopped:"\u23F9\uFE0F Painting stopped by user",paintingComplete:"\u2705 Painting completed! {count} pixels painted.",paintingError:"\u274C Error during painting",missingRequirements:"\u274C Load an image and select a position first",progress:"Progress",userName:"User",pixels:"Pixels",charges:"Charges",estimatedTime:"Estimated time",initMessage:"Click 'Initialize Auto-BOT' to begin",waitingInit:"Waiting for initialization...",resizeSuccess:"\u2705 Image resized to {width}x{height}",paintingPaused:"\u23F8\uFE0F Painting paused at position X: {x}, Y: {y}",pixelsPerBatch:"Pixels per batch",batchSize:"Batch size",nextBatchTime:"Next batch in",useAllCharges:"Use all available charges",showOverlay:"Show overlay",maxCharges:"Max charges per batch",waitingForCharges:"\u23F3 Waiting for charges: {current}/{needed}",timeRemaining:"Time remaining",cooldownWaiting:"\u23F3 Waiting {time} to continue...",progressSaved:"\u2705 Progress saved as {filename}",progressLoaded:"\u2705 Progress loaded: {painted}/{total} pixels painted",progressLoadError:"\u274C Error loading progress: {error}",progressSaveError:"\u274C Error saving progress: {error}",confirmSaveProgress:"Do you want to save the current progress before stopping?",saveProgressTitle:"Save Progress",discardProgress:"Discard",cancel:"Cancel",minimize:"Minimize",width:"Width",height:"Height",keepAspect:"Keep aspect ratio",apply:"Apply",overlayOn:"Overlay: ON",overlayOff:"Overlay: OFF",passCompleted:"\u2705 Pass completed: {painted} pixels painted | Progress: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Waiting for charge regeneration: {current}/{needed} - Time: {time}",waitingChargesCountdown:"\u23F3 Waiting for charges: {current}/{needed} - Remaining: {time}",autoInitializing:"\u{1F916} Auto-initializing...",autoInitSuccess:"\u2705 Bot auto-started successfully",autoInitFailed:"\u26A0\uFE0F Could not auto-start. Use manual button.",paletteDetected:"\u{1F3A8} Color palette detected",paletteNotFound:"\u{1F50D} Searching for color palette...",clickingPaintButton:"\u{1F446} Clicking Paint button...",paintButtonNotFound:"\u274C Paint button not found",manualInitRequired:"\u{1F527} Manual initialization required",retryAttempt:"\u{1F504} Retry {attempt}/{maxAttempts} in {delay}s...",retryError:"\u{1F4A5} Error in attempt {attempt}/{maxAttempts}, retrying in {delay}s...",retryFailed:"\u274C Failed after {maxAttempts} attempts. Continuing with next batch...",networkError:"\u{1F310} Network error. Retrying...",serverError:"\u{1F525} Server error. Retrying...",timeoutError:"\u23F0 Server timeout. Retrying..."},farm:{title:"WPlace Farm Bot",start:"Start",stop:"Stop",stopped:"Bot stopped",calibrate:"Calibrate",paintOnce:"Once",checkingStatus:"Checking status...",configuration:"Configuration",delay:"Delay (ms)",pixelsPerBatch:"Pixels/batch",minCharges:"Min charges",colorMode:"Color mode",random:"Random",fixed:"Fixed",range:"Range",fixedColor:"Fixed color",advanced:"Advanced",tileX:"Tile X",tileY:"Tile Y",customPalette:"Custom palette",paletteExample:"e.g: #FF0000,#00FF00,#0000FF",capture:"Capture",painted:"Painted",charges:"Charges",retries:"Retries",tile:"Tile",configSaved:"Configuration saved",configLoaded:"Configuration loaded",configReset:"Configuration reset",captureInstructions:"Paint a pixel manually to capture coordinates...",backendOnline:"Backend Online",backendOffline:"Backend Offline",startingBot:"Starting bot...",stoppingBot:"Stopping bot...",calibrating:"Calibrating...",alreadyRunning:"Auto-Farm is already running.",imageRunningWarning:"Auto-Image is running. Close it before starting Auto-Farm.",selectPosition:"Select Area",selectPositionAlert:"\u{1F3AF} Paint a pixel in an EMPTY area of the map to set the farming zone",waitingPosition:"\u{1F446} Waiting for you to paint the reference pixel...",positionSet:"\u2705 Area set! Radius: 500px",positionTimeout:"\u274C Timeout for area selection",missingPosition:"\u274C Select an area first using 'Select Area'",farmRadius:"Farm radius",positionInfo:"Current area",farmingInRadius:"\u{1F33E} Farming in {radius}px radius from ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANT: Select an EMPTY area to avoid conflicts",noPosition:"No area",currentZone:"Zone: ({x},{y})",autoSelectPosition:"\u{1F3AF} Select an area first. Paint a pixel on the map to set the farming zone"},common:{yes:"Yes",no:"No",ok:"OK",cancel:"Cancel",close:"Close",save:"Save",load:"Load",delete:"Delete",edit:"Edit",start:"Start",stop:"Stop",pause:"Pause",resume:"Resume",reset:"Reset",settings:"Settings",help:"Help",about:"About",language:"Language",loading:"Loading...",error:"Error",success:"Success",warning:"Warning",info:"Information",languageChanged:"Language changed to {language}"}};var Q={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} Auto-Farm",autoImage:"\u{1F3A8} Auto-Image",selection:"S\xE9lection",user:"Utilisateur",charges:"Charges",backend:"Backend",database:"Base de donn\xE9es",uptime:"Temps actif",close:"Fermer",launch:"Lancer",loading:"Chargement\u2026",executing:"Ex\xE9cution\u2026",downloading:"T\xE9l\xE9chargement du script\u2026",chooseBot:"Choisissez un bot et appuyez sur Lancer",readyToLaunch:"Pr\xEAt \xE0 lancer",loadError:"Erreur de chargement",loadErrorMsg:"Impossible de charger le bot s\xE9lectionn\xE9. V\xE9rifiez votre connexion ou r\xE9essayez.",checking:"\u{1F504} V\xE9rification...",online:"\u{1F7E2} En ligne",offline:"\u{1F534} Hors ligne",ok:"\u{1F7E2} OK",error:"\u{1F534} Erreur",unknown:"-"},image:{title:"WPlace Auto-Image",initBot:"Initialiser Auto-BOT",uploadImage:"T\xE9l\xE9charger Image",resizeImage:"Redimensionner Image",selectPosition:"S\xE9lectionner Position",startPainting:"Commencer Peinture",stopPainting:"Arr\xEAter Peinture",saveProgress:"Sauvegarder Progr\xE8s",loadProgress:"Charger Progr\xE8s",checkingColors:"\u{1F50D} V\xE9rification des couleurs disponibles...",noColorsFound:"\u274C Ouvrez la palette de couleurs sur le site et r\xE9essayez!",colorsFound:"\u2705 {count} couleurs disponibles trouv\xE9es",loadingImage:"\u{1F5BC}\uFE0F Chargement de l'image...",imageLoaded:"\u2705 Image charg\xE9e avec {count} pixels valides",imageError:"\u274C Erreur lors du chargement de l'image",selectPositionAlert:"Peignez le premier pixel \xE0 l'emplacement o\xF9 vous voulez que l'art commence!",waitingPosition:"\u{1F446} En attente que vous peigniez le pixel de r\xE9f\xE9rence...",positionSet:"\u2705 Position d\xE9finie avec succ\xE8s!",positionTimeout:"\u274C D\xE9lai d\xE9pass\xE9 pour la s\xE9lection de position",positionDetected:"\u{1F3AF} Position d\xE9tect\xE9e, traitement...",positionError:"\u274C Erreur d\xE9tectant la position, essayez \xE0 nouveau",startPaintingMsg:"\u{1F3A8} D\xE9but de la peinture...",paintingProgress:"\u{1F9F1} Progr\xE8s: {painted}/{total} pixels...",noCharges:"\u231B Aucune charge. Attendre {time}...",paintingStopped:"\u23F9\uFE0F Peinture arr\xEAt\xE9e par l'utilisateur",paintingComplete:"\u2705 Peinture termin\xE9e! {count} pixels peints.",paintingError:"\u274C Erreur pendant la peinture",missingRequirements:"\u274C Chargez une image et s\xE9lectionnez une position d'abord",progress:"Progr\xE8s",userName:"Usager",pixels:"Pixels",charges:"Charges",estimatedTime:"Temps estim\xE9",initMessage:"Cliquez sur 'Initialiser Auto-BOT' pour commencer",waitingInit:"En attente d'initialisation...",resizeSuccess:"\u2705 Image redimensionn\xE9e \xE0 {width}x{height}",paintingPaused:"\u23F8\uFE0F Peinture mise en pause \xE0 la position X: {x}, Y: {y}",pixelsPerBatch:"Pixels par lot",batchSize:"Taille du lot",nextBatchTime:"Prochain lot dans",useAllCharges:"Utiliser toutes les charges disponibles",showOverlay:"Afficher l'overlay",maxCharges:"Charges max par lot",waitingForCharges:"\u23F3 En attente de charges: {current}/{needed}",timeRemaining:"Temps restant",cooldownWaiting:"\u23F3 Attendre {time} pour continuer...",progressSaved:"\u2705 Progr\xE8s sauvegard\xE9 sous {filename}",progressLoaded:"\u2705 Progr\xE8s charg\xE9: {painted}/{total} pixels peints",progressLoadError:"\u274C Erreur lors du chargement du progr\xE8s: {error}",progressSaveError:"\u274C Erreur lors de la sauvegarde du progr\xE8s: {error}",confirmSaveProgress:"Voulez-vous sauvegarder le progr\xE8s actuel avant d'arr\xEAter?",saveProgressTitle:"Sauvegarder Progr\xE8s",discardProgress:"Abandonner",cancel:"Annuler",minimize:"Minimiser",width:"Largeur",height:"Hauteur",keepAspect:"Garder les proportions",apply:"Appliquer",overlayOn:"Overlay : ON",overlayOff:"Overlay : OFF",passCompleted:"\u2705 Passage termin\xE9: {painted} pixels peints | Progr\xE8s: {percent}% ({current}/{total})",waitingChargesRegen:"\u23F3 Attente de r\xE9g\xE9n\xE9ration des charges: {current}/{needed} - Temps: {time}",waitingChargesCountdown:"\u23F3 Attente des charges: {current}/{needed} - Restant: {time}",autoInitializing:"\u{1F916} Initialisation automatique...",autoInitSuccess:"\u2705 Bot d\xE9marr\xE9 automatiquement",autoInitFailed:"\u26A0\uFE0F Impossible de d\xE9marrer automatiquement. Utilisez le bouton manuel.",paletteDetected:"\u{1F3A8} Palette de couleurs d\xE9tect\xE9e",paletteNotFound:"\u{1F50D} Recherche de la palette de couleurs...",clickingPaintButton:"\u{1F446} Clic sur le bouton Paint...",paintButtonNotFound:"\u274C Bouton Paint introuvable",manualInitRequired:"\u{1F527} Initialisation manuelle requise",retryAttempt:"\u{1F504} Tentative {attempt}/{maxAttempts} dans {delay}s...",retryError:"\u{1F4A5} Erreur dans tentative {attempt}/{maxAttempts}, nouvel essai dans {delay}s...",retryFailed:"\u274C \xC9chec apr\xE8s {maxAttempts} tentatives. Continuant avec le lot suivant...",networkError:"\u{1F310} Erreur r\xE9seau. Nouvel essai...",serverError:"\u{1F525} Erreur serveur. Nouvel essai...",timeoutError:"\u23F0 Timeout serveur. Nouvel essai..."},farm:{title:"WPlace Farm Bot",start:"D\xE9marrer",stop:"Arr\xEAter",stopped:"Bot arr\xEAt\xE9",calibrate:"Calibrer",paintOnce:"Une fois",checkingStatus:"V\xE9rification du statut...",configuration:"Configuration",delay:"D\xE9lai (ms)",pixelsPerBatch:"Pixels/lot",minCharges:"Charges min",colorMode:"Mode couleur",random:"Al\xE9atoire",fixed:"Fixe",range:"Plage",fixedColor:"Couleur fixe",advanced:"Avanc\xE9",tileX:"Tuile X",tileY:"Tuile Y",customPalette:"Palette personnalis\xE9e",paletteExample:"ex: #FF0000,#00FF00,#0000FF",capture:"Capturer",painted:"Peints",charges:"Charges",retries:"\xC9checs",tile:"Tuile",configSaved:"Configuration sauvegard\xE9e",configLoaded:"Configuration charg\xE9e",configReset:"Configuration r\xE9initialis\xE9e",captureInstructions:"Peindre un pixel manuellement pour capturer les coordonn\xE9es...",backendOnline:"Backend En ligne",backendOffline:"Backend Hors ligne",startingBot:"D\xE9marrage du bot...",stoppingBot:"Arr\xEAt du bot...",calibrating:"Calibrage...",alreadyRunning:"Auto-Farm est d\xE9j\xE0 en cours d'ex\xE9cution.",imageRunningWarning:"Auto-Image est en cours d'ex\xE9cution. Fermez-le avant de d\xE9marrer Auto-Farm.",selectPosition:"S\xE9lectionner Zone",selectPositionAlert:"\u{1F3AF} Peignez un pixel dans une zone VIDE de la carte pour d\xE9finir la zone de farming",waitingPosition:"\u{1F446} En attente que vous peigniez le pixel de r\xE9f\xE9rence...",positionSet:"\u2705 Zone d\xE9finie! Rayon: 500px",positionTimeout:"\u274C D\xE9lai d\xE9pass\xE9 pour la s\xE9lection de zone",missingPosition:"\u274C S\xE9lectionnez une zone d'abord en utilisant 'S\xE9lectionner Zone'",farmRadius:"Rayon farm",positionInfo:"Zone actuelle",farmingInRadius:"\u{1F33E} Farming dans un rayon de {radius}px depuis ({x},{y})",selectEmptyArea:"\u26A0\uFE0F IMPORTANT: S\xE9lectionnez une zone VIDE pour \xE9viter les conflits",noPosition:"Aucune zone",currentZone:"Zone: ({x},{y})",autoSelectPosition:"\u{1F3AF} S\xE9lectionnez une zone d'abord. Peignez un pixel sur la carte pour d\xE9finir la zone de farming"},common:{yes:"Oui",no:"Non",ok:"OK",cancel:"Annuler",close:"Fermer",save:"Sauvegarder",load:"Charger",delete:"Supprimer",edit:"Modifier",start:"D\xE9marrer",stop:"Arr\xEAter",pause:"Pause",resume:"Reprendre",reset:"R\xE9initialiser",settings:"Param\xE8tres",help:"Aide",about:"\xC0 propos",language:"Langue",loading:"Chargement...",error:"Erreur",success:"Succ\xE8s",warning:"Avertissement",info:"Information",languageChanged:"Langue chang\xE9e en {language}"}};var K={launcher:{title:"WPlace AutoBOT",autoFarm:"\u{1F33E} \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C",autoImage:"\u{1F3A8} \u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",selection:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",user:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",charges:"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",backend:"\u0411\u044D\u043A\u0435\u043D\u0434",database:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445",uptime:"\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",launch:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",executing:"\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",downloading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043A\u0440\u0438\u043F\u0442\u0430...",chooseBot:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043E\u0442\u0430 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",readyToLaunch:"\u0413\u043E\u0442\u043E\u0432\u043E \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443",loadError:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",loadErrorMsg:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0431\u043E\u0442\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",checking:"\u{1F504} \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430...",online:"\u{1F7E2} \u041E\u043D\u043B\u0430\u0439\u043D",offline:"\u{1F534} \u041E\u0444\u043B\u0430\u0439\u043D",ok:"\u{1F7E2} \u041E\u041A",error:"\u{1F534} \u041E\u0448\u0438\u0431\u043A\u0430",unknown:"-"},image:{title:"WPlace \u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",initBot:"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C Auto-BOT",uploadImage:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",resizeImage:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",selectPosition:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u0430",startPainting:"\u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C",stopPainting:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",saveProgress:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",loadProgress:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",checkingColors:"\u{1F50D} \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432...",noColorsFound:"\u274C \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043B\u0438\u0442\u0440\u0443 \u0446\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430!",colorsFound:"\u2705 \u041D\u0430\u0439\u0434\u0435\u043D\u043E {count} \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432",loadingImage:"\u{1F5BC}\uFE0F \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F...",imageLoaded:"\u2705 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0441 {count} \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u043C\u0438",imageError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",selectPositionAlert:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u0442\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u0433\u0434\u0435 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u0441\u044F!",waitingPosition:"\u{1F446} \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u043A\u0441\u0435\u043B\u044F....",positionSet:"\u2705 \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!",positionTimeout:"\u274C \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",positionDetected:"\u{1F3AF} \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u0430, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430...",positionError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",startPaintingMsg:"\u{1F3A8} \u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F...",paintingProgress:"\u{1F9F1} \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: {painted} \u0438\u0437 {total} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439...",noCharges:"\u231B \u041D\u0435\u0442 \u0437\u0430\u0440\u044F\u0434\u043E\u0432. \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 {time}...",paintingStopped:"\u23F9\uFE0F \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C",paintingComplete:"\u2705 \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E! {count} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E.",paintingError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u044F",missingRequirements:"\u274C \u0421\u043F\u0435\u0440\u0432\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430\u0447\u0430\u043B\u0430",progress:"\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",userName:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",pixels:"\u041F\u0438\u043A\u0441\u0435\u043B\u0438",charges:"\u0417\u0430\u0440\u044F\u0434\u044B",estimatedTime:"\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",initMessage:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C Auto-BOT\xBB, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C",waitingInit:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438...",resizeSuccess:"\u2705 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E \u0434\u043E {width}x{height}",paintingPaused:"\u23F8\uFE0F \u0420\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 X: {x}, Y: {y}",pixelsPerBatch:"\u041F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0432 \u043F\u0440\u043E\u0445\u043E\u0434\u0435",batchSize:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u0440\u043E\u0445\u043E\u0434\u0430",nextBatchTime:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437",useAllCharges:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0437\u0430\u0440\u044F\u0434\u044B",showOverlay:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435",maxCharges:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u0437\u0430\u0440\u044F\u0434\u043E\u0432 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0434",waitingForCharges:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u043E\u0432: {current} \u0438\u0437 {needed}",timeRemaining:"\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",cooldownWaiting:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 {time} \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F...",progressSaved:"\u2705 \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u043A\u0430\u043A {filename}",progressLoaded:"\u2705 \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D: {painted} \u0438\u0437 {total} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E",progressLoadError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430: {error}",progressSaveError:"\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430: {error}",confirmSaveProgress:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043F\u0435\u0440\u0435\u0434 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439?",saveProgressTitle:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",discardProgress:"\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",minimize:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",width:"\u0428\u0438\u0440\u0438\u043D\u0430",height:"\u0412\u044B\u0441\u043E\u0442\u0430",keepAspect:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",apply:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",passCompleted:"\u2705 \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D: {painted} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E | \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: {percent}% ({current} \u0438\u0437 {total})",waitingChargesRegen:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0440\u044F\u0434\u0430: {current} \u0438\u0437 {needed} - \u0412\u0440\u0435\u043C\u044F: {time}",waitingChargesCountdown:"\u23F3 \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0440\u044F\u0434\u043E\u0432: {current} \u0438\u0437 {needed} - \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F: {time}",autoInitializing:"\u{1F916} \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F...",autoInitSuccess:"\u2705 \u0411\u043E\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438",autoInitFailed:"\u26A0\uFE0F \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0443\u0441\u043A. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.",paletteDetected:"\u{1F3A8} \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430",paletteNotFound:"\u{1F50D} \u041F\u043E\u0438\u0441\u043A \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u043F\u0430\u043B\u0438\u0442\u0440\u044B...",clickingPaintButton:"\u{1F446} \u041D\u0430\u0436\u0430\u0442\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \xABPaint\xBB...",paintButtonNotFound:"\u274C \u041A\u043D\u043E\u043F\u043A\u0430 \xABPaint\xBB \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",manualInitRequired:"\u{1F527} \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0440\u0443\u0447\u043D\u0430\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",retryAttempt:"\u{1F504} \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430 {attempt} \u0438\u0437 {maxAttempts} \u0447\u0435\u0440\u0435\u0437 {delay}s...",retryError:"\u{1F4A5} \u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 {attempt} \u0438\u0437 {maxAttempts}, \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 {delay}s...",retryFailed:"\u274C \u041F\u0440\u043E\u0432\u0430\u043B\u0435\u043D\u043E \u0441\u043F\u0443\u0441\u0442\u044F {maxAttempts} \u043F\u043E\u043F\u044B\u0442\u043E\u043A. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u043E\u0445\u043E\u0434\u0435...",networkError:"\u{1F310} \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...",serverError:"\u{1F525} \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430...",timeoutError:"\u23F0 \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430..."},farm:{title:"WPlace \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C",start:"\u041D\u0430\u0447\u0430\u0442\u044C",stop:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",stopped:"\u0411\u043E\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",calibrate:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u0430\u0442\u044C",paintOnce:"\u0415\u0434\u0438\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u043E",checkingStatus:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430...",configuration:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F",delay:"\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 (\u043C\u0441)",pixelsPerBatch:"\u041F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0434",minCharges:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E",colorMode:"\u0420\u0435\u0436\u0438\u043C \u0446\u0432\u0435\u0442\u043E\u0432",random:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439",fixed:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",range:"\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D",fixedColor:"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0446\u0432\u0435\u0442",advanced:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435",tileX:"\u041F\u043B\u0438\u0442\u043A\u0430 X",tileY:"\u041F\u043B\u0438\u0442\u043A\u0430 Y",customPalette:"\u0421\u0432\u043E\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430",paletteExample:"\u043F\u0440\u0438\u043C\u0435\u0440: #FF0000,#00FF00,#0000FF",capture:"\u0417\u0430\u0445\u0432\u0430\u0442",painted:"\u0417\u0430\u043A\u0440\u0430\u0448\u0435\u043D\u043E",charges:"\u0417\u0430\u0440\u044F\u0434\u044B",retries:"\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0438",tile:"\u041F\u043B\u0438\u0442\u043A\u0430",configSaved:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",configLoaded:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430",configReset:"\u0421\u0431\u0440\u043E\u0441 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",captureInstructions:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043B\u044F \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442...",backendOnline:"\u0411\u044D\u043A\u044D\u043D\u0434 \u041E\u043D\u043B\u0430\u0439\u043D",backendOffline:"\u0411\u044D\u043A\u044D\u043D\u0434",startingBot:"\u0417\u0430\u043F\u0443\u0441\u043A \u0431\u043E\u0442\u0430...",stoppingBot:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u043E\u0442\u0430...",calibrating:"\u041A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0430...",alreadyRunning:"\u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C \u0443\u0436\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D",imageRunningWarning:"\u0410\u0432\u0442\u043E-\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043E. \u0417\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C \u0410\u0432\u0442\u043E-\u0424\u0430\u0440\u043C\u0430.",selectPosition:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",selectPositionAlert:"\u{1F3AF} \u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u0432 \u041F\u0423\u0421\u0422\u041E\u0419 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0444\u0430\u0440\u043C\u0430.",waitingPosition:"\u{1F446} \u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0438\u043A\u0441\u0435\u043B\u044F....",positionSet:"\u2705 \u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430! \u0420\u0430\u0434\u0438\u0443\u0441: 500px",positionTimeout:"\u274C \u0422\u0430\u0439\u043C\u0430\u0443\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",missingPosition:"\u274C \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \xAB\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C\xBB",farmRadius:"\u0420\u0430\u0434\u0438\u0443\u0441 \u0444\u0430\u0440\u043C\u0430",positionInfo:"\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C",farmingInRadius:"\u{1F33E} \u0424\u0430\u0440\u043C \u0432 \u0440\u0430\u0434\u0438\u0443\u0441\u0435 {radius}px \u043E\u0442 ({x},{y})",selectEmptyArea:"\u26A0\uFE0F \u0412\u0410\u0416\u041D\u041E: \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u041F\u0423\u0421\u0422\u0423\u042E \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432.",noPosition:"\u041D\u0435\u0442 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",currentZone:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C: ({x},{y})",autoSelectPosition:"\u{1F3AF} \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C. \u041D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0444\u0430\u0440\u043C\u0430."},common:{yes:"\u0414\u0430",no:"\u041D\u0435\u0442",ok:"\u041E\u041A",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",load:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",edit:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",start:"\u041D\u0430\u0447\u0430\u0442\u044C",stop:"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C",pause:"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",resume:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",help:"\u041F\u043E\u043C\u043E\u0449\u044C",about:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",language:"\u042F\u0437\u044B\u043A",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",error:"\u041E\u0448\u0438\u0431\u043A\u0430",success:"\u0423\u0441\u043F\u0435\u0445",warning:"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",info:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",languageChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043D\u0430 {language}"}};var k={es:Z,en:G,fr:Q,ru:K},N="es",Y=k[N];function fe(){let t=(window.navigator.language||window.navigator.userLanguage||"es").split("-")[0].toLowerCase();return k[t]?t:"es"}function xe(){return null}function q(){let c=xe(),t=fe(),d="es";return c&&k[c]?d=c:t&&k[t]&&(d=t),Pe(d),d}function Pe(c){if(!k[c]){console.warn(`Idioma '${c}' no disponible. Usando '${N}'`);return}N=c,Y=k[c],typeof window!="undefined"&&window.CustomEvent&&window.dispatchEvent(new window.CustomEvent("languageChanged",{detail:{language:c,translations:Y}}))}function J(){return N}function b(c,t={}){let d=c.split("."),a=Y;for(let i of d)if(a&&typeof a=="object"&&i in a)a=a[i];else return console.warn(`Clave de traducci\xF3n no encontrada: '${c}'`),c;return typeof a!="string"?(console.warn(`Clave de traducci\xF3n no es string: '${c}'`),c):be(a,t)}function be(c,t){return!t||Object.keys(t).length===0?c:c.replace(/\{(\w+)\}/g,(d,a)=>t[a]!==void 0?t[a]:d)}function W(c){return Y[c]?Y[c]:(console.warn(`Secci\xF3n de traducci\xF3n no encontrada: '${c}'`),{})}q();var _={SITEKEY:"0x4AAAAAABpqJe8FO0N84q0F",COOLDOWN_DEFAULT:31e3,TRANSPARENCY_THRESHOLD:100,WHITE_THRESHOLD:250,LOG_INTERVAL:10,TILE_SIZE:3e3,PIXELS_PER_BATCH:20,CHARGE_REGEN_MS:3e4,THEME:{primary:"#000000",secondary:"#111111",accent:"#222222",text:"#ffffff",highlight:"#775ce3",success:"#00ff00",error:"#ff0000",warning:"#ffaa00"}};var e={running:!1,imageLoaded:!1,processing:!1,totalPixels:0,paintedPixels:0,availableColors:[],currentCharges:0,cooldown:_.COOLDOWN_DEFAULT,imageData:null,stopFlag:!1,colorsChecked:!1,startPosition:null,selectingPosition:!1,positionTimeoutId:null,cleanupObserver:null,region:null,minimized:!1,lastPosition:{x:0,y:0},estimatedTime:0,language:"es",tileX:null,tileY:null,pixelsPerBatch:_.PIXELS_PER_BATCH,useAllChargesFirst:!0,isFirstBatch:!0,maxCharges:50,nextBatchCooldown:0,inCooldown:!1,cooldownEndTime:0,remainingPixels:[],lastChargeUpdate:0,chargeDecimalPart:0,originalImageName:null,retryCount:0};function V(){s("\u{1F3A8} Detectando colores disponibles...");let c=document.querySelectorAll('[id^="color-"]'),t=[];for(let d of c){if(d.querySelector("svg"))continue;let a=d.id.replace("color-",""),i=parseInt(a);if(i===0||i===5)continue;let l=d.style.backgroundColor;if(l){let g=l.match(/\d+/g);if(g&&g.length>=3){let r={r:parseInt(g[0]),g:parseInt(g[1]),b:parseInt(g[2])};t.push({id:i,element:d,...r}),s(`Color detectado: id=${i}, rgb(${r.r},${r.g},${r.b})`)}}}return s(`\u2705 ${t.length} colores disponibles detectados`),t}var X=class{constructor(t){this.imageSrc=t,this.img=new window.Image,this.originalName=null,this.tileSize=1e3,this.drawMult=3,this.shreadSize=3,this.bitmap=null,this.imageWidth=0,this.imageHeight=0,this.totalPixels=0,this.requiredPixelCount=0,this.defacePixelCount=0,this.colorPalette={},this.allowedColorsSet=new Set,this.rgbToMeta=new Map,this.coords=[0,0,0,0],this.templateTiles={},this.templateTilesBuffers={},this.tilePrefixes=new Set}async load(){return new Promise((t,d)=>{this.img.onload=async()=>{try{this.bitmap=await createImageBitmap(this.img),this.imageWidth=this.bitmap.width,this.imageHeight=this.bitmap.height,this.totalPixels=this.imageWidth*this.imageHeight,s(`[BLUE MARBLE] Imagen cargada: ${this.imageWidth}\xD7${this.imageHeight} = ${this.totalPixels.toLocaleString()} p\xEDxeles`),t()}catch(a){d(a)}},this.img.onerror=d,this.img.src=this.imageSrc})}initializeColorPalette(){s("[BLUE MARBLE] Inicializando paleta de colores...");let t=this.detectSiteColors();this.allowedColorsSet=new Set(t.filter(a=>a.name&&a.name.toLowerCase()!=="transparent"&&Array.isArray(a.rgb)).map(a=>`${a.rgb[0]},${a.rgb[1]},${a.rgb[2]}`));let d="222,250,206";this.allowedColorsSet.add(d),this.rgbToMeta=new Map(t.filter(a=>Array.isArray(a.rgb)).map(a=>[`${a.rgb[0]},${a.rgb[1]},${a.rgb[2]}`,{id:a.id,premium:!!a.premium,name:a.name||`Color ${a.id}`}]));try{let a=t.find(i=>i.name&&i.name.toLowerCase()==="transparent");a&&Array.isArray(a.rgb)&&this.rgbToMeta.set(d,{id:a.id,premium:!!a.premium,name:a.name})}catch{}return s(`[BLUE MARBLE] Paleta inicializada: ${this.allowedColorsSet.size} colores permitidos`),Array.from(t)}detectSiteColors(){let t=document.querySelectorAll('[id^="color-"]'),d=[];for(let a of t){if(a.querySelector("svg"))continue;let i=a.id.replace("color-",""),l=parseInt(i),g=a.style.backgroundColor;if(g){let r=g.match(/\d+/g);if(r&&r.length>=3){let m=[parseInt(r[0]),parseInt(r[1]),parseInt(r[2])];d.push({id:l,element:a,rgb:m,name:a.title||a.getAttribute("aria-label")||`Color ${l}`,premium:a.classList.contains("premium")||a.querySelector(".premium")})}}}return s(`[BLUE MARBLE] ${d.length} colores detectados del sitio`),d}setCoords(t,d,a,i){this.coords=[t,d,a,i],s(`[BLUE MARBLE] Coordenadas establecidas: tile(${t},${d}) pixel(${a},${i})`)}async analyzePixels(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");s("[BLUE MARBLE] Analizando p\xEDxeles de la imagen...");try{let d=new OffscreenCanvas(this.imageWidth,this.imageHeight).getContext("2d",{willReadFrequently:!0});d.imageSmoothingEnabled=!1,d.clearRect(0,0,this.imageWidth,this.imageHeight),d.drawImage(this.bitmap,0,0);let a=d.getImageData(0,0,this.imageWidth,this.imageHeight).data,i=0,l=0,g=new Map;for(let m=0;m<this.imageHeight;m++)for(let o=0;o<this.imageWidth;o++){let n=(m*this.imageWidth+o)*4,u=a[n],f=a[n+1],v=a[n+2];if(a[n+3]===0)continue;let p=`${u},${f},${v}`;u===222&&f===250&&v===206&&l++,this.allowedColorsSet.has(p)&&(i++,g.set(p,(g.get(p)||0)+1))}this.requiredPixelCount=i,this.defacePixelCount=l;let r={};for(let[m,o]of g.entries())r[m]={count:o,enabled:!0};return this.colorPalette=r,s("[BLUE MARBLE] An\xE1lisis completado:"),s(`  - P\xEDxeles requeridos: ${i.toLocaleString()}`),s(`  - P\xEDxeles #deface: ${l.toLocaleString()}`),s(`  - Colores \xFAnicos: ${g.size}`),{totalPixels:this.totalPixels,requiredPixels:i,defacePixels:l,uniqueColors:g.size,colorPalette:r}}catch{return this.requiredPixelCount=Math.max(0,this.totalPixels),this.defacePixelCount=0,s("[BLUE MARBLE] Fallback: usando total de p\xEDxeles como requeridos"),{totalPixels:this.totalPixels,requiredPixels:this.totalPixels,defacePixels:0,uniqueColors:0,colorPalette:{}}}}async createTemplateTiles(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");s("[BLUE MARBLE] Creando tiles de template...");let t={},d={},a=new OffscreenCanvas(this.tileSize,this.tileSize),i=a.getContext("2d",{willReadFrequently:!0});for(let l=this.coords[3];l<this.imageHeight+this.coords[3];){let g=Math.min(this.tileSize-l%this.tileSize,this.imageHeight-(l-this.coords[3]));for(let r=this.coords[2];r<this.imageWidth+this.coords[2];){let m=Math.min(this.tileSize-r%this.tileSize,this.imageWidth-(r-this.coords[2])),o=m*this.shreadSize,n=g*this.shreadSize;a.width=o,a.height=n,i.imageSmoothingEnabled=!1,i.clearRect(0,0,o,n),i.drawImage(this.bitmap,r-this.coords[2],l-this.coords[3],m,g,0,0,m*this.shreadSize,g*this.shreadSize);let u=i.getImageData(0,0,o,n);for(let p=0;p<n;p++)for(let x=0;x<o;x++){let P=(p*o+x)*4;if(u.data[P]===222&&u.data[P+1]===250&&u.data[P+2]===206)(x+p)%2===0?(u.data[P]=0,u.data[P+1]=0,u.data[P+2]=0):(u.data[P]=255,u.data[P+1]=255,u.data[P+2]=255),u.data[P+3]=32;else if(x%this.shreadSize!==1||p%this.shreadSize!==1)u.data[P+3]=0;else{let y=u.data[P],C=u.data[P+1],L=u.data[P+2];this.allowedColorsSet.has(`${y},${C},${L}`)||(u.data[P+3]=0)}}i.putImageData(u,0,0);let f=`${(this.coords[0]+Math.floor(r/1e3)).toString().padStart(4,"0")},${(this.coords[1]+Math.floor(l/1e3)).toString().padStart(4,"0")},${(r%1e3).toString().padStart(3,"0")},${(l%1e3).toString().padStart(3,"0")}`;t[f]=await createImageBitmap(a),this.tilePrefixes.add(f.split(",").slice(0,2).join(","));let S=await(await a.convertToBlob()).arrayBuffer();d[f]=S,r+=m}l+=g}return this.templateTiles=t,this.templateTilesBuffers=d,s(`[BLUE MARBLE] Tiles creados: ${Object.keys(t).length} tiles`),s(`[BLUE MARBLE] Prefijos registrados: ${this.tilePrefixes.size} tiles \xFAnicos`),{templateTiles:t,templateTilesBuffers:d}}generatePixelQueue(){if(!this.bitmap)throw new Error("Imagen no cargada. Llama a load() primero.");s("[BLUE MARBLE] Generando cola de p\xEDxeles...");let t=[],d=this.coords[0]*1e3+(this.coords[2]||0),a=this.coords[1]*1e3+(this.coords[3]||0),l=new OffscreenCanvas(this.imageWidth,this.imageHeight).getContext("2d",{willReadFrequently:!0});l.imageSmoothingEnabled=!1,l.drawImage(this.bitmap,0,0);let g=l.getImageData(0,0,this.imageWidth,this.imageHeight).data;for(let r=0;r<this.imageHeight;r++)for(let m=0;m<this.imageWidth;m++){let o=(r*this.imageWidth+m)*4,n=g[o],u=g[o+1],f=g[o+2],v=g[o+3];if(v===0||n===222&&u===250&&f===206)continue;let S=`${n},${u},${f}`;if(!this.allowedColorsSet.has(S))continue;let p=d+m,x=a+r,P=Math.floor(p/1e3),y=Math.floor(x/1e3),C=p%1e3,L=x%1e3,w=this.rgbToMeta.get(S)||{id:0,name:"Unknown"};t.push({imageX:m,imageY:r,globalX:p,globalY:x,tileX:P,tileY:y,localX:C,localY:L,color:{r:n,g:u,b:f,id:w.id,name:w.name},originalColor:{r:n,g:u,b:f,alpha:v}})}return s(`[BLUE MARBLE] Cola generada: ${t.length} p\xEDxeles v\xE1lidos`),t}async resize(t,d,a=!0){if(!this.img)throw new Error("Imagen no cargada. Llama a load() primero.");let i=this.img.width,l=this.img.height;if(a){let o=i/l;t/d>o?t=d*o:d=t/o}let g=document.createElement("canvas");g.width=t,g.height=d;let r=g.getContext("2d");r.imageSmoothingEnabled=!1,r.drawImage(this.img,0,0,t,d);let m=g.toDataURL();return this.img.src=m,this.imageSrc=m,await new Promise(o=>{this.img.onload=async()=>{this.bitmap=await createImageBitmap(this.img),this.imageWidth=this.bitmap.width,this.imageHeight=this.bitmap.height,this.totalPixels=this.imageWidth*this.imageHeight,o()}}),s(`[BLUE MARBLE] Imagen redimensionada: ${i}\xD7${l} \u2192 ${this.imageWidth}\xD7${this.imageHeight}`),{width:this.imageWidth,height:this.imageHeight}}getImageData(){return{width:this.imageWidth,height:this.imageHeight,totalPixels:this.totalPixels,requiredPixels:this.requiredPixelCount,defacePixels:this.defacePixelCount,colorPalette:this.colorPalette,coords:[...this.coords],originalName:this.originalName||"image.png",pixels:this.generatePixelQueue()}}generatePreview(t=200,d=200){if(!this.img)return null;let a=document.createElement("canvas"),i=a.getContext("2d"),{width:l,height:g}=this.img,r=l/g,m,o;return t/d>r?(o=d,m=d*r):(m=t,o=t/r),a.width=m,a.height=o,i.imageSmoothingEnabled=!1,i.drawImage(this.img,0,0,m,o),a.toDataURL()}getDimensions(){return{width:this.imageWidth,height:this.imageHeight}}};var T=c=>new Promise(t=>setTimeout(t,c));var ee="https://backend.wplace.live";async function te(){var c,t,d;try{let a=await fetch(`${ee}/me`,{credentials:"include"}).then(r=>r.json()),i=a||null,l=(a==null?void 0:a.charges)||{},g={count:(c=l.count)!=null?c:0,max:(t=l.max)!=null?t:0,cooldownMs:(d=l.cooldownMs)!=null?d:3e4};return{success:!0,data:{user:i,charges:g.count,maxCharges:g.max,chargeRegen:g.cooldownMs}}}catch(a){return{success:!1,error:a.message,data:{user:null,charges:0,maxCharges:0,chargeRegen:3e4}}}}async function ie(c,t,d,a,i){try{let l=JSON.stringify({colors:a,coords:d,t:i}),g=await fetch(`${ee}/s0/pixel/${c}/${t}`,{method:"POST",credentials:"include",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:l}),r=null;try{r=await g.json()}catch{r={}}return{status:g.status,json:r,success:g.ok,painted:(r==null?void 0:r.painted)||0}}catch(l){return{status:0,json:{error:l.message},success:!1,painted:0}}}var ae=!1;async function we(){if(!(ae||window.turnstile))return new Promise((c,t)=>{let d=document.createElement("script");d.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",d.async=!0,d.defer=!0,d.onload=()=>{ae=!0,c()},d.onerror=()=>t(new Error("No se pudo cargar Turnstile")),document.head.appendChild(d)})}async function ye(c,t="paint"){var d;if(await we(),typeof((d=window.turnstile)==null?void 0:d.execute)=="function")try{let a=await window.turnstile.execute(c,{action:t});if(a&&a.length>20)return a}catch{}return await new Promise(a=>{let i=document.createElement("div");i.style.position="fixed",i.style.left="-9999px",document.body.appendChild(i),window.turnstile.render(i,{sitekey:c,callback:l=>{document.body.removeChild(i),a(l)}})})}async function ne(c){return ye(c,"paint")}async function oe(c,t,d,a,i){let{width:l,height:g}=c,{x:r,y:m}=t;if(s(`Iniciando pintado: imagen(${l}x${g}) inicio LOCAL(${r},${m}) tile(${e.tileX},${e.tileY})`),!e.remainingPixels||e.remainingPixels.length===0||e.lastPosition.x===0&&e.lastPosition.y===0){s("Generando cola de p\xEDxeles..."),e.remainingPixels=Se(c,t,e.tileX,e.tileY),(e.lastPosition.x>0||e.lastPosition.y>0)&&(e.remainingPixels=e.remainingPixels.filter(o=>{let n=o.imageY*l+o.imageX,u=e.lastPosition.y*l+e.lastPosition.x;return n>=u})),s(`Cola generada: ${e.remainingPixels.length} p\xEDxeles pendientes`);try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),e.startPosition&&e.tileX!==void 0&&e.tileY!==void 0&&window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y}),window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch}),s(`\u2705 Plan overlay actualizado con ${e.remainingPixels.length} p\xEDxeles en cola`))}catch(o){s("\u26A0\uFE0F Error actualizando plan overlay:",o)}}try{for(;e.remainingPixels.length>0&&!e.stopFlag;){let o=Math.floor(e.currentCharges),n;if(e.isFirstBatch&&e.useAllChargesFirst&&o>0?(n=Math.min(o,e.remainingPixels.length),e.isFirstBatch=!1,s(`Primera pasada: usando ${n} cargas de ${o} disponibles`)):n=Math.min(e.pixelsPerBatch,e.remainingPixels.length),o<n){s(`Cargas insuficientes: ${o}/${n} necesarias`),await Ee(n-o,d),o=Math.floor(e.currentCharges),e.isFirstBatch||(n=Math.min(e.pixelsPerBatch,e.remainingPixels.length,o));continue}let u=e.remainingPixels.splice(0,n);s(`Pintando lote de ${u.length} p\xEDxeles...`);try{window.__WPA_PLAN_OVERLAY__&&window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch})}catch(v){s("\u26A0\uFE0F Error actualizando plan overlay durante pintado:",v)}let f=await Ce(u,d);if(f.success&&f.painted>0){if(e.paintedPixels+=f.painted,e.currentCharges=Math.max(0,e.currentCharges-f.painted),s(`Cargas despu\xE9s del lote: ${e.currentCharges.toFixed(1)} (consumidas: ${f.painted})`),u.length>0){let x=u[u.length-1];e.lastPosition={x:x.imageX,y:x.imageY}}s(`Lote exitoso: ${f.painted}/${u.length} p\xEDxeles pintados. Total: ${e.paintedPixels}/${e.totalPixels}`);let v=Ae(),S=(e.paintedPixels/e.totalPixels*100).toFixed(1),p=b("image.passCompleted",{painted:f.painted,percent:S,current:e.paintedPixels,total:e.totalPixels});d&&d(e.paintedPixels,e.totalPixels,p,v),await T(2e3)}else f.shouldContinue?s("Lote fall\xF3 despu\xE9s de todos los reintentos, continuando con siguiente lote..."):(e.remainingPixels.unshift(...u),s("Lote fall\xF3: reintentando en 5 segundos..."),await T(5e3));await T(500)}if(e.stopFlag)s(`Pintado pausado en p\xEDxel imagen(${e.lastPosition.x},${e.lastPosition.y})`),a&&a(!1,e.paintedPixels);else{s(`Pintado completado: ${e.paintedPixels} p\xEDxeles pintados`),e.lastPosition={x:0,y:0},e.remainingPixels=[];try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.setPlan([],{enabled:!0,nextBatchCount:0}),s("\u2705 Plan overlay limpiado al completar pintado"))}catch(o){s("\u26A0\uFE0F Error limpiando plan overlay:",o)}a&&a(!0,e.paintedPixels)}}catch(o){s("Error en proceso de pintado:",o),i&&i(o)}}async function ve(c){try{if(!c||c.length===0)return{success:!1,painted:0,error:"Lote vac\xEDo"};let t=new Map;for(let i of c){if(!i){s("paintPixelBatch: skipping undefined pixel");continue}if(!i.localX||!i.localY||i.tileX==null||i.tileY==null){s("paintPixelBatch: skipping pixel with missing coordinates",i);continue}if(!i.color){s("paintPixelBatch: skipping pixel with missing color",i);continue}let l=i.color.id||i.color.value||null;if(l===null){s("paintPixelBatch: skipping pixel with invalid color",i);continue}let g=`${i.tileX}:${i.tileY}`;t.has(g)||t.set(g,{tileX:i.tileX,tileY:i.tileY,coords:[],colors:[]});let r=t.get(g);r.coords.push(i.localX,i.localY),r.colors.push(l)}if(t.size===0)return{success:!1,painted:0,error:"No valid pixels in batch"};let d=await ne(_.SITEKEY),a=0;for(let[i,l]of t.entries())try{let g=await ie(l.tileX,l.tileY,l.coords,l.colors,d);g.status===200?a+=g.painted||0:s("paintPixelBatch: API error for tile",i,g==null?void 0:g.status,g==null?void 0:g.json)}catch(g){s("Error sending pixels for tile group:",i,g)}return{success:a>0,painted:a}}catch(t){return s("Error en paintPixelBatch:",t),{success:!1,painted:0,error:t.message}}}async function Ce(c,t){for(let l=1;l<=5;l++)try{let g=await ve(c);if(g.success)return e.retryCount=0,g;if(e.retryCount=l,l<5){let r=3e3*Math.pow(2,l-1),m=Math.round(r/1e3),o;g.status===0||g.status==="NetworkError"?o=b("image.networkError"):g.status>=500?o=b("image.serverError"):g.status===408?o=b("image.timeoutError"):o=b("image.retryAttempt",{attempt:l,maxAttempts:5,delay:m}),t&&t(e.paintedPixels,e.totalPixels,o),s(`Reintento ${l}/5 despu\xE9s de ${m}s. Error: ${g.error}`),await T(r)}}catch(g){if(s(`Error en intento ${l}:`,g),e.retryCount=l,l<5){let r=3e3*Math.pow(2,l-1),m=Math.round(r/1e3),o=b("image.retryError",{attempt:l,maxAttempts:5,delay:m});t&&t(e.paintedPixels,e.totalPixels,o),await T(r)}}e.retryCount=5;let i=b("image.retryFailed",{maxAttempts:5});return t&&t(e.paintedPixels,e.totalPixels,i),s("Fall\xF3 despu\xE9s de 5 intentos, continuando con siguiente lote"),{success:!1,painted:0,error:"Fall\xF3 despu\xE9s de 5 intentos",shouldContinue:!0}}async function Ee(c,t){let a=_.CHARGE_REGEN_MS*c+5e3;if(s(`Esperando ${Math.round(a/1e3)}s para obtener ${c} cargas`),e.inCooldown=!0,e.cooldownEndTime=Date.now()+a,e.nextBatchCooldown=Math.round(a/1e3),t){let i=Math.floor(a/6e4),l=Math.floor(a%6e4/1e3),g=i>0?`${i}m ${l}s`:`${l}s`,r=b("image.waitingChargesRegen",{current:Math.floor(e.currentCharges),needed:c,time:g});t(e.paintedPixels,e.totalPixels,r)}for(let i=Math.round(a/1e3);i>0&&!e.stopFlag;i--){if(e.nextBatchCooldown=i,t&&(i%5===0||i<=10||i===Math.round(a/1e3))){let l=Math.floor(i/60),g=i%60,r=l>0?`${l}m ${g}s`:`${g}s`,m=b("image.waitingChargesCountdown",{current:Math.floor(e.currentCharges),needed:c,time:r});t(e.paintedPixels,e.totalPixels,m)}await T(1e3)}e.inCooldown=!1,e.nextBatchCooldown=0,e.currentCharges=Math.min(e.maxCharges||50,e.currentCharges+a/_.CHARGE_REGEN_MS)}function Se(c,t,d,a){let{pixels:i}=c,{x:l,y:g}=t,r=[],m=0;for(let o of i){if(!o||typeof o.x!="number"||typeof o.y!="number"){m++,s("generatePixelQueue: skipping invalid pixel data",o);continue}let n=o.targetColor||o.color;if(!n||!n.id&&!n.value){m++,s("generatePixelQueue: skipping pixel with missing/invalid color",o);continue}let u=l+o.x,f=g+o.y;r.push({imageX:o.x,imageY:o.y,localX:u,localY:f,tileX:d,tileY:a,color:n,originalColor:o.originalColor})}return m>0&&s(`\u26A0\uFE0F Se omitieron ${m} p\xEDxeles inv\xE1lidos durante la generaci\xF3n de la cola`),s(`Cola de p\xEDxeles generada: ${r.length} p\xEDxeles para pintar`),r}function Ae(){if(!e.remainingPixels||e.remainingPixels.length===0)return 0;let c=e.remainingPixels.length,t=e.pixelsPerBatch,d=_.CHARGE_REGEN_MS/1e3,a=Math.ceil(c/t),i=t*d,l=(a-1)*i,g=a*2;return Math.ceil(l+g)}function U(){e.stopFlag=!0,e.running=!1,s("\u{1F6D1} Deteniendo proceso de pintado...")}function H(c=null){try{if(!e.imageData||e.paintedPixels===0)throw new Error("No hay progreso para guardar");let t={version:"1.0",timestamp:Date.now(),imageData:{width:e.imageData.width,height:e.imageData.height,originalName:e.originalImageName},progress:{paintedPixels:e.paintedPixels,totalPixels:e.totalPixels,lastPosition:{...e.lastPosition}},position:{startPosition:{...e.startPosition},tileX:e.tileX,tileY:e.tileY},config:{pixelsPerBatch:e.pixelsPerBatch,useAllChargesFirst:e.useAllChargesFirst,isFirstBatch:e.isFirstBatch,maxCharges:e.maxCharges},colors:e.availableColors.map(r=>({id:r.id,r:r.r,g:r.g,b:r.b})),remainingPixels:e.remainingPixels||[]},d=JSON.stringify(t,null,2),a=new window.Blob([d],{type:"application/json"}),i=c||`wplace_progress_${e.originalImageName||"image"}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,l=window.URL.createObjectURL(a),g=document.createElement("a");return g.href=l,g.download=i,document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(l),s(`\u2705 Progreso guardado: ${i}`),{success:!0,filename:i}}catch(t){return s("\u274C Error guardando progreso:",t),{success:!1,error:t.message}}}async function se(c){return new Promise(t=>{try{let d=new window.FileReader;d.onload=a=>{try{let i=JSON.parse(a.target.result),g=["imageData","progress","position","colors"].filter(r=>!(r in i));if(g.length>0)throw new Error(`Campos requeridos faltantes: ${g.join(", ")}`);if(e.availableColors.length>0){let r=i.colors.map(n=>n.id),m=e.availableColors.map(n=>n.id);r.filter(n=>m.includes(n)).length<r.length*.8&&s("\u26A0\uFE0F Los colores guardados no coinciden completamente con los actuales")}e.imageData={...i.imageData,pixels:[]},e.paintedPixels=i.progress.paintedPixels,e.totalPixels=i.progress.totalPixels,i.progress.lastPosition?e.lastPosition=i.progress.lastPosition:i.position.lastX!==void 0&&i.position.lastY!==void 0&&(e.lastPosition={x:i.position.lastX,y:i.position.lastY}),i.position.startPosition?e.startPosition=i.position.startPosition:i.position.startX!==void 0&&i.position.startY!==void 0&&(e.startPosition={x:i.position.startX,y:i.position.startY}),e.tileX=i.position.tileX,e.tileY=i.position.tileY,e.originalImageName=i.imageData.originalName,e.remainingPixels=i.remainingPixels||i.progress.remainingPixels||[];try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),e.startPosition&&e.tileX!==void 0&&e.tileY!==void 0&&(window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y}),s(`\u2705 Plan overlay anclado con posici\xF3n cargada: tile(${e.tileX},${e.tileY}) local(${e.startPosition.x},${e.startPosition.y})`)),window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{enabled:!0,nextBatchCount:e.pixelsPerBatch}),s(`\u2705 Plan overlay activado con ${e.remainingPixels.length} p\xEDxeles restantes`))}catch(r){s("\u26A0\uFE0F Error activando plan overlay al cargar progreso:",r)}i.config&&(e.pixelsPerBatch=i.config.pixelsPerBatch||e.pixelsPerBatch,e.useAllChargesFirst=i.config.useAllChargesFirst!==void 0?i.config.useAllChargesFirst:e.useAllChargesFirst,e.isFirstBatch=i.config.isFirstBatch!==void 0?i.config.isFirstBatch:!0,e.maxCharges=i.config.maxCharges||e.maxCharges),e.imageLoaded=!0,e.colorsChecked=!0,s(`\u2705 Progreso cargado: ${e.paintedPixels}/${e.totalPixels} p\xEDxeles`),t({success:!0,data:i,painted:e.paintedPixels,total:e.totalPixels,canContinue:e.remainingPixels.length>0})}catch(i){s("\u274C Error parseando archivo de progreso:",i),t({success:!1,error:i.message})}},d.onerror=()=>{let a="Error leyendo archivo";s("\u274C",a),t({success:!1,error:a})},d.readAsText(c)}catch(d){s("\u274C Error cargando progreso:",d),t({success:!1,error:d.message})}})}function le(){e.paintedPixels=0,e.totalPixels=0,e.lastPosition={x:0,y:0},e.remainingPixels=[],e.imageData=null,e.startPosition=null,e.imageLoaded=!1,e.originalImageName=null,e.isFirstBatch=!0,e.nextBatchCooldown=0,s("\u{1F9F9} Progreso limpiado")}function re(){return e.imageLoaded&&e.paintedPixels>0&&e.remainingPixels&&e.remainingPixels.length>0}function ce(){return{hasProgress:re(),painted:e.paintedPixels,total:e.totalPixels,remaining:e.remainingPixels?e.remainingPixels.length:0,percentage:e.totalPixels>0?e.paintedPixels/e.totalPixels*100:0,lastPosition:{...e.lastPosition},canContinue:re()}}function de(c=null){let t=document.createElement("div");c&&(t.id=c),t.style.cssText=`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 2147483647;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  `;let d=t.attachShadow({mode:"open"});return document.body.appendChild(t),{host:t,root:d}}function ue(c,t){let d=0,a=0,i=0,l=0;c.style.cursor="move",c.addEventListener("mousedown",g);function g(o){o.target.closest(".header-btn, .wplace-header-btn")||(o.preventDefault(),i=o.clientX,l=o.clientY,document.addEventListener("mouseup",m),document.addEventListener("mousemove",r))}function r(o){o.preventDefault(),d=i-o.clientX,a=l-o.clientY,i=o.clientX,l=o.clientY,t.style.top=t.offsetTop-a+"px",t.style.left=t.offsetLeft-d+"px"}function m(){document.removeEventListener("mouseup",m),document.removeEventListener("mousemove",r)}}async function ge({texts:c,...t}){if(s("\u{1F3A8} Creando interfaz de Auto-Image"),!document.querySelector('link[href*="font-awesome"]')){let h=document.createElement("link");h.rel="stylesheet",h.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(h),s("\u{1F4E6} FontAwesome a\xF1adido al document.head")}let{host:d,root:a}=de(),i=document.createElement("style");i.textContent=`
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
        <span>${c.title}</span>
      </div>
      <div class="header-controls">
        <button class="header-btn config-btn" title="Configuraci\xF3n">
          \u2699\uFE0F
        </button>
        <button class="header-btn minimize-btn" title="${c.minimize}">
          \u2796
        </button>
      </div>
    </div>
    <div class="content">
      <div class="config-panel">
        <div class="config-item">
          <label>${c.batchSize}:</label>
          <input class="config-input pixels-per-batch" type="number" min="1" max="50" value="20">
        </div>
        <div class="config-item">
          <label>
            <input class="config-checkbox use-all-charges" type="checkbox" checked>
            ${c.useAllCharges}
          </label>
        </div>
        <div class="config-item">
          <label>
            <input class="config-checkbox show-overlay" type="checkbox" checked>
            ${c.showOverlay||"Mostrar overlay"}
          </label>
        </div>
      </div>
      
      <!-- Configuraci\xF3n visible en la interfaz principal -->
      <div class="main-config">
        <div class="config-row">
          <div class="config-label">
            \u{1F3AF} ${c.batchSize}:
            <span class="batch-value">20</span>
          </div>
          <div class="config-label">
            \u23F1\uFE0F ${c.nextBatchTime}:
            <span class="cooldown-value">--</span>
          </div>
        </div>
      </div>
      
      <div class="controls">
        <button class="btn btn-primary init-btn">
          \u{1F916}
          <span>${c.initBot}</span>
        </button>
        <button class="btn btn-upload upload-btn" disabled>
          \u{1F4E4}
          <span>${c.uploadImage}</span>
        </button>
        <button class="btn btn-load load-progress-btn" disabled>
          \u{1F4C1}
          <span>${c.loadProgress}</span>
        </button>
        <button class="btn btn-primary resize-btn" disabled>
          \u{1F504}
          <span>${c.resizeImage}</span>
        </button>
        <button class="btn btn-select select-pos-btn" disabled>
          \u{1F3AF}
          <span>${c.selectPosition}</span>
        </button>
        <button class="btn btn-start start-btn" disabled>
          \u25B6\uFE0F
          <span>${c.startPainting}</span>
        </button>
        <button class="btn btn-stop stop-btn" disabled>
          \u23F9\uFE0F
          <span>${c.stopPainting}</span>
        </button>
      </div>
      
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
      
      <div class="stats">
        <div class="stats-area">
          <div class="stat-item">
            <div class="stat-label">\u2139\uFE0F ${c.initMessage}</div>
          </div>
        </div>
      </div>
      
      <div class="status status-default">
        ${c.waitingInit}
      </div>
    </div>
  `,a.appendChild(l);let g=document.createElement("input");g.type="file",g.accept="image/png,image/jpeg",g.style.display="none",a.appendChild(g);let r=document.createElement("input");r.type="file",r.accept=".json",r.style.display="none",a.appendChild(r);let m=document.createElement("div");m.className="resize-overlay",a.appendChild(m);let o=document.createElement("div");o.className="resize-container",o.innerHTML=`
    <h3>${c.resizeImage}</h3>
    <div class="resize-controls">
      <label>
        ${c.width}: <span class="width-value">0</span>px
        <input type="range" class="resize-slider width-slider" min="10" max="500" value="100">
      </label>
      <label>
        ${c.height}: <span class="height-value">0</span>px
        <input type="range" class="resize-slider height-slider" min="10" max="500" value="100">
      </label>
      <label>
        <input type="checkbox" class="keep-aspect" checked>
        ${c.keepAspect}
      </label>
      <img class="resize-preview" src="" alt="Preview">
      <div class="resize-buttons">
        <button class="btn btn-primary confirm-resize">
          \u2705
          <span>${c.apply}</span>
        </button>
        <button class="btn btn-stop cancel-resize">
          \u274C
          <span>${c.cancel}</span>
        </button>
      </div>
    </div>
  `,a.appendChild(o);let n={header:l.querySelector(".header"),configBtn:l.querySelector(".config-btn"),minimizeBtn:l.querySelector(".minimize-btn"),configPanel:l.querySelector(".config-panel"),pixelsPerBatch:l.querySelector(".pixels-per-batch"),useAllCharges:l.querySelector(".use-all-charges"),showOverlay:l.querySelector(".show-overlay"),batchValue:l.querySelector(".batch-value"),cooldownValue:l.querySelector(".cooldown-value"),initBtn:l.querySelector(".init-btn"),uploadBtn:l.querySelector(".upload-btn"),loadProgressBtn:l.querySelector(".load-progress-btn"),resizeBtn:l.querySelector(".resize-btn"),selectPosBtn:l.querySelector(".select-pos-btn"),startBtn:l.querySelector(".start-btn"),stopBtn:l.querySelector(".stop-btn"),progressBar:l.querySelector(".progress-bar"),statsArea:l.querySelector(".stats-area"),status:l.querySelector(".status"),content:l.querySelector(".content")},u={overlay:m,container:o,widthSlider:o.querySelector(".width-slider"),heightSlider:o.querySelector(".height-slider"),widthValue:o.querySelector(".width-value"),heightValue:o.querySelector(".height-value"),keepAspect:o.querySelector(".keep-aspect"),preview:o.querySelector(".resize-preview"),confirmBtn:o.querySelector(".confirm-resize"),cancelBtn:o.querySelector(".cancel-resize")},f={minimized:!1,configVisible:!1};ue(n.header,l),n.minimizeBtn.addEventListener("click",()=>{f.minimized=!f.minimized,f.minimized?(l.classList.add("minimized"),n.minimizeBtn.innerHTML="\u{1F53C}"):(l.classList.remove("minimized"),n.minimizeBtn.innerHTML="\u{1F53D}")}),n.configBtn.addEventListener("click",()=>{f.configVisible=!f.configVisible,f.configVisible?(n.configPanel.classList.add("visible"),n.configBtn.innerHTML="\u274C"):(n.configPanel.classList.remove("visible"),n.configBtn.innerHTML="\u2699\uFE0F")}),n.pixelsPerBatch.addEventListener("change",()=>{let h=parseInt(n.pixelsPerBatch.value)||20;n.batchValue.textContent=h,t.onConfigChange&&t.onConfigChange({pixelsPerBatch:h})}),n.useAllCharges.addEventListener("change",()=>{t.onConfigChange&&t.onConfigChange({useAllCharges:n.useAllCharges.checked})});function v(){n.uploadBtn.disabled=!1,n.loadProgressBtn.disabled=!1}n.initBtn.addEventListener("click",async()=>{n.initBtn.disabled=!0,t.onInitBot&&await t.onInitBot()&&v(),n.initBtn.disabled=!1}),n.uploadBtn.addEventListener("click",()=>{g.click()}),g.addEventListener("change",async()=>{g.files.length>0&&t.onUploadImage&&await t.onUploadImage(g.files[0])&&(n.selectPosBtn.disabled=!1,n.resizeBtn.disabled=!1)}),n.loadProgressBtn.addEventListener("click",()=>{r.click()}),r.addEventListener("change",async()=>{r.files.length>0&&t.onLoadProgress&&await t.onLoadProgress(r.files[0])&&(n.selectPosBtn.disabled=!1,n.startBtn.disabled=!1,n.resizeBtn.disabled=!1)}),n.resizeBtn.addEventListener("click",()=>{t.onResizeImage&&t.onResizeImage()}),n.selectPosBtn.addEventListener("click",async()=>{t.onSelectPosition&&(n.selectPosBtn.disabled=!0,await t.onSelectPosition()&&(n.startBtn.disabled=!1),n.selectPosBtn.disabled=!1)}),n.showOverlay.addEventListener("change",()=>{if(!window.__WPA_PLAN_OVERLAY__)return;window.__WPA_PLAN_OVERLAY__.injectStyles();let h=n.showOverlay.checked;window.__WPA_PLAN_OVERLAY__.setEnabled(h)}),n.startBtn.addEventListener("click",async()=>{t.onStartPainting&&(n.startBtn.disabled=!0,n.stopBtn.disabled=!1,await t.onStartPainting()||(n.startBtn.disabled=!1,n.stopBtn.disabled=!0))}),n.stopBtn.addEventListener("click",async()=>{t.onStopPainting&&await t.onStopPainting()&&(n.startBtn.disabled=!1,n.stopBtn.disabled=!0)});function S(h,A="default"){n.status.textContent=h,n.status.className=`status status-${A}`,n.status.style.animation="none",n.status.offsetWidth,n.status.style.animation="slideIn 0.3s ease-out"}function p(h){let{width:A,height:B}=h.getDimensions(),z=A/B;u.widthSlider.value=A,u.heightSlider.value=B,u.widthValue.textContent=A,u.heightValue.textContent=B,u.preview.src=h.img.src,u.overlay.style.display="block",u.container.style.display="block";let I=()=>{let R=parseInt(u.widthSlider.value),$=parseInt(u.heightSlider.value);u.widthValue.textContent=R,u.heightValue.textContent=$,u.preview.src=h.generatePreview(R,$)},O=()=>{if(u.keepAspect.checked){let R=parseInt(u.widthSlider.value),$=Math.round(R/z);u.heightSlider.value=$}I()},F=()=>{if(u.keepAspect.checked){let R=parseInt(u.heightSlider.value),$=Math.round(R*z);u.widthSlider.value=$}I()};u.widthSlider.addEventListener("input",O),u.heightSlider.addEventListener("input",F);let M=()=>{let R=parseInt(u.widthSlider.value),$=parseInt(u.heightSlider.value);t.onConfirmResize&&t.onConfirmResize(h,R,$),x()},D=()=>{x()};u.confirmBtn.addEventListener("click",M),u.cancelBtn.addEventListener("click",D),u.overlay.addEventListener("click",D),window.cleanupResizeDialog=()=>{u.widthSlider.removeEventListener("input",O),u.heightSlider.removeEventListener("input",F),u.confirmBtn.removeEventListener("click",M),u.cancelBtn.removeEventListener("click",D),u.overlay.removeEventListener("click",D)},I()}function x(){u.overlay.style.display="none",u.container.style.display="none",window.cleanupResizeDialog&&(window.cleanupResizeDialog(),delete window.cleanupResizeDialog)}function P(h,A,B=null){let z=A>0?h/A*100:0;n.progressBar.style.width=`${z}%`;let I=`
      <div class="stat-item">
        <div class="stat-label">\u{1F3A8} ${c.progress}</div>
        <div>${h}/${A} (${z.toFixed(1)}%)</div>
      </div>
    `;if(B&&(B.username&&(I+=`
          <div class="stat-item">
            <div class="stat-label">\u{1F464} ${c.userName}</div>
            <div>${B.username}</div>
          </div>
        `),B.charges!==void 0&&(I+=`
          <div class="stat-item">
            <div class="stat-label">\u26A1 ${c.charges}</div>
            <div>${Math.floor(B.charges)}</div>
          </div>
        `),B.pixels!==void 0&&(I+=`
          <div class="stat-item">
            <div class="stat-label">\u{1F533} ${c.pixels}</div>
            <div>${B.pixels.toLocaleString()}</div>
          </div>
        `),B.estimatedTime!==void 0&&B.estimatedTime>0)){let O=Math.floor(B.estimatedTime/3600),F=Math.floor(B.estimatedTime%3600/60),M=O>0?`${O}h ${F}m`:`${F}m`;I+=`
          <div class="stat-item">
            <div class="stat-label">\u23F0 ${c.timeRemaining}</div>
            <div>${M}</div>
          </div>
        `}n.statsArea.innerHTML=I}function y(h){if(h>0){let A=Math.floor(h/60),B=h%60,z=A>0?`${A}m ${B}s`:`${B}s`;n.cooldownValue.textContent=z}else n.cooldownValue.textContent="--"}function C(h){h&&h.includes("\u23F3")?(n.status.textContent=h,n.status.className="status status-info"):h&&S(h,"info")}function L(h){h?(n.initBtn.disabled=!0,n.initBtn.style.opacity="0.6",n.initBtn.innerHTML=`\u2705 <span>${c.initBot} - Completado</span>`):(n.initBtn.disabled=!1,n.initBtn.style.opacity="1",n.initBtn.innerHTML=`\u{1F916} <span>${c.initBot}</span>`)}function w(h){n.initBtn.style.display=h?"flex":"none"}function E(){d.remove()}return s("\u2705 Interfaz de Auto-Image creada"),{setStatus:S,updateProgress:P,updateCooldownDisplay:y,updateCooldownMessage:C,setInitialized:L,setInitButtonVisible:w,enableButtonsAfterInit:v,showResizeDialog:p,closeResizeDialog:x,destroy:E}}function pe(c,t,d={}){return new Promise(a=>{let i=document.createElement("div");i.className="modal-overlay",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.background="rgba(0,0,0,0.7)",i.style.zIndex="10001",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center";let l=document.createElement("div");l.style.background="#1a1a1a",l.style.border="2px solid #333",l.style.borderRadius="15px",l.style.padding="25px",l.style.color="#eee",l.style.minWidth="350px",l.style.maxWidth="400px",l.style.boxShadow="0 10px 30px rgba(0,0,0,0.5)",l.style.fontFamily="'Segoe UI', Roboto, sans-serif",l.innerHTML=`
      <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 18px;">${t}</h3>
      <p style="margin: 0 0 20px 0; text-align: center; line-height: 1.4;">${c}</p>
      <div style="display: flex; gap: 10px; justify-content: center;">
        ${d.save?`<button class="save-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #10b981; color: white;">${d.save}</button>`:""}
        ${d.discard?`<button class="discard-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #ef4444; color: white;">${d.discard}</button>`:""}
        ${d.cancel?`<button class="cancel-btn" style="padding: 10px 20px; border: none; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; min-width: 100px; background: #2d3748; color: white;">${d.cancel}</button>`:""}
      </div>
    `,i.appendChild(l),document.body.appendChild(i);let g=l.querySelector(".save-btn"),r=l.querySelector(".discard-btn"),m=l.querySelector(".cancel-btn"),o=()=>{document.body.removeChild(i)};g&&g.addEventListener("click",()=>{o(),a("save")}),r&&r.addEventListener("click",()=>{o(),a("discard")}),m&&m.addEventListener("click",()=>{o(),a("cancel")}),i.addEventListener("click",n=>{n.target===i&&(o(),a("cancel"))})})}function j(){let c=['[data-testid="color-picker"]',".color-picker",".palette",'[class*="color"][class*="picker"]','[class*="palette"]'];for(let a of c){let i=document.querySelector(a);if(i&&i.offsetParent!==null)return!0}let t=document.querySelectorAll('[style*="background-color"], [style*="background:"], .color, [class*="color"]'),d=0;for(let a of t)if(a.offsetParent!==null&&a.offsetWidth>10&&a.offsetHeight>10&&(d++,d>=5))return!0;return!1}function me(){let c=document.querySelector("button.btn.btn-primary.btn-lg, button.btn.btn-primary.sm\\:btn-xl");if(c){let a=c.textContent.toLowerCase().includes("paint"),i=c.querySelector('svg path[d*="240-120"]');if(a||i)return c.click(),!0}let t=document.querySelectorAll("button");for(let d of t)if(d.textContent.toLowerCase().includes("paint")&&d.offsetParent!==null&&!d.disabled)return d.click(),!0;return!1}(()=>{let t={enabled:!1,templates:[],templatesShouldBeDrawn:!0,tileSize:1e3,drawMult:3,pixelPlan:null,nextBatchCount:0,anchor:null,imageWidth:null,imageHeight:null,originalFetch:null,fetchedBlobQueue:new Map,isIntercepting:!1};function d(){console.log("[PLAN OVERLAY] Blue Marble tile system initialized")}function a(){t.isIntercepting||(t.originalFetch=window.fetch,t.isIntercepting=!0,window.fetch=async function(...p){var L;let x=await t.originalFetch.apply(this,p),P=x.clone(),y=(p[0]instanceof Request?(L=p[0])==null?void 0:L.url:p[0])||"ignore";if((P.headers.get("content-type")||"").includes("image/")&&y.includes("/tiles/")&&!y.includes("openfreemap")&&!y.includes("maps")){console.log("[PLAN OVERLAY] Intercepting tile request:",y);try{let w=await P.blob(),E=await l(w,y);return new Response(E,{headers:P.headers,status:P.status,statusText:P.statusText})}catch(w){return console.error("[PLAN OVERLAY] Error processing tile:",w),x}}return x},console.log("[PLAN OVERLAY] Fetch interception started"))}function i(){!t.isIntercepting||!t.originalFetch||(window.fetch=t.originalFetch,t.isIntercepting=!1,console.log("[PLAN OVERLAY] Fetch interception stopped"))}async function l(p,x){if(!t.enabled||!t.templatesShouldBeDrawn||!t.pixelPlan)return p;let P=x.split("/"),y=parseInt(P[P.length-1].replace(".png","")),C=parseInt(P[P.length-2]);if(isNaN(C)||isNaN(y))return console.warn("[PLAN OVERLAY] Could not extract tile coordinates from URL:",x),p;console.log(`[PLAN OVERLAY] Processing tile: ${C},${y}`);let L=g(C,y);if(L.length===0)return p;console.log(`[PLAN OVERLAY] Found ${L.length} pixels for tile ${C},${y}`);let w=t.tileSize*t.drawMult,E=await createImageBitmap(p),h=new OffscreenCanvas(w,w),A=h.getContext("2d");return A.imageSmoothingEnabled=!1,A.clearRect(0,0,w,w),A.drawImage(E,0,0,w,w),r(A,L,C,y),await h.convertToBlob({type:"image/png"})}function g(p,x){return!t.pixelPlan||!t.pixelPlan.pixels?[]:t.pixelPlan.pixels.filter(P=>{let y=Math.floor(P.globalX/3e3),C=Math.floor(P.globalY/3e3);return y===p&&C===x})}function r(p,x,P,y){let C=P*3e3,L=y*3e3;p.globalAlpha=.7;for(let w of x){let E=(w.globalX-C)*t.drawMult+1,h=(w.globalY-L)*t.drawMult+1;E>=0&&E<t.tileSize*t.drawMult&&h>=0&&h<t.tileSize*t.drawMult&&(p.fillStyle=`rgb(${w.r},${w.g},${w.b})`,p.fillRect(E,h,1,1))}if(t.nextBatchCount>0){p.globalAlpha=1;let w=x.slice(0,t.nextBatchCount);for(let E of w){let h=(E.globalX-C)*t.drawMult+1,A=(E.globalY-L)*t.drawMult+1;h>=0&&h<t.tileSize*t.drawMult&&A>=0&&A<t.tileSize*t.drawMult&&(p.fillStyle=`rgb(${E.r},${E.g},${E.b})`,p.fillRect(h,A,1,1))}}}function m(p){t.enabled=!!p,t.enabled?a():i(),console.log(`[PLAN OVERLAY] setEnabled: ${t.enabled}`)}function o(p,x={}){var y,C,L;if(!p||p.length===0){t.pixelPlan=null,console.log("[PLAN OVERLAY] Plan cleared");return}let P=[];for(let w of p){let E,h;if(typeof w.tileX=="number"&&typeof w.localX=="number")E=w.tileX*3e3+w.localX,h=w.tileY*3e3+w.localY;else if(x.anchor&&typeof w.imageX=="number"){let A=x.anchor.tileX*3e3+(x.anchor.pxX||0),B=x.anchor.tileY*3e3+(x.anchor.pxY||0);E=A+w.imageX,h=B+w.imageY}else continue;P.push({globalX:E,globalY:h,r:((y=w.color)==null?void 0:y.r)||0,g:((C=w.color)==null?void 0:C.g)||0,b:((L=w.color)==null?void 0:L.b)||0})}t.pixelPlan={pixels:P},t.nextBatchCount=x.nextBatchCount||0,t.anchor=x.anchor||null,t.imageWidth=x.imageWidth||null,t.imageHeight=x.imageHeight||null,console.log(`[PLAN OVERLAY] Plan set: ${P.length} pixels`),typeof x.enabled=="boolean"&&m(x.enabled)}function n(p){t.nextBatchCount=Math.max(0,Number(p||0)),console.log(`[PLAN OVERLAY] Next batch count: ${t.nextBatchCount}`)}function u(p){t.anchor=p,console.log("[PLAN OVERLAY] Anchor set:",p)}function f(p,x){console.log("[PLAN OVERLAY] CSS anchor set (ignored in tile system):",{x:p,y:x})}function v(){console.log("[PLAN OVERLAY] Selection mode ended (ignored in tile system)")}function S(){i(),t.pixelPlan=null,t.fetchedBlobQueue.clear(),console.log("[PLAN OVERLAY] Cleanup completed")}window.__WPA_PLAN_OVERLAY__={injectStyles:d,setEnabled:m,setPlan:o,setPlanItemsFromTileList:o,setNextBatchCount:n,setAnchor:u,setAnchorCss:f,endSelectionMode:v,render:()=>{},cleanup:S,get state(){return t}},console.log("[PLAN OVERLAY] Blue Marble tile system ready")})();async function he(){s("\u{1F680} Iniciando WPlace Auto-Image (versi\xF3n modular)"),q(),window.__wplaceBot={...window.__wplaceBot,imageRunning:!0};let c=null,t=window.fetch,d=()=>{window.fetch!==t&&(window.fetch=t,s("\u{1F504} Fetch original restaurado")),e.positionTimeoutId&&(clearTimeout(e.positionTimeoutId),e.positionTimeoutId=null),e.cleanupObserver&&(e.cleanupObserver(),e.cleanupObserver=null),e.selectingPosition=!1};try{let a={..._},i=W("image");if(e.language=J(),!a.SITEKEY){let o=document.querySelector("*[data-sitekey]");o?(a.SITEKEY=o.getAttribute("data-sitekey"),s(`\u{1F4DD} Sitekey encontrada autom\xE1ticamente: ${a.SITEKEY.substring(0,20)}...`)):s("\u26A0\uFE0F No se pudo encontrar la sitekey autom\xE1ticamente")}async function l(){return s("\u{1F916} Intentando auto-inicio..."),j()?(s("\u{1F3A8} Paleta de colores ya est\xE1 abierta"),!0):(s("\u{1F50D} Paleta no encontrada, buscando bot\xF3n Paint..."),me()?(s("\u{1F446} Bot\xF3n Paint encontrado y presionado"),await T(2e3),j()?(s("\u2705 Paleta abierta exitosamente"),!0):(s("\u274C La paleta no se abri\xF3 despu\xE9s de hacer clic"),!1)):(s("\u274C Bot\xF3n Paint no encontrado"),!1))}async function g(o=!1){s("\u{1F916} Inicializando Auto-Image..."),r.setStatus(b("image.checkingColors"),"info");let n=V();if(n.length===0)return r.setStatus(b("image.noColorsFound"),"error"),!1;let u=await te(),f=null;u.success&&u.data.user?(f={username:u.data.user.name||"An\xF3nimo",charges:u.data.charges,maxCharges:u.data.maxCharges,pixels:u.data.user.pixelsPainted||0},c=f,e.currentCharges=u.data.charges,e.maxCharges=u.data.maxCharges||50,s(`\u{1F464} Usuario conectado: ${u.data.user.name||"An\xF3nimo"} - Cargas: ${f.charges}/${f.maxCharges} - P\xEDxeles: ${f.pixels}`)):s("\u26A0\uFE0F No se pudo obtener informaci\xF3n del usuario"),e.availableColors=n,e.colorsChecked=!0,r.setStatus(b("image.colorsFound",{count:n.length}),"success"),r.updateProgress(0,0,f),o||s(`\u2705 ${n.length} colores disponibles detectados`),r.setInitialized(!0),r.enableButtonsAfterInit();try{}catch{}return!0}let r=await ge({texts:i,onConfigChange:o=>{o.pixelsPerBatch!==void 0&&(e.pixelsPerBatch=o.pixelsPerBatch),o.useAllCharges!==void 0&&(e.useAllChargesFirst=o.useAllCharges),s("Configuraci\xF3n actualizada:",o)},onInitBot:g,onUploadImage:async o=>{try{r.setStatus(b("image.loadingImage"),"info");let n=window.URL.createObjectURL(o),u=new X(n);u.originalName=o.name,await u.load();let f=u.initializeColorPalette();e.availableColors=f;let v=await u.analyzePixels();u.setCoords(0,0,0,0);let S=u.getImageData();e.imageData=S,e.imageData.processor=u,e.totalPixels=v.requiredPixels,e.paintedPixels=0,e.originalImageName=o.name,e.imageLoaded=!0,r.setStatus(b("image.imageLoaded",{count:v.requiredPixels}),"success"),r.updateProgress(0,v.requiredPixels,c),s(`\u2705 [BLUE MARBLE] Imagen cargada: ${S.width}x${S.height}, ${v.requiredPixels} p\xEDxeles v\xE1lidos`),s(`\u2705 [BLUE MARBLE] An\xE1lisis: ${v.uniqueColors} colores \xFAnicos, ${v.defacePixels} p\xEDxeles #deface`),window.URL.revokeObjectURL(n);try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),window.__WPA_PLAN_OVERLAY__.setPlan([],{enabled:!0,nextBatchCount:0}),s("\u2705 Plan overlay activado autom\xE1ticamente al cargar imagen"))}catch(p){s("\u26A0\uFE0F Error activando plan overlay:",p)}return!0}catch(n){return r.setStatus(b("image.imageError"),"error"),s("\u274C Error cargando imagen:",n),!1}},onSelectPosition:async()=>new Promise(o=>{r.setStatus(b("image.selectPositionAlert"),"info"),r.setStatus(b("image.waitingPosition"),"info"),e.selectingPosition=!0;let n=!1,u=()=>{window.fetch=async(S,p)=>{if(e.selectingPosition&&!n&&typeof S=="string"&&S.includes("/s0/pixel/")&&p&&p.method==="POST")try{s(`\u{1F3AF} Interceptando request de pintado: ${S}`);let x=await t(S,p);if(x.ok&&p.body){let P;try{P=JSON.parse(p.body)}catch(y){return s("Error parseando body del request:",y),x}if(P.coords&&Array.isArray(P.coords)&&P.coords.length>=2){let y=P.coords[0],C=P.coords[1],L=S.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/);if(L&&!n){n=!0;let w=parseInt(L[1]),E=parseInt(L[2]);if(e.tileX=w,e.tileY=E,e.startPosition={x:y,y:C},e.selectingPosition=!1,e.imageData&&e.imageData.processor){let h=e.imageData.processor;h.setCoords(w,E,y,C);try{await h.createTemplateTiles(),s(`\u2705 [BLUE MARBLE] Template tiles creados para posici\xF3n tile(${w},${E}) pixel(${y},${C})`)}catch(B){s(`\u274C [BLUE MARBLE] Error creando template tiles: ${B.message}`)}let A=h.generatePixelQueue();e.remainingPixels=A,e.totalPixels=A.length,s(`\u2705 Cola de p\xEDxeles generada: ${A.length} p\xEDxeles para overlay`)}try{window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.injectStyles(),window.__WPA_PLAN_OVERLAY__.setEnabled(!0),window.__WPA_PLAN_OVERLAY__.setAnchor({tileX:w,tileY:E,pxX:y,pxY:C}),e.remainingPixels&&e.remainingPixels.length>0?(window.__WPA_PLAN_OVERLAY__.setPlan(e.remainingPixels,{anchor:{tileX:w,tileY:E,pxX:y,pxY:C},imageWidth:e.imageData.width,imageHeight:e.imageData.height,enabled:!0}),s(`\u2705 Plan overlay anclado en tile(${w},${E}) local(${y},${C})`)):s("\u26A0\uFE0F No hay p\xEDxeles para mostrar en overlay"))}catch(h){s(`\u274C Error configurando overlay: ${h.message}`)}d(),r.setStatus(b("image.positionSet"),"success"),s(`\u2705 Posici\xF3n establecida: tile(${e.tileX},${e.tileY}) local(${y},${C})`),o(!0)}else s("\u26A0\uFE0F No se pudo extraer tile de la URL:",S)}}return x}catch(x){if(s("\u274C Error interceptando pixel:",x),!n)return d(),t(S,p)}return t(S,p)}},f=()=>{let S=document.querySelectorAll("canvas");if(S.length===0){s("\u26A0\uFE0F No se encontraron elementos canvas");return}s(`\u{1F4CA} Configurando observer para ${S.length} canvas`);let p=x=>{var y;if(!e.selectingPosition||n)return;let P=x.target;if(P&&P.tagName==="CANVAS"){s("\u{1F5B1}\uFE0F Click detectado en canvas durante selecci\xF3n");try{let L=(((y=document.querySelector("canvas"))==null?void 0:y.parentElement)||document.body).getBoundingClientRect(),w=x.clientX-L.left,E=x.clientY-L.top;window.__WPA_PLAN_OVERLAY__&&(window.__WPA_PLAN_OVERLAY__.setAnchorCss(w,E),s(`Plan overlay: ancla CSS establecida en (${w}, ${E})`))}catch(C){s("Plan Overlay: error calculando ancla CSS",C)}setTimeout(()=>{!n&&e.selectingPosition&&s("\u{1F50D} Buscando requests recientes de pintado...")},500)}};document.addEventListener("click",p),e.cleanupObserver=()=>{document.removeEventListener("click",p)}};u(),f();let v=setTimeout(()=>{e.selectingPosition&&!n&&(d(),e.cleanupObserver&&e.cleanupObserver(),r.setStatus(b("image.positionTimeout"),"error"),s("\u23F0 Timeout en selecci\xF3n de posici\xF3n"),o(!1))},12e4);e.positionTimeoutId=v}),onStartPainting:async()=>{var o;if(s("\u{1F50D} Estado para iniciar pintura:",{imageLoaded:e.imageLoaded,startPosition:e.startPosition,tileX:e.tileX,tileY:e.tileY,totalPixels:e.totalPixels,remainingPixels:((o=e.remainingPixels)==null?void 0:o.length)||0}),!e.imageLoaded||!e.startPosition)return r.setStatus(b("image.missingRequirements"),"error"),s(`\u274C Validaci\xF3n fallida: imageLoaded=${e.imageLoaded}, startPosition=${!!e.startPosition}`),!1;e.running=!0,e.stopFlag=!1,e.isFirstBatch=!0,r.setStatus(b("image.startPaintingMsg"),"success");try{return await oe(e.imageData,e.startPosition,(n,u,f,v)=>{c&&(c.charges=Math.floor(e.currentCharges),v!==void 0&&(c.estimatedTime=v)),r.updateProgress(n,u,c),e.inCooldown&&e.nextBatchCooldown>0?r.updateCooldownDisplay(e.nextBatchCooldown):r.updateCooldownDisplay(0),f?f.includes("\u23F3")&&e.inCooldown?r.updateCooldownMessage(f):r.setStatus(f,"info"):r.setStatus(b("image.paintingProgress",{painted:n,total:u}),"info")},(n,u)=>{n?(r.setStatus(b("image.paintingComplete",{count:u}),"success"),le()):r.setStatus(b("image.paintingStopped"),"warning"),e.running=!1},n=>{r.setStatus(b("image.paintingError"),"error"),s("\u274C Error en proceso de pintado:",n),e.running=!1}),!0}catch(n){return r.setStatus(b("image.paintingError"),"error"),s("\u274C Error iniciando pintado:",n),e.running=!1,!1}},onStopPainting:async()=>{if(ce().hasProgress){let n=await pe(b("image.confirmSaveProgress"),b("image.saveProgressTitle"),{save:b("image.saveProgress"),discard:b("image.discardProgress"),cancel:b("image.cancel")});if(n==="save"){let u=H();u.success?r.setStatus(b("image.progressSaved",{filename:u.filename}),"success"):r.setStatus(b("image.progressSaveError",{error:u.error}),"error")}else if(n==="cancel")return!1}return U(),r.setStatus(b("image.paintingStopped"),"warning"),!0},onSaveProgress:async()=>{let o=H();return o.success?r.setStatus(b("image.progressSaved",{filename:o.filename}),"success"):r.setStatus(b("image.progressSaveError",{error:o.error}),"error"),o.success},onLoadProgress:async o=>{try{let n=await se(o);return n.success?(r.setStatus(b("image.progressLoaded",{painted:n.painted,total:n.total}),"success"),r.updateProgress(n.painted,n.total,c),s("\u2705 Progreso cargado - habilitando botones de inicio"),!0):(r.setStatus(b("image.progressLoadError",{error:n.error}),"error"),!1)}catch(n){return r.setStatus(b("image.progressLoadError",{error:n.message}),"error"),!1}},onResizeImage:()=>{e.imageLoaded&&e.imageData&&e.imageData.processor&&r.showResizeDialog(e.imageData.processor)},onConfirmResize:async(o,n,u)=>{s(`\u{1F504} Redimensionando imagen de ${o.getDimensions().width}x${o.getDimensions().height} a ${n}x${u}`);try{await o.resize(n,u);let f=await o.analyzePixels();e.imageData={processor:o,width:n,height:u,validPixelCount:f.validPixelCount,totalPixels:f.totalPixels,unknownPixels:f.unknownPixels},e.totalPixels=f.validPixelCount,e.paintedPixels=0,e.remainingPixels=[],e.lastPosition={x:0,y:0},r.updateProgress(0,f.validPixelCount,c),r.setStatus(b("image.resizeSuccess",{width:n,height:u}),"success"),s(`\u2705 Imagen redimensionada: ${f.validPixelCount} p\xEDxeles v\xE1lidos de ${f.totalPixels} totales`);try{if(window.__WPA_PLAN_OVERLAY__&&e.startPosition&&e.tileX!=null&&e.tileY!=null){await o.createTemplateTiles();let v=o.generatePixelQueue();e.remainingPixels=v,e.totalPixels=v.length,window.__WPA_PLAN_OVERLAY__.setPlan(v,{anchor:{tileX:e.tileX,tileY:e.tileY,pxX:e.startPosition.x,pxY:e.startPosition.y},imageWidth:n,imageHeight:u,enabled:!0}),s(`\u2705 Overlay actualizado con ${v.length} p\xEDxeles despu\xE9s del resize`)}}catch(v){s(`\u26A0\uFE0F Error actualizando overlay despu\xE9s del resize: ${v.message}`)}}catch(f){s(`\u274C Error redimensionando imagen: ${f.message}`),r.setStatus(b("image.imageError"),"error")}}}),m=o=>{let{language:n}=o.detail;s(`\u{1F30D} Imagen: Detectado cambio de idioma desde launcher: ${n}`),e.language=n};window.addEventListener("launcherLanguageChanged",m),window.addEventListener("languageChanged",m),window.addEventListener("beforeunload",()=>{d(),U(),r.destroy(),window.removeEventListener("launcherLanguageChanged",m),window.removeEventListener("languageChanged",m),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1)}),s("\u2705 Auto-Image inicializado correctamente"),setTimeout(async()=>{try{r.setStatus(b("image.autoInitializing"),"info"),s("\u{1F916} Intentando auto-inicio..."),await l()?(r.setStatus(b("image.autoInitSuccess"),"success"),s("\u2705 Auto-inicio exitoso"),r.setInitButtonVisible(!1),await g(!0)&&s("\u{1F680} Bot auto-iniciado completamente")):(r.setStatus(b("image.autoInitFailed"),"warning"),s("\u26A0\uFE0F Auto-inicio fall\xF3, se requiere inicio manual"))}catch(o){s("\u274C Error en auto-inicio:",o),r.setStatus(b("image.manualInitRequired"),"warning")}},1e3)}catch(a){throw s("\u274C Error inicializando Auto-Image:",a),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1),a}}(()=>{"use strict";var c,t;if((c=window.__wplaceBot)!=null&&c.imageRunning){alert("Auto-Image ya est\xE1 corriendo.");return}if((t=window.__wplaceBot)!=null&&t.farmRunning){alert("Auto-Farm est\xE1 ejecut\xE1ndose. Ci\xE9rralo antes de iniciar Auto-Image.");return}window.__wplaceBot||(window.__wplaceBot={}),window.__wplaceBot.imageRunning=!0,he().catch(d=>{console.error("[BOT] Error en Auto-Image:",d),window.__wplaceBot&&(window.__wplaceBot.imageRunning=!1),alert("Auto-Image: error inesperado. Revisa consola.")})})();})();
