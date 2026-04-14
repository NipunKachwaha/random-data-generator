// ── Data Pools ──────────────────────────────────────────────────────────────

const firstNames = [
  'Alice','Bob','Charlie','Diana','Edward','Fiona','George','Hannah',
  'Ivan','Julia','Kevin','Laura','Michael','Natalie','Oscar','Paula',
  'Quinn','Rachel','Samuel','Tina','Uma','Victor','Wendy','Xander',
  'Yara','Zachary','Amelia','Benjamin','Chloe','Daniel','Emma','Felix',
  'Grace','Henry','Isla','James','Kate','Liam','Mia','Noah',
  'Olivia','Peter','Rosa','Sebastian','Tara','Umar','Violet','William','Aarav', 'Advik', 'Ayaan', 'Akshara', 'Ananya', 'Arjun', 'Aditya', 'Aniket', 'Aradhya', 'Avni', 'Bhavin', 'Bharat', 'Brijesh', 'Chirag', 'Chandan', 'Chetna', 'Dev', 'Daksh', 'Darsh', 'Divya', 'Drishti', 'Dhruv', 'Ekansh', 'Eshan', 'Eshani', 'Gaurav', 'Gautam', 'Gauri', 'Garvit', 'Hardik', 'Harsh', 'Ishaan', 'Ishani', 'Ivaan', 'Jatin', 'Jiya', 'Jhanvi', 'Kabir', 'Kartik', 'Kavya', 'Kiara', 'Kairav', 'Laksh', 'Lokesh', 'Lavanya', 'Madhav', 'Manan', 'Meera', 'Myra', 'Nakul', 'Naveen', 'Navya', 'Niyati', 'Ojas', 'Om', 'Parth', 'Pranav', 'Priya', 'Pihu', 'Prisha', 'Rahul', 'Rohan', 'Riya', 'Reyansh', 'Sahil', 'Shivam', 'Saumya', 'Sana', 'Tanmay', 'Tushar', 'Tanya', 'Utkarsh', 'Uday', 'Varun', 'Vihaan', 'Vanya', 'Yash', 'Yuvraj', 'Yashvi', 'Zayn', 'Zeeshan', 'Zoya','Asher', 'Axel', 'Atlas', 'Apollo', 'Arlo', 'Archer', 'Bennett', 'Beau', 'Brooks', 'Beckham', 'Barrett', 'Callum', 'Cyrus', 'Cassian', 'Cooper', 'Colt', 'Dante', 'Dawson', 'Declan', 'Dash', 'Ezra', 'Elias', 'Enzo', 'Emmett', 'Everett', 'Finn', 'Fletcher', 'Flynn', 'Franklin', 'Griffin', 'Gideon', 'Gunner', 'Grady', 'Hudson', 'Hunter', 'Hayes', 'Holden', 'Isaac', 'Isaiah', 'Ian', 'Idris', 'Jace', 'Jasper', 'Jude', 'Jonah', 'Jett', 'Kai', 'Killian', 'Knox', 'Kieran', 'Leon', 'Luca', 'Levi', 'Lincoln', 'Lennox', 'Miles', 'Milo', 'Maverick', 'Maddox', 'Nico', 'Nash', 'Nolan', 'Niall', 'Orion', 'Otto', 'Otis', 'Parker', 'Phineas', 'Phoenix', 'Pierce', 'Roman', 'River', 'Rhett', 'Ryker', 'Silas', 'Sawyer', 'Soren', 'Theo', 'Tristan', 'Tate', 'Victor', 'Vance', 'Wyatt', 'Walker', 'Wilder', 'Xavier', 'Yosef', 'Zion', 'Zeke','Amara', 'Aisha', 'Brielle', 'Blair', 'Cleo', 'Celeste', 'Cora', 'Daisy', 'Daphne', 'Dahlia', 'Eliana', 'Eden', 'Emery', 'Eloise', 'Flora', 'Felicity', 'Freya', 'Gia', 'Gemma', 'Genevieve', 'Hazel', 'Harley', 'Haven', 'Ivy', 'Iris', 'Isla', 'Juniper', 'Josie', 'June', 'Kinsley', 'Keira', 'Kira', 'Lyra', 'Lola', 'Lana', 'Maisie', 'Margot', 'Maya', 'Nova', 'Nala', 'Noelle', 'Olive', 'Ophelia', 'Octavia', 'Poppy', 'Piper', 'Penelope', 'Quinn', 'Ruby', 'Rosalie', 'Raina', 'Sienna', 'Skye', 'Sadie', 'Stella', 'Thea', 'Tessa', 'Talia', 'Vera', 'Valerie', 'Vivian', 'Willa', 'Wren', 'Willow', 'Xena', 'Xiomara', 'Yuna', 'Yvaine', 'Zelda', 'Zinnia', 'Zuri',
]

const lastNames = [
  'Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis',
  'Rodriguez','Martinez','Hernandez','Lopez','Gonzalez','Wilson','Anderson',
  'Thomas','Taylor','Moore','Jackson','Martin','Lee','Perez','Thompson',
  'White','Harris','Sanchez','Clark','Ramirez','Lewis','Robinson',
  'Walker','Young','Allen','King','Wright','Scott','Torres','Nguyen',
  'Hill','Flores','Green','Adams','Nelson','Baker','Hall','Rivera','Sharma', 
  'Singh', 'Verma', 'Patel', 'Gupta', 'Kumar', 'Desai', 'Jain', 'Mehta', 'Bose', 
  'Das', 'Yadav', 'Rajput', 'Chauhan', 'Thakur', 'Malhotra', 'Kaur', 'Reddy', 'Nair', 
  'Pillai', 'Menon', 'Iyer', 'Rao', 'Bhat', 'Kulkarni', 'Deshmukh', 'Joshi', 'Kapur', 
  'Ahuja', 'Chawla', 'Khan', 'Syed', 'Sheikh', 'Ali', 'Ahmed', 'Mishra', 'Pandey', 'Tiwari', 
  'Dubey', 'Chaturvedi', 'Srivastava', 'Agarwal', 'Bansal', 'Garg', 'Goyal', 'Singhal', 'Mittal', 'Jindal', 'Bhardwaj', 'Kashyap', 'Chaudhary', 'Gowda', 'Shetty', 'Hegde', 'Kamath', 'Shenoy', 'Prabhu', 'Bhattacharya', 'Chatterjee', 'Banerjee', 'Mukherjee', 'Ganguly', 'Sengupta', 'Basu', 'Sen', 'Dutta', 'Nath', 'Ghosh', 'Mahajan', 'Kapoor', 'Khanna', 'Chopra', 'Suri', 'Bhasin', 'Bhatia', 'Sethi', 'Kohli', 'Chadha', 'Grover', 'Madan', 'Nanda', 'Batra', 'Tandon', 'Dixit', 'Goswami', 'Saxena', 'Mathur', 'Sinha', 'Prasad', 'Sahay', 'Bhagat', 'Tripathi', 'Upadhyay', 'Awasthi', 'Dixit', 'Bishnoi', 'Gahlot', 'Rathore', 'Shekhawat', 'Solanki', 'Bhati', 'Pawar', 'Chavan', 'Shinde', 'Jadhav', 'Gaikwad', 'Kadam', 'Kale', 'More', 'Wagh', 'Bhonsle', 'Mane', 'Shirke', 'Mahapatra', 'Panda', 'Dash', 'Mishra', 'Nayak', 'Rout', 'Sahoo', 'Swain', 'Barik', 'Behera', 'Gogoi', 'Bora', 'Saikia', 'Barua', 'Deka', 'Hazarika', 'Phukan', 'Bordoloi', 'Sarma', 'Goswami', 'Khandekar', 'Gokhale', 'Apte', 'Kelkar', 'Ranade', 'Godbole', 'Bhide', 'Karmakar', 'Biswas', 'Halder', 'Mandal', 'Sarkar', 'Mallick', 'Bhowmick', 'Talukdar', 'Chowdhury', 'Majumdar', 'Naidu', 'Chowdary', 'Goud', 'Raju', 'Varma', 'Babu', 'Murthy', 
  'Sastry', 'Ganesan', 'Rajan', 'Krishnan', 'Raman', 'Narayan', 'Venkatesh', 'Karthik', 'Srinivas', 'Balakrishnan', 'Natarajan', 'Subramanian', 'Swamy', 'Ila', 'Appa', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson', 'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennett', 'Gray', 'Mendoza', 'Ruiz', 'Hughes', 'Price', 'Alvarez', 'Castillo', 'Sanders', 'Patel', 'Myers', 'Long', 'Ross', 'Foster', 'Jimenez', 'Powell', 'Jenkins', 'Perry', 'Russell', 'Sullivan', 'Bell', 'Coleman', 'Washington', 'Butler', 'Henderson', 'Barnes', 'Gonzales', 'Fisher', 'Vasquez', 'Simmons', 'Romero', 'Jordan', 'Patterson', 'Alexander', 'Hamilton', 'Graham', 'Reynolds', 'Griffin', 'Wallace', 'Moreno', 'West', 'Cole', 
  'Hayes', 'Woods', 'Harrison', 'Gibson', 'Valdez', 'Ali', 'Weber', 'Marshall', 'Mendez', 'Herrera', 'Washington', 'Tucker', 'Black', 'Ford', 'Gordon', 'Pierce', 'Warren', 'Oliver', 'Franklin', 'Williamson', 'Vazquez', 'Dunn', 'Shaw', 'Meyer', 'Wagner', 'Soto', 'Hunter', 'Stone', 'George', 'Dixon', 'Hunt', 'Palmer', 'Robertson', 'Black', 'Holmes', 'Mills', 'Castaneda', 'Arnold', 'Harvey', 'Harper', 'Dixon', 'Ryan', 'Silva', 'Mcdonald', 'Weaver', 'Grant', 'Richards', 'Daniels', 'Tucker', 'Stephens', 'Pena', 'Riley', 'Alvarado', 'Murray', 'Hansen', 'Fernandez', 'Webb', 'Bradley', 'Payne', 'Meyer', 'Simpson', 'Tucker', 'Porter', 'Spencer', 'Hawkins', 'Gordon', 'Mccoy', 'Hicks', 'Crawford', 'Mason', 'Howell', 'Bermudez', 'Vargas', 'Rojas', 'Ochoa', 'Pacheco', 'Navarro', 'Salazar', 'Maldonado', 'Contreras', 'Macias', 'Acosta', 'Cabrera', 'Valenzuela', 'Espinoza', 'Zamora', 'Salgado', 'Cervantes', 'Bautista', 'Velazquez', 'Aguilar', 'Ponce', 'Ayala', 'Santana', 'Montoya', 'Escobar', 'Villanueva', 'Solis', 'Delgado', 'Vega', 'Rivas', 'Rosales', 'Osorio', 'Guzman', 'Camacho', 'Pineda', 'Mejia', 'Padilla', 'Cardenas', 'Franco', 'Aguirre', 'Salinas', 'Espinosa', 'Velasquez', 'Castellanos', 'Estrada', 'Carrillo', 'Cortes', 'Sosa', 'Castaneda', 'Arroyo', 'Alonso', 'Valdes', 'Fuentes', 'Lara', 
  'Avila', 'Molina', 'Brito', 'Luna', 'Vera', 'Rios', 'Guerrero', 'Mora', 'Carmona', 'Soto', 'Rey', 'Cordova', 'Cano', 'Duarte', 'Figueroa', 'Paredes', 'Gallegos', 'Leal', 'Montes', 'Arellano', 'Serrano', 'Escamilla', 'Rangel', 'Guevara', 'Trejo', 'Navarrete', 'Paz', 'Bustamante', 'Palacios', 'Olivares', 'Vidal', 'Villarreal', 'Andrade', 'Salas', 'Beltran', 'Sanches', 'Costa', 'Rocha', 'Oliveira', 'Souza', 'Almeida', 'Carvalho', 'Araujo', 'Melo', 'Barbosa', 'Lima', 'Cardoso', 'Correia', 'Teixeira', 'Cavalcanti', 'Mendes', 'Nunes', 'Pinto', 'Machado', 'Dias', 'Borges', 'Freitas', 'Fonseca', 'Vieira', 'Monteiro', 'Moura', 'Ribeiro', 'Neves', 'Tavares', 'Duarte', 'Marques', 'Lopes', 'Alves', 'Goncalves', 'Ferreira', 'Silva', 'Santos', 'Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Saito', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Yamazaki', 'Mori', 'Abe', 'Ikeda', 'Hashimoto', 'Yamashita', 'Ishikawa', 'Nakajima', 'Maeda', 'Fujita', 'Ogawa', 'Goto', 'Okada', 'Hasegawa', 'Murakami', 'Kondo', 'Ishii', 'Sakamoto', 'Endo', 'Aoki', 'Fujii', 'Nishimura', 'Fukuda', 'Miura', 'Matsuda', 'Nakano', 'Harada', 'Ono', 'Tamura', 'Takeuchi', 'Suzuki', 'Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou', 'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'Lin', 'He', 'Gao', 'Liang', 'Zheng', 'Luo', 'Song', 'Xie', 'Tang', 'Han', 'Cao', 'Xu', 'Yu', 'Hong', 'Dong', 'Yuan', 'Cai', 'Jiang', 'Jian', 'Deng', 'Bai', 'Qian', 'Peng', 'Shen', 'Lu', 'Shi', 'Ding', 'Gong', 'Nie', 'Cui', 'Su', 'Pan', 'Ge', 'Ren', 'Qiu', 'Yin', 'Zeng', 'Kang', 'Wei', 'Hou', 'Meng', 'Xiong', 'Qin', 'Gu', 'Hao', 'Kwon', 'Bae', 'Song', 'Jeon', 'Han', 'Oh', 'Seo', 'Yoon', 'Jang', 'Choi', 'Jung', 'Kang', 'Jo', 'Lim', 'Ahn', 'Shin', 'Baek', 'Heo', 'Hwang', 'Nam', 'Ryu', 'Ko', 'Moon', 'Hong', 'Sim',
]

