const LANG_EN_MUSIC = {
    // Views
    NOW_PLAYING: "Now Playing",
    NEW: "New",

    // Miniplayer & Player
    NO_SONG_PLAYING: "No song playing",

    // Library
    SORT_BY: "Sort by",
    SORT_ALPHA: "Alphabetical",
    SORT_DATE: "Date Added",
    VIEW_GRID: "Grid View",
    VIEW_LIST: "List View",
    ADD_MUSIC: "Add Music",
    MANAGE_FOLDERS: "Manage Folders",
    NO_SONGS_IN_LIBRARY: "Your library is empty.",
    NO_SONGS_IN_LIBRARY_DESC: "Click \"Add Music\" to get started.",
    SEARCH_LIBRARY_PLACEHOLDER: "Search your Library",
    NO_RESULTS_FOR_QUERY: "No results found for \"{query}\"",

    // SoundCloud
    SEARCH_SOUNDCLOUD_PLACEHOLDER: "Search SoundCloud",
    SEARCH_OFFLINE_PLACEHOLDER: "Search your cached songs",
    SC_NO_RESULTS: "No results found.",
    SC_ERROR: "Error searching SoundCloud",
    SC_NO_CLIENT_ID: "SoundCloud Client ID is not set",
    SC_CACHE_EMPTY: "No SoundCloud songs are cached",
    SC_CACHE_NO_RESULTS: "No cached songs match \"{query}\"",

    // Home
    LISTEN_AGAIN: "Listen Again",
    FROM_YOUR_LIBRARY: "From Your Library",
    RECENTLY_PLAYED: "Recently Played",
    ASK_GURA_AI: "Ask GuraAI",
    AI_PROMPT_HIGH_ENERGY: "High-energy Playlist",
    AI_PROMPT_RELAXING: "Relaxing Songs",
    AI_PROMPT_SUGGEST_GENRE: "Suggest a Genre",

    // Drawers & Modals
    UP_NEXT: "Up Next",
    AUTOPLAY: "Autoplay",
    QUEUE_EMPTY: "The queue is empty.",
    LYRICS_UNAVAILABLE: "No lyrics available.",
    LYRICS_SEARCH_MANUAL: "Search Manually",
    CONNECTED_FOLDERS: "Connected Folders",
    NO_FOLDERS: "No folders have been added yet.",
    INTEGRATIONS: "Integrations",
    ENABLE_SC: "Enable SoundCloud Streaming",
    SC_CLIENT_ID: "SoundCloud Client ID",
    SC_CORS_WARNING: "You will need to disable CORS to use SoundCloud streaming. A browser extension may be required.",
    ENABLE_LRCLIB: "Search LRCLIB for missing lyrics",
    EDIT_SONG_INFO: "Edit Song Info",
    SLEEP_TIMER: "Sleep Timer",
    SLEEP_TIMER_DESC: "Playback will stop after:",
    SLEEP_TIMER_15: "15 Minutes",
    SLEEP_TIMER_30: "30 Minutes",
    SLEEP_TIMER_60: "1 Hour",
    SLEEP_TIMER_CANCEL: "Cancel Timer",
    ADD_TO_PLAYLIST: "Add to playlist",
    NO_PLAYLISTS: "No playlists to add to",
    CREATE_NEW_PLAYLIST: "Create new playlist",
    CREATE_AND_ADD: "Create & Add",
    EQUALIZER: "Equalizer",
    BASS: "Bass",
    MID: "Mid",
    TREBLE: "Treble",
    RESET: "Reset",

    // Context Menus
    PLAY_NEXT: "Play Next",
    ADD_TO_QUEUE: "Add to Queue",
    SAVE_TO_LIBRARY: "Save to Library",

    // Alerts & Confirmations
    FOLDER_ALREADY_ADDED: "This folder has already been added.",
    NO_NEW_SONGS: "No new songs found in the selected directory.",
    SONGS_ADDED: "{count} new songs added to Library",
    FOLDER_REMOVED: "Removed \"{folderName}\" and {count} song(s).",
    DELETE_SONG_CONFIRM: "Delete this song? This is permanent.",
    DELETE_PLAYLIST_CONFIRM: "Are you sure you want to permanently delete the playlist \"{playlistName}\"?",
    PLAYLIST_CREATED: "GuraAI created playlist: \"{playlistName}\"",
    PLAYLIST_ADD_SONG: "Added to \"{playlistName}\"",
    PLAYLIST_SONG_EXISTS: "Song is already in \"{playlistName}\"",
    PLAYLIST_DELETED: "Playlist \"{playlistName}\" deleted",
    SONG_REMOVED_FROM_PLAYLIST: "Removed \"{songName}\" from \"{playlistName}\"",
    SLEEP_TIMER_SET: "Sleep timer set for {minutes} minutes.",
    SLEEP_TIMER_CANCELED: "Sleep timer cancelled.",
    AI_NO_MATCHING_SONGS: "GuraAI couldn't find matching songs.",
    AI_NO_PLAYLIST: "GuraAI was unable to create a playlist from that prompt.",
    AI_REQUEST_ERROR: "An error occurred with the AI request."
};

