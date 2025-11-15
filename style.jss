/* General Reset and Styles */
body {
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f9fbfc;
    color: #233142;
}

header {
    background: linear-gradient(rgba(30,41,59,0.7), rgba(56,189,248,0.3)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
    color: #fff;
    padding-bottom: 60px;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 5vw 0.5em 5vw;
}

.logo {
    font-size: 1.75em;
    font-weight: bold;
    letter-spacing: 2px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 2em;
    margin: 0;
    padding: 0;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}
nav a:hover {
    color: #00b6ff;
}

.hero {
    text-align: center;
    margin-top: 2em;
}
.hero h1 {
    font-size: 2.5em;
    margin-bottom: 0.4em;
    text-shadow: 1px 2px 7px #181f26b0;
}
.hero p {
    font-size: 1.2em;
    background: rgba(0,0,0,.2);
    display: inline-block;
    padding: 0.5em 1.5em;
    border-radius: 6px;
}

main {
    background: #f9fbfc;
    padding: 25px 5vw;
}

section {
    margin-bottom: 3em;
}

h2 {
    color: #0b79bf;
    margin-bottom: 0.5em;
    font-size: 2em;
}

#about p {
    max-width: 700px;
    font-size: 1.15em;
    line-height: 1.5;
}

.package-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
}

.package-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 14px -6px #4796cdcc;
    width: 260px;
    transition: transform 0.2s;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.package-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 24px -8px #4796cd99;
}
.package-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
}
.package-card h3 {
    color: #0b79bf;
    font-size: 1.1em;
    margin: 0.7em 0 0.5em 0;
}
.package-card p {
    font-size: 1em;
    margin: 0 1em 0.5em 1em;
    color: #333;
    text-align: center;
}
.package-card .price {
    background: #0b79bf;
    color: #fff;
    font-weight: bold;
    padding: 0.3em 1.2em;
    border-radius: 18px;
    margin-top: 0.6em;
    font-size: 1.1em;
}

#contact form {
    background: #fff;
    margin-bottom: 1.5em;
    border-radius: 8px;
    box-shadow: 0 2px 10px -3px #084c729c;
    display: flex;
    flex-direction: column;
    padding: 1.5em;
    max-width: 430px;
}

#contact input,
#contact textarea {
    margin-bottom: 1em;
    border-radius: 4px;
    border: 1px solid #c0dadf;
    font-size: 1em;
    padding: 0.8em 0.6em;
    resize: none;
    background: #f6fbfe;
}

#contact input:focus,
#contact textarea:focus {
    border: 1.5px solid #0b79bf;
    outline: none;
}

#contact button {
    background: #0b79bf;
    color: #fff;
    border: none;
    padding: 0.7em 2em;
    border-radius: 22px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    align-self: flex-start;
    transition: background 0.2s;
}
#contact button:hover {
    background: #00b6ff;
}

.address {
    margin-top: 1.5em;
    font-size: 1em;
    color: #233142;
    line-height: 1.6;
}

footer {
    background: #0b79bf;
    color: #fff;
    text-align: center;
    padding: 1.5em 0 1em 0;
    margin-top: 2em;
    font-size: 1.1em;
}
footer a {
    color: #fff;
    text-decoration: underline;
    margin: 0 0.5em;
    transition: color 0.18s;
}
footer a:hover {
    color: #f3ea5d;
}

/* Responsive Design */
@media only screen and (max-width: 1020px) {
    .package-list {
        gap: 1em;
    }
}
@media (max-width: 730px) {
    nav {
        flex-direction: column;
        gap: 1em;
    }
    .package-list {
        flex-direction: column;
        align-items: center;
    }
    .package-card {
        width: 92vw; 
        max-width: 340px;
    }
    main {
        padding: 16px 4vw;
    }
}