const emailDomains = [
  'gmail.com','yahoo.com','outlook.com','icloud.com','protonmail.com',
  'fastmail.com','zoho.com','hotmail.com','mail.com','hey.com', 'gmail.com', 
  'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com', 'icloud.com', 'aol.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com', 'gmx.com', 'example.com', 'test.com', 'domain.com', 'site.com', 'website.com', 'company.com', 'business.com', 'startup.com', 'agency.com', 'studio.com', 'tech.com', 'app.com', 'software.com', 'dev.com', 'code.com', 'cloud.com', 'data.com', 'network.com', 'web.com', 'internet.com', 'media.com', 'news.com', 'blog.com', 'forum.com', 'shop.com', 'store.com', 'market.com', 'mall.com', 'retail.com', 'brand.com', 'product.com', 'service.com', 
  'support.com', 'help.com', 'info.com', 'contact.com', 'admin.com', 'user.com', 'client.com', 'customer.com', 'partner.com', 'team.com', 'group.com', 'community.com', 'social.com', 'network.com', 'connect.com', 'chat.com', 'message.com', 'video.com', 'audio.com', 'music.com', 'photo.com', 'image.com', 'design.com', 'art.com', 'creative.com', 'portfolio.com', 'gallery.com', 'studio.com', 'travel.com', 'tour.com', 'trip.com', 'holiday.com', 'vacation.com', 'hotel.com', 'flight.com', 'car.com', 'drive.com', 'ride.com', 'auto.com', 'bike.com', 'cycle.com', 'sport.com', 'game.com', 'play.com', 'fun.com', 'entertainment.com', 'movie.com', 'film.com', 'show.com', 'event.com', 'party.com', 'club.com', 'food.com', 'drink.com', 'cafe.com', 
  'restaurant.com', 'bar.com', 'kitchen.com', 'recipe.com', 'health.com', 'fitness.com', 'gym.com', 'medical.com', 'clinic.com', 'hospital.com', 'doctor.com', 'care.com', 'beauty.com', 'fashion.com', 'style.com', 'clothes.com', 'shoes.com', 'jewelry.com', 'home.com', 'house.com', 'realestate.com', 'property.com', 'rent.com', 'sale.com', 'finance.com', 'bank.com', 'money.com', 'invest.com', 'wealth.com', 'insurance.com', 'law.com', 'legal.com', 'education.com', 'school.com', 'college.com', 'university.com', 'student.com', 'teacher.com', 'learn.com', 'study.com', 'science.com', 
  'math.com', 'history.com', 'nature.com', 'earth.com', 'world.com', 'global.com', 'local.com', 'city.com', 'town.com', 'village.com', 'street.com', 'road.com', 'way.com', 'path.com', 'life.com', 'time.com', 'day.com', 'night.com', 'sun.com', 'moon.com', 'star.com', 'sky.com', 'water.com', 'fire.com', 'wind.com', 'apple.com', 'google.com', 'microsoft.com', 'amazon.com', 'facebook.com', 'twitter.com', 'instagram.com', 
  'linkedin.com', 'netflix.com', 'spotify.com', 'reddit.com', 'pinterest.com', 'tumblr.com', 'wordpress.com', 'blogger.com', 'wix.com', 'squarespace.com', 'shopify.com', 'etsy.com', 'ebay.com', 'craigslist.com', 'zillow.com', 'yelp.com', 'tripadvisor.com', 'booking.com', 'expedia.com', 'kayak.com', 'uber.com', 'lyft.com', 'airbnb.com', 'doordash.com', 'grubhub.com', 'postmates.com', 'instacart.com', 'target.com', 
  'walmart.com', 'bestbuy.com', 'homedepot.com', 'lowes.com', 'ikea.com', 'wayfair.com', 'macys.com', 'nordstrom.com', 'gap.com', 'oldnavy.com', 'nike.com', 'adidas.com', 'underarmour.com', 'puma.com', 'reebok.com', 'vans.com', 'converse.com', 'levi.com', 'zara.com', 'hm.com', 'forever21.com', 'asos.com', 'shein.com', 'sephora.com', 'ulta.com', 'rolex.com', 'cartier.com', 'tiffany.com', 'gucci.com', 'prada.com', 'louisvuitton.com', 'hermes.com', 'chanel.com', 'dior.com', 'loreal.com', 'maybelline.com', 'revlon.com', 'mac.com', 'nars.com', 'smashbox.com', 'tarte.com', 'urbandecay.com', 'nyx.com', 'benefit.com', 'clinique.com', 'estee.com', 'bobbibrown.com', 'lauramercier.com', 'toofaced.com', 'covergirl.com', 'abc.com', 'def.com', 'ghi.com', 'jkl.com', 'mno.com', 'pqr.com', 'stu.com', 'vwx.com', 'yz.com', 'one.com', 'two.com', 'three.com', 'four.com', 'five.com', 'six.com', 'seven.com', 'eight.com', 'nine.com', 'ten.com', 'alpha.com', 'beta.com', 'gamma.com', 'delta.com', 'echo.com', 'foxtrot.com', 'golf.com', 'hotel.com', 'india.com', 'juliet.com', 'kilo.com', 'lima.com', 'mike.com', 'november.com', 'oscar.com', 'papa.com', 'quebec.com', 'romeo.com', 'sierra.com', 'tango.com', 'uniform.com', 'victor.com', 'whiskey.com', 'xray.com', 'yankee.com', 'zulu.com', 'red.com', 'blue.com', 'green.com', 'yellow.com', 'orange.com', 'purple.com', 'black.com', 'white.com', 'gray.com', 'brown.com', 'pink.com', 'silver.com', 'gold.com', 'circle.com', 'square.com', 'triangle.com', 'cube.com', 'sphere.com', 'line.com', 'point.com', 'north.com', 'south.com', 'east.com', 'west.com', 'up.com', 'down.com', 'left.com', 'right.com', 'front.com', 'back.com', 'top.com', 'bottom.com', 'start.com', 'end.com', 'first.com', 'last.com', 'next.com', 'prev.com', 'new.com', 'old.com', 'good.com', 'bad.com', 'high.com', 'low.com', 'fast.com', 'slow.com', 'hot.com', 'cold.com', 'big.com', 'small.com', 'long.com', 'short.com', 'hard.com', 'soft.com', 'light.com', 'dark.com', 'true.com', 'false.com', 'yes.com', 'no.com', 'on.com', 'off.com', 'in.com', 'out.com', 'over.com', 'under.com', 'with.com', 'without.com'
]

