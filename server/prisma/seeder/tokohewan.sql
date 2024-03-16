INSERT INTO "Domicile" (id, name) VALUES
(1, 'Sumatera'),
(2, 'Jawa'),
(3, 'Kalimantan'),
(4, 'Sulawesi'),
(5, 'Papua');

INSERT INTO "Profile" (id, gender, photo, domicile_id) VALUES
('PEg5hy', 'male', 'male.jpg', 1),
('PE4rte', 'female', 'female.jpg', 2),
('PEuy6g', 'male', 'male.jpg', 2);

INSERT INTO "User" (id, name, email, password, profile_id) VALUES
('URk8ff', 'human 1', 'human1@gmail.com', '123456', 'PEg5hy'),
('URh92r', 'human 2', 'human2@gmail.com', '123456', 'PE4rte'),
('URbnt9', 'human 3', 'human3@gmail.com', '123456', 'PEuy6g');

INSERT INTO "Shipper" (id, name, domicile_id, service, tariff, unit) VALUES
(1, 'FlashIDN', 1, 'Same Day', 2500000, 'Mil'),
(2, 'Slowlifin', 3, 'One Month', 200000, 'Mil'),
(3, 'Mediexpress', 5, 'Two Weeks', 1000000, 'Mil');

INSERT INTO "Utility" (id, peliharaan, peternakan, militer, hewan_kurban, material) VALUES
('UYkdlf', true, false, true, false, false),
('UYiir6', true, false, false, false, false),
('UY93jg', false, true, false, true, true),
('UYafl3', true, false, false, false, true),
('UY94jg', true, false, false, false, false),
('UYgrbn', true, false, true, false, false),
('UYaafg', true, false, false, false, true),
('UYf0ru', true, false, false, false, true),
('UYdjnh', true, false, false, false, true),
('UYvufn', false, false, false, false, true);

INSERT INTO "Habitat" (id, darat, air, udara) VALUES
('HTmfgn', true, false, false),
('HTdlei', true, false, false),
('HTfaor', true, false, false),
('HTspfe', true, true, false),
('HTalvv', true, false, true),
('HTdfo8', true, false, true),
('HTsif7', true, false, false),
('HTdo33', true, true, false),
('HTf944', false, true, false),
('HTaldh', true, false, false);

INSERT INTO "Product" (id, name, photo, class, utility_id, habitat_id, quantity, price, sold, discount, free_delivery, rating, seller_id) VALUES
('PT6yj8', 'Anjing Pitbull', 'anjing.jpg', 'Mammalia', 'UYkdlf', 'HTmfgn', 10, 1500000, 2, 20, false, 3, 'URk8ff'),
('PTglkb', 'Kucing Hitam', 'kucing.jpg', 'Mammalia', 'UYiir6', 'HTdlei', 12, 600000, 0, 0, true, 0, 'URbnt9'),
('PTk99t', 'Sapi', 'sapi.jpg', 'Mammalia', 'UY93jg', 'HTfaor', 9, 22000000, 3, 15, false, 4, 'URh92r'),
('PTlfse', 'Buaya', 'buaya.jpg', 'Reptilia', 'UYafl3', 'HTspfe', 2, 1400000000, 2, 0, true, 5, 'URh92r'),
('PTorm4', 'Burung Kaka Tua', 'burung-kaka-tua.jpg', 'Aves', 'UY94jg', 'HTalvv', 18, 820000, 0, 11, false, 0, 'URk8ff'),
('PTldfm', 'Burung Elang', 'burung-elang.jpg', 'Aves', 'UYgrbn', 'HTdfo8', 1, 2000000000, 1, 0, true, 5, 'URbnt9'),
('PTpplr', 'Ular Anaconda', 'ular-anaconda.jpg', 'Reptilia', 'UYaafg', 'HTsif7', 7, 17000000, 0, 90, false, 0, 'URk8ff'),
('PTnm7v', 'Kodok', 'kodok.jpg', 'Amphibia', 'UYf0ru', 'HTdo33', 25, 20000, 0, 0, true, 0, 'URh92r'),
('PTcxi3', 'Ikan Hiu', 'ikan-hiu.jpg', 'Chondrichthyes', 'UYdjnh', 'HTf944', 4, 1800000000, 0, 0, true, 0, 'URbnt9'),
('PTkt88', 'Kalajengking', 'kalajengking.jpg', 'Arachnida', 'UYvufn', 'HTaldh', 10, 5000000, 0, 50, true, 0, 'URk8ff');

INSERT INTO "Rating" (id, rating, product_id, user_id) VALUES
('RG66fm', 3, 'PT6yj8', 'URk8ff'),
('RGkk44', 3, 'PT6yj8', 'URbnt9'),
('RGakgu', 4, 'PTk99t', 'URh92r'),
('RGppem', 3, 'PTk99t', 'URk8ff'),
('RGfkbu', 5, 'PTk99t', 'URbnt9'),
('RG783j', 5, 'PTlfse', 'URbnt9'),
('RGsflu', 5, 'PTlfse', 'URh92r'),
('RGpdf7', 5, 'PTldfm', 'URk8ff');

INSERT INTO "Order" (id, order_date, product_id, buyer_id, shipper_id) VALUES
('ORj8h3', '2024-02-12', 'PT6yj8', 'URk8ff', 2),
('ORldmm', '2024-01-16', 'PT6yj8', 'URbnt9', 2),
('ORdp8h', '2023-10-22', 'PTk99t', 'URh92r', 3),
('ORzxve', '2023-05-03', 'PTk99t', 'URk8ff', 1),
('ORssi7', '2024-01-09', 'PTk99t', 'URbnt9', 2),
('OR02mf', '2022-01-10', 'PTlfse', 'URbnt9', 1),
('OR8h7d', '2022-11-25', 'PTlfse', 'URh92r', 1),
('OR13lf', '2023-07-02', 'PTldfm', 'URk8ff', 3);

INSERT INTO "OrderDetail" (id, amount, total_price, distance, total_tariff, tax, final_price, order_id) VALUES
('OLbntr', 3, 3600000, 2, 400000, 11, 3560000, 'ORj8h3'),
('OLdfdf', 1, 1200000, 1, 200000, 11, 1246000, 'ORldmm'),
('OLaow8', 1, 18700000, 3, 3000000, 11, 19313000, 'ORdp8h'),
('OLanvu', 2, 35400000, 0, 1250000, 11, 32618500, 'ORzxve'),
('OLjgv4', 1, 18700000, 1, 200000, 11, 16821000, 'ORssi7'),
('OL0ufm', 1, 1400000000, 1, 0, 11, 1246000000, 'OR02mf'),
('OLslf7', 1, 1400000000, 1, 0, 11, 1246000000, 'OR8h7d'),
('OLskft', 1, 2000000000, 4, 0, 11, 1780000000, 'OR13lf');