const listProducts = [
    // Intel Processors
    {
        productCategory: "Processors",
        productSubcategories: "Intel Processors",
        productName: "Intel Core i5-11600K",
        price: 269.99,
        description: "6-core, 12-thread CPU with overclocking capabilities.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "Intel Processors",
        productName: "Intel Core i9-11900K",
        price: 529.99,
        description: "Flagship 8-core, 16-thread processor for extreme performance.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "Intel Processors",
        productName: "Intel Core i7-10700",
        price: 329.99,
        description: "8-core, 16-thread CPU with excellent multitasking.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "Intel Processors",
        productName: "Intel Core i3-10100",
        price: 149.99,
        description: "Budget-friendly 4-core, 8-thread processor for entry-level systems.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "Intel Processors",
        productName: "Intel Pentium Gold G6400",
        price: 89.99,
        description: "Dual-core processor for basic computing tasks.",
    }, 
    // AMD Processors
    {
        productCategory: "Processors",
        productSubcategories: "AMD Processors",
        productName: "AMD Ryzen 5 5600X",
        price: 299.99,
        description: "6-core, 12-thread CPU with strong single-thread performance.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "AMD Processors",
        productName: "AMD Ryzen 7 5800X",
        price: 429.99,
        description: "8-core, 16-thread processor optimized for gaming.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "AMD Processors",
        productName: "AMD Ryzen 9 5950X",
        price: 749.99,
        description: "16-core, 32-thread flagship CPU for high-end tasks.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "AMD Processors",
        productName: "AMD Ryzen 3 3300X",
        price: 149.99,
        description: "Quad-core processor with good value for budget systems.",
    },
    {
        productCategory: "Processors",
        productSubcategories: "AMD Processors",
        productName: "AMD Ryzen Threadripper 3990X",
        price: 3499.99,
        description: "64-core, 128-thread monster CPU for heavy workloads.",
    },
    //Nvidia Graphics Cards
    {
        productCategory: "Graphics Cards",
        productSubcategories: "NVIDIA Graphics Cards",
        productName: "NVIDIA GeForce RTX 3070",
        price: 599.99,
        description: "High-performance graphics card with ray tracing capabilities.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "NVIDIA Graphics Cards",
        productName: "NVIDIA GeForce RTX 3060 Ti",
        price: 399.99,
        description: "Excellent value GPU for high-quality gaming experiences.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "NVIDIA Graphics Cards",
        productName: "NVIDIA GeForce GTX 1660 Super",
        price: 249.99,
        description: "Solid mid-range card for smooth 1080p gaming.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "NVIDIA Graphics Cards",
        productName: "NVIDIA Quadro RTX 4000",
        price: 899.99,
        description: "Professional GPU for demanding design and rendering tasks.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "NVIDIA Graphics Cards",
        productName: "NVIDIA Titan RTX",
        price: 2499.99,
        description: "Ultimate graphics card for content creators and enthusiasts.",
    },
    //Amd Graphics Cards
    {
        productCategory: "Graphics Cards",
        productSubcategories: "AMD Graphics Cards",
        productName: "AMD Radeon RX 6800 XT",
        price: 649.99,
        description: "High-end graphics card for 1440p and 4K gaming.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "AMD Graphics Cards",
        productName: "AMD Radeon RX 6700 XT",
        price: 499.99,
        description: "Great performance at 1440p resolution.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "AMD Graphics Cards",
        productName: "AMD Radeon RX 6600 XT",
        price: 349.99,
        description: "Solid 1080p gaming card with efficient power consumption.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "AMD Graphics Cards",
        productName: "AMD Radeon Pro WX 7100",
        price: 449.99,
        description: "Professional GPU for design and content creation.",
    },
    {
        productCategory: "Graphics Cards",
        productSubcategories: "AMD Graphics Cards",
        productName: "AMD Radeon RX 570",
        price: 179.99,
        description: "Entry-level card for casual gaming and multimedia tasks.",
    },
    //Memory RAM DDR4
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR4 RAM",
        productName: "Corsair Vengeance RGB Pro 32GB (2x16GB)",
        price: 189.99,
        description: "High-performance RGB DDR4 RAM for gaming and multitasking.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR4 RAM",
        productName: "G.SKILL Ripjaws V 16GB (2x8GB)",
        price: 109.99,
        description: "Reliable DDR4 RAM with sleek heatspreaders.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR4 RAM",
        productName: "Crucial Ballistix MAX 64GB (2x32GB)",
        price: 349.99,
        description: "High-capacity DDR4 RAM kit for demanding applications.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR4 RAM",
        productName: "Team T-FORCE Xtreem ARGB 32GB (2x16GB)",
        price: 199.99,
        description: "DDR4 RAM with eye-catching ARGB lighting effects.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR4 RAM",
        productName: "Kingston HyperX Fury 8GB (1x8GB)",
        price: 69.99,
        description: "Entry-level DDR4 RAM for budget systems.",
    },
    //Memory RAM DDR3
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR3 RAM",
        productName: "Corsair Vengeance LPX 16GB (2x8GB)",
        price: 89.99,
        description: "DDR3 RAM kit with low-profile design.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR3 RAM",
        productName: "G.SKILL Ripjaws X 8GB (2x4GB)",
        price: 59.99,
        description: "Affordable DDR3 RAM for basic computing.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR3 RAM",
        productName: "Crucial Ballistix Sport 16GB (2x8GB)",
        price: 79.99,
        description: "Reliable DDR3 RAM for mid-range systems.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR3 RAM",
        productName: "Kingston HyperX Savage 8GB (1x8GB)",
        price: 74.99,
        description: "High-performance DDR3 RAM with bold design.",
    },
    {
        productCategory: "Memory (RAM)",
        productSubcategories: "DDR3 RAM",
        productName: "Team Elite Plus 4GB (1x4GB)",
        price: 39.99,
        description: "Basic DDR3 RAM for older systems.",
    },
    //Storage SSD
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "SSDs",
        productName: "Samsung 970 EVO Plus 1TB NVMe SSD",
        price: 179.99,
        description: "High-speed NVMe SSD for fast data transfers.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "SSDs",
        productName: "WD Blue SN550 500GB NVMe SSD",
        price: 99.99,
        description: "Affordable NVMe SSD with solid performance.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "SSDs",
        productName: "Crucial MX500 2TB SATA SSD",
        price: 249.99,
        description: "Reliable SATA SSD with large capacity.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "SSDs",
        productName: "Corsair MP600 2TB PCIe 4.0 SSD",
        price: 329.99,
        description: "PCIe 4.0 SSD for ultra-fast read and write speeds.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "SSDs",
        productName: "Kingston A2000 500GB NVMe SSD",
        price: 89.99,
        description: "Budget-friendly NVMe SSD for everyday use.",
    },
    //Storage HDD
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "HDDs",
        productName: "Seagate Barracuda 4TB HDD",
        price: 119.99,
        description: "High-capacity hard drive for storing files and media.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "HDDs",
        productName: "WD Blue 2TB HDD",
        price: 69.99,
        description: "Affordable hard drive with decent storage space.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "HDDs",
        productName: "Toshiba X300 8TB HDD",
        price: 229.99,
        description: "Large-capacity HDD for data-intensive tasks.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "HDDs",
        productName: "Seagate IronWolf 6TB NAS HDD",
        price: 179.99,
        description: "NAS-optimized HDD for network storage solutions.",
    },
    {
        productCategory: "Storage(SSD, HDD)",
        productSubcategories: "HDDs",
        productName: "Western Digital Red Pro 10TB HDD",
        price: 329.99,
        description: "Designed for use in demanding NAS environments.",
    },
    //Intel Motherboards
    {
        productCategory: "Motherboards",
        productSubcategories: "Intel Motherboards",
        productName: "ASUS ROG Strix Z590-E Gaming",
        price: 299.99,
        description: "Feature-rich motherboard for Intel 10th and 11th Gen CPUs.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "Intel Motherboards",
        productName: "MSI MPG Z490 Gaming Carbon WiFi",
        price: 239.99,
        description: "Z490 motherboard with Wi-Fi 6 and Mystic Light RGB.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "Intel Motherboards",
        productName: "GIGABYTE Z590 AORUS Ultra",
        price: 329.99,
        description: "High-end Z590 motherboard with advanced features.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "Intel Motherboards",
        productName: "ASRock B460M-ITX/ac",
        price: 109.99,
        description: "Compact B460 motherboard for small form factor builds.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "Intel Motherboards",
        productName: "EVGA Z590 FTW WiFi",
        price: 289.99,
        description: "Z590 motherboard with robust power delivery.",
    },
    //AMD Motherboards
    {
        productCategory: "Motherboards",
        productSubcategories: "AMD Motherboards",
        productName: "MSI MPG B550 Gaming Edge WiFi",
        price: 189.99,
        description: "B550 motherboard with Wi-Fi 6 and PCIe 4.0 support.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "AMD Motherboards",
        productName: "ASUS ROG Strix X570-E Gaming",
        price: 299.99,
        description: "High-performance X570 motherboard with Aura Sync RGB.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "AMD Motherboards",
        productName: "GIGABYTE B450 AORUS Elite",
        price: 119.99,
        description: "B450 motherboard with solid feature set for Ryzen CPUs.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "AMD Motherboards",
        productName: "ASRock X570 Phantom Gaming 4",
        price: 169.99,
        description: "Affordable X570 motherboard for mainstream users.",
    },
    {
        productCategory: "Motherboards",
        productSubcategories: "AMD Motherboards",
        productName: "MSI B550M PRO-VDH WiFi",
        price: 129.99,
        description: "Micro-ATX B550 motherboard with Wi-Fi connectivity.",
    },
    //Gaming Monitors
    {
        productCategory: "Monitors",
        productSubcategories: "Gaming Monitors",
        productName: "LG 27GL850-B 27-inch Gaming Monitor",
        price: 449.99,
        description: "QHD gaming monitor with fast refresh rate and IPS panel.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Gaming Monitors",
        productName: "ASUS ROG Swift PG279QZ 27-inch Monitor",
        price: 599.99,
        description: "G-Sync gaming monitor with 165Hz refresh rate.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Gaming Monitors",
        productName: "Acer Predator X34 34-inch Ultrawide Monitor",
        price: 999.99,
        description: "Ultrawide gaming monitor with curved display.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Gaming Monitors",
        productName: "MSI Optix MAG274QRF-QD 27-inch Monitor",
        price: 379.99,
        description: "QD gaming monitor with fast response time.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Gaming Monitors",
        productName: "ViewSonic Elite XG270QG 27-inch Monitor",
        price: 499.99,
        description: "NVIDIA G-Sync gaming monitor with high color accuracy.",
    },
    //Professional Monitors
    {
        productCategory: "Monitors",
        productSubcategories: "Professional Monitors",
        productName: "Dell UltraSharp U2719D 27-inch Monitor",
        price: 349.99,
        description: "Color-accurate monitor for creative professionals.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Professional Monitors",
        productName: "LG 32UD99-W 32-inch 4K Monitor",
        price: 699.99,
        description: "4K HDR monitor with wide color gamut.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Professional Monitors",
        productName: "BenQ PD3200U 32-inch 4K Monitor",
        price: 599.99,
        description: "Designer-focused monitor with multiple color modes.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Professional Monitors",
        productName: "EIZO ColorEdge CG2730 27-inch Monitor",
        price: 1499.99,
        description: "High-end monitor for color-critical tasks.",
    },
    {
        productCategory: "Monitors",
        productSubcategories: "Professional Monitors",
        productName: "HP DreamColor Z27x G2 27-inch Monitor",
        price: 1299.99,
        description: "Professional monitor with DreamColor technology.",
    },
    //Keyboards
    {
        productCategory: "Accessories",
        productSubcategories: "Keyboards",
        productName: "Corsair K95 RGB Platinum XT",
        price: 199.99,
        description: "Mechanical gaming keyboard with customizable RGB lighting.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Keyboards",
        productName: "Logitech G Pro X",
        price: 149.99,
        description: "Modular mechanical keyboard with hot-swappable switches.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Keyboards",
        productName: "Razer BlackWidow Elite",
        price: 169.99,
        description: "Mechanical keyboard with customizable Chroma RGB lighting.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Keyboards",
        productName: "SteelSeries Apex Pro",
        price: 199.99,
        description: "Adjustable mechanical switches for customized feel.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Keyboards",
        productName: "HyperX Alloy FPS Pro",
        price: 89.99,
        description: "Compact mechanical keyboard for FPS gamers.",
    },
    //Mouse
    {
        productCategory: "Accessories",
        productSubcategories: "Mouse",
        productName: "Logitech G Pro X Superlight",
        price: 149.99,
        description: "Ultra-lightweight gaming mouse with HERO sensor.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mouse",
        productName: "Razer DeathAdder V2",
        price: 69.99,
        description: "Ergonomic gaming mouse with Focus+ Optical Sensor.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mouse",
        productName: "SteelSeries Rival 600",
        price: 79.99,
        description: "Dual-sensor gaming mouse for precise tracking.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mouse",
        productName: "Corsair Dark Core RGB/SE",
        price: 89.99,
        description: "Wireless gaming mouse with customizable side grips.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mouse",
        productName: "Finalmouse Ultralight 2 Cape Town",
        price: 119.99,
        description: "Limited-edition ultra-lightweight gaming mouse.",
    },
    //Headsets
    {
        productCategory: "Accessories",
        productSubcategories: "Headsets",
        productName: "HyperX Cloud II",
        price: 99.99,
        description: "Wired gaming headset with virtual 7.1 surround sound.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Headsets",
        productName: "Logitech G Pro X Gaming Headset",
        price: 129.99,
        description: "Professional-grade headset with Blue VO!CE technology.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Headsets",
        productName: "Razer BlackShark V2 Pro",
        price: 179.99,
        description: "Wireless gaming headset with THX Spatial Audio.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Headsets",
        productName: "Corsair Virtuoso RGB Wireless SE",
        price: 209.99,
        description: "High-fidelity wireless gaming headset with RGB lighting.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Headsets",
        productName: "SteelSeries Arctis Pro + GameDAC",
        price: 249.99,
        description: "High-resolution audio gaming headset with DAC.",
    },
    //Cables
    {
        productCategory: "Accessories",
        productSubcategories: "Cables",
        productName: "Anker PowerLine+ USB-C to USB-A Cable",
        price: 12.99,
        description: "Durable USB-C cable for fast charging and data transfer.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Cables",
        productName: "AmazonBasics HDMI 2.0 Cable",
        price: 8.99,
        description: "High-speed HDMI cable for 4K video and audio.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Cables",
        productName: "Cable Matters DisplayPort to DisplayPort Cable",
        price: 15.99,
        description: "Reliable cable for connecting DisplayPort devices.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Cables",
        productName: "UGREEN Ethernet Cable Cat 6",
        price: 10.99,
        description: "Ethernet cable for high-speed wired internet connections.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Cables",
        productName: "UGREEN USB 3.0 Extension Cable",
        price: 9.99,
        description: "Extend USB connections for better accessibility.",
    },
    //Mousepads
    {
        productCategory: "Accessories",
        productSubcategories: "Mousepads",
        productName: "SteelSeries QcK Gaming Mousepad",
        price: 14.99,
        description: "Classic cloth mousepad for precise tracking.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mousepads",
        productName: "Corsair MM300 Extended Mousepad",
        price: 29.99,
        description: "Large extended mousepad with low-friction surface.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mousepads",
        productName: "Razer Goliathus Extended Chroma",
        price: 59.99,
        description: "RGB mousepad with customizable lighting effects.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mousepads",
        productName: "Logitech G440 Hard Gaming Mousepad",
        price: 24.99,
        description: "Hard surface mousepad for fast-paced gaming.",
    },
    {
        productCategory: "Accessories",
        productSubcategories: "Mousepads",
        productName: "HyperX Fury S Pro Gaming Mousepad",
        price: 19.99,
        description: "Stitched edge mousepad with textured surface.",
    },
    //Chairs
    {
        productCategory: "Others",
        productSubcategories: "Chairs",
        productName: "Secretlab Omega Series",
        price: 379.99,
        description: "Ergonomic gaming chair with lumbar support and adjustable features.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Chairs",
        productName: "DXRacer Formula Series",
        price: 289.99,
        description: "Racing-style gaming chair with adjustable armrests.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Chairs",
        productName: "AKRacing Masters Series Pro",
        price: 419.99,
        description: "Premium gaming chair with wide seating area and cold-cured foam padding.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Chairs",
        productName: "Respawn 110 Racing Style Gaming Chair",
        price: 179.99,
        description: "Affordable gaming chair with reclining and footrest features.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Chairs",
        productName: "Homall Gaming Chair",
        price: 149.99,
        description: "Entry-level gaming chair with ergonomic design.",
    },
    //Coolers
    {
        productCategory: "Others",
        productSubcategories: "Coolers",
        productName: "Noctua NH-D15 CPU Cooler",
        price: 89.99,
        description: "High-performance air cooler for efficient CPU cooling.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Coolers",
        productName: "NZXT Kraken X63 AIO Liquid Cooler",
        price: 149.99,
        description: "240mm AIO liquid cooler with customizable RGB lighting.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Coolers",
        productName: "Cooler Master Hyper 212 RGB Black Edition",
        price: 39.99,
        description: "Popular air cooler with RGB fan and direct contact heat pipes.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Coolers",
        productName: "Corsair iCUE H150i Elite Capellix Liquid Cooler",
        price: 189.99,
        description: "360mm AIO liquid cooler with RGB lighting and Capellix LEDs.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Coolers",
        productName: "ARCTIC MX-4 Thermal Compound",
        price: 9.99,
        description: "High-performance thermal paste for effective heat transfer.",
    },
    //Power Supplies
    {
        productCategory: "Others",
        productSubcategories: "Power Supplies",
        productName: "EVGA Supernova 750 G3",
        price: 109.99,
        description: "750W modular power supply with 80+ Gold efficiency.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Power Supplies",
        productName: "Corsair RM850x",
        price: 139.99,
        description: "850W fully modular power supply with 80+ Gold certification.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Power Supplies",
        productName: "Seasonic Focus GX-650",
        price: 89.99,
        description: "650W power supply with 80+ Gold efficiency and silent fan.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Power Supplies",
        productName: "Thermaltake Toughpower GF1 750W",
        price: 119.99,
        description: "750W power supply with 80+ Gold rating and Japanese capacitors.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Power Supplies",
        productName: "be quiet! Straight Power 11 850W",
        price: 149.99,
        description: "850W modular power supply with 80+ Gold efficiency and low noise.",
    },
    //Others Products
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "Blue Yeti USB Microphone",
        price: 129.99,
        description: "Versatile USB microphone for streaming, podcasting, and recording.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "Elgato Stream Deck Mini",
        price: 99.99,
        description: "Compact control panel for content creators with customizable buttons.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "LED Desk Lamp with Color Modes",
        price: 29.99,
        description: "Adjustable LED lamp with various color temperature options.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "Desk Plant Set with Mini Plant Pots",
        price: 18.99,
        description: "Set of small plants in decorative pots for your desk.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "Cable Clips and Organizers Set",
        price: 9.99,
        description: "Assortment of cable clips to keep cords organized.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "Wooden Coaster Set with Holder",
        price: 14.99,
        description: "Set of coasters for drinks, complete with a stylish holder.",
    },
    {
        productCategory: "Others",
        productSubcategories: "Others",
        productName: "Decorative Wall Art Print",
        price: 24.99,
        description: "Artistic print to enhance the aesthetic of your workspace.",
    },
]
//Creation of class Product
class Product {
    constructor(productCategory,productSubcategories, productName, price, description) {
        this.productCategory = productCategory;
        this.productSubcategories = productSubcategories;
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
    //Class method to set a new price for a product
    setNewPrice(newPrice){
        this.price = newPrice;
    }
    //Method to remove a product from the cart
    removeFromCart(){
        let included = shoppingCart.includes(this)
        if (included) {
            shoppingCart.splice(shoppingCart.indexOf(this), 1);
            alert("The product has been removed from your cart.")
        }else{
            alert("The product is not in your cart.");
        }
    }
}
//Adding the products for class Product
const products = [];
for (let item in listProducts){
    products.push(new Product(listProducts[item].productCategory, listProducts[item].productSubcategories, listProducts[item].productName, listProducts[item].price, listProducts[item].description));
}
//Categories of products
const categoriesStore = [
    "Processors", "Graphics Cards", "Memory (RAM)", "Storage(SSD, HDD)", "Motherboards", "Monitors", "Accessories", "Others"
]
//Subcategories Products
const subcategoriesStore = [
    "Intel", "Amd", "Nvidia Graphics Cards", "Amd Graphics Cards", "DDR4 RAM", "DDR3 RAM", "SSDs", "HDDs", "Intel Motherboards", "AMD Motherboards", "Gaming Monitors", "Professionals Monitors", "Keyboards", "Mouse", "Headsets", "Cables", "Mouse Pads", "Chairs", "Coolers", "Power Supplies", "Others"
]
//Initial menu text
const menuOptionsText = "Welcome to Uranium Hardware\nEnter the your option to"
//State for the loop of the menu
let finishedClient = "False"
//Function to show the categories of the products and enter a category option
function ShowCategories(){
    let shownText = ""
    let categoryOption = ""
    let i = 1
    categoriesStore.forEach( (category)=> {
        shownText += `${i}- ${category}\n`;
        i += 1
    })
    categoryOption = prompt(`Categories of Products\nEnter the category number to show the related products.\n${shownText}`)
    try {
        let categoryIntroducedOption = parseInt(categoryOption) //Try to parse the introduced value
        if((categoryIntroducedOption >= 1) && (categoryIntroducedOption <= (categoriesStore.length))){ //Filter that the option is possible for the category array lenght
            return(categoriesStore[categoryIntroducedOption - 1]) //Return the category name based on their index
        }else{
            alert("The introduced option is not an available option.");
            ShowCategories()
        }
    } catch (error){
        alert("The introduced option is not an available option.");
        ShowCategories()
    }
}
//Function to show the product of the entered category
function ShowProducts(category){
    let productsCategory = products.filter( (element) => element.productCategory.includes(category));
    let productsSubcategory = new Set(productsCategory.map(element => element.productSubcategories));
    let shownText = ""
    let i = 0
    productsSubcategory.forEach( (subcategory)=>{
        let shownTextproducts = ""
        productsCategory.forEach( (element)=>{
            if (element.productSubcategories == subcategory){
                i += 1; 
                shownTextproducts += `${i}- [ ${element.productName}        $${element.price} ]\n      [" ${element.description} "]\n\n`
            }   
        })
        shownText += `||  ${subcategory}  ||\n\n${shownTextproducts}`
    })
    console.log(shownText)
    let option = prompt(`${shownText}\nEnter the number of the product to add.\nEnter "0" to go back:`)
    try {
        let productIntroducedOption = parseInt(option) //Try to parse the introduced value
        if((productIntroducedOption >= 1) && (productIntroducedOption <= (productsCategory.length))){ //Filter that the option is possible for the product array lenght
            shoppingCart.addToCart(productsCategory[productIntroducedOption - 1])
            alert(`The product "${productsCategory[productIntroducedOption - 1].productName}" was added to the shopping cart successfully`)        
        }else if (productIntroducedOption == 0){
        }else{
            alert("The introduced option is not an available option.");
        }
    } catch (error){
        alert("The introduced option is not an available option.");
    }
    // if (option <= (productsCategory.length + 1) && option >= 1){
    //     shoppingCart.addToCart(productsCategory[option])
    //     alert(`The product "${productsCategory[option].productName}" was added to the shopping cart successfully`)
    // }else if (option == 0 || option == "back"){
    //     showMenuOptions()
}
class ShoppingCart {
    constructor() {
        this.productsCart = [];
    }
    //Method to add a product to the cart
    addToCart(element){
        this.productsCart.push(element);
    }
    textMenuCart(){
        let i = 1
        let totalPriceCalculation = 0
        let shoppingCartMenu = `||  Products Cart  ||\n`
        let showCart = this.productsCart.forEach( (element) =>{
            shoppingCartMenu += `${i}- [ ${element.productName}        $${element.price} ]\n`
            i += 1
            totalPriceCalculation += Math.round(element.price)
        })
        shoppingCartMenu += `| Total price =  $${totalPriceCalculation} |`
        return shoppingCartMenu
    }
    calculateTotal(){
        let totalPriceCalculation = 0
        let showCart = this.productsCart.forEach( (element) =>{
            totalPriceCalculation += element.price
        })
        return Math.round(totalPriceCalculation)
    }
    applyCupon(){
        let cupon = prompt("Do you have a discount coupon? Apply your discount coupon, if you don't have enter '0'")
        let totalPrice = shoppingCart.calculateTotal()
        while (cupon != "cupon" || cupon != 0)
            if (cupon == "cupon"){
                totalPrice = totalPrice * 0.8
                alert(`The purchase of the products has been successful for $${totalPrice}`)
                finishedClient = "True"
                break
            }else if (cupon == 0){
                alert(`The purchase of the products has been successful for $${totalPrice}`)
                finishedClient = "True"
                break
            }else{
                alert("That isn't a available cupon")
                cupon = prompt("Do you have a discount coupon? Apply your discount coupon, if you don't have enter '0'")

            }    
    }
}
let shoppingCart = new ShoppingCart()
const options = "Enter the numbered option to continue:\n1. Show the products of the store\n2. Show the information of the store\n3. Show your shopping cart\n4. Close the menu"
//Function for the menu loop and uses of the functions
function showMenuOptions(){
    optionsMenu = parseInt(prompt(options))
    if (optionsMenu == 1){
        let selectedCategory = ShowCategories()
        ShowProducts(selectedCategory)
    }else if (optionsMenu == 2){
        alert(" ||  Schedules  ||\nMonday/Friday: 12:00 - 23:00 \nSaturday/Sunday: 19:00 - 23:00\n  ||  Location  ||\nAv. Urquiza 314 - San Rafael, Mendoza, Argentina")
    }else if(optionsMenu == 3){
        if ((shoppingCart.productsCart).length >= 1){
            let continueBuying = prompt(`${shoppingCart.textMenuCart()}\n\nEnter "1" to buy the cart or any else to go back.`)
            if (continueBuying == 1){
                shoppingCart.applyCupon()}
        }else{
            alert("Your shopping cart is empty")
        }
    }else if(optionsMenu == 4){
        finishedClient = "True"
    }else{
        alert("The introduced option is not an available option")
    }
}
while (finishedClient == "False"){
    showMenuOptions();
}
alert("All the process was successful")