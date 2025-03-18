CREATE DATABASE business_rules;

\c business_rules;

CREATE TABLE tickets (
	id SERIAL PRIMARY KEY,
	evento VARCHAR(255),
	local VARCHAR(255),
	data_evento DATE,
	categoria VARCHAR(50),
	preco DECIMAL(10,2),
	quantidade_disponivel INTEGER
);

INSERT INTO tickets (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Pista', 150.00, 5000),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Pista Premium', 250.00, 2000),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Camarote', 400.00, 500),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Frontstage', 450.00, 300),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'VIP', 600.00, 200),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Gold', 800.00, 100),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Platinum', 1200.00, 50),
('Cristiano Araujo', 'Sousas Fest', '07/07/2027', 'Backstage', 2000.00, 20);