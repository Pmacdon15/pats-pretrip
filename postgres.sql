CREATE TABLE
    ppusers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        admin BOOLEAN DEFAULT FALSE NOT NULL
    );

CREATE TABLE pptrips (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES ppusers (id) ON DELETE CASCADE NOT NULL,
    carrier VARCHAR(100) NOT NULL,
    carrierAddress VARCHAR(255) NOT NULL,
    inspectionAddress VARCHAR(255) NOT NULL, 
    dateTime TIMESTAMP NOT NULL,
    remarks TEXT,
    eSignature VARCHAR(255),
    inputDate TIMESTAMP NOT NULL 
);

CREATE TABLE
    ppVehicles (
        id SERIAL PRIMARY KEY,
        tripId INTEGER REFERENCES pptrips (id) ON DELETE CASCADE NOT NULL,
        make VARCHAR(100) NOT NULL,
        model VARCHAR(100) NOT NULL,
        odometer NUMERIC(10, 2) NOT NULL,
        truckLP VARCHAR(20) NOT NULL,          
    );

CREATE TABLE
    ppdefects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        has_m_defect BOOLEAN DEFAULT FALSE NOT NULL,
        tripId INTEGER NOT NULL,
        truckDefect BOOLEAN DEFAULT TRUE NOT NULL,
        FOREIGN KEY (tripId) REFERENCES pptrips (id) ON DELETE CASCADE
    );