const LANG_JP_MUSIC = {
    // Views
    NOW_PLAYING: "再生中",
    NEW: "新着",

    // Miniplayer & Player
    NO_SONG_PLAYING: "再生中の曲はありません",

    // Library
    SORT_BY: "並べ替え",
    SORT_ALPHA: "アルファベット順",
    SORT_DATE: "追加日順",
    VIEW_GRID: "グリッド表示",
    VIEW_LIST: "リスト表示",
    ADD_MUSIC: "音楽を追加",
    MANAGE_FOLDERS: "フォルダを管理",
    NO_SONGS_IN_LIBRARY: "ライブラリは空です。",
    NO_SONGS_IN_LIBRARY_DESC: "「音楽を追加」をクリックして始めましょう。",
    SEARCH_LIBRARY_PLACEHOLDER: "ライブラリを検索",
    NO_RESULTS_FOR_QUERY: "「{query}」の検索結果はありません",

    // SoundCloud
    SEARCH_SOUNDCLOUD_PLACEHOLDER: "SoundCloudを検索",
    SEARCH_OFFLINE_PLACEHOLDER: "キャッシュされた曲を検索",
    SC_NO_RESULTS: "結果が見つかりません。",
    SC_ERROR: "SoundCloudの検索中にエラーが発生しました",
    SC_NO_CLIENT_ID: "SoundCloudクライアントIDが設定されていません",
    SC_CACHE_EMPTY: "キャッシュされたSoundCloudの曲はありません",
    SC_CACHE_NO_RESULTS: "「{query}」に一致するキャッシュされた曲はありません",

    // Home
    LISTEN_AGAIN: "もう一度聴く",
    FROM_YOUR_LIBRARY: "ライブラリから",
    RECENTLY_PLAYED: "最近再生した項目",
    ASK_GURA_AI: "GuraAIに質問",
    AI_PROMPT_HIGH_ENERGY: "ハイテンションなプレイリスト",
    AI_PROMPT_RELAXING: "リラックスできる曲",
    AI_PROMPT_SUGGEST_GENRE: "好きそうなジャンルを提案して",

    // Drawers & Modals
    UP_NEXT: "次に再生",
    AUTOPLAY: "自動再生",
    QUEUE_EMPTY: "キューは空です。",
    LYRICS_UNAVAILABLE: "歌詞がありません。",
    LYRICS_SEARCH_MANUAL: "手動で検索",
    CONNECTED_FOLDERS: "接続されたフォルダ",
    NO_FOLDERS: "まだフォルダが追加されていません。",
    INTEGRATIONS: "連携",
    ENABLE_SC: "SoundCloudストリーミングを有効にする",
    SC_CLIENT_ID: "SoundCloudクライアントID",
    SC_CORS_WARNING: "SoundCloudストリーミングを使用するにはCORSを無効にする必要があります。ブラウザ拡張機能が必要になる場合があります。",
    ENABLE_LRCLIB: "見つからない歌詞をLRCLIBで検索",
    EDIT_SONG_INFO: "曲情報を編集",
    SLEEP_TIMER: "スリープタイマー",
    SLEEP_TIMER_DESC: "再生は次の時間後に停止します：",
    SLEEP_TIMER_15: "15分",
    SLEEP_TIMER_30: "30分",
    SLEEP_TIMER_60: "1時間",
    SLEEP_TIMER_CANCEL: "タイマーをキャンセル",
    ADD_TO_PLAYLIST: "プレイリストに追加",
    NO_PLAYLISTS: "追加するプレイリストがありません",
    CREATE_NEW_PLAYLIST: "新しいプレイリストを作成",
    CREATE_AND_ADD: "作成して追加",
    EQUALIZER: "イコライザー",
    BASS: "低音",
    MID: "中音",
    TREBLE: "高音",
    RESET: "リセット",

    // Context Menus
    PLAY_NEXT: "次に再生",
    ADD_TO_QUEUE: "キューに追加",
    SAVE_TO_LIBRARY: "ライブラリに保存",

    // Alerts & Confirmations
    FOLDER_ALREADY_ADDED: "このフォルダは既に追加されています。",
    NO_NEW_SONGS: "選択したディレクトリに新しい曲は見つかりませんでした。",
    SONGS_ADDED: "{count}曲の新しい曲がライブラリに追加されました",
    FOLDER_REMOVED: "「{folderName}」と{count}曲を削除しました。",
    DELETE_SONG_CONFIRM: "この曲を削除しますか？この操作は元に戻せません。",
    DELETE_PLAYLIST_CONFIRM: "プレイリスト「{playlistName}」を完全に削除してもよろしいですか？",
    PLAYLIST_CREATED: "GuraAIがプレイリストを作成しました：「{playlistName}」",
    PLAYLIST_ADD_SONG: "「{playlistName}」に追加しました",
    PLAYLIST_SONG_EXISTS: "曲はすでに「{playlistName}」にあります",
    PLAYLIST_DELETED: "プレイリスト「{playlistName}」を削除しました",
    SONG_REMOVED_FROM_PLAYLIST: "「{playlistName}」から「{songName}」を削除しました",
    SLEEP_TIMER_SET: "{minutes}分のスリープタイマーを設定しました。",
    SLEEP_TIMER_CANCELED: "スリープタイマーをキャンセルしました。",
    AI_NO_MATCHING_SONGS: "GuraAIは一致する曲を見つけられませんでした。",
    AI_NO_PLAYLIST: "GuraAIはそのプロンプトからプレイリストを作成できませんでした。",
    AI_REQUEST_ERROR: "AIリクエストでエラーが発生しました。"
};

