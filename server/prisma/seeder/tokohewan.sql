INSERT INTO "User" (id, name, email, password) VALUES
(1, 'human 1', 'human1@gmail.com', '123456'),
(2, 'human 2', 'human2@gmail.com', '123456'),
(3, 'human 3', 'human3@gmail.com', '123456');

INSERT INTO "Domicile" (id, name) VALUES
(1, 'Sumatera'),
(2, 'Jawa'),
(3, 'Kalimantan'),
(4, 'Sulawesi'),
(5, 'Papua');

INSERT INTO "Profile" (id, gender, photo, domicile_id, user_id) VALUES
(1, 'male', 'human1.jpg', 1, 1),
(2, 'female', null, 2, 2),
(3, 'male', null, 2, 3);

INSERT INTO "Shipper" (id, name, domicile_id, service, tariff, unit) VALUES
(1, 'FlashIDN', 1, 'Same Day', 2500000, 'Mil'),
(2, 'Slowlifin', 3, 'One Month', 200000, 'Mil'),
(3, 'Mediexpress', 5, 'Two Weeks', 1000000, 'Mil');

INSERT INTO "Product" (id, name, photo, class, quantity, price, sold, discount, free_delivery, rating, seller_id) VALUES
(1, 'Anjing Pitbull', 'anjing.jpg', 'Mammalia', 10, 1500000, 2, 20, false, 3, 1),
(2, 'Kucing Hitam', 'kucing.jpg', 'Mammalia', 12, 600000, 0, 0, true, 0, 3),
(3, 'Sapi', 'sapi.jpg', 'Mammalia', 9, 22000000, 3, 15, false, 4, 2),
(4, 'Buaya', 'buaya.jpg', 'Reptilia', 2, 1400000000, 2, 0, true, 5, 2),
(5, 'Burung Kaka Tua', 'burung-kaka-tua.jpg', 'Aves', 18, 820000, 0, 11, false, 0, 1),
(6, 'Burung Elang', 'burung-elang.jpg', 'Aves', 1, 2000000000, 1, 0, true, 5, 3),
(7, 'Ular Anaconda', 'ular-anaconda.jpg', 'Reptilia', 7, 17000000, 0, 90, false, 0, 1),
(8, 'Kodok', 'kodok.jpg', 'Amphibia', 25, 20000, 0, 0, true, 0, 2),
(9, 'Ikan Hiu', 'ikan-hiu.jpg', 'Chondrichthyes', 4, 1800000000, 0, 0, true, 0, 3),
(10, 'Kalajengking', 'kalajengking.jpg', 'Arachnida', 10, 5000000, 0, 50, true, 0, 1);

INSERT INTO "Utility" (id, peliharaan, peternakan, militer, hewan_kurban, material, product_id) VALUES
(1, true, false, true, false, false, 1),
(2, true, false, false, false, false, 2),
(3, false, true, false, true, true, 3),
(4, true, false, false, false, true, 4),
(5, true, false, false, false, false, 5),
(6, true, false, true, false, false, 6),
(7, true, false, false, false, true, 7),
(8, true, false, false, false, true, 8),
(9, true, false, false, false, true, 9),
(10, false, false, false, false, true, 10);

INSERT INTO "Habitat" (id, darat, air, udara, product_id) VALUES
(1, true, false, false, 1),
(2, true, false, false, 2),
(3, true, false, false, 3),
(4, true, true, false, 4),
(5, true, false, true, 5),
(6, true, false, true, 6),
(7, true, false, false, 7),
(8, true, true, false, 8),
(9, false, true, false, 9),
(10, true, false, false, 10);

INSERT INTO "Rating" (id, rating, product_id, user_id) VALUES
(1, 3, 1, 1),
(2, 3, 1, 3),
(3, 4, 3, 2),
(4, 3, 3, 1),
(5, 5, 3, 3),
(6, 5, 4, 3),
(7, 5, 4, 2),
(8, 5, 6, 1);

INSERT INTO "Order" (id, order_date, product_id, buyer_id, shipper_id) VALUES
(1, '2024-02-12', 1, 1, 2),
(2, '2024-01-16', 1, 3, 2),
(3, '2023-10-22', 3, 2, 3),
(4, '2023-05-03', 3, 1, 1),
(5, '2024-01-09', 3, 3, 2),
(6, '2022-01-10', 4, 3, 1),
(7, '2022-11-25', 4, 2, 1),
(8, '2023-07-02', 6, 1, 3);

INSERT INTO "OrderDetail" (id, amount, total_price, distance, total_tariff, tax, final_price, order_id) VALUES
(1, 3, 3600000, 2, 400000, 11, 3560000, 1),
(2, 1, 1200000, 1, 200000, 11, 1246000, 2),
(3, 1, 18700000, 3, 3000000, 11, 19313000, 3),
(4, 2, 35400000, 0, 1250000, 11, 32618500, 4),
(5, 1, 18700000, 1, 200000, 11, 16821000, 5),
(6, 1, 1400000000, 1, 0, 11, 1246000000, 6),
(7, 1, 1400000000, 1, 0, 11, 1246000000, 7),
(8, 1, 2000000000, 4, 0, 11, 1780000000, 8);