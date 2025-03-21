const etude = {
    "Topologie en bus": "Un seul câble principal (bus) relie tous les appareils.",
    "Topologie en étoile": "Tous les périphériques sont connectés à un point central (commutateur ou hub).",
    "Topologie en anneau": "Les appareils sont connectés en boucle, les données circulent dans un sens déterminé.",
    "Topologie maillée": "Chaque nœud est connecté à plusieurs autres pour assurer une redondance maximale.",
    "Topologie en arbre": "Une hiérarchie de plusieurs topologies en étoile connectées à un niveau supérieur.",
    "LAN": "Local Area Network / Un réseau informatique qui couvre une petite zone géographique, comme un bureau, une maison ou une école.",
    "UTP": "Unshielded Twisted Pair (Paire torsadée non blindé) / Câble Ethernet utilisé pour les réseaux locaux, sans blindage supplémentaire contre les interférences.",
    "BNC": "Bayonet Neill-Concelman (cable caoxial, cable des vieille tv)",
    "adresse MAC": "Media Access Control / Adresse physique unique attribuée à chaque carte réseau pour l’identification dans un réseau Ethernet.",
    "DNS": "Domain Name System / Service qui traduit les noms de domaine (ex. : www.google.com) en adresses IP compréhensibles par les ordinateurs.",
    "PAN": "Personal Area Network / Réseau informatique utilisé pour interconnecter des appareils proches d'une personne, comme un smartphone, une tablette et un ordinateur via Bluetooth ou Wi-Fi.",
    "BAN": "Body Area Network / 'réseau corporel', est un réseau sans fil de dispositifs intelligents portés sur ou autour du corps humain",
    "MAN": "Metropolitan Area Network / Réseau qui couvre une ville ou une grande agglomération, reliant plusieurs réseaux locaux (LAN).",
    "WAN": "Wide area network / Réseau qui couvre une grande zone géographique, reliant plusieurs LAN et MAN sur de longues distances (exemple : Internet).",
    "FTP": "File Transfer Protocol / Protocole permettant de transférer des fichiers entre un client et un serveur sur un réseau. / Transfert de fichiers sur un réseau (Hébergement web, partage de fichiers).",
    "STP": "Shielded Twisted Pair (Paire torsadée blindé) Variante du câble UTP, mais avec un blindage supplémentaire pour réduire les interférences électromagnétiques.",
    "IP": "Internet Protocol / Identifie et achemine les paquets de données sur un réseau via des adresses IP. / Routage des données sur Internet.",
    "HTTP": "HyperText Transfer Protocol / Protocole permettant d'afficher des pages web en échangeant des données entre un serveur et un navigateur. / Affichage des sites web.",
    "HTTPS": "HyperText Transfer Protocol Secure / Version sécurisée de HTTP qui chiffre les échanges entre l’utilisateur et le serveur via SSL/TLS. / Navigation sécurisée sur Internet.",
    "WWW": "World Wide Web / Service permettant d’accéder aux sites web via HTTP/HTTPS. / Accès et navigation sur le Web.",
    "TCP": "Transmission Control Protocol / Protocole assurant une transmission fiable des données en vérifiant leur réception et leur ordre. / Transmission fiable des données (Web, Email, Téléchargements).",
    "UDP": "User Datagram Protocol / Protocole rapide pour envoyer des données sans garantie de réception (ex : streaming, jeux en ligne). / Transmission rapide sans contrôle des erreurs (VoIP, Streaming).",
    "SMTP": "Simple Mail Transfer Protocol / Protocole utilisé pour l'envoi d'emails depuis un client vers un serveur de messagerie. / Envoi d'emails vers un serveur de messagerie.",
    "IMAP": "Internet Message Access Protocol / Protocole permettant de récupérer et synchroniser des emails stockés sur un serveur. / Récupération et gestion des emails sur un serveur.",
    "Pare-feu matériel": "Un dispositif physique dédié à la sécurité du réseau. Il filtre le trafic AVANT qu’il n’atteigne les ordinateurs du réseau.(plus rapide)",
    "Pare-feu logiciel": "Une application installée sur un ordinateur ou un serveur qui surveille le trafic réseau et bloque les connexions suspectes.(peut ralentir l'ordinateur)",
    "CPU": "Central Processing Unit",
    "ALU": "Arithmetic Logic Unit",
    "CU": "Control Unit",
    "RAM": "Random Access Memory",
    "ROM": "Read-Only Memory",
    "PCB": "Printed Circuit Board",
    "BIOS": "Printed Circuit Board",
    "CMOS": "Complementay Metal-Oxide-Semiconductor",
    "GPU": "Graphics Processing Unit",
    "I/O": "Input/Output",
    "HDD": "Hard Disk Drive",
    "SSD": "Solid State Drive",
    "FPU": "Floating Point Unit",
    "DMA": "Direct Memory Access",
    "IRQ": "Interrupt Request",
    "FSB": "Front Side Bus",
    "PCI": "Peripheral Component Interconnect",
    "USB": "Universal Serial Bus",
    "NIC": "Network InterfaceCard",
    "RAID": "Redundant Array of Independent Disks",
    "CMOS Battery": "Pile CMOS",
    "PCIe": "Perpheral Compoent Interconnect Express",
    "USB-C": "Universal Serial Bus Type-C",
    "DIMM": "Dual Inline Memory Module",
    "SATA": "Serial ATA",
    "IDE": "Integrated Drive Electronics",
    "VGA": "Video Graphics Array",
    "Northbridge": "composant responsable de la gestion des communications entre l'unité centrale de traitement (UC) et la mémoire",
    "Southbridge": "Responsable de la gestion de divers périphériques connectés à l'ordinateur",
    "BSOD": "Bleu screen of death (ecran bleu quand le pc bug)",
    "Chipset": "(Northbridge + Southbridge) Ensemble de composants électroniques dans un ordinateur qui gère le flux de données entre le processeur, la mémoire et les périphériques",
    "Spouleur d'impression": "(Print Spooler) Il organise et met en file d'attente les documents à imprimer (à redémarrer en cas de bug avec l'imprimante)",
    "Quel est le but de la defragmentation ?": "Augmenter les performances du HDD",
    "GUI": "Graphique user interface",
    "MBR": "Master Boot Record - systèmes de gestion des partitions, fonctionne sur les systèmes BIOS, supporte une capacité maximale de disque de 2 To, permet de créer jusqu'à 4 partitions principales",
    "GPT": "GUID Partition Table - systèmes de gestion des partitions, fonctionne sur les systèmes UEFI, peut gérer jusqu'à 128 partitions primaires",
    "Office de Linux": "Libre Office",
    "Licence publique de Linux": "GNU",
    "UEFI": "(Unified Extensible Firmware Interface) Interface moderne qui remplace le BIOS",
    "Secure Boot": "Protège contre les logiciels malveillants modifiant le processus de démarrage",
    "SPDIF": "Sony/Philips Digital Interface Format - norme utilisée pour transmettre des signaux audio numériques entre différents appareils",
    "TOSLINK": "Interface utilisée pour transmettre des signaux audio numériques via un câble optique",
    "caloduc": "Tube hermétique contenant un fluide pour transporter la chaleur d'un point à un autre",
    "jeu d'instruction": "Instruction set - l'ensemble des commandes ou instructions qu'un processeur peut comprendre et exécuter, les processeurs 64 bits peuvent généralement exécuter des instructions 32 bits grâce à une compatibilité ascendante",
    "UPS": "Uninterruptible Power Supply (ou en français onduleur) - dispositif qui fournit une alimentation électrique de secours en cas de coupure de courant",
    "mémoire cache": "Type de mémoire rapide située entre le processeur et la RAM ou directement dans le processeur, réduit le temps d'accès aux données fréquemment utilisées",
    "EEPROM": "(Electrically Erasable Programmable Read-Only Memory) Utilisée pour modifier ou mettre à jour le BIOS, ce qu'on appelle un flashage du BIOS",
    "BIOS": "Basic Input/Output System",
    "POST": "(Power-On Self-Test) Le BIOS exécute une série de tests pour s'assurer que tous les composants matériels essentiels fonctionnent correctement"
};

