// Expanded pool of questions
const questionPool = [
    { question: "What is the capital of Italy?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: "Rome" },
    { question: "Which planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Mars"], answer: "Earth" },
    { question: "What is the smallest ocean in the world?", options: ["Indian", "Arctic", "Atlantic", "Pacific"], answer: "Arctic" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "Thailand", "South Korea"], answer: "Japan" },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], answer: "Antarctic" },
    { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"], answer: "George Orwell" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
    { question: "In which country would you find the Great Barrier Reef?", options: ["Brazil", "Australia", "Indonesia", "South Africa"], answer: "Australia" },
    { question: "Which continent is the Sahara Desert located on?", options: ["Africa", "Asia", "Australia", "South America"], answer: "Africa" },
    { question: "How many strings does a standard guitar have?", options: ["4", "6", "8", "10"], answer: "6" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
    { question: "What is the largest country in the world by area?", options: ["China", "United States", "Canada", "Russia"], answer: "Russia" },
    { question: "What is the primary language spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: "Portuguese" },
    { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: "Diamond" },
    { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Albert Einstein"], answer: "Alexander Fleming" },
    { question: "Which ocean is the largest?", options: ["Indian", "Pacific", "Atlantic", "Arctic"], answer: "Pacific" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Yangtze", "Nile", "Mississippi"], answer: "Nile" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa" },
    { question: "What is the name of the famous clock tower in London?", options: ["Big Ben", "Eiffel Tower", "Statue of Liberty", "Colosseum"], answer: "Big Ben" },
    { question: "How many bones are in the human body?", options: ["206", "201", "208", "210"], answer: "206" },
    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
    { question: "Who was the first president of the United States?", options: ["Abraham Lincoln", "John Adams", "George Washington", "Thomas Jefferson"], answer: "George Washington" },
    { question: "What is the capital city of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: "Madrid" },
    { question: "How many planets are in the solar system?", options: ["7", "8", "9", "10"], answer: "8" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charles Dickens", "George Orwell", "Jane Austen", "Virginia Woolf"], answer: "Jane Austen" },
    { question: "Which element is represented by the symbol 'O'?", options: ["Oxygen", "Gold", "Iron", "Helium"], answer: "Oxygen" },
    { question: "What is the largest island in the world?", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"], answer: "Greenland" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"], answer: "Alexander Graham Bell" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "United Kingdom", "Japan"], answer: "Brazil" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Pepper", "Garlic"], answer: "Avocado" },
    { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Luxor", "Giza"], answer: "Cairo" },
    { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Valentina Tereshkova", "Harriet Quimby", "Bessie Coleman"], answer: "Amelia Earhart" },
    { question: "What is the tallest animal in the world?", options: ["Elephant", "Giraffe", "Lion", "Kangaroo"], answer: "Giraffe" },
    { question: "What color are emeralds?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Green" },
    { question: "Which planet is known as the Evening Star?", options: ["Mercury", "Mars", "Venus", "Jupiter"], answer: "Venus" },
    { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Socrates", "Plato", "Aristotle"], answer: "Homer" },
    { question: "What is the smallest unit of matter?", options: ["Molecule", "Atom", "Electron", "Neutron"], answer: "Atom" },
    { question: "How many chambers are in the human heart?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Which artist is famous for painting the Sistine Chapel ceiling?", options: ["Michelangelo", "Raphael", "Donatello", "Leonardo"], answer: "Michelangelo" },
    { question: "Which gas is commonly used in balloons?", options: ["Hydrogen", "Oxygen", "Helium", "Nitrogen"], answer: "Helium" },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], answer: "Tokyo" },
    { question: "What is the world's most widely spoken language?", options: ["Spanish", "English", "Mandarin", "Hindi"], answer: "Mandarin" },
    { question: "What is the largest type of bear?", options: ["Grizzly Bear", "Polar Bear", "Panda Bear", "Black Bear"], answer: "Polar Bear" },
    { question: "Which element is represented by the symbol 'K'?", options: ["Krypton", "Potassium", "Calcium", "Sodium"], answer: "Potassium" },
    { question: "What is the capital of Thailand?", options: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"], answer: "Bangkok" },
    { question: "Who discovered gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo", "Nikola Tesla"], answer: "Isaac Newton" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: "Blue Whale" },
    { question: "What is the primary ingredient in hummus?", options: ["Lentils", "Chickpeas", "Beans", "Rice"], answer: "Chickpeas" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Saturn" },
    { question: "What is the capital of Russia?", options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Kazan"], answer: "Moscow" },
    { question: "Who is the author of 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Jane Austen", "Mark Twain"], answer: "Harper Lee" },
    { question: "What is the largest land animal?", options: ["Elephant", "Rhinoceros", "Giraffe", "Hippopotamus"], answer: "Elephant" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" }
    { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Dollar"], answer: "Yen" },
    { question: "What is the primary ingredient in sushi?", options: ["Bread", "Rice", "Noodles", "Fish"], answer: "Rice" },
    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Michael Collins", "Yuri Gagarin", "Neil Armstrong"], answer: "Neil Armstrong" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "What color are rubies?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Red" },
    { question: "Which organ pumps blood throughout the human body?", options: ["Liver", "Brain", "Heart", "Lung"], answer: "Heart" },
    { question: "What is the chemical formula for salt?", options: ["NaCl", "H2O", "CO2", "O2"], answer: "NaCl" },
    { question: "In what year did World War II end?", options: ["1939", "1941", "1945", "1950"], answer: "1945" },
    { question: "Who painted 'Starry Night'?", options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"], answer: "Vincent van Gogh" },
    { question: "What is the boiling point of water in Celsius?", options: ["50", "75", "100", "150"], answer: "100" },
    { question: "What is the longest bone in the human body?", options: ["Humerus", "Femur", "Tibia", "Fibula"], answer: "Femur" },
    { question: "How many planets in our solar system have rings?", options: ["1", "3", "4", "5"], answer: "4" },
    { question: "Which planet is known for its rings?", options: ["Mars", "Venus", "Saturn", "Neptune"], answer: "Saturn" },
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
    { question: "In which city is the Statue of Liberty located?", options: ["Washington D.C.", "Los Angeles", "New York", "Boston"], answer: "New York" },
    { question: "What is the smallest country by land area?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: "Vatican City" },
    { question: "What is the chemical symbol for iron?", options: ["Ir", "In", "I", "Fe"], answer: "Fe" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Carbon Dioxide" },
    { question: "How many days are in a leap year?", options: ["365", "366", "364", "367"], answer: "366" },
    { question: "What is the main language spoken in Canada?", options: ["English", "French", "Both", "Spanish"], answer: "Both" },
    { question: "Which planet is known as the Morning Star?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lung"], answer: "Skin" },
    { question: "What is the first element on the periodic table?", options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"], answer: "Hydrogen" },
    { question: "Which vitamin is produced when the skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
    { question: "Which ocean is the Bermuda Triangle located in?", options: ["Indian", "Pacific", "Atlantic", "Arctic"], answer: "Atlantic" },
    { question: "What is the tallest building in the world?", options: ["Shanghai Tower", "One World Trade Center", "Burj Khalifa", "Taipei 101"], answer: "Burj Khalifa" },
    { question: "What is the capital of Argentina?", options: ["Lima", "Buenos Aires", "Bogotá", "Santiago"], answer: "Buenos Aires" },
    { question: "Which country is the largest producer of coffee?", options: ["Colombia", "Ethiopia", "Vietnam", "Brazil"], answer: "Brazil" },
    { question: "Who is known as the 'Father of Computers'?", options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Steve Jobs"], answer: "Charles Babbage" }
    { question: "What is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon", "Daegu"], answer: "Seoul" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], answer: "300,000 km/s" },
    { question: "What element does 'O' represent on the periodic table?", options: ["Gold", "Oxygen", "Iron", "Osmium"], answer: "Oxygen" },
    { question: "Who was the Greek god of the sea?", options: ["Zeus", "Hades", "Poseidon", "Ares"], answer: "Poseidon" },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound", "Yen"], answer: "Pound" },
    { question: "What animal is the largest species of the cat family?", options: ["Lion", "Tiger", "Cheetah", "Leopard"], answer: "Tiger" },
    { question: "Who wrote the 'Harry Potter' series?", options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"], answer: "J.K. Rowling" },
    { question: "What is the capital of Brazil?", options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"], answer: "Brasília" },
    { question: "What is the boiling point of water in Fahrenheit?", options: ["200°F", "212°F", "100°F", "150°F"], answer: "212°F" },
    { question: "What is the smallest planet in our solar system?", options: ["Mars", "Mercury", "Venus", "Pluto"], answer: "Mercury" },
    { question: "What is the most common blood type?", options: ["O", "A", "B", "AB"], answer: "O" },
    { question: "What color is chlorophyll?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Green" },
    { question: "What is the most populous country?", options: ["India", "USA", "China", "Russia"], answer: "China" },
    { question: "What is the chemical formula for carbon dioxide?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "CO2" },
    { question: "Which country is known for the Great Wall?", options: ["Japan", "China", "India", "South Korea"], answer: "China" },
    { question: "Which vitamin is known as ascorbic acid?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin C" },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], answer: "Michelangelo" },
    { question: "What is the capital of Russia?", options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Kazan"], answer: "Moscow" },
    { question: "How many players are on a baseball team?", options: ["7", "8", "9", "10"], answer: "9" },
    { question: "Which animal is known for having a long neck?", options: ["Elephant", "Giraffe", "Kangaroo", "Lion"], answer: "Giraffe" },
    { question: "What is the currency of the United States?", options: ["Euro", "Dollar", "Pound", "Yen"], answer: "Dollar" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the hardest rock?", options: ["Diamond", "Granite", "Quartz", "Marble"], answer: "Diamond" },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Hamburg", "Cologne"], answer: "Berlin" },
    { question: "What element has the symbol 'He'?", options: ["Helium", "Hydrogen", "Mercury", "Neon"], answer: "Helium" },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8" },
    { question: "What is the currency of France?", options: ["Euro", "Franc", "Dollar", "Pound"], answer: "Euro" },
    { question: "What is the longest river in the United States?", options: ["Mississippi", "Missouri", "Yukon", "Rio Grande"], answer: "Missouri" },
    { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], answer: "32" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" }
    { question: "What is the tallest mammal?", options: ["Elephant", "Giraffe", "Lion", "Tiger"], answer: "Giraffe" },
    { question: "Who invented the light bulb?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"], answer: "Thomas Edison" },
    { question: "What is the most spoken language in the world?", options: ["English", "Spanish", "Mandarin", "Hindi"], answer: "Mandarin" },
    { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Saturn" },
    { question: "What is the capital of Turkey?", options: ["Istanbul", "Izmir", "Ankara", "Antalya"], answer: "Ankara" },
    { question: "Who is the author of '1984'?", options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "J.K. Rowling"], answer: "George Orwell" },
    { question: "What is the hardest substance in the human body?", options: ["Bone", "Tooth enamel", "Cartilage", "Nail"], answer: "Tooth enamel" },
    { question: "Who is the god of war in Greek mythology?", options: ["Ares", "Zeus", "Apollo", "Hermes"], answer: "Ares" },
    { question: "What is the capital of Switzerland?", options: ["Geneva", "Bern", "Zurich", "Basel"], answer: "Bern" },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "Antarctica"], answer: "Asia" },
    { question: "What is the boiling point of water in Kelvin?", options: ["273", "373", "473", "573"], answer: "373" },
    { question: "Who painted 'The Persistence of Memory'?", options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: "Salvador Dalí" },
    { question: "What is the currency of India?", options: ["Rupee", "Dollar", "Pound", "Euro"], answer: "Rupee" },
    { question: "What is the chemical formula for table sugar?", options: ["C6H12O6", "C12H22O11", "NaCl", "C2H5OH"], answer: "C12H22O11" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { question: "What is the capital of Portugal?", options: ["Lisbon", "Porto", "Braga", "Coimbra"], answer: "Lisbon" },
    { question: "Who is the author of 'The Great Gatsby'?", options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "Harper Lee"], answer: "F. Scott Fitzgerald" },
    { question: "What is the chemical symbol for silver?", options: ["Si", "Au", "Ag", "Pb"], answer: "Ag" },
    { question: "Which planet is known for its prominent rings?", options: ["Mars", "Venus", "Saturn", "Jupiter"], answer: "Saturn" },
    { question: "What is the highest mountain in Africa?", options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"], answer: "Mount Kilimanjaro" },
    { question: "What is the most common type of star in the universe?", options: ["Red dwarf", "Blue giant", "White dwarf", "Yellow star"], answer: "Red dwarf" },
    { question: "Who is the Greek goddess of wisdom?", options: ["Hera", "Aphrodite", "Athena", "Artemis"], answer: "Athena" },
    { question: "What is the largest bone in the human body?", options: ["Femur", "Humerus", "Tibia", "Fibula"], answer: "Femur" },
    { question: "What is the longest river in South America?", options: ["Amazon", "Parana", "Orinoco", "São Francisco"], answer: "Amazon" },
    { question: "What is the capital of Norway?", options: ["Stockholm", "Copenhagen", "Oslo", "Bergen"], answer: "Oslo" },
    { question: "What is the main ingredient in traditional Italian pesto?", options: ["Basil", "Parsley", "Oregano", "Rosemary"], answer: "Basil" },
    { question: "What is the symbol for potassium?", options: ["P", "K", "Pt", "Po"], answer: "K" },
    { question: "Which country is known for the invention of pizza?", options: ["Greece", "France", "Italy", "Spain"], answer: "Italy" },
    { question: "What is the smallest prime number?", options: ["1", "2", "3", "5"], answer: "2" },
    { question: "What is the capital of New Zealand?", options: ["Auckland", "Christchurch", "Wellington", "Hamilton"], answer: "Wellington" }
    { question: "What is the largest land carnivore?", options: ["Lion", "Tiger", "Polar Bear", "Grizzly Bear"], answer: "Polar Bear" },
    { question: "What is the currency of Mexico?", options: ["Dollar", "Peso", "Real", "Euro"], answer: "Peso" },
    { question: "Who invented the World Wide Web?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], answer: "Tim Berners-Lee" },
    { question: "What is the most populous city in the world?", options: ["Tokyo", "Shanghai", "Mumbai", "New York"], answer: "Tokyo" },
    { question: "Who discovered electricity?", options: ["Isaac Newton", "Albert Einstein", "Benjamin Franklin", "Nikola Tesla"], answer: "Benjamin Franklin" },
    { question: "What is the capital of Belgium?", options: ["Brussels", "Antwerp", "Ghent", "Bruges"], answer: "Brussels" },
    { question: "What is the largest type of deer?", options: ["White-tailed deer", "Elk", "Moose", "Red deer"], answer: "Moose" },
    { question: "Which ocean lies on the east coast of the United States?", options: ["Pacific", "Indian", "Arctic", "Atlantic"], answer: "Atlantic" },
    { question: "Who is the author of 'Moby Dick'?", options: ["Mark Twain", "Herman Melville", "Jules Verne", "Jack London"], answer: "Herman Melville" },
    { question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Ostrich"], answer: "Cheetah" },
    { question: "What is the capital of the Netherlands?", options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], answer: "Amsterdam" },
    { question: "Who wrote 'War and Peace'?", options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Vladimir Nabokov"], answer: "Leo Tolstoy" },
    { question: "Which country has the largest population?", options: ["United States", "India", "China", "Indonesia"], answer: "China" },
    { question: "What type of animal is a Komodo dragon?", options: ["Snake", "Lizard", "Crocodile", "Turtle"], answer: "Lizard" },
    { question: "What is the hottest planet in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
    { question: "What is the national flower of Japan?", options: ["Lily", "Cherry Blossom", "Rose", "Sunflower"], answer: "Cherry Blossom" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Jane Goodall", "Rosalind Franklin", "Ada Lovelace"], answer: "Marie Curie" },
    { question: "What is the world's largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "What is the smallest planet in our solar system?", options: ["Earth", "Mercury", "Mars", "Venus"], answer: "Mercury" },
    { question: "What is the longest river in Africa?", options: ["Nile", "Congo", "Zambezi", "Niger"], answer: "Nile" },
    { question: "Which animal is known as the 'Ship of the Desert'?", options: ["Horse", "Camel", "Elephant", "Donkey"], answer: "Camel" },
    { question: "Which country gifted the Statue of Liberty to the United States?", options: ["Canada", "France", "Germany", "United Kingdom"], answer: "France" },
    { question: "What is the primary component of the sun?", options: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Hydrogen" },
    { question: "How many rings are on the Olympic flag?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "What is the currency of China?", options: ["Yen", "Won", "Yuan", "Rupee"], answer: "Yuan" },
    { question: "Who painted 'The Last Supper'?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Caravaggio"], answer: "Leonardo da Vinci" },
    { question: "Which planet has the most volcanoes?", options: ["Mars", "Earth", "Venus", "Jupiter"], answer: "Venus" },
    { question: "What is the capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], answer: "Pretoria" },
    { question: "What is the most consumed fruit in the world?", options: ["Apple", "Banana", "Orange", "Mango"], answer: "Banana" }
    { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "Leif Erikson", "Amerigo Vespucci"], answer: "Christopher Columbus" },
    { question: "What is the capital of Spain?", options: ["Barcelona", "Madrid", "Seville", "Valencia"], answer: "Madrid" },
    { question: "What is the main language spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: "Portuguese" },
    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["J.D. Salinger", "Ernest Hemingway", "Harper Lee", "Mark Twain"], answer: "Harper Lee" },
    { question: "What is the largest island in the Caribbean?", options: ["Cuba", "Jamaica", "Puerto Rico", "Hispaniola"], answer: "Cuba" },
    { question: "Which country has the largest army?", options: ["Russia", "China", "United States", "India"], answer: "China" },
    { question: "Who is the Greek god of the underworld?", options: ["Zeus", "Hades", "Poseidon", "Hermes"], answer: "Hades" },
    { question: "What is the longest bone in the human body?", options: ["Tibia", "Femur", "Humerus", "Radius"], answer: "Femur" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"], answer: "Jane Austen" },
    { question: "What is the capital of Ireland?", options: ["Belfast", "Dublin", "Cork", "Galway"], answer: "Dublin" },
    { question: "What is the smallest country in Asia by area?", options: ["Maldives", "Singapore", "Bahrain", "Brunei"], answer: "Maldives" },
    { question: "Which planet is closest to Earth?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "What is the chemical symbol for sodium?", options: ["S", "N", "Na", "So"], answer: "Na" },
    { question: "Who was the first President of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
    { question: "What is the smallest country in Europe?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], answer: "Vatican City" },
    { question: "What is the speed of sound?", options: ["343 m/s", "500 m/s", "300 m/s", "400 m/s"], answer: "343 m/s" },
    { question: "What is the primary ingredient in chocolate?", options: ["Sugar", "Milk", "Cocoa beans", "Flour"], answer: "Cocoa beans" },
    { question: "Who was the first man in space?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], answer: "Yuri Gagarin" },
    { question: "What is the largest type of shark?", options: ["Great White Shark", "Tiger Shark", "Whale Shark", "Hammerhead Shark"], answer: "Whale Shark" },
    { question: "What is the main ingredient in bread?", options: ["Flour", "Sugar", "Salt", "Eggs"], answer: "Flour" },
    { question: "What is the most commonly spoken language in South America?", options: ["Spanish", "Portuguese", "French", "English"], answer: "Spanish" },
    { question: "Who wrote 'The Iliad'?", options: ["Homer", "Socrates", "Plato", "Aristotle"], answer: "Homer" },
    { question: "What is the primary gas found in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
    { question: "What country is the Eiffel Tower located in?", options: ["Italy", "Spain", "Germany", "France"], answer: "France" },
    { question: "Who was the lead singer of the band Queen?", options: ["Mick Jagger", "Freddie Mercury", "David Bowie", "Elton John"], answer: "Freddie Mercury" },
    { question: "What element is the most abundant in the universe?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], answer: "Hydrogen" },
    { question: "What is the capital of Italy?", options: ["Milan", "Venice", "Florence", "Rome"], answer: "Rome" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"], answer: "Alexander Graham Bell" }
    { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Fibula", "Ulna"], answer: "Stapes" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"], answer: "Alexander Fleming" },
    { question: "What is the longest river in Europe?", options: ["Danube", "Thames", "Volga", "Rhine"], answer: "Volga" },
    { question: "What is the capital of Finland?", options: ["Helsinki", "Oslo", "Stockholm", "Copenhagen"], answer: "Helsinki" },
    { question: "What is the largest moon of Saturn?", options: ["Europa", "Titan", "Ganymede", "Callisto"], answer: "Titan" },
    { question: "What type of animal is a Flemish Giant?", options: ["Dog", "Cat", "Rabbit", "Horse"], answer: "Rabbit" },
    { question: "Who invented the airplane?", options: ["The Wright Brothers", "Alexander Graham Bell", "Thomas Edison", "Leonardo da Vinci"], answer: "The Wright Brothers" },
    { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Mars", "Neptune"], answer: "Jupiter" },
    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "North America", "South America"], answer: "Asia" },
    { question: "What element does 'C' represent on the periodic table?", options: ["Calcium", "Carbon", "Chlorine", "Copper"], answer: "Carbon" },
    { question: "What is the world's largest desert?", options: ["Sahara", "Antarctic", "Arabian", "Gobi"], answer: "Antarctic" },
    { question: "What is the primary ingredient in miso soup?", options: ["Soybeans", "Tofu", "Seaweed", "Rice"], answer: "Soybeans" },
    { question: "What is the capital of Iceland?", options: ["Oslo", "Reykjavik", "Helsinki", "Stockholm"], answer: "Reykjavik" },
    { question: "Which bird is often associated with delivering babies?", options: ["Eagle", "Pelican", "Stork", "Swan"], answer: "Stork" },
    { question: "What is the most abundant element in Earth's crust?", options: ["Iron", "Silicon", "Oxygen", "Calcium"], answer: "Oxygen" },
    { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"], answer: "Albert Einstein" },
    { question: "What is the capital of Austria?", options: ["Vienna", "Salzburg", "Graz", "Innsbruck"], answer: "Vienna" },
    { question: "What type of galaxy is the Milky Way?", options: ["Elliptical", "Spiral", "Irregular", "Lenticular"], answer: "Spiral" },
    { question: "Who invented dynamite?", options: ["Albert Einstein", "Isaac Newton", "Alfred Nobel", "Thomas Edison"], answer: "Alfred Nobel" },
    { question: "What is the primary ingredient in vodka?", options: ["Barley", "Corn", "Potato", "Wheat"], answer: "Potato" },
    { question: "What is the name of the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Which country is famous for the maple leaf?", options: ["Canada", "USA", "Germany", "Sweden"], answer: "Canada" },
    { question: "What is the chemical symbol for lead?", options: ["Pb", "Li", "Le", "Pl"], answer: "Pb" },
    { question: "What is the only mammal capable of true flight?", options: ["Squirrel", "Bat", "Pigeon", "Eagle"], answer: "Bat" },
    { question: "What is the capital of Greece?", options: ["Athens", "Sparta", "Thessaloniki", "Corinth"], answer: "Athens" },
    { question: "Who developed the theory of evolution?", options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Galileo"], answer: "Charles Darwin" },
    { question: "What is the capital of Sweden?", options: ["Helsinki", "Stockholm", "Copenhagen", "Oslo"], answer: "Stockholm" },
    { question: "What element has the atomic number 1?", options: ["Helium", "Oxygen", "Carbon", "Hydrogen"], answer: "Hydrogen" },
    { question: "What is the capital of Thailand?", options: ["Phuket", "Bangkok", "Pattaya", "Chiang Mai"], answer: "Bangkok" },
    { question: "Who was the first person to reach the South Pole?", options: ["Robert Falcon Scott", "Roald Amundsen", "Ernest Shackleton", "James Cook"], answer: "Roald Amundsen" }
    { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: "H2O" },
    { question: "Which planet has the longest day?", options: ["Venus", "Earth", "Jupiter", "Mars"], answer: "Venus" },
    { question: "What is the largest landlocked country?", options: ["Kazakhstan", "Mongolia", "Chad", "Bolivia"], answer: "Kazakhstan" },
    { question: "Which country is known for the Eiffel Tower?", options: ["France", "Italy", "Germany", "Spain"], answer: "France" },
    { question: "What animal is known as man's best friend?", options: ["Cat", "Dog", "Parrot", "Horse"], answer: "Dog" },
    { question: "What is the primary ingredient in pasta?", options: ["Eggs", "Flour", "Butter", "Sugar"], answer: "Flour" },
    { question: "Who invented the light bulb?", options: ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Alexander Graham Bell"], answer: "Thomas Edison" },
    { question: "What is the capital of the United States?", options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"], answer: "Washington, D.C." },
    { question: "Which fruit is known for its high potassium content?", options: ["Apple", "Banana", "Orange", "Grapes"], answer: "Banana" },
    { question: "Who painted 'The Scream'?", options: ["Vincent van Gogh", "Edvard Munch", "Pablo Picasso", "Claude Monet"], answer: "Edvard Munch" },
    { question: "What is the currency of South Korea?", options: ["Yuan", "Yen", "Won", "Dollar"], answer: "Won" },
    { question: "Which country has the highest population density?", options: ["India", "China", "Monaco", "Singapore"], answer: "Monaco" },
    { question: "What is the main language spoken in Argentina?", options: ["English", "Portuguese", "French", "Spanish"], answer: "Spanish" },
    { question: "Who was the ancient Greek goddess of love?", options: ["Hera", "Aphrodite", "Athena", "Artemis"], answer: "Aphrodite" },
    { question: "What is the largest organ in the human body?", options: ["Brain", "Skin", "Heart", "Liver"], answer: "Skin" },
    { question: "What country has the most lakes?", options: ["USA", "India", "Canada", "Australia"], answer: "Canada" },
    { question: "Which element has the atomic number 6?", options: ["Carbon", "Oxygen", "Helium", "Nitrogen"], answer: "Carbon" },
    { question: "What is the capital of Egypt?", options: ["Alexandria", "Giza", "Cairo", "Luxor"], answer: "Cairo" },
    { question: "Which continent is the driest?", options: ["Asia", "Australia", "Antarctica", "Africa"], answer: "Antarctica" },
    { question: "Who is the author of 'Hamlet'?", options: ["Jane Austen", "Charles Dickens", "William Shakespeare", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What type of tree produces acorns?", options: ["Maple", "Oak", "Pine", "Cedar"], answer: "Oak" },
    { question: "What is the longest bone in the human body?", options: ["Humerus", "Femur", "Tibia", "Fibula"], answer: "Femur" },
    { question: "Which river is the longest in the world?", options: ["Amazon", "Yangtze", "Mississippi", "Nile"], answer: "Nile" },
    { question: "Who painted the Mona Lisa?", options: ["Michelangelo", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"], answer: "Leonardo da Vinci" },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
    { question: "What is the capital of South Africa?", options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"], answer: "Pretoria" },
    { question: "What element does 'N' represent on the periodic table?", options: ["Neon", "Nickel", "Nitrogen", "Nobelium"], answer: "Nitrogen" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["South Korea", "Japan", "China", "Thailand"], answer: "Japan" },
    { question: "What is the primary ingredient in hummus?", options: ["Chickpeas", "Lentils", "Beans", "Peas"], answer: "Chickpeas" },
    { question: "Which planet is known for its red color?", options: ["Jupiter", "Mars", "Mercury", "Venus"], answer: "Mars" }
];

let correctScore = 0;
let incorrectScore = 0;
let userName = "";
let usedQuestions = [];
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

// Start game by showing quiz container and prompting for name
function startGame() {
    document.getElementById("home-container").style.display = "none";
    askUserName();
    document.getElementById("quiz-container").style.display = "flex";
    loadQuestion();
}

// Function to navigate to home page
function goToHomePage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("home-container").style.display = "flex";
    resetGame();
}

// Function to prompt for user's name
function askUserName() {
    userName = prompt("Please enter your name:");
    if (!userName) {
        userName = "Anonymous";
    }
}

// Function to load a new unique question
function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");

    let randomIndex;
    let selectedQuestion;
    do {
        randomIndex = Math.floor(Math.random() * questionPool.length);
        selectedQuestion = questionPool[randomIndex];
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);

    questionContainer.innerHTML = selectedQuestion.question;
    optionsContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    selectedQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = () => checkAnswer(option, selectedQuestion.answer);
        optionsContainer.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(selectedOption, correctAnswer) {
    const resultContainer = document.getElementById("result");
    if (selectedOption === correctAnswer) {
        resultContainer.innerHTML = "<p style='color: limegreen;'>Correct!</p>";
        correctScore++;
    } else {
        resultContainer.innerHTML = "<p style='color: tomato;'>Incorrect. The correct answer is " + correctAnswer + ".</p>";
        incorrectScore++;
    }

    updateScore();

    if (incorrectScore >= 3) {
        showFinalScore();
    } else {
        setTimeout(loadQuestion, 1000);
    }
}

// Function to update the score display
function updateScore() {
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;
}

// Function to show the final score and display options to restart, add a new user, or share results
function showFinalScore() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultContainer = document.getElementById("result");
    const restartButton = document.getElementById("restart-btn");
    const newUserButton = document.getElementById("new-user-btn");
    const shareButton = document.getElementById("share-btn");

    questionContainer.innerHTML = "Game Over! You've reached the maximum of 3 incorrect answers.";
    optionsContainer.style.display = "none";
    resultContainer.innerHTML = `<p>Final Score: ${correctScore} Correct</p>`;

    restartButton.style.display = "block";
    newUserButton.style.display = "block";
    shareButton.style.display = "block";  // Show the Share Results button
    saveToLeaderboard();
    displayLeaderboard();
}

// Function to share results with both mobile and desktop compatibility
function shareResults() {
    const message = `I scored ${correctScore} points in the Knowledge Testing Game! Can you beat my score?`;
    const fullMessage = `${message} Try it here: ${window.location.href}`;

    // Check if the Web Share API is available, typically on mobile devices
    if (navigator.share) {
        navigator.share({
            title: "Knowledge Testing Game",
            text: fullMessage,
            url: window.location.href
        }).catch((error) => {
            console.error("Error sharing:", error);
            alert("Unable to share via this method. Please try using one of the other sharing options.");
            displayAlternativeShareOptions(fullMessage);  // Display fallback options if Web Share API fails
        });
    } else {
        // For unsupported browsers, copy the full message to clipboard and show additional options
        copyToClipboard(fullMessage);
        alert("Results copied to clipboard! You can paste and share it anywhere.");
        displayAlternativeShareOptions(fullMessage);
    }
}

// Helper function to copy text to clipboard
function copyToClipboard(text) {
    const shareText = document.createElement("textarea");
    shareText.value = text;
    document.body.appendChild(shareText);
    shareText.select();
    document.execCommand("copy");
    document.body.removeChild(shareText);
}

// Helper function to display alternative sharing options for unsupported devices
function displayAlternativeShareOptions(message) {
    const encodedMessage = encodeURIComponent(message);
    const smsUrl = `sms:&body=${encodedMessage}`;
    const emailUrl = `mailto:?subject=Check out my score!&body=${encodedMessage}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedMessage}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent("Knowledge Testing Game")}&summary=${encodedMessage}`;

    // Append sharing options directly in the results area
    const shareOptionsHtml = `
        <p>Or share directly:</p>
        <ul>
            <li><a href="${smsUrl}" target="_blank">Share via SMS</a></li>
            <li><a href="${emailUrl}" target="_blank">Share via Email</a></li>
            <li><a href="${twitterUrl}" target="_blank">Share on Twitter</a></li>
            <li><a href="${facebookUrl}" target="_blank">Share on Facebook</a></li>
            <li><a href="${linkedinUrl}" target="_blank">Share on LinkedIn</a></li>
        </ul>
    `;
    
    document.getElementById("result").innerHTML += shareOptionsHtml;  // Display options in the results area
}

// Function to save score to leaderboard
function saveToLeaderboard() {
    const playerScore = { name: userName, score: correctScore };
    leaderboard.push(playerScore);

    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// Function to display leaderboard
function displayLeaderboard() {
    const leaderboardDiv = document.getElementById("leaderboard");
    leaderboardDiv.innerHTML = leaderboard.map((entry, index) => `<p>${index + 1}. ${entry.name}: ${entry.score} points</p>`).join("");
}

// Function to toggle leaderboard visibility
function toggleLeaderboard() {
    displayLeaderboard();
    document.getElementById("leaderboard-container").style.display = "flex";
}

// Function to close the leaderboard
function closeLeaderboard() {
    document.getElementById("leaderboard-container").style.display = "none";
}

// Function to restart game for the same user
function restartGame() {
    correctScore = 0;
    incorrectScore = 0;
    usedQuestions = [];
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("new-user-btn").style.display = "none";
    document.getElementById("share-btn").style.display = "none";
    loadQuestion();
}

// Function to start a new game for a new user
function startNewUser() {
    correctScore = 0;
    incorrectScore = 0;
    usedQuestions = [];
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;

    askUserName();
    document.getElementById("options").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("new-user-btn").style.display = "none";
    document.getElementById("share-btn").style.display = "none";
    loadQuestion();
}

// Resets the game state when returning to the home page
function resetGame() {
    correctScore = 0;
    incorrectScore = 0;
    usedQuestions = [];
    document.getElementById("correct-score").innerText = correctScore;
    document.getElementById("incorrect-score").innerText = incorrectScore;
}

// Initialize leaderboard on page load
window.onload = () => {
    displayLeaderboard();
};