const LANG_DE_MUSIC = {
    // Views
    NOW_PLAYING: "Aktuelle Wiedergabe",
    NEW: "Neu",

    // Miniplayer & Player
    NO_SONG_PLAYING: "Kein Lied wird abgespielt",

    // Library
    SORT_BY: "Sortieren nach",
    SORT_ALPHA: "Alphabetisch",
    SORT_DATE: "Hinzugefügt am",
    VIEW_GRID: "Rasteransicht",
    VIEW_LIST: "Listenansicht",
    ADD_MUSIC: "Musik hinzufügen",
    MANAGE_FOLDERS: "Ordner verwalten",
    NO_SONGS_IN_LIBRARY: "Ihre Bibliothek ist leer.",
    NO_SONGS_IN_LIBRARY_DESC: "Klicken Sie auf \"Musik hinzufügen\", um zu beginnen.",
    SEARCH_LIBRARY_PLACEHOLDER: "Ihre Bibliothek durchsuchen",
    NO_RESULTS_FOR_QUERY: "Keine Ergebnisse für \"{query}\" gefunden",

    // SoundCloud
    SEARCH_SOUNDCLOUD_PLACEHOLDER: "SoundCloud durchsuchen",
    SEARCH_OFFLINE_PLACEHOLDER: "Ihre zwischengespeicherten Lieder durchsuchen",
    SC_NO_RESULTS: "Keine Ergebnisse gefunden.",
    SC_ERROR: "Fehler bei der SoundCloud-Suche",
    SC_NO_CLIENT_ID: "SoundCloud Client-ID ist nicht festgelegt",
    SC_CACHE_EMPTY: "Keine SoundCloud-Lieder zwischengespeichert",
    SC_CACHE_NO_RESULTS: "Keine zwischengespeicherten Lieder stimmen mit \"{query}\" überein",

    // Home
    LISTEN_AGAIN: "Erneut anhören",
    FROM_YOUR_LIBRARY: "Aus Ihrer Bibliothek",
    RECENTLY_PLAYED: "Kürzlich gespielt",
    ASK_GURA_AI: "Fragen Sie GuraAI",
    AI_PROMPT_HIGH_ENERGY: "Energiegeladene Playlist",
    AI_PROMPT_RELAXING: "Entspannende Lieder",
    AI_PROMPT_SUGGEST_GENRE: "Ein Genre vorschlagen",

    // Drawers & Modals
    UP_NEXT: "Als Nächstes",
    AUTOPLAY: "Autoplay",
    QUEUE_EMPTY: "Die Warteschlange ist leer.",
    LYRICS_UNAVAILABLE: "Keine Liedtexte verfügbar.",
    LYRICS_SEARCH_MANUAL: "Manuell suchen",
    CONNECTED_FOLDERS: "Verbundene Ordner",
    NO_FOLDERS: "Es wurden noch keine Ordner hinzugefügt.",
    INTEGRATIONS: "Integrationen",
    ENABLE_SC: "SoundCloud-Streaming aktivieren",
    SC_CLIENT_ID: "SoundCloud Client-ID",
    SC_CORS_WARNING: "Sie müssen CORS deaktivieren, um SoundCloud-Streaming zu nutzen. Möglicherweise ist eine Browser-Erweiterung erforderlich.",
    ENABLE_LRCLIB: "Fehlende Liedtexte auf LRCLIB suchen",
    EDIT_SONG_INFO: "Liedinformationen bearbeiten",
    SLEEP_TIMER: "Sleep-Timer",
    SLEEP_TIMER_DESC: "Die Wiedergabe wird gestoppt nach:",
    SLEEP_TIMER_15: "15 Minuten",
    SLEEP_TIMER_30: "30 Minuten",
    SLEEP_TIMER_60: "1 Stunde",
    SLEEP_TIMER_CANCEL: "Timer abbrechen",
    ADD_TO_PLAYLIST: "Zur Wiedergabeliste hinzufügen",
    NO_PLAYLISTS: "Keine Wiedergabelisten zum Hinzufügen",
    CREATE_NEW_PLAYLIST: "Neue Wiedergabeliste erstellen",
    CREATE_AND_ADD: "Erstellen & Hinzufügen",
    EQUALIZER: "Equalizer",
    BASS: "Bass",
    MID: "Mitte",
    TREBLE: "Höhen",
    RESET: "Zurücksetzen",

    // Context Menus
    PLAY_NEXT: "Als Nächstes spielen",
    ADD_TO_QUEUE: "Zur Warteschlange hinzufügen",
    SAVE_TO_LIBRARY: "In Bibliothek speichern",

    // Alerts & Confirmations
    FOLDER_ALREADY_ADDED: "Dieser Ordner wurde bereits hinzugefügt.",
    NO_NEW_SONGS: "Keine neuen Lieder im ausgewählten Verzeichnis gefunden.",
    SONGS_ADDED: "{count} neue Lieder zur Bibliothek hinzugefügt",
    FOLDER_REMOVED: "\"{folderName}\" und {count} Lied(er) entfernt.",
    DELETE_SONG_CONFIRM: "Dieses Lied löschen? Dies ist endgültig.",
    DELETE_PLAYLIST_CONFIRM: "Sind Sie sicher, dass Sie die Wiedergabeliste \"{playlistName}\" endgültig löschen möchten?",
    PLAYLIST_CREATED: "GuraAI hat die Wiedergabeliste erstellt: \"{playlistName}\"",
    PLAYLIST_ADD_SONG: "Zu \"{playlistName}\" hinzugefügt",
    PLAYLIST_SONG_EXISTS: "Lied ist bereits in \"{playlistName}\"",
    PLAYLIST_DELETED: "Wiedergabeliste \"{playlistName}\" gelöscht",
    SONG_REMOVED_FROM_PLAYLIST: "\"{songName}\" aus \"{playlistName}\" entfernt",
    SLEEP_TIMER_SET: "Sleep-Timer für {minutes} Minuten eingestellt.",
    SLEEP_TIMER_CANCELED: "Sleep-Timer abgebrochen.",
    AI_NO_MATCHING_SONGS: "GuraAI konnte keine passenden Lieder finden.",
    AI_NO_PLAYLIST: "GuraAI konnte aus dieser Eingabe keine Wiedergabeliste erstellen.",
    AI_REQUEST_ERROR: "Bei der KI-Anfrage ist ein Fehler aufgetreten."
};