const streetNames = [
  'Oak','Maple','Cedar','Pine','Elm','Birch','Walnut','Cherry',
  'Willow','Cypress','Magnolia','Ash','Chestnut','Poplar','Redwood', 'Main Street', 'First Street', 'Second Street', 'Third Street', 'Fourth Street', 'Fifth Street', 'Sixth Street', 'Seventh Street', 'Eighth Street', 'Ninth Street', 'Tenth Street', 'Oak Street', 'Maple Avenue', 'Pine Lane', 'Cedar Court', 'Elm Drive', 'Washington Road', 'Lakeview Drive', 'Hillcrest Avenue', 'Park Place', 'Sunset Boulevard', 'Broadway', 'Spring Street', 'High Street', 'Church Street', 'School Lane', 'Mill Road', 'River Road', 'Water Street', 'Ridge Road', 'Valley Drive', 'Forest Avenue', 'Meadow Lane', 'Willow Way', 'Cherry Street', 'Chestnut Avenue', 'Walnut Street', 'Spruce Lane', 'Birch Court', 'Ash Street', 'Hickory Drive', 'Sycamore Lane', 
  'Magnolia Boulevard', 'Cypress Court', 'Poplar Street', 'Linden Avenue', 'Dogwood Lane', 'Beech Street', 'Hawthorn Way', 'Juniper Drive', 'Locust Street', 'Mulberry Lane', 'Evergreen Terrace', 'Holly Court', 'Ivy Lane', 'Fern Way', 'Rose Street', 'Lily Lane', 'Daisy Court', 'Tulip Avenue', 'Orchid Drive', 'Violet Lane', 'Jasmine Way', 'Azalea Court', 'Lilac Lane', 'Camelia Drive', 'Lotus Street', 'Sunflower Way', 'Marigold Lane', 'Iris Court', 'Poppy Street', 'Primrose Lane', 'Bluebell Way', 'Snowdrop Court', 'Buttercup Lane', 'Foxglove Way', 'Clover Lane', 'Heather Court', 'Meadowbrook Lane', 'Clearwater Drive', 'Silver Lake Road', 'Gold Mine Trail', 'Copper Hill Road', 'Ironwood Drive', 'Stone Creek Road', 'Pebble Beach Drive', 'Sandy Lane', 'Rocky Ridge Road', 'Boulder Boulevard', 'Crystal Springs Road', 'Diamond Drive', 'Ruby Lane', 'Emerald Avenue', 'Sapphire Street', 'Pearl Court', 
  'Opal Way', 'Jade Lane', 'Amber Court', 'Coral Street', 'Aqua Way', 'Indigo Lane', 'Crimson Court', 'Scarlet Street', 'Ruby Red Lane', 'Goldenrod Way', 'Saffron Court', 'Olive Street', 'Plum Lane', 'Peach Tree Court', 'Apple Way', 'Pear Tree Lane', 'Orange Blossom Trail', 'Lemon Grove Drive', 'Grapevine Lane', 'Berry Lane', 'Cherry Blossom Way', 'Acorn Lane', 'Pinecone Court', 'Maple Leaf Drive', 'Autumn Wind Way', 'Winter Street', 'Spring Breeze Lane', 'Summer Sun Drive', 'North Street', 'South Street', 'East Street', 'West Street', 'Northeast Avenue', 'Northwest Boulevard', 'Southeast Drive', 'Southwest Lane', 'Central Avenue', 'Middle Street', 'Center Street', 'Circle Drive', 'Square Way', 'Triangle Lane', 'Corner Court', 'Cross Street', 'Short Street', 'Long Road', 'Winding Way', 'Crooked Lane', 'Straight Street', 'Narrow Lane', 'Broad Street', 'Wide Way', 'Highland Avenue', 'Lowland Lane', 'Uphill Road', 'Downhill Drive', 'Overlook Trail', 'Underwood Lane', 'Bridge Street', 'Tunnel Way', 'Ferry Road', 'Port Lane', 'Harbor Drive', 'Bay Street', 'Ocean Avenue', 'Sea Breeze Lane', 'Gulf Way', 'Coast Road', 'Shore Drive', 'Beach Road', 'Sand Dune Lane', 'Shell Way', 'Tide Court', 'Wave Lane', 'Surf Drive', 'Coral Reef Way', 'Island Road', 'Peninsula Drive', 'Cape Way', 'Point Road', 'Cove Lane', 'Inlet Drive', 'Sound Way', 'Strait Lane', 'Channel Drive', 
  'Lake Road', 'Pond Lane', 'Pool Way', 'River Street', 'Stream Lane', 'Brook Way', 'Creek Road', 'Run Lane', 'Branch Way', 'Fork Road', 'Falls Drive', 'Rapids Way', 'Cascade Lane', 'Spring Road', 'Well Lane', 'Fountain Way', 'Basin Road', 'Reservoir Lane', 'Dam Way', 'Canal Street', 'Lock Lane', 'Trench Way', 'Ditch Road', 'Moat Lane', 'Wall Street', 'Fence Way', 'Gate Road', 'Door Lane', 'Window Way', 'Roof Lane', 'Floor Way', 'Ceiling Lane', 'Attic Way', 'Cellar Lane', 'Basement Way', 'Stair Lane', 'Step Way', 'Porch Lane', 'Deck Way', 'Patio Lane', 'Balcony Way', 'Yard Lane', 'Garden Way', 'Lawn Lane', 'Field Way', 'Meadow Road', 'Pasture Lane', 'Farm Way', 'Ranch Road', 'Barn Lane', 'Silo Way', 'Tractor Road', 'Plow Lane', 'Crop Way', 'Harvest Road', 'Seed Lane', 'Plant Way', 'Flower Road', 'Weed Lane', 'Grass Way', 'Tree Road', 'Bush Lane', 'Shrub Way', 'Vine Road', 'Root Lane', 'Branch Road', 'Leaf Way', 'Trunk Road', 'Bark Lane', 'Wood Way', 'Timber Road', 'Lumber Lane', 'Board Way', 'Log Road', 'Stick Lane', 'Twig Way', 'Stone Road', 'Rock Lane', 'Pebble Way', 'Gravel Road', 'Sand Lane', 'Dirt Way', 'Mud Road', 'Clay Lane', 'Dust Way', 'Ash Road', 'Soot Lane', 'Smoke Way', 'Fire Road', 'Flame Lane', 'Spark Way', 'Heat Road', 'Cold Lane', 'Ice Way', 'Snow Road', 'Frost Lane', 'Hail Way', 'Rain Road', 'Drip Lane', 'Drop Way', 'Storm Road', 'Wind Lane', 'Breeze Way', 'Gale Road', 'Hurricane Lane', 'Tornado Way', 'Cloud Road', 'Fog Lane', 'Mist Way', 'Sky Road', 'Star Lane', 'Moon Way', 'Sun Road', 'Planet Lane', 'Space Way', 'Galaxy Road', 'Universe Lane', 'World Way', 'Earth Road', 'Mars Lane', 'Jupiter Way', 'Saturn Road', 'Venus Lane', 'Mercury Way', 'Neptune Road', 'Uranus Lane', 'Pluto Way', 'King Street', 'Queen Street', 'Prince Lane', 'Princess Way', 'Duke Road', 'Duchess Lane', 'Earl Way', 'Count Road', 'Countess Lane', 'Baron Way', 
  'Lord Road', 'Lady Lane', 'Knight Way', 'Squire Road', 'Page Lane', 'Peasant Way', 'Serf Road', 'Slave Lane', 'Master Way', 'Servant Road', 'Maid Lane', 'Butler Way', 'Cook Road', 'Chef Lane', 'Baker Way', 'Butcher Road', 'Brewer Lane', 'Farmer Way', 'Hunter Road', 'Fisher Lane', 'Miner Way', 'Smith Road', 'Carpenter Lane', 'Mason Way', 'Tailor Road', 'Weaver Lane', 'Dyer Way', 'Tanner Road', 'Potter Lane', 'Miller Way', 'Wheelwright Road', 'Cartwright Lane', 'Wagoner Way', 'Driver Road', 'Rider Lane', 'Walker Way', 'Runner Road', 'Jumper Lane', 'Swimmer Way', 'Flyer Road', 'Sailor Lane', 'Soldier Way', 'Sailor Road', 'Airman Lane', 'Marine Way', 'Guard Road', 'Police Lane', 'Sheriff Way', 'Judge Road', 'Lawyer Lane', 'Doctor Way', 'Nurse Road', 'Patient Lane', 'Hospital Way', 'Clinic Road', 'College Way', 'University Road', 'Library Lane', 'Museum Way', 'Theater Road', 'Cinema Lane', 'Park Way', 'Playground Road', 'Stadium Lane', 'Arena Way', 'Gym Road', 'Pool Lane', 'Court Way', 'Field Road', 'Track Lane', 'Course Way', 'Path Road', 'Trail Lane', 'Route Way', 'Highway', 'Freeway', 'Expressway', 'Turnpike', 'Tollway', 'Parkway', 'Boulevard', 'Avenue', 'Street', 'Road', 'Lane', 'Drive', 'Way', 'Place', 'Court', 'Circle', 'Square', 'Terrace', 'Row', 'Alley', 'Walk', 'Path', 'Trail', 'M.G. Road', 'Station Road', 'Civil Lines', 'Ring Road', 'Link Road', 'Bypass Road', 'Mall Road', 'Cantt Road', 'Sadar Bazaar', 'Fort Road', 'Palace Road', 'Temple Road', 'Ashram Road', 'Vidyapith Road', 'Gandhi Marg', 'Nehru Road', 'Bose Street', 'Shivaji Marg', 'Tagore Road', 'Ambedkar Way', 'Patel Road', 'Azad Marg', 'Bhagat Singh Road', 'Tilak Marg', 'Lajpat Rai Road', 'Rani Jhansi Road', 
  'Sarojini Naidu Marg', 'Indira Gandhi Road', 'Rajiv Gandhi Marg', 'Sardar Patel Road', 'Subhash Chandra Bose Marg', 'Vivekananda Road', 'Aurobindo Marg', 'Ramakrishna Road', 'Dayanand Saraswati Marg', 'Mirza Ghalib Street', 'Premchand Road', 'Ramanujan Marg', 'C.V. Raman Road', 'Homi Bhabha Marg', 'Vikram Sarabhai Road', 'A.P.J. Abdul Kalam Marg', 'Kalpana Chawla Road', 'Mother Teresa Marg', 'Ravi Shankar Road', 'Bismillah Khan Marg', 'M.S. Subbulakshmi Road', 'Rukmini Devi Arundale Marg', 'Amrita Sher-Gil Road', 'M.F. Husain Marg', 'R.K. Narayan Road', 'Mulk Raj Anand Marg', 'Khushwant Singh Road', 'Ruskin Bond Marg', 'Arundhati Roy Road', 'Salman Rushdie Marg', 'Vikram Seth Road', 'Jhumpa Lahiri Marg', 'Kiran Desai Road', 'Aravind Adiga Marg', 'Chetan Bhagat Road', 'Amish Tripathi Marg', 'Devdutt Pattanaik Road', 'Shashi Tharoor Marg', 'Ramachandra Guha Road', 'Amartya Sen Marg', 'Raghuram Rajan Road', 'Manmohan Singh Marg', 'Atal Bihari Vajpayee Road', 'Narendra Modi Marg', 'Amit Shah Road', 'Rajnath Singh Marg', 'Nitin Gadkari Road', 'Sushma Swaraj Marg', 'Arun Jaitley Road', 'Pranab Mukherjee Marg', 'A.P.J. Abdul Kalam Road', 'Pratibha Patil Marg', 'K.R. Narayanan Road', 'Shankar Dayal Sharma Marg', 'R. Venkataraman Road', 'Zail Singh Marg', 'Neelam Sanjiva Reddy Road', 'Fakhruddin Ali Ahmed Marg', 'V.V. Giri Road', 'Zakir Husain Marg', 'Sarvepalli Radhakrishnan Road', 'Rajendra Prasad Marg', 'Jawaharlal Nehru Road', 'Lal Bahadur Shastri Marg', 'Morarji Desai Road', 'Charan Singh Marg', 'Indira Gandhi Road', 'Rajiv Gandhi Marg', 'V.P. Singh Road', 'Chandra Shekhar Marg', 'P.V. Narasimha Rao Road', 'H.D. Deve Gowda Marg', 'I.K. Gujral Road', 'Atal Bihari Vajpayee Marg', 'Manmohan Singh Road', 'Narendra Modi Marg', 'Victoria Street', 'George Street', 'Baker Street', 'Abbey Road', 'Oxford Street', 'Regent Street', 'Bond Street', 'Piccadilly', 'Pall Mall', 'Whitehall', 'Downing Street', 'Fleet Street', 'Strand', 'Lombard Street', 'Wall Street', 'Fifth Avenue', 'Madison Avenue', 'Park Avenue', 'Lexington Avenue', 'Hollywood Boulevard', 'Rodeo Drive', 'Lombard Street', 'Bourbon Street', 'Beale Street', 'Canal Street', 'Michigan Avenue', 'Magnolia Mile', 'Ocean Drive', 'Collins Avenue', 'Las Vegas Boulevard'
]

const streetTypes = ['St','Ave','Blvd','Dr','Rd','Ln','Way','Ct','Pl','Ter', 'Alley', 'Avenue', 'Boulevard', 'Branch', 'Bridge', 'Bypass', 'Center', 'Circle', 'Close', 'Corner', 'Court', 'Cove', 'Crescent', 'Crossing', 'Drive', 'Estate', 'Expressway', 'Extension', 'Freeway', 'Gate', 'Green', 'Grove', 'Harbor', 'Heights', 'Highway', 'Hill', 'Hollow', 'Isle', 'Junction', 'Lane', 'Landing', 'Loop', 'Manor', 'Meadow', 'Mews', 'Mount', 'Park', 'Parkway', 'Pass', 'Path', 'Pike', 'Place', 'Plaza', 'Point', 'Port', 'Promenade', 'Quay', 'Ridge', 'Road', 'Route', 'Row', 'Run', 'Square', 'Station', 'Street', 'Terrace', 'Trace', 'Track', 'Trail', 'Turnpike', 'Vale', 'Valley', 'View', 'Village', 'Walk', 'Way', 'Wood']