const etudeHard = {
    "Topologie en bus": "Un seul câble principal (bus) relie tous les appareils.",
    "Topologie en étoile": "Tous les périphériques sont connectés à un point central (commutateur ou hub).",
    "Topologie en anneau": "Les appareils sont connectés en boucle, les données circulent dans un sens déterminé.",
    "Topologie maillée": "Chaque nœud est connecté à plusieurs autres pour assurer une redondance maximale.",
    "Topologie en arbre": "Une hiérarchie de plusieurs topologies en étoile connectées à un niveau supérieur.",
    "LAN": " Un réseau informatique qui couvre une petite zone géographique, comme un bureau, une maison ou une école.",
    "UTP": " Type de câble réseau constitué de fils torsadés par paires pour réduire les interférences, mais sans blindage supplémentaire. Couramment utilisé pour Ethernet.",
    "BNC": "cable caoxial, cable des vieille tv",
    "adresse MAC": "Adresse physique unique attribuée à chaque carte réseau pour l’identification dans un réseau Ethernet.",
    "DNS": "Service qui traduit les noms de domaine en adresses IP compréhensibles par les ordinateurs.",
    "PAN": "Réseau informatique utilisé pour interconnecter des appareils proches d'une personne, comme un smartphone, une tablette et un ordinateur via Bluetooth ou Wi-Fi.",
    "BAN": "C'est un réseau sans fil de dispositifs intelligents portés sur ou autour du corps humain",
    "MAN": "Réseau qui couvre une ville ou une grande agglomération, reliant plusieurs réseaux locaux (LAN).",
    "WAN": "Réseau qui couvre une grande zone géographique, reliant plusieurs LAN et MAN sur de longues distances (exemple : Internet).",
    "FTP": "Protocole permettant de transférer des fichiers entre un client et un serveur sur un réseau. / Transfert de fichiers sur un réseau (Hébergement web, partage de fichiers).",
    "STP": "Variante du câble UTP, mais avec un blindage supplémentaire pour réduire les interférences électromagnétiques.",
    "IP": "Identifie et achemine les paquets de données sur un réseau via des adresses IP. / Routage des données sur Internet.",
    "HTTP": "Protocole permettant d'afficher des pages web en échangeant des données entre un serveur et un navigateur. / Affichage des sites web.",
    "HTTPS": "Version sécurisée de HTTP qui chiffre les échanges entre l’utilisateur et le serveur via SSL/TLS. / Navigation sécurisée sur Internet.",
    "WWW": "Service permettant d’accéder aux sites web via HTTP/HTTPS. / Accès et navigation sur le Web.",
    "TCP": "Protocole assurant une transmission fiable des données en vérifiant leur réception et leur ordre. / Transmission fiable des données (Web, Email, Téléchargements).",
    "UDP": "Protocole rapide pour envoyer des données sans garantie de réception (ex : streaming, jeux en ligne). / Transmission rapide sans contrôle des erreurs (VoIP, Streaming).",
    "SMTP": "Protocole utilisé pour l'envoi d'emails depuis un client vers un serveur de messagerie. / Envoi d'emails vers un serveur de messagerie.",
    "IMAP": "Protocole permettant de récupérer et synchroniser des emails stockés sur un serveur. / Récupération et gestion des emails sur un serveur.",
    "Pare-feu matériel": "Un dispositif physique dédié à la sécurité du réseau. Il filtre le trafic AVANT qu’il n’atteigne les ordinateurs du réseau.(plus rapide)",
    "Pare-feu logiciel": "Une application installée sur un ordinateur ou un serveur qui surveille le trafic réseau et bloque les connexions suspectes.(peut ralentir l'ordinateur)",
    "CPU": "Processeur",
    "ALU": "Unité utilisée pour effectuer des opérations arithmétiques et logiques dans un processeur.",
    "CU": "Unité qui contrôle et coordonne les opérations effectuées par le processeur.",
    "RAM": "Mémoire vive utilisée pour stocker temporairement des données pendant l'exécution des programmes.",
    "ROM": "Mémoire qui stocke des données qui ne peuvent être modifiées (souvent utilisée pour le firmware).",
    "PCB": "Plaque qui connecte électriquement les composants électroniques via des pistes conductrices.",
    "BIOS": "Logiciel qui initialise le matériel lors du démarrage de l'ordinateur et démarre le système d'exploitation.",
    "CMOS": "Technologie utilisée pour fabriquer des circuits électroniques, comme ceux des microprocesseurs.",
    "GPU": "Composant qui accélère le traitement des graphiques et vidéos dans les applications.",
    "I/O": "Entrée/Sortie, ensemble des interactions entre un ordinateur et ses périphériques externes.",
    "HDD": "Disque dur utilisé pour le stockage permanent des données.",
    "SSD": "Stockage basé sur des puces de mémoire flash pour un accès rapide aux données.",
    "FPU": "Unité spécialisée dans les calculs de nombres à virgule flottante dans les processeurs.",
    "DMA": "Méthode qui permet aux périphériques d'accéder directement à la mémoire sans passer par le CPU.",
    "IRQ": "Signal envoyé au processeur pour indiquer qu'un périphérique demande une attention immédiate.",
    "FSB": "Bus reliant le processeur à la mémoire et aux autres composants.",
    "PCI": "Interface standard pour connecter des périphériques à la carte mère.",
    "USB": "Port standard utilisé pour connecter des périphériques externes à un ordinateur.",
    "NIC": "Carte réseau qui permet à un ordinateur de se connecter à un réseau.",
    "RAID": "Technique pour combiner plusieurs disques durs pour améliorer les performances ou la fiabilité.",
    "CMOS Battery": "Pile qui alimente le circuit CMOS et conserve les réglages du BIOS.",
    "PCIe": "Version améliorée du PCI pour des connexions plus rapides et une meilleure bande passante.",
    "USB-C": "Version moderne du port USB avec une conception réversible et une grande vitesse de transfert.",
    "DIMM": "Module de mémoire à double rangée pour les ordinateurs.",
    "SATA": "Câble utilisé pour connecter un disque dur ou un SSD à la carte mère.",
    "IDE": "Interface utilisée pour connecter des périphériques de stockage comme les disques durs.",
    "VGA": "Interface standard pour connecter des moniteurs analogiques.",
    "Northbridge": "composant responsable de la gestion des communications entre l'unité centrale de traitement (UC) et la mémoire",
    "Southbridge": "Responsable de la gestion de divers périphériques connectés à l'ordinateur",
    "BSOD": "Ecran bleu quand le pc bug",
    "Chipset": "(Northbridge + Southbridge) Ensemble de composants électroniques dans un ordinateur qui gère le flux de données entre le processeur, la mémoire et les périphériques",
    "Spouleur d'impression": "Il organise et met en file d'attente les documents à imprimer (à redémarrer en cas de bug avec l'imprimante)",
    "Quel est le but de la defragmentation ?": "Augmenter les performances du HDD",
    "GUI": "Interface utilisateur qui permet d'interagir avec un ordinateur ou une application via des éléments graphiques comme des fenêtres, des boutons et des icônes.",
    "MBR": "systèmes de gestion des partitions, fonctionne sur les systèmes BIOS, supporte une capacité maximale de disque de 2 To, permet de créer jusqu'à 4 partitions principales",
    "GPT": "systèmes de gestion des partitions, fonctionne sur les systèmes UEFI, peut gérer jusqu'à 128 partitions primaires",
    "Office de Linux": "Libre Office",
    "Licence publique de Linux": "GNU",
    "UEFI": "Interface moderne qui remplace le BIOS",
    "Secure Boot": "Protège contre les logiciels malveillants modifiant le processus de démarrage",
    "SPDIF": "Sony/Philips Digital Interface Format - norme utilisée pour transmettre des signaux audio numériques entre différents appareils",
    "TOSLINK": "Interface utilisée pour transmettre des signaux audio numériques via un câble optique",
    "caloduc": "Tube hermétique contenant un fluide pour transporter la chaleur d'un point à un autre",
    "jeu d'instruction": " l'ensemble des commandes ou instructions qu'un processeur peut comprendre et exécuter, les processeurs 64 bits peuvent généralement exécuter des instructions 32 bits grâce à une compatibilité ascendante",
    "UPS": "dispositif qui fournit une alimentation électrique de secours en cas de coupure de courant",
    "mémoire cache": "Type de mémoire rapide située entre le processeur et la RAM ou directement dans le processeur, réduit le temps d'accès aux données fréquemment utilisées",
    "EEPROM": "Utilisée pour modifier ou mettre à jour le BIOS, ce qu'on appelle un flashage du BIOS",
    "BIOS": "Programme stocké sur une puce de la carte mère qui initialise le matériel et démarre le système d'exploitation d'un ordinateur.",
    "POST": "Au démarrageLe BIOS exécute une série de tests pour s'assurer que tous les composants matériels essentiels fonctionnent correctement"
};