const LANG_ES_MUSIC = {
    // Views
    NOW_PLAYING: "Reproduciendo ahora",
    NEW: "Novedades",

    // Miniplayer & Player
    NO_SONG_PLAYING: "No se está reproduciendo ninguna canción",

    // Library
    SORT_BY: "Ordenar por",
    SORT_ALPHA: "Alfabético",
    SORT_DATE: "Fecha de adición",
    VIEW_GRID: "Vista de cuadrícula",
    VIEW_LIST: "Vista de lista",
    ADD_MUSIC: "Añadir música",
    MANAGE_FOLDERS: "Gestionar carpetas",
    NO_SONGS_IN_LIBRARY: "Tu biblioteca está vacía.",
    NO_SONGS_IN_LIBRARY_DESC: "Haz clic en \"Añadir música\" para empezar.",
    SEARCH_LIBRARY_PLACEHOLDER: "Buscar en tu biblioteca",
    NO_RESULTS_FOR_QUERY: "No se encontraron resultados para \"{query}\"",

    // SoundCloud
    SEARCH_SOUNDCLOUD_PLACEHOLDER: "Buscar en SoundCloud",
    SEARCH_OFFLINE_PLACEHOLDER: "Buscar en tus canciones cacheadas",
    SC_NO_RESULTS: "No se encontraron resultados.",
    SC_ERROR: "Error al buscar en SoundCloud",
    SC_NO_CLIENT_ID: "El ID de cliente de SoundCloud no está configurado",
    SC_CACHE_EMPTY: "No hay canciones de SoundCloud cacheadas",
    SC_CACHE_NO_RESULTS: "No hay canciones cacheadas que coincidan con \"{query}\"",

    // Home
    LISTEN_AGAIN: "Escuchar de nuevo",
    FROM_YOUR_LIBRARY: "De tu biblioteca",
    RECENTLY_PLAYED: "Reproducido recientemente",
    ASK_GURA_AI: "Pregúntale a GuraAI",
    AI_PROMPT_HIGH_ENERGY: "Lista de reproducción enérgica",
    AI_PROMPT_RELAXING: "Canciones relajantes",
    AI_PROMPT_SUGGEST_GENRE: "Sugerir un género",

    // Drawers & Modals
    UP_NEXT: "A continuación",
    AUTOPLAY: "Reproducción automática",
    QUEUE_EMPTY: "La cola está vacía.",
    LYRICS_UNAVAILABLE: "Letra no disponible.",
    LYRICS_SEARCH_MANUAL: "Buscar manualmente",
    CONNECTED_FOLDERS: "Carpetas conectadas",
    NO_FOLDERS: "Aún no se han añadido carpetas.",
    INTEGRATIONS: "Integraciones",
    ENABLE_SC: "Habilitar streaming de SoundCloud",
    SC_CLIENT_ID: "ID de cliente de SoundCloud",
    SC_CORS_WARNING: "Necesitarás desactivar CORS para usar el streaming de SoundCloud. Puede que necesites una extensión de navegador.",
    ENABLE_LRCLIB: "Buscar letras que faltan en LRCLIB",
    EDIT_SONG_INFO: "Editar información de la canción",
    SLEEP_TIMER: "Temporizador de apagado",
    SLEEP_TIMER_DESC: "La reproducción se detendrá después de:",
    SLEEP_TIMER_15: "15 minutos",
    SLEEP_TIMER_30: "30 minutos",
    SLEEP_TIMER_60: "1 hora",
    SLEEP_TIMER_CANCEL: "Cancelar temporizador",
    ADD_TO_PLAYLIST: "Añadir a lista de reproducción",
    NO_PLAYLISTS: "No hay listas de reproducción a las que añadir",
    CREATE_NEW_PLAYLIST: "Crear nueva lista de reproducción",
    CREATE_AND_ADD: "Crear y añadir",
    EQUALIZER: "Ecualizador",
    BASS: "Bajos",
    MID: "Medios",
    TREBLE: "Agudos",
    RESET: "Restablecer",

    // Context Menus
    PLAY_NEXT: "Reproducir a continuación",
    ADD_TO_QUEUE: "Añadir a la cola",
    SAVE_TO_LIBRARY: "Guardar en la biblioteca",

    // Alerts & Confirmations
    FOLDER_ALREADY_ADDED: "Esta carpeta ya ha sido añadida.",
    NO_NEW_SONGS: "No se encontraron nuevas canciones en el directorio seleccionado.",
    SONGS_ADDED: "{count} nuevas canciones añadidas a la biblioteca",
    FOLDER_REMOVED: "Se eliminó \"{folderName}\" y {count} canción(es).",
    DELETE_SONG_CONFIRM: "¿Eliminar esta canción? Esta acción es permanente.",
    DELETE_PLAYLIST_CONFIRM: "¿Estás seguro de que quieres eliminar permanentemente la lista de reproducción \"{playlistName}\"?",
    PLAYLIST_CREATED: "GuraAI ha creado la lista de reproducción: \"{playlistName}\"",
    PLAYLIST_ADD_SONG: "Añadido a \"{playlistName}\"",
    PLAYLIST_SONG_EXISTS: "La canción ya está en \"{playlistName}\"",
    PLAYLIST_DELETED: "Lista de reproducción \"{playlistName}\" eliminada",
    SONG_REMOVED_FROM_PLAYLIST: "Se eliminó \"{songName}\" de \"{playlistName}\"",
    SLEEP_TIMER_SET: "Temporizador de apagado configurado para {minutes} minutos.",
    SLEEP_TIMER_CANCELED: "Temporizador de apagado cancelado.",
    AI_NO_MATCHING_SONGS: "GuraAI no pudo encontrar canciones que coincidan.",
    AI_NO_PLAYLIST: "GuraAI no pudo crear una lista de reproducción a partir de esa indicación.",
    AI_REQUEST_ERROR: "Ocurrió un error con la solicitud de IA."
};

const LANG_KO_MUSIC = {
    // Views
    NOW_PLAYING: "현재 재생 중",
    NEW: "새로운 항목",

    // Miniplayer & Player
    NO_SONG_PLAYING: "재생 중인 노래 없음",

    // Library
    SORT_BY: "정렬 기준",
    SORT_ALPHA: "알파벳순",
    SORT_DATE: "추가된 날짜",
    VIEW_GRID: "그리드 보기",
    VIEW_LIST: "목록 보기",
    ADD_MUSIC: "음악 추가",
    MANAGE_FOLDERS: "폴더 관리",
    NO_SONGS_IN_LIBRARY: "라이브러리가 비어 있습니다.",
    NO_SONGS_IN_LIBRARY_DESC: "\"음악 추가\"를 클릭하여 시작하세요.",
    SEARCH_LIBRARY_PLACEHOLDER: "라이브러리 검색",
    NO_RESULTS_FOR_QUERY: "\"{query}\"에 대한 검색 결과 없음",

    // SoundCloud
    SEARCH_SOUNDCLOUD_PLACEHOLDER: "SoundCloud 검색",
    SEARCH_OFFLINE_PLACEHOLDER: "캐시된 노래 검색",
    SC_NO_RESULTS: "결과 없음.",
    SC_ERROR: "SoundCloud 검색 오류",
    SC_NO_CLIENT_ID: "SoundCloud 클라이언트 ID가 설정되지 않았습니다",
    SC_CACHE_EMPTY: "캐시된 SoundCloud 노래가 없습니다",
    SC_CACHE_NO_RESULTS: "\"{query}\"와 일치하는 캐시된 노래가 없습니다",

    // Home
    LISTEN_AGAIN: "다시 듣기",
    FROM_YOUR_LIBRARY: "라이브러리에서",
    RECENTLY_PLAYED: "최근 재생",
    ASK_GURA_AI: "GuraAI에게 물어보기",
    AI_PROMPT_HIGH_ENERGY: "에너지 넘치는 재생 목록",
    AI_PROMPT_RELAXING: "편안한 노래",
    AI_PROMPT_SUGGEST_GENRE: "장르 추천",

    // Drawers & Modals
    UP_NEXT: "다음 곡",
    AUTOPLAY: "자동 재생",
    QUEUE_EMPTY: "대기열이 비어 있습니다.",
    LYRICS_UNAVAILABLE: "가사 없음.",
    LYRICS_SEARCH_MANUAL: "수동으로 검색",
    CONNECTED_FOLDERS: "연결된 폴더",
    NO_FOLDERS: "아직 추가된 폴더가 없습니다.",
    INTEGRATIONS: "통합",
    ENABLE_SC: "SoundCloud 스트리밍 활성화",
    SC_CLIENT_ID: "SoundCloud 클라이언트 ID",
    SC_CORS_WARNING: "SoundCloud 스트리밍을 사용하려면 CORS를 비활성화해야 합니다. 브라우저 확장 프로그램이 필요할 수 있습니다.",
    ENABLE_LRCLIB: "누락된 가사를 LRCLIB에서 검색",
    EDIT_SONG_INFO: "노래 정보 편집",
    SLEEP_TIMER: "취침 타이머",
    SLEEP_TIMER_DESC: "재생이 다음 시간 후에 중지됩니다:",
    SLEEP_TIMER_15: "15분",
    SLEEP_TIMER_30: "30분",
    SLEEP_TIMER_60: "1시간",
    SLEEP_TIMER_CANCEL: "타이머 취소",
    ADD_TO_PLAYLIST: "재생 목록에 추가",
    NO_PLAYLISTS: "추가할 재생 목록이 없습니다",
    CREATE_NEW_PLAYLIST: "새 재생 목록 만들기",
    CREATE_AND_ADD: "만들고 추가",
    EQUALIZER: "이퀄라이저",
    BASS: "베이스",
    MID: "미드",
    TREBLE: "트레블",
    RESET: "초기화",

    // Context Menus
    PLAY_NEXT: "다음에 재생",
    ADD_TO_QUEUE: "대기열에 추가",
    SAVE_TO_LIBRARY: "라이브러리에 저장",

    // Alerts & Confirmations
    FOLDER_ALREADY_ADDED: "이 폴더는 이미 추가되었습니다.",
    NO_NEW_SONGS: "선택한 디렉토리에서 새 노래를 찾을 수 없습니다.",
    SONGS_ADDED: "{count}개의 새 노래가 라이브러리에 추가되었습니다",
    FOLDER_REMOVED: "\"{folderName}\" 및 {count}개의 노래를 제거했습니다.",
    DELETE_SONG_CONFIRM: "이 노래를 삭제하시겠습니까? 이 작업은 영구적입니다.",
    DELETE_PLAYLIST_CONFIRM: "재생 목록 \"{playlistName}\"을(를) 영구적으로 삭제하시겠습니까?",
    PLAYLIST_CREATED: "GuraAI가 재생 목록을 만들었습니다: \"{playlistName}\"",
    PLAYLIST_ADD_SONG: "\"{playlistName}\"에 추가되었습니다",
    PLAYLIST_SONG_EXISTS: "노래가 이미 \"{playlistName}\"에 있습니다",
    PLAYLIST_DELETED: "재생 목록 \"{playlistName}\" 삭제됨",
    SONG_REMOVED_FROM_PLAYLIST: "\"{playlistName}\"에서 \"{songName}\" 제거됨",
    SLEEP_TIMER_SET: "{minutes}분 동안 취침 타이머가 설정되었습니다.",
    SLEEP_TIMER_CANCELED: "취침 타이머가 취소되었습니다.",
    AI_NO_MATCHING_SONGS: "GuraAI가 일치하는 노래를 찾을 수 없습니다.",
    AI_NO_PLAYLIST: "GuraAI가 해당 프롬프트로 재생 목록을 만들 수 없습니다.",
    AI_REQUEST_ERROR: "AI 요청 중 오류가 발생했습니다."
};

const LANG_ZH_MUSIC = {
    // Views
    NOW_PLAYING: "正在播放",
    NEW: "新内容",

    // Miniplayer & Player
    NO_SONG_PLAYING: "未播放歌曲",

    // Library
    SORT_BY: "排序方式",
    SORT_ALPHA: "按字母顺序",
    SORT_DATE: "按添加日期",
    VIEW_GRID: "网格视图",
    VIEW_LIST: "列表视图",
    ADD_MUSIC: "添加音乐",
    MANAGE_FOLDERS: "管理文件夹",
    NO_SONGS_IN_LIBRARY: "您的媒体库是空的。",
    NO_SONGS_IN_LIBRARY_DESC: "点击“添加音乐”开始。",
    SEARCH_LIBRARY_PLACEHOLDER: "搜索您的媒体库",
    NO_RESULTS_FOR_QUERY: "未找到“{query}”的结果",

    // SoundCloud
    SEARCH_SOUNDCLOUD_PLACEHOLDER: "搜索SoundCloud",
    SEARCH_OFFLINE_PLACEHOLDER: "搜索您缓存的歌曲",
    SC_NO_RESULTS: "未找到结果。",
    SC_ERROR: "搜索SoundCloud时出错",
    SC_NO_CLIENT_ID: "未设置SoundCloud客户端ID",
    SC_CACHE_EMPTY: "没有缓存的SoundCloud歌曲",
    SC_CACHE_NO_RESULTS: "没有缓存的歌曲与“{query}”匹配",

    // Home
    LISTEN_AGAIN: "再次收听",
    FROM_YOUR_LIBRARY: "来自您的媒体库",
    RECENTLY_PLAYED: "最近播放",
    ASK_GURA_AI: "询问GuraAI",
    AI_PROMPT_HIGH_ENERGY: "高能播放列表",
    AI_PROMPT_RELAXING: "放松的歌曲",
    AI_PROMPT_SUGGEST_GENRE: "推荐一个类型",

    // Drawers & Modals
    UP_NEXT: "下一首播放",
    AUTOPLAY: "自动播放",
    QUEUE_EMPTY: "队列为空。",
    LYRICS_UNAVAILABLE: "无可用歌词。",
    LYRICS_SEARCH_MANUAL: "手动搜索",
    CONNECTED_FOLDERS: "已连接的文件夹",
    NO_FOLDERS: "尚未添加任何文件夹。",
    INTEGRATIONS: "集成",
    ENABLE_SC: "启用SoundCloud流媒体",
    SC_CLIENT_ID: "SoundCloud客户端ID",
    SC_CORS_WARNING: "您需要禁用CORS才能使用SoundCloud流媒体。可能需要浏览器扩展程序。",
    ENABLE_LRCLIB: "在LRCLIB上搜索缺失的歌词",
    EDIT_SONG_INFO: "编辑歌曲信息",
    SLEEP_TIMER: "睡眠定时器",
    SLEEP_TIMER_DESC: "播放将在以下时间后停止：",
    SLEEP_TIMER_15: "15分钟",
    SLEEP_TIMER_30: "30分钟",
    SLEEP_TIMER_60: "1小时",
    SLEEP_TIMER_CANCEL: "取消定时器",
    ADD_TO_PLAYLIST: "添加到播放列表",
    NO_PLAYLISTS: "没有可添加的播放列表",
    CREATE_NEW_PLAYLIST: "创建新播放列表",
    CREATE_AND_ADD: "创建并添加",
    EQUALIZER: "均衡器",
    BASS: "低音",
    MID: "中音",
    TREBLE: "高音",
    RESET: "重置",

    // Context Menus
    PLAY_NEXT: "下一首播放",
    ADD_TO_QUEUE: "添加到队列",
    SAVE_TO_LIBRARY: "保存到媒体库",

    // Alerts & Confirmations
    FOLDER_ALREADY_ADDED: "此文件夹已被添加。",
    NO_NEW_SONGS: "在所选目录中未找到新歌曲。",
    SONGS_ADDED: "已将{count}首新歌曲添加到媒体库",
    FOLDER_REMOVED: "已移除“{folderName}”和{count}首歌曲。",
    DELETE_SONG_CONFIRM: "删除这首歌？此操作是永久性的。",
    DELETE_PLAYLIST_CONFIRM: "您确定要永久删除播放列表“{playlistName}”吗？",
    PLAYLIST_CREATED: "GuraAI已创建播放列表：“{playlistName}”",
    PLAYLIST_ADD_SONG: "已添加到“{playlistName}”",
    PLAYLIST_SONG_EXISTS: "歌曲已在“{playlistName}”中",
    PLAYLIST_DELETED: "播放列表“{playlistName}”已删除",
    SONG_REMOVED_FROM_PLAYLIST: "已从“{playlistName}”中移除“{songName}”",
    SLEEP_TIMER_SET: "睡眠定时器已设置为{minutes}分钟。",
    SLEEP_TIMER_CANCELED: "睡眠定时器已取消。",
    AI_NO_MATCHING_SONGS: "GuraAI找不到匹配的歌曲。",
    AI_NO_PLAYLIST: "GuraAI无法根据该提示创建播放列表。",
    AI_REQUEST_ERROR: "AI请求时发生错误。"
};