const cities = [
  'New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia',
  'San Antonio','San Diego','Dallas','San Jose','Austin','Jacksonville',
  'Columbus','Charlotte','Indianapolis','Seattle','Denver','Nashville',
  'Portland','Las Vegas','Memphis','Louisville','Baltimore','Milwaukee',
  'Boston','Detroit','Nashville','Oklahoma City','El Paso','Tucson', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Howrah', 'Ranchi', 'Gwalior', 'Jabalpur', 'Coimbatore', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubli-Dharwad', 'Bareilly', 'Moradabad', 'Mysore', 'Gurgaon', 'Aligarh', 'Jalandhar', 'Tiruchirappalli', 'Bhubaneswar', 'Salem', 'Mira-Bhayandar', 'Warangal', 'Thiruvananthapuram', 'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati', 'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Nellore', 'Bhavnagar', 'Dehradun', 'Durgapur', 'Asansol', 'Rourkela', 'Nanded', 'Kolhapur', 'Ajmer', 'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 'Sangli', 'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli', 
  'Malegaon', 'Gaya', 'Jalgaon', 'Udaipur', 'Maheshtala', 'Davanagere', 'Kozhikode', 'Kurnool', 'Rajpur Sonarpur', 'Rajahmundry', 'Bokaro', 'South Dumdum', 'Bellary', 'Patiala', 'Gopalpur', 'Agartala', 'Bhagalpur', 'Muzaffarnagar', 'Bhatpara', 'Panihati', 'Latur', 'Dhule', 'Tirupati', 'Rohtak', 'Korba', 'Bhilwara', 'Berhampur', 'Muzaffarpur', 'Ahmednagar', 'Mathura', 'Kollam', 'Avadi', 'Kadapa', 'Kamarhati', 'Sambalpur', 'Bilaspur', 'Shahjahanpur', 'Satara', 'Bijapur', 'Rampur', 'Shivamogga', 'Chandrapur', 'Junagadh', 'Thrissur', 'Alwar', 'Bardhaman', 'Kulti', 'Kakinada', 'Nizamabad', 'Parbhani', 'Tumkur', 'Khammam', 'Ozhukarai', 'Bihar Sharif', 'Panipat', 'Darbhanga', 'Bally', 'Aizawl', 'Dewas', 'Ichalkaranji', 'Karnal', 'Bathinda', 'Jalna', 'Eluru', 'Barasat', 'Purnia', 'Satna', 'Mau', 'Sonipat', 'Farrukhabad', 'Sagar', 'Durg', 'Imphal', 'Ratlam', 'Hapur', 'Arrah', 'Karimnagar', 'Anantapur', 'Etawah', 'Ambernath', 'North Dumdum', 'Bharatpur', 'Begusarai', 'New Delhi', 'Gandhidham', 'Baranagar', 'Tiruvottiyur', 'Puducherry', 'Sikar', 'Thoothukudi', 'Rewa', 'Mirzapur', 'Raichur', 'Pali', 'Ramagundam', 'Haridwar', 'Vijayanagaram', 'Katihar', 'Nagarcoil', 'Sri Ganganagar', 'Mango', 'Thanjavur', 'Bulandshahr', 'Uluberia', 'Murwara', 'Sambhal', 'Singrauli', 'Nadiad', 'Secunderabad', 'Naihati', 'Yamunanagar', 'Bidhannagar', 'Pallavaram', 'Bidar', 'Munger', 'Panchkula', 'Burhanpur', 'Kharagpur', 'Dindigul', 'Gandhinagar', 'Hospet', 'Malda', 'Ongole', 'Deoghar', 'Chapra', 'Haldia', 'Khandwa', 'Nandyal', 'Chittoor', 'Morena', 'Amroha', 'Anand', 'Bhind', 'Madhyamgram', 'Bhiwani', 'Baharampur', 'Ambala', 'Morvi', 'Fatehpur', 'Rae Bareli', 'Khora', 'Bhusawal', 'Orai', 'Bahraich', 'Vellore', 'Mahesana', 'Raiganj', 'Sirsa', 'Danapur', 'Serampore', 'Guna', 'Jaunpur', 'Panvel', 'Shivpuri', 'Unnao', 'Chinsurah', 'Alappuzha', 'Kottayam', 'Machilipatnam', 'Shimla', 'Adoni', 'Udupi', 'Tenali', 'Proddatur', 'Saharsa', 'Hindupur', 'Sasaram', 'Hajipur', 'Bhimavaram', 'Kumbakonam', 'Bongaigaon', 
  'Dehri', 'Madanapalle', 'Siwan', 'Bettiah', 'Guntakal', 'Srikakulam', 'Motihari', 'Dharmavaram', 'Gudivada', 'Narasaraopet', 'Baghpat', 'Hardoi', 'Basti', 'Chandausi', 'Gonda', 'Sitapur', 'Ghazipur', 'Shamli', 'Hathras', 'Banda', 'Pilibhit', 'Barabanki', 'Lakhimpur', 'Mainpuri', 'Lalitpur', 'Etah', 'Deoria', 'New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Los Angeles', 'Chicago', 'Toronto', 'Berlin', 'Madrid', 'Rome', 'Dubai', 'Singapore', 'Hong Kong', 'Beijing', 'Shanghai', 'Seoul', 'Moscow', 'Istanbul', 'Bangkok', 'Sao Paulo', 'Buenos Aires', 'Mexico City', 'Cairo', 'Johannesburg', 'Cape Town', 'Amsterdam', 'Vienna', 'Prague', 'Budapest', 'Warsaw', 'Stockholm', 'Oslo', 'Copenhagen', 'Helsinki', 'Athens', 'Dublin', 'Lisbon', 'Brussels', 'Zurich', 'Geneva', 'Munich', 'Frankfurt', 'Hamburg', 'Milan', 'Naples', 'Venice', 'Florence', 'Barcelona', 'Valencia', 'Seville', 'Rotterdam', 'The Hague', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Auckland', 'Wellington', 'Christchurch', 'Manila', 'Jakarta', 'Kuala Lumpur', 'Ho Chi Minh City', 'Hanoi', 'Taipei', 'Osaka', 'Kyoto', 'Yokohama', 'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Abu Dhabi', 'Doha', 'Kuwait City', 'Manama', 'Muscat', 'Tehran', 'Baghdad', 'Damascus', 'Beirut', 'Amman', 'Jerusalem', 'Tel Aviv', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Bogota', 'Medellin', 'Cali', 'Lima', 'Santiago', 'Caracas', 'Quito', 'Guayaquil', 'La Paz', 'Asuncion', 'Montevideo', 'Lagos', 'Abuja', 'Nairobi', 'Mombasa', 'Accra', 'Dakar', 'Addis Ababa', 'Casablanca', 'Marrakesh', 'Algiers', 'Tunis', 'Kinshasa', 'Luanda', 'Dar es Salaam', 'Kampala', 'Harare', 'Lusaka', 'Gaborone', 'Windhoek', 'Maputo', 'Port Louis', 'Antananarivo', 'Suva', 'Port Moresby', 'Noumea', 'Papeete', 'Honolulu', 'Anchorage', 'Juneau', 'Fairbanks', 'Seattle', 'Portland', 'San Francisco', 'San Diego', 'Las Vegas', 'Phoenix', 'Denver', 'Salt Lake City', 'Dallas', 'Houston', 'Austin', 'San Antonio', 'Miami', 'Orlando', 'Tampa', 'Atlanta', 'Charlotte', 'Raleigh', 'Washington', 'Philadelphia', 'Boston', 'Baltimore', 'Pittsburgh', 'Cleveland', 'Cincinnati', 'Detroit', 'Minneapolis', 'St. Louis', 'Kansas City', 'New Orleans', 'Memphis', 'Nashville', 'Louisville', 'Indianapolis', 'Milwaukee', 'Omaha', 'Oklahoma City'
]

const usStates = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'AP', 'AR', 'AS', 'BR', 'CG', 'GA', 'GJ', 'HR', 'HP', 'JH', 
  'KA', 'KL', 'MP', 'MH', 'MN', 'ML', 'MZ', 'NL', 'OD', 'PB', 
  'RJ', 'SK', 'TN', 'TG', 'TR', 'UP', 'UK', 'WB', 'AN', 'CH', 
  'DH', 'DL', 'JK', 'LA', 'LD', 'PY', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry', 'US', 'CA', 'GB', 'AU', 'IN', 'DE', 'FR', 'IT', 'ES', 'JP',
  'CN', 'BR', 'MX', 'RU', 'ZA', 'KR', 'NL', 'SE', 'CH', 'SG',
  'AE', 'SA', 'AR', 'NZ', 'IE', 'NO', 'DK', 'FI', 'BE', 'AT',
  'PT', 'GR', 'TR', 'PL', 'IL', 'TH', 'MY', 'ID', 'PH', 'VN',
  'EG', 'NG', 'KE', 'CO', 'CL', 'PE', 'VE', 'PK', 'BD', 'LK'
]

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Côte d\'Ivoire', 
  'Cabo Verde',
  'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia', 'Fiji', 'Finland',
  'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
  'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
  'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
  'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
  'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia',
  'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
  'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
  'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
  'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
  'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]