const etudeCarte = {
    "Topologie en bus": "Bus Topology (topologie en bus)",
    "Topologie en étoile": "Star Topology (topologie en étoile)",
    "Topologie en anneau": "Ring Topology (topologie en anneau)",
    "Topologie maillée": "Mesh Topology (topologie maillée)",
    "Topologie en arbre": "Tree Topology (topologie en arbre)",
    "LAN": "Local Area Network (réseau local)",
    "UTP": "Unshielded Twisted Pair (paire torsadée non blindée)",
    "BNC": "Bayonet Neill-Concelman (connecteur coaxial)",
    "adresse MAC": "Media Access Control (adresse de contrôle d'accès au média)",
    "DNS": "Domain Name System (système de noms de domaine)",
    "PAN": "Personal Area Network (réseau personnel)",
    "BAN": "Body Area Network (réseau corporel)",
    "MAN": "Metropolitan Area Network (réseau métropolitain)",
    "WAN": "Wide Area Network (réseau étendu)",
    "FTP": "File Transfer Protocol (protocole de transfert de fichiers)",
    "STP": "Shielded Twisted Pair (paire torsadée blindée)",
    "IP": "Internet Protocol (protocole Internet)",
    "HTTP": "HyperText Transfer Protocol (protocole de transfert hypertexte)",
    "HTTPS": "HyperText Transfer Protocol Secure (protocole sécurisé de transfert hypertexte)",
    "WWW": "World Wide Web (toile mondiale)",
    "TCP": "Transmission Control Protocol (protocole de contrôle de transmission)",
    "UDP": "User Datagram Protocol (protocole de datagramme utilisateur)",
    "SMTP": "Simple Mail Transfer Protocol (protocole simple de transfert de courrier)",
    "IMAP": "Internet Message Access Protocol (protocole d'accès aux messages Internet)",
    "Pare-feu matériel": "Hardware Firewall (pare-feu matériel)",
    "Pare-feu logiciel": "Software Firewall (pare-feu logiciel)",
    "CPU": "Central Processing Unit (unité centrale de traitement)",
    "ALU": "Arithmetic Logic Unit (unité arithmétique et logique)",
    "CU": "Control Unit (unité de contrôle)",
    "RAM": "Random Access Memory (mémoire vive)",
    "ROM": "Read-Only Memory (mémoire en lecture seule)",
    "PCB": "Printed Circuit Board (carte de circuit imprimé)",
    "BIOS": "Basic Input/Output System (système d'entrée/sortie de base)",
    "CMOS": "Complementary Metal-Oxide-Semiconductor (semi-conducteur à oxyde métallique complémentaire)",
    "GPU": "Graphics Processing Unit (processeur graphique)",
    "I/O": "Input/Output (entrée/sortie)",
    "HDD": "Hard Disk Drive (disque dur)",
    "SSD": "Solid State Drive (disque à état solide)",
    "FPU": "Floating Point Unit (unité de calcul en virgule flottante)",
    "DMA": "Direct Memory Access (accès direct à la mémoire)",
    "IRQ": "Interrupt Request (requête d'interruption)",
    "FSB": "Front Side Bus (bus frontal)",
    "PCI": "Peripheral Component Interconnect (connecteur de composant périphérique)",
    "USB": "Universal Serial Bus (bus universel en série)",
    "NIC": "Network Interface Card (carte réseau)",
    "RAID": "Redundant Array of Independent Disks (grappe redondante de disques indépendants)",
    "CMOS Battery": "CMOS Battery (pile CMOS)",
    "PCIe": "Peripheral Component Interconnect Express (connecteur de composant périphérique express)",
    "USB-C": "Universal Serial Bus Type-C (bus universel en série type C)",
    "DIMM": "Dual Inline Memory Module (module de mémoire à double rangée)",
    "SATA": "Serial ATA (interface de connexion pour disques durs et SSD)",
    "IDE": "Integrated Drive Electronics (électronique de gestion intégrée)",
    "VGA": "Video Graphics Array (norme d'affichage graphique)",
    "Northbridge": "Northbridge (pont nord)",
    "Southbridge": "Southbridge (pont sud)",
    "BSOD": "Blue Screen of Death (écran bleu de la mort)",
    "Chipset": "Chipset (ensemble de circuits)",
    "Spouleur d'impression": "Print Spooler (spouleur d'impression)",
    "Quel est le but de la defragmentation ?": "Defragmentation (défragmentation)",
    "GUI": "Graphical User Interface (interface graphique utilisateur)",
    "MBR": "Master Boot Record (enregistrement de démarrage principal)",
    "GPT": "GUID Partition Table (table de partition GUID)",
    "Office de Linux": "LibreOffice (suite bureautique libre)",
    "Licence publique de Linux": "GNU General Public License (licence publique générale GNU)",
    "UEFI": "Unified Extensible Firmware Interface (interface micrologicielle extensible unifiée)",
    "Secure Boot": "Secure Boot (démarrage sécurisé)",
    "SPDIF": "Sony/Philips Digital Interface Format (format d'interface numérique Sony/Philips)",
    "TOSLINK": "TOSLINK (transmission optique via câble)",
    "caloduc": "Heat Pipe (caloduc)",
    "jeu d'instruction": "Instruction Set (jeu d'instructions)",
    "UPS": "Uninterruptible Power Supply (alimentation sans interruption)",
    "mémoire cache": "Cache Memory (mémoire cache)",
    "EEPROM": "Electrically Erasable Programmable Read-Only Memory (mémoire morte programmable et effaçable électriquement)",
    "BIOS": "Basic Input/Output System (système d'entrée/sortie de base)",
    "POST": "Power-On Self-Test (auto-test de mise sous tension)"
};