const companies = [
  'Umbrella Corporation', 'LexCorp', 'Omni Consumer Products', 'Weyland-Yutani', 'Buy n Large', 
  'Soylent Corporation', 'Aperture Science', 'Black Mesa', 'Abstergo Industries', 'InGen', 
  'Tricell', 'Aerith', 'Rapture Records', 'Spacely Sprockets', 'Cogswell Cogs', 'Oceanic Airlines', 
  'Los Pollos Hermanos', 'Goliath National Bank', 'MacMillan Toys', 'Vault-Tec', 'Slurm', 'MomCorp', 
  'Shinra Electric Power Company', 'Capsule Corp', 'Virtucon', 'Skynet', 'Arasaka', 'Militech',
  'Apex Solutions', 'Quantum Technologies', 'Nexus Group', 'Zenith Dynamics', 'Horizon Systems', 
  'Nova Corp', 'Summit Enterprises', 'Pinnacle Holdings', 'Vertex Partners', 'Prime Associates', 
  'Core Industries', 'Optima Labs', 'Maxima Studios', 'Ultra Media', 'Mega Networks', 'Giga Global', 
  'Tera International', 'Cyber Corp', 'Techno Inc', 'Bio LLC', 'Eco Ltd', 'Green Solutions', 
  'Blue Technologies', 'Red Systems', 'Silver Dynamics', 'Gold Enterprises', 'Iron Group', 
  'Steel Holdings', 'Stone Partners', 'River Associates', 'Ocean Industries', 'Sky Labs', 
  'Star Studios', 'Sun Media', 'Moon Networks', 'Galaxy Global', 'Cosmic International', 'Astro Corp', 
  'Aero Inc', 'Marine LLC', 'Terra Ltd', 'Geo Solutions', 'Alpha Technologies', 'Beta Systems', 
  'Delta Dynamics', 'Omega Enterprises', 'Sigma Group', 'Titan Holdings', 'Atlas Partners', 
  'Apollo Associates', 'Athena Industries', 'Ares Labs', 'Zeus Studios', 'Hera Media', 
  'Poseidon Networks', 'Hades Global', 'Hermes International', 'Vulcan Corp', 'Mars Inc', 
  'Jupiter LLC', 'Saturn Ltd', 'Neptune Solutions', 'Pluto Technologies', 'Venus Systems', 
  'Mercury Dynamics', 'Odin Enterprises', 'Thor Group', 'Loki Holdings', 'Freya Partners', 
  'Global Tech', 'Advanced Solutions', 'Future Dynamics', 'Pioneer Group', 'Vanguard Industries', 
  'Frontier Corp', 'Visionary Partners', 'Innovate LLC', 'Synergy Systems', 'NextGen Technologies', 
  'Blue Ocean Enterprises', 'Silver Lining Holdings', 'Golden Rule Associates', 'Ironclad Labs', 
  'Steadfast Studios', 'Reliant Media', 'Trustworthy Networks', 'Dependable Global', 'Solid International', 
  'Secure Corp', 'Safe Inc', 'Shield LLC', 'Guard Ltd', 'Defend Solutions', 'Protect Technologies', 
  'Fortress Systems', 'Citadel Dynamics', 'Castle Enterprises', 'Tower Group', 'Bridge Holdings', 
  'Wall Partners', 'Gate Associates', 'Door Industries', 'Window Labs', 'Roof Studios', 
  'Floor Media', 'Foundation Networks', 'Base Global', 'Root International', 'Stem Corp', 
  'Branch Inc', 'Leaf LLC', 'Flower Ltd', 'Fruit Solutions', 'Seed Technologies', 'Tree Systems', 
  'Forest Dynamics', 'Wood Enterprises', 'Timber Group', 'Lumber Holdings', 'Board Partners', 
  'Plank Associates', 'Beam Industries', 'Pole Labs', 'Post Studios', 'Column Media', 
  'Pillar Networks', 'Arch Global', 'Dome International', 'Vault Corp', 'Tunnel Inc', 'Cave LLC', 
  'Mine Ltd', 'Quarry Solutions', 'Pit Technologies', 'Hole Systems', 'Trench Dynamics', 
  'Ditch Enterprises', 'Canal Group', 'River Holdings', 'Stream Partners', 'Brook Associates', 
  'Creek Industries', 'Lake Labs', 'Pond Studios', 'Pool Media', 'Sea Networks', 'Ocean Global', 
  'Gulf International', 'Bay Corp', 'Cove Inc', 'Inlet LLC', 'Harbor Ltd', 'Port Solutions', 
  'Dock Technologies', 'Pier Systems', 'Wharf Dynamics', 'Quay Enterprises', 'Marina Group', 
  'Fleet Holdings', 'Ship Partners', 'Boat Associates', 'Vessel Industries', 'Craft Labs', 
  'Sail Studios', 'Mast Media', 'Rig Networks', 'Anchor Global', 'Chain International', 'Rope Corp', 
  'Line Inc', 'Wire LLC', 'Cable Ltd', 'Thread Solutions', 'String Technologies', 'Yarn Systems', 
  'Fabric Dynamics', 'Cloth Enterprises', 'Textile Group', 'Garment Holdings', 'Apparel Partners', 
  'Clothing Associates', 'Shoe Industries', 'Boot Labs', 'Hat Studios', 'Cap Media', 'Glove Networks', 
  'Sock Global', 'Shirt International', 'Pant Corp', 'Coat Inc', 'Jacket LLC', 'Dress Ltd', 
  'Skirt Solutions', 'Suit Technologies', 'Tie Systems', 'Belt Dynamics', 'Ring Enterprises', 
  'Watch Group', 'Clock Holdings', 'Time Partners', 'Hour Associates', 'Minute Industries', 
  'Second Labs', 'Day Studios', 'Week Media', 'Month Networks', 'Year Global', 'Decade International', 
  'Century Corp', 'Millennium Inc', 'Era LLC', 'Epoch Ltd', 'Age Solutions', 'Period Technologies', 
  'Phase Systems', 'Stage Dynamics', 'Step Enterprises', 'Level Group', 'Degree Holdings', 
  'Grade Partners', 'Mark Associates', 'Score Industries', 'Point Labs', 'Line Studios', 
  'Plane Media', 'Space Networks', 'Volume Global', 'Area International', 'Length Corp', 
  'Width Inc', 'Height LLC', 'Depth Ltd', 'Weight Solutions', 'Mass Technologies', 'Force Systems', 
  'Energy Dynamics', 'Power Enterprises', 'Work Group', 'Heat Holdings', 'Light Partners', 
  'Sound Associates', 'Color Industries', 'Shape Labs', 'Form Studios', 'Size Media', 
  'Scale Networks', 'Measure Global', 'Rule International', 'Focus Group', 'Vision Corp',
  'Optics Inc', 'Lens LLC', 'Sight Ltd', 'View Solutions', 'Look Technologies', 'Watch Systems', 
  'See Dynamics', 'Observe Enterprises', 'Monitor Group', 'Track Holdings', 'Trace Partners', 
  'Find Associates', 'Search Industries', 'Seek Labs', 'Hunt Studios', 'Catch Media', 'Grab Networks', 
  'Hold Global', 'Keep International', 'Save Corp', 'Store Inc', 'Stock LLC', 'Bank Ltd', 
  'Fund Solutions', 'Cash Technologies', 'Coin Systems', 'Money Dynamics', 'Wealth Enterprises', 
  'Rich Group', 'Poor Holdings', 'Debt Partners', 'Loan Associates', 'Credit Industries', 
  'Debit Labs', 'Pay Studios', 'Buy Media', 'Sell Networks', 'Trade Global', 'Market International', 
  'Shop Corp', 'Store Inc', 'Mall LLC', 'Mart Ltd', 'Cart Solutions', 'Bag Technologies', 
  'Box Systems', 'Pack Dynamics', 'Wrap Enterprises', 'Ship Group', 'Send Holdings', 
  'Mail Partners', 'Post Associates', 'Letter Industries', 'Note Labs', 'Card Studios', 
  'Paper Media', 'Book Networks', 'Read Global', 'Write International', 'Pen Corp', 'Pencil Inc', 
  'Ink LLC', 'Draw Ltd', 'Paint Solutions', 'Art Technologies', 'Craft Systems', 'Design Dynamics', 
  'Build Enterprises', 'Make Group', 'Create Holdings', 'Form Partners', 'Shape Associates', 
  'Model Industries', 'Plan Labs', 'Map Studios', 'Chart Media', 'Graph Networks', 'Data Global', 
  'Info International', 'Fact Corp', 'Truth Inc', 'Real LLC', 'True Ltd', 'Sure Solutions', 
  'Certain Technologies', 'Clear Systems', 'Pure Dynamics', 'Clean Enterprises', 'Fresh Group', 
  'New Holdings', 'Old Partners', 'Young Associates', 'Senior Industries', 'Junior Labs', 
  'Major Studios', 'Minor Media', 'Big Networks', 'Small Global', 'Huge International', 'Tiny Corp', 
  'Micro Inc', 'Macro LLC', 'Mini Ltd', 'Giant Solutions', 'Dwarf Technologies', 'Elf Systems', 
  'Fairy Dynamics', 'Magic Enterprises', 'Spell Group', 'Charm Holdings', 'Trick Partners', 
  'Joke Associates', 'Laugh Industries', 'Smile Labs', 'Happy Studios', 'Joy Media', 'Glad Networks', 
  'Sad Global', 'Cry International', 'Tear Corp', 'Drop Inc', 'Fall LLC', 'Rise Ltd', 
  'Jump Solutions', 'Leap Technologies', 'Run Systems', 'Walk Dynamics', 'Step Enterprises', 
  'Move Group', 'Stop Holdings', 'Go Partners', 'Come Associates', 'Leave Industries', 
  'Stay Labs', 'Wait Studios', 'Hurry Media', 'Fast Networks', 'Slow Global', 'Quick International', 
  'Speed Corp', 'Pace Inc', 'Rate LLC', 'Time Ltd', 'Clock Solutions', 'Watch Technologies', 
  'Hour Systems', 'Minute Dynamics', 'Second Enterprises', 'Day Group', 'Night Holdings', 
  'Morning Partners', 'Evening Associates', 'Sun Industries', 'Moon Labs', 'Star Studios', 
  'Sky Media', 'Cloud Networks', 'Rain Global', 'Snow International', 'Wind Corp', 'Storm Inc', 
  'Ice LLC', 'Fire Ltd', 'Heat Solutions', 'Cold Technologies', 'Warm Systems', 'Cool Dynamics', 
  'Freeze Enterprises', 'Melt Group', 'Boil Holdings', 'Burn Partners', 'Cook Associates', 
  'Bake Industries', 'Fry Labs', 'Grill Studios', 'Roast Media', 'Toast Networks', 'Food Global', 
  'Drink International', 'Water Corp', 'Milk Inc', 'Juice LLC', 'Tea Ltd', 'Coffee Solutions', 
  'Wine Technologies', 'Beer Systems', 'Soda Dynamics', 'Pop Enterprises', 'Ice Group', 
  'Cream Holdings', 'Cake Partners', 'Pie Associates', 'Sweet Industries', 'Sour Labs', 
  'Bitter Studios', 'Salty Media', 'Spicy Networks', 'Hot Global', 'Mild International'
]

const jobTitles = [
  'Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist', 'DevOps Engineer', 
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Machine Learning Engineer', 
  'QA Engineer', 'Security Engineer', 'Cloud Architect', 'CTO', 'VP of Engineering', 
  'Marketing Manager', 'Sales Executive', 'Financial Analyst', 'Business Analyst', 
  'Project Manager', 'Scrum Master', 'UI Designer', 'Graphic Designer', 'Art Director', 
  'Creative Director', 'Motion Graphics Designer', '3D Animator', 'Video Editor', 
  'Industrial Designer', 'Account Manager', 'Business Development Representative', 
  'SEO Specialist', 'Content Strategist', 'Copywriter', 'Social Media Manager', 'HR Manager', 
  'Recruiter', 'Talent Acquisition Specialist', 'Accountant', 'Chief Financial Officer', 
  'Chief Executive Officer', 'Chief Operating Officer', 'Chief Information Officer', 
  'Systems Administrator', 'Network Engineer', 'Database Administrator', 'Automation Tester', 
  'Agile Coach', 'Release Manager', 'Data Analyst', 'Data Engineer', 'AI Researcher', 
  'Computer Vision Engineer', 'NLP Engineer', 'Blockchain Developer', 'Smart Contract Developer', 
  'Game Developer', 'Level Designer', 'Technical Artist', 'Sound Designer', 'Music Producer', 
  'Audio Engineer', 'Broadcasting Technician', 'Journalist', 'Editor', 'Proofreader', 
  'Technical Writer', 'Grant Writer', 'Public Relations Specialist', 'Event Planner', 
  'Communications Director', 'Brand Manager', 'Media Buyer', 'Market Research Analyst', 
  'Sales Manager', 'Regional Sales Director', 'Customer Success Manager', 'Support Specialist', 
  'Help Desk Technician', 'IT Manager', 'Network Administrator', 'Systems Analyst', 
  'Business Intelligence Analyst', 'Operations Manager', 'Supply Chain Manager', 
  'Logistics Coordinator', 'Procurement Officer', 'Inventory Manager', 'Warehouse Manager', 
  'Fleet Manager', 'Truck Driver', 'Delivery Driver', 'Pilot', 'Flight Attendant', 
  'Air Traffic Controller', 'Ship Captain', 'Marine Engineer', 'Train Conductor', 
  'Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Chemical Engineer', 
  'Aerospace Engineer', 'Biomedical Engineer', 'Environmental Engineer', 'Petroleum Engineer', 
  'Nuclear Engineer', 'Industrial Engineer', 'Manufacturing Engineer', 'Quality Control Inspector', 
  'Architect', 'Urban Planner', 'Surveyor', 'Construction Manager', 'Carpenter', 'Electrician', 
  'Plumber', 'Welder', 'Mason', 'Painter', 'HVAC Technician', 'Heavy Equipment Operator', 
  'Roofing Contractor', 'Landscaper', 'Groundskeeper', 'Farmer', 'Agricultural Engineer', 
  'Agronomist', 'Veterinarian', 'Veterinary Technician', 'Zoologist', 'Marine Biologist', 
  'Wildlife Biologist', 'Park Ranger', 'Forester', 'Environmental Scientist', 'Geologist', 
  'Meteorologist', 'Astronomer', 'Physicist', 'Chemist', 'Biologist', 'Research Scientist', 
  'Lab Technician', 'Clinical Research Coordinator', 'Pharmacist', 'Pharmacy Technician', 
  'Registered Nurse', 'Nurse Practitioner', 'Physician Assistant', 'Doctor', 'Surgeon', 
  'Anesthesiologist', 'Cardiologist', 'Dermatologist', 'Neurologist', 'Oncologist', 
  'Pediatrician', 'Psychiatrist', 'Psychologist', 'Counselor', 'Therapist', 'Physical Therapist', 
  'Occupational Therapist', 'Speech-Language Pathologist', 'Respiratory Therapist', 
  'Radiologic Technologist', 'Ultrasound Technician', 'Medical Assistant', 'Dental Hygienist', 
  'Dentist', 'Orthodontist', 'Optometrist', 'Ophthalmologist', 'Chiropractor', 'Massage Therapist', 
  'Personal Trainer', 'Fitness Instructor', 'Dietitian', 'Nutritionist', 'Chef', 'Sous Chef', 
  'Line Cook', 'Pastry Chef', 'Baker', 'Bartender', 'Barista', 'Server', 'Hostess', 
  'Restaurant Manager', 'Hotel Manager', 'Concierge', 'Front Desk Agent', 'Housekeeper', 
  'Travel Agent', 'Tour Guide', 'Museum Curator', 'Librarian', 'Archivist', 'Teacher', 
  'Professor', 'Lecturer', 'Adjunct Instructor', 'Special Education Teacher', 'Tutor', 
  'Principal', 'School Counselor', 'Academic Advisor', 'Instructional Designer', 
  'Curriculum Developer', 'Corporate Trainer', 'Lawyer', 'Attorney', 'Paralegal', 
  'Legal Assistant', 'Judge', 'Court Reporter', 'Mediator', 'Compliance Officer', 
  'Risk Manager', 'Insurance Agent', 'Claims Adjuster', 'Underwriter', 'Actuary', 
  'Real Estate Agent', 'Real Estate Broker', 'Property Manager', 'Appraiser', 'Mortgage Broker', 
  'Loan Officer', 'Bank Teller', 'Investment Banker', 'Portfolio Manager', 'Wealth Advisor', 
  'Stockbroker', 'Economist', 'Auditor', 'Tax Preparer', 'Bookkeeper', 'Payroll Clerk', 
  'Administrative Assistant', 'Executive Assistant', 'Office Manager', 'Receptionist', 
  'Data Entry Clerk', 'Customer Service Representative', 'Retail Sales Associate', 
  'Store Manager', 'Merchandiser', 'Buyer', 'Visual Merchandiser', 'E-commerce Manager', 
  'Supply Chain Analyst', 'Operations Analyst', 'Business Strategy Consultant', 
  'Management Consultant', 'HR Generalist', 'Compensation and Benefits Manager', 
  'Training and Development Manager', 'Employee Relations Specialist', 'Chief Human Resources Officer', 
  'Chief Marketing Officer', 'Chief Product Officer', 'Chief Revenue Officer', 'Chief Data Officer', 
  'VP of Sales', 'VP of Marketing', 'VP of Product', 'VP of Design', 'VP of Operations', 
  'VP of Finance', 'VP of Human Resources', 'Director of Engineering', 'Director of Marketing', 
  'Director of Sales', 'Director of Product', 'Director of Design', 'Director of Operations', 
  'Director of Finance', 'Director of Human Resources', 'Engineering Manager', 'Design Manager', 
  'Marketing Director', 'Sales Director', 'Product Director', 'Creative Lead', 'Tech Lead', 
  'Principal Engineer', 'Staff Engineer', 'Senior Software Engineer', 'Junior Software Engineer', 
  'Entry Level Developer', 'Intern', 'Apprentice', 'Freelancer', 'Consultant', 'Contractor', 
  'Founder', 'Co-Founder', 'Entrepreneur', 'Investor', 'Venture Capitalist', 'Angel Investor', 
  'Board Member', 'Chairman', 'President', 'Vice President', 'General Manager', 'Managing Director', 
  'Partner', 'Principal', 'Associate', 'Analyst', 'Specialist', 'Coordinator', 'Administrator', 
  'Clerk', 'Assistant', 'Technician', 'Operator', 'Worker', 'Laborer', 'Craftsman', 'Artisan', 
  'Police Officer', 'Detective', 'Sheriff', 'State Trooper', 'FBI Agent', 'CIA Analyst', 
  'Secret Service Agent', 'Border Patrol Agent', 'Customs Officer', 'Correctional Officer', 
  'Probation Officer', 'Firefighter', 'Paramedic', 'EMT', 'Dispatcher', 'Military Officer', 
  'Soldier', 'Sailor', 'Airman', 'Marine', 'Coast Guard', 'Security Guard', 'Bouncer', 
  'Private Investigator', 'Locksmith', 'Dog Trainer', 'Pet Groomer', 'Zookeeper', 
  'Florist', 'Jeweler', 'Tailor', 'Seamstress', 'Cobbler', 'Blacksmith', 'Potter', 
  'Glassblower', 'Woodworker', 'Furniture Maker', 'Upholsterer', 'Piano Tuner', 
  'Luthier', 'Sound Engineer', 'Lighting Designer', 'Set Designer', 'Costume Designer', 
  'Makeup Artist', 'Hair Stylist', 'Barber', 'Esthetician', 'Nail Technician', 
  'Tattoo Artist', 'Piercer', 'Photographer', 'Videographer', 'Cinematographer', 
  'Director', 'Producer', 'Actor', 'Voice Actor', 'Model', 'Dancer', 'Choreographer', 
  'Musician', 'Singer', 'Composer', 'Conductor', 'Writer', 'Author', 'Poet', 'Novelist', 
  'Playwright', 'Screenwriter', 'Blogger', 'Vlogger', 'Podcaster', 'Influencer', 
  'Streamer', 'Pro Gamer', 'Esports Coach', 'Sports Coach', 'Referee', 'Umpire', 
  'Athlete', 'Fitness Model', 'Yoga Instructor', 'Pilates Instructor', 'Martial Arts Instructor', 
  'Swim Instructor', 'Lifeguard', 'Ski Instructor', 'Snowboard Instructor', 'Scuba Instructor', 
  'Flight Instructor', 'Driving Instructor', 'Translator', 'Interpreter', 'Linguist', 
  'Diplomat', 'Politician', 'Mayor', 'Governor', 'Senator', 'Representative', 'Lobbyist', 
  'Campaign Manager', 'Political Analyst', 'Community Organizer', 'Social Worker', 
  'Case Manager', 'Substance Abuse Counselor', 'Marriage and Family Therapist', 
  'Clergy', 'Pastor', 'Priest', 'Rabbi', 'Imam', 'Chaplain', 'Funeral Director', 
  'Embalmer', 'Crematory Operator', 'Cemetery Worker', 'Sanitation Worker', 
  'Garbage Collector', 'Recycling Coordinator', 'Water Treatment Operator', 
  'Power Plant Operator', 'Solar Panel Installer', 'Wind Turbine Technician', 
  'Elevator Mechanic', 'Escalator Installer', 'Boilermaker', 'Millwright', 'Rigger', 
  'Ironworker', 'Glazier', 'Tile Setter', 'Floor Layer', 'Carpet Installer', 
  'Drywall Installer', 'Plasterer', 'Insulation Worker', 'Painter and Decorator', 
  'Pipelayer', 'Pipefitter', 'Steamfitter', 'Sheet Metal Worker', 'Tool and Die Maker', 
  'Machinist', 'CNC Operator', 'Welding Inspector', 'Nondestructive Testing Specialist', 
  'Quality Assurance Manager', 'Regulatory Affairs Specialist', 'Clinical Data Manager', 
  'Biostatistician', 'Epidemiologist', 'Public Health Educator', 'Health Services Manager', 
  'Medical Records Technician', 'Medical Biller', 'Medical Coder', 'Phlebotomist', 
  'EKG Technician', 'EEG Technician', 'Surgical Technologist', 'Dialysis Technician', 
  'Prosthetist', 'Orthotist', 'Audiologist', 'Optician', 'Dispensing Optician', 
  'Ophthalmic Technician', 'Veterinary Assistant', 'Animal Control Officer', 
  'Animal Shelter Worker', 'Pet Sitter', 'Dog Walker', 'Farrier', 'Jockey', 'Stable Hand'
]

const tlds = [
  '.com', '.org', '.net', '.edu', '.gov', '.mil', '.int', '.co', '.io', '.dev',
  '.app', '.tech', '.ai', '.xyz', '.me', '.tv', '.shop', '.store', '.online', '.site',
  '.website', '.space', '.info', '.biz', '.name', '.pro', '.museum', '.aero', '.jobs', '.mobi',
  '.asia', '.cat', '.tel', '.travel', '.xxx', '.post', '.bank', '.insurance', '.law', '.med',
  '.art', '.design', '.photo', '.photography', '.media', '.news', '.blog', '.video', '.music', '.film',
  '.game', '.play', '.fun', '.club', '.party', '.events', '.tickets', '.agency', '.studio', '.center',
  '.group', '.team', '.network', '.global', '.world', '.earth', '.city', '.town', '.vip', '.pro',
  '.expert', '.guru', '.ninja', '.wtf', '.lol', '.cool', '.hot', '.new', '.sale', '.promo',
  '.free', '.deals', '.discount', '.gifts', '.toys', '.cars', '.auto', '.bike', '.boat', '.flight',
  '.tours', '.holiday', '.vacation', '.rentals', '.properties', '.homes', '.house', '.realestate', '.build', '.construction',
  '.cleaning', '.services', '.repair', '.plumbing', '.electrical', '.contractors', '.landscaping', '.delivery', '.shipping', '.logistics',
  '.supply', '.trade', '.import', '.export', '.market', '.finance', '.money', '.cash', '.credit', '.loans',
  '.mortgage', '.invest', '.fund', '.capital', '.ventures', '.partners', '.associates', '.consulting', '.management', '.solutions',
  '.systems', '.software', '.digital', '.cloud', '.data', '.analytics', '.host', '.server', '.network', '.security',
  '.protect', '.safe', '.health', '.care', '.clinic', '.hospital', '.doctor', '.dentist', '.pharmacy', '.fit',
  '.fitness', '.gym', '.yoga', '.diet', '.organic', '.green', '.eco', '.bio', '.farm', '.food',
  '.menu', '.recipe', '.pizza', '.coffee', '.cafe', '.restaurant', '.bar', '.pub', '.beer', '.wine',
  '.fashion', '.style', '.clothing', '.shoes', '.jewelry', '.boutique', '.beauty', '.salon', '.spa', '.hair',
  '.makeup', '.wedding', '.dating', '.love', '.family', '.kids', '.baby', '.mom', '.dad', '.pet',
  '.dog', '.cat', '.vet', '.school', '.college', '.university', '.academy', '.institute', '.education', '.study',
  '.learn', '.training', '.classes', '.courses', '.science', '.math', '.engineering', '.history', '.art', '.law',
  '.police', '.fire', '.rescue', '.army', '.navy', '.airforce', '.church', '.faith', '.islam', '.kosher',
  '.us', '.uk', '.ca', '.au', '.in', '.de', '.fr', '.it', '.es', '.jp',
  '.cn', '.br', '.ru', '.za', '.mx', '.kr', '.nl', '.se', '.ch', '.sg',
  '.ae', '.sa', '.ar', '.nz', '.ie', '.no', '.dk', '.fi', '.be', '.at',
  '.pt', '.gr', '.tr', '.pl', '.il', '.th', '.my', '.id', '.ph', '.vn',
  '.eg', '.ng', '.ke', '.co', '.cl', '.pe', '.ve', '.pk', '.bd', '.lk',
  '.hk', '.tw', '.mo', '.my', '.sg', '.id', '.ph', '.th', '.vn', '.kh',
  '.mm', '.la', '.bn', '.tl', '.kp', '.mn', '.kz', '.uz', '.tm', '.kg',
  '.tj', '.af', '.ir', '.iq', '.sy', '.lb', '.jo', '.il', '.ps', '.kw',
  '.bh', '.qa', '.om', '.ye', '.sd', '.ss', '.er', '.dj', '.so', '.et',
  '.mz', '.mg', '.mu', '.sc', '.km', '.rw', '.bi', '.ug', '.tz', '.zm',
  '.zw', '.mw', '.ls', '.sz', '.na', '.bw', '.za', '.ao', '.cg', '.cd',
  '.ga', '.gq', '.st', '.cm', '.cf', '.td', '.ne', '.ng', '.bj', '.tg',
  '.gh', '.ci', '.lr', '.sl', '.gn', '.gw', '.sn', '.gm', '.mr', '.cv',
  '.ml', '.bf', '.dz', '.tn', '.ly', '.eg', '.ma', '.eh', '.cu', '.ht',
  '.do', '.jm', '.tt', '.bb', '.bs', '.bz', '.gt', '.hn', '.sv', '.ni',
  '.cr', '.pa', '.co', '.ve', '.gy', '.sr', '.gf', '.ec', '.pe', '.bo',
  '.cl', '.ar', '.uy', '.py', '.fk', '.gs', '.aq', '.bv', '.hm', '.tf',
  '.io', '.cx', '.cc', '.nf', '.pn', '.tk', '.tv', '.ws', '.to', '.fj',
  '.vu', '.sb', '.pg', '.fm', '.mh', '.pw', '.nr', '.ki', '.tv', '.ck',
  '.nu', '.pr', '.vi', '.gu', '.mp', '.as', '.um', '.gl', '.sj', '.pm'
]

const urlPaths = [
  '/', '/home', '/about', '/about-us', '/contact', '/contact-us', '/pricing', '/features', '/tour', '/demo',
  '/services', '/products', '/solutions', '/enterprise', '/small-business', '/startups', '/education', '/non-profits',
  '/customers', '/case-studies', '/testimonials', '/reviews', '/partners', '/affiliates', '/resellers',
  '/company', '/our-story', '/mission', '/vision', '/team', '/leadership', '/careers', '/jobs', '/culture',
  '/press', '/media', '/news', '/newsroom', '/events', '/webinars', '/podcasts', '/blog', '/articles',
  '/resources', '/guides', '/tutorials', '/whitepapers', '/ebooks', '/reports', '/downloads', '/free-tools',
  '/docs', '/documentation', '/api-docs', '/developers', '/changelog', '/updates', '/roadmap', '/status',
  '/support', '/help', '/help-center', '/faq', '/knowledge-base', '/community', '/forum', '/discussions',
  '/legal', '/terms', '/terms-of-service', '/privacy', '/privacy-policy', '/cookie-policy', '/security', '/compliance',
  '/sitemap', '/robots.txt', '/favicon.ico', '/manifest.json', '/404', '/500', '/offline', '/maintenance',
  
  '/login', '/signin', '/register', '/signup', '/join', '/forgot-password', '/reset-password', '/verify-email',
  '/auth/google', '/auth/github', '/auth/twitter', '/auth/facebook', '/auth/linkedin', '/auth/apple', '/sso', '/logout',
  '/onboarding', '/onboarding/step-1', '/onboarding/step-2', '/onboarding/step-3', '/onboarding/complete', '/welcome',
  
  '/dashboard', '/app', '/panel', '/portal', '/console', '/overview', '/summary', '/insights', '/analytics', '/reports',
  '/profile', '/user/profile', '/user/settings', '/user/preferences', '/user/security', '/user/activity', '/user/sessions',
  '/account', '/account/settings', '/account/billing', '/account/invoices', '/account/payment-methods', '/account/subscriptions',
  '/account/plans', '/account/upgrade', '/account/downgrade', '/account/cancel', '/account/delete',
  
  '/settings', '/settings/general', '/settings/profile', '/settings/account', '/settings/appearance', '/settings/notifications',
  '/settings/emails', '/settings/security', '/settings/privacy', '/settings/integrations', '/settings/api-keys', '/settings/webhooks',
  '/settings/team', '/settings/members', '/settings/roles', '/settings/permissions', '/settings/billing', '/settings/advanced',
  
  '/team', '/team/directory', '/team/members', '/team/invites', '/team/groups', '/team/departments', '/team/structure',
  '/projects', '/projects/active', '/projects/archived', '/projects/new', '/projects/templates', '/projects/import',
  '/tasks', '/tasks/my-tasks', '/tasks/assigned-to-me', '/tasks/completed', '/tasks/overdue', '/tasks/board', '/tasks/list',
  '/calendar', '/calendar/day', '/calendar/week', '/calendar/month', '/calendar/agenda', '/schedule', '/meetings',
  '/messages', '/messages/inbox', '/messages/sent', '/messages/drafts', '/messages/trash', '/messages/spam', '/messages/archive',
  '/chat', '/chat/direct', '/chat/channels', '/chat/groups', '/chat/threads', '/chat/mentions',
  '/notifications', '/notifications/all', '/notifications/unread', '/notifications/read', '/notifications/settings',
  
  '/shop', '/store', '/catalog', '/collections', '/categories', '/brands', '/deals', '/sale', '/clearance', '/new-arrivals',
  '/bestsellers', '/featured', '/trending', '/popular', '/recommended', '/search', '/search?q=', '/advanced-search',
  '/cart', '/basket', '/bag', '/checkout', '/checkout/shipping', '/checkout/billing', '/checkout/payment', '/checkout/review',
  '/checkout/success', '/checkout/confirmation', '/checkout/cancel', '/order-tracking', '/track-order',
  '/orders', '/orders/history', '/orders/pending', '/orders/shipped', '/orders/delivered', '/orders/cancelled',
  '/returns', '/refunds', '/exchanges', '/wishlist', '/favorites', '/saved', '/compare',
  
  '/admin', '/admin/dashboard', '/admin/analytics', '/admin/reports', '/admin/metrics', '/admin/kpis',
  '/admin/users', '/admin/users/active', '/admin/users/banned', '/admin/users/pending', '/admin/users/create',
  '/admin/roles', '/admin/permissions', '/admin/groups', '/admin/organizations', '/admin/tenants',
  '/admin/products', '/admin/products/inventory', '/admin/products/categories', '/admin/products/tags', '/admin/products/brands',
  '/admin/orders', '/admin/orders/processing', '/admin/orders/fulfilled', '/admin/orders/refunded', '/admin/invoices',
  '/admin/content', '/admin/pages', '/admin/posts', '/admin/comments', '/admin/media', '/admin/files', '/admin/assets',
  '/admin/marketing', '/admin/campaigns', '/admin/coupons', '/admin/discounts', '/admin/promotions', '/admin/affiliates',
  '/admin/support', '/admin/tickets', '/admin/feedback', '/admin/reviews', '/admin/disputes',
  '/admin/settings', '/admin/settings/general', '/admin/settings/email', '/admin/settings/payment', '/admin/settings/shipping',
  '/admin/settings/taxes', '/admin/settings/security', '/admin/system', '/admin/system/logs', '/admin/system/health',
  '/admin/system/backups', '/admin/system/cache', '/admin/system/cron', '/admin/system/database',
  
  '/api', '/api/v1', '/api/v2', '/api/graphql', '/api/health', '/api/status', '/api/ping', '/api/version',
  '/api/v1/auth/login', '/api/v1/auth/register', '/api/v1/auth/refresh', '/api/v1/auth/logout', '/api/v1/auth/me',
  '/api/v1/users', '/api/v1/users/:id', '/api/v1/users/:id/profile', '/api/v1/users/:id/settings', '/api/v1/users/:id/posts',
  '/api/v1/products', '/api/v1/products/:id', '/api/v1/products/:id/reviews', '/api/v1/products/search', '/api/v1/products/categories',
  '/api/v1/orders', '/api/v1/orders/:id', '/api/v1/orders/:id/status', '/api/v1/orders/:id/payment', '/api/v1/orders/:id/shipping',
  '/api/v1/cart', '/api/v1/cart/items', '/api/v1/cart/items/:id', '/api/v1/cart/checkout', '/api/v1/cart/coupon',
  '/api/v1/payments', '/api/v1/payments/create-intent', '/api/v1/payments/confirm', '/api/v1/payments/webhook',
  '/api/v1/subscriptions', '/api/v1/subscriptions/plans', '/api/v1/subscriptions/create', '/api/v1/subscriptions/cancel',
  '/api/v1/posts', '/api/v1/posts/:id', '/api/v1/posts/:id/comments', '/api/v1/posts/:id/likes', '/api/v1/posts/feed',
  '/api/v1/comments', '/api/v1/comments/:id', '/api/v1/comments/:id/replies', '/api/v1/comments/:id/likes',
  '/api/v1/messages', '/api/v1/messages/conversations', '/api/v1/messages/:id', '/api/v1/messages/send',
  '/api/v1/notifications', '/api/v1/notifications/unread', '/api/v1/notifications/mark-read', '/api/v1/notifications/clear',
  '/api/v1/files', '/api/v1/files/upload', '/api/v1/files/download/:id', '/api/v1/files/delete/:id',
  '/api/v1/search', '/api/v1/search/autocomplete', '/api/v1/search/suggestions', '/api/v1/search/results',
  '/api/v1/webhooks', '/api/v1/webhooks/stripe', '/api/v1/webhooks/paypal', '/api/v1/webhooks/github', '/api/v1/webhooks/slack',
  
  '/category/electronics', '/category/clothing', '/category/home-garden', '/category/sports', '/category/automotive',
  '/category/books', '/category/health-beauty', '/category/toys', '/category/grocery', '/category/pet-supplies',
  '/collection/summer-sale', '/collection/winter-gear', '/collection/gifts-for-him', '/collection/gifts-for-her',
  '/brand/apple', '/brand/samsung', '/brand/nike', '/brand/adidas', '/brand/sony', '/brand/microsoft',
  '/product/iphone-14-pro', '/product/macbook-air-m2', '/product/playstation-5', '/product/nintendo-switch', '/product/airpods-pro',
  
  '/blog/category/technology', '/blog/category/business', '/blog/category/design', '/blog/category/marketing', '/blog/category/engineering',
  '/blog/tag/react', '/blog/tag/javascript', '/blog/tag/node-js', '/blog/tag/python', '/blog/tag/aws',
  '/blog/author/johndoe', '/blog/author/janedoe', '/blog/author/admin', '/blog/author/guest',
  '/blog/archive/2023', '/blog/archive/2023/10', '/blog/archive/2022', '/blog/archive/2021',
  '/blog/getting-started-guide', '/blog/top-10-tips', '/blog/how-to-build-an-app', '/blog/company-update-q3', '/blog/product-release-notes',
  
  '/feed', '/explore', '/discover', '/trending', '/popular', '/latest', '/following', '/followers',
  '/friends', '/friends/requests', '/friends/suggestions', '/friends/mutual', '/connections', '/network',
  '/groups', '/groups/my-groups', '/groups/discover', '/groups/create', '/groups/manage',
  '/events', '/events/upcoming', '/events/past', '/events/hosting', '/events/attending', '/events/calendar',
  '/photos', '/photos/albums', '/photos/tags', '/photos/uploads', '/videos', '/videos/playlists', '/videos/history',
  
  '/locations', '/locations/new-york', '/locations/london', '/locations/tokyo', '/locations/sydney', '/locations/paris',
  '/store-locator', '/find-a-store', '/directions', '/map', '/branches', '/offices',
  
  '/portfolio', '/portfolio/web-design', '/portfolio/branding', '/portfolio/photography', '/portfolio/illustration',
  '/case-study/acme-corp', '/case-study/globex', '/case-study/initech', '/case-study/soylent',
  
  '/course/introduction-to-programming', '/course/advanced-javascript', '/course/data-science-bootcamp', '/course/digital-marketing',
  '/lessons', '/lessons/1', '/lessons/2', '/lessons/3', '/quiz', '/quiz/start', '/quiz/results', '/certificate',
  
  '/booking', '/booking/select-date', '/booking/select-time', '/booking/details', '/booking/confirm', '/booking/success',
  '/reservations', '/reservations/upcoming', '/reservations/past', '/reservations/cancel', '/reservations/modify',
  
  '/forum/category/general', '/forum/category/support', '/forum/category/feature-requests', '/forum/category/bug-reports',
  '/forum/topic/1234', '/forum/topic/5678', '/forum/post/new', '/forum/post/edit', '/forum/post/reply',
  
  '/app/editor', '/app/viewer', '/app/builder', '/app/designer', '/app/generator', '/app/analyzer', '/app/converter',
  '/app/export', '/app/import', '/app/share', '/app/collaborate', '/app/publish', '/app/preview', '/app/deploy',
  
  '/downloads/windows', '/downloads/mac', '/downloads/linux', '/downloads/ios', '/downloads/android',
  '/assets/css/main.css', '/assets/js/app.js', '/assets/images/logo.svg', '/assets/images/hero.jpg', '/assets/fonts/inter.woff2',
  '/static/media/video.mp4', '/static/docs/manual.pdf', '/static/data/data.json', '/static/data/data.csv'
]

const loremWords = [
  'a', 'ac', 'accumsan', 'ad', 'adipiscing', 'aenean', 'aliquam', 'aliquet', 'aliquip', 'amet', 
  'anim', 'ante', 'aptent', 'arcu', 'at', 'auctor', 'augue', 'aute', 'bibendum', 'blandit', 
  'cillum', 'class', 'commodo', 'consectetur', 'consequat', 'conubia', 'cras', 'cubilia', 'culpa', 'cum', 
  'cupidatat', 'curabitur', 'curae', 'cursus', 'dapibus', 'deserunt', 'diam', 'dictum', 'dictumst', 'dignissim', 
  'dis', 'do', 'dolor', 'dolore', 'donec', 'dui', 'duis', 'ea', 'egestas', 'eget', 
  'eiusmod', 'eleifend', 'elementum', 'elit', 'enim', 'erat', 'eros', 'esse', 'est', 'et', 
  'etiam', 'eu', 'euismod', 'ex', 'excepteur', 'exercitation', 'facilisi', 'facilisis', 'fames', 'faucibus', 
  'felis', 'fermentum', 'feugiat', 'fringilla', 'fugiat', 'fusce', 'gravida', 'habitant', 'habitasse', 'hac', 
  'hendrerit', 'himenaeos', 'iaculis', 'id', 'imperdiet', 'in', 'inceptos', 'incididunt', 'integer', 'interdum', 
  'ipsum', 'irure', 'justo', 'labore', 'laboris', 'laborum', 'lacinia', 'lacus', 'laoreet', 'lectus', 
  'leo', 'libero', 'ligula', 'litora', 'lobortis', 'lorem', 'luctus', 'maecenas', 'magna', 'magnis', 
  'malesuada', 'massa', 'mattis', 'mauris', 'metus', 'mi', 'minim', 'mollit', 'montes', 'morbi', 
  'mus', 'nam', 'nascetur', 'natoque', 'nec', 'neque', 'netus', 'nibh', 'nisi', 'nisl', 
  'non', 'nostra', 'nostrud', 'nulla', 'nullam', 'nunc', 'occaecat', 'odio', 'officia', 'orci', 
  'ornare', 'pariatur', 'parturient', 'pellentesque', 'penatibus', 'per', 'pharetra', 'phasellus', 'placerat', 'platea', 
  'porta', 'porttitor', 'posuere', 'potenti', 'praesent', 'pretium', 'primis', 'proident', 'proin', 'pulvinar', 
  'purus', 'quam', 'quas', 'qui', 'quis', 'quisque', 'reprehenderit', 'rhoncus', 'ridiculus', 'risus', 
  'rutrum', 'sagittis', 'sapien', 'scelerisque', 'sed', 'sem', 'semper', 'senectus', 'sint', 'sit', 
  'sociosqu', 'sodales', 'sollicitudin', 'sunt', 'suscipit', 'suspendisse', 'taciti', 'tellus', 'tempor', 'tempus', 
  'tincidunt', 'torquent', 'tortor', 'tristique', 'turpis', 'ullamco', 'ullamcorper', 'ultrices', 'ultricies', 'urna', 
  'ut', 'varius', 'vehicula', 'vel', 'velit', 'venenatis', 'veniam', 'vestibulum', 'vitae', 'vivamus', 
  'viverra', 'voluptate', 'volutpat', 'vulputate'
]

const passwordChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'

// ── Helpers ─────────────────────────────────────────────────────────────────

const pick  = arr => arr[Math.floor(Math.random() * arr.length)]
const rand  = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pad   = (n, len = 2) => String(n).padStart(len, '0')

// ── Data Type Definitions ────────────────────────────────────────────────────

export const DATA_TYPES = [
  // Person
  { id: 'name',      label: 'Full Name',   icon: '👤', category: 'person'   },
  { id: 'firstName', label: 'First Name',  icon: '🏷️', category: 'person'   },
  { id: 'lastName',  label: 'Last Name',   icon: '🏷️', category: 'person'   },
  { id: 'email',     label: 'Email',       icon: '✉️',  category: 'person'   },
  { id: 'phone',     label: 'Phone',       icon: '📱', category: 'person'   },
  { id: 'username',  label: 'Username',    icon: '🔖', category: 'person'   },
  { id: 'password',  label: 'Password',    icon: '🔑', category: 'person'   },
  { id: 'jobTitle',  label: 'Job Title',   icon: '💼', category: 'person'   },
  { id: 'company',   label: 'Company',     icon: '🏢', category: 'person'   },
  // Location
  { id: 'address',   label: 'Address',     icon: '📍', category: 'location' },
  { id: 'city',      label: 'City',        icon: '🏙️', category: 'location' },
  { id: 'country',   label: 'Country',     icon: '🌍', category: 'location' },
  { id: 'zipCode',   label: 'ZIP Code',    icon: '📮', category: 'location' },
  // Tech & IDs
  { id: 'uuid',      label: 'UUID',        icon: '🔗', category: 'tech'     },
  { id: 'number',    label: 'Number',      icon: '🔢', category: 'tech'     },
  { id: 'float',     label: 'Float',       icon: '〰️', category: 'tech'     },
  { id: 'boolean',   label: 'Boolean',     icon: '⚡', category: 'tech'     },
  { id: 'color',     label: 'Hex Color',   icon: '🎨', category: 'tech'     },
  { id: 'url',       label: 'URL',         icon: '🌐', category: 'tech'     },
  { id: 'ip',        label: 'IP Address',  icon: '📡', category: 'tech'     },
  // Date & Time
  { id: 'date',      label: 'Date',        icon: '📅', category: 'date'     },
  { id: 'datetime',  label: 'DateTime',    icon: '🕐', category: 'date'     },
  { id: 'timestamp', label: 'Timestamp',   icon: '⏱️', category: 'date'     },
  // Text
  { id: 'lorem',     label: 'Lorem Text',  icon: '📝', category: 'text'     },
]

export const CATEGORY_LABELS = {
  person:   'Person',
  location: 'Location',
  tech:     'Tech & IDs',
  date:     'Date & Time',
  text:     'Text',
}

// ── Generators ───────────────────────────────────────────────────────────────

export const generators = {
  name:      () => `${pick(firstNames)} ${pick(lastNames)}`,
  firstName: () => pick(firstNames),
  lastName:  () => pick(lastNames),

  email: () => {
    const first = pick(firstNames).toLowerCase()
    const last  = pick(lastNames).toLowerCase()
    const sep   = pick(['', '.', '_'])
    const num   = rand(0, 10) > 7 ? rand(1, 99) : ''
    return `${first}${sep}${last}${num}@${pick(emailDomains)}`
  },

  phone: () => `(${rand(200, 999)}) ${rand(200, 999)}-${rand(1000, 9999)}`,

  username: () => {
    const f = pick(firstNames).toLowerCase()
    const l = pick(lastNames).toLowerCase()
    return pick([
      () => `${f}${l.slice(0, 4)}`,
      () => `${f[0]}${l}`,
      () => `${f}_${l}`,
      () => `${f}${rand(10, 999)}`,
      () => `${l}${rand(10, 99)}`,
      () => `${f}.${l}`,
    ])()
  },

  password: () => {
    const len = rand(10, 16)
    return Array.from({ length: len }, () =>
      passwordChars[Math.floor(Math.random() * passwordChars.length)]
    ).join('')
  },

  jobTitle: () => pick(jobTitles),
  company:  () => pick(companies),

  address: () =>
    `${rand(1, 9999)} ${pick(streetNames)} ${pick(streetTypes)}, ${pick(cities)}, ${pick(usStates)} ${pad(rand(10000, 99999), 5)}`,

  city:    () => pick(cities),
  country: () => pick(countries),
  zipCode: () => pad(rand(10000, 99999), 5),

  uuid: () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  },

  number: () => rand(0, 999999),
  float:  () => (Math.random() * 10000).toFixed(4),

  boolean: () => (Math.random() > 0.5 ? 'true' : 'false'),

  color: () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toUpperCase(),

  url: () => {
    const sub  = Math.random() > 0.5 ? 'www.' : ''
    const name = pick([...firstNames, ...lastNames, 'example', 'test', 'demo', 'mockdata', 'faker']).toLowerCase()
    return `https://${sub}${name}${pick(tlds)}${pick(urlPaths)}`
  },

  ip: () => `${rand(1, 255)}.${rand(0, 255)}.${rand(0, 255)}.${rand(0, 255)}`,

  date: () => {
    const d = new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365 * 10)
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  },

  datetime: () => {
    const d = new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365 * 5)
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
  },

  timestamp: () => String(
    Math.floor(new Date('2020-01-01').getTime() / 1000 + Math.random() * 60 * 60 * 24 * 365 * 6)
  ),

  lorem: () => {
    const sentences = rand(1, 3)
    return Array.from({ length: sentences }, () => {
      const words = Array.from({ length: rand(8, 15) }, () => pick(loremWords))
      return words[0].charAt(0).toUpperCase() + words[0].slice(1) + ' ' + words.slice(1).join(' ') + '.'
    }).join(' ')
  },
}
