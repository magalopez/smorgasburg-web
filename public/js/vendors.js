document.addEventListener('DOMContentLoaded', function() {
  const vendors = [
		{
			id: 1,
			name: "La Cevichería",
			category: "marina",
			description: "Los mejores ceviches y tiraditos con pescado fresco del día.",
			image: "/images/vendors/cevicheria.png",
			locations: ["Miraflores", "Barranco"]
		},
		{
			id: 2,
			name: "Anticuchería Don Pedro",
			category: "criolla",
			description: "Tradicionales anticuchos y otras delicias de la cocina criolla.",
			image: "/images/vendors/anticucheria.png",
			locations: ["Barranco", "San Isidro"]
		},
		{
			id: 3,
			name: "Dulces Limeños",
			category: "postres",
			description: "Postres tradicionales peruanos: picarones, suspiro limeño y más.",
			image: "/images/vendors/dulces-limeños.png",
			locations: ["Miraflores"]
		},
		{
			id: 4,
			name: "Nikkei Fusion",
			category: "fusion",
			description: "Lo mejor de la fusión peruano-japonesa en cada plato.",
			image: "/images/vendors/nikkei-peru.png",
			locations: ["San Isidro"]
		},
		{
			id: 5,
			name: "Pisco Bar",
			category: "bebidas",
			description: "Pisco sour, chilcanos y cócteles artesanales con pisco peruano.",
			image: "/images/vendors/pisco-bar.png",
			locations: ["Miraflores", "Barranco"]
		},
		{
			id: 6,
			name: "La Sanguchería",
			category: "criolla",
			description: "Chicharrón, pavo, lechón y los mejores sánguches peruanos.",
			image: "/images/vendors/sangucheria.png",
			locations: ["Miraflores", "San Isidro"]
		},
		{
			id: 7,
			name: "Chifa Express",
			category: "fusion",
			description: "Lo mejor de la comida china-peruana en un solo lugar.",
			image: "/images/vendors/chifa.png",
			locations: ["San Isidro", "Miraflores"]
		},
		{
			id: 8,
			name: "Amazónica",
			category: "peruana",
			description: "Sabores auténticos de la selva peruana: juanes, tacacho y cecina.",
			image: "/images/vendors/amazonica.png",
			locations: ["Barranco"]
		},
		{
			id: 9,
			name: "Arepas Venezuela",
			category: "internacional",
			description: "Auténticas arepas venezolanas rellenas con pabellón criollo, reina pepiada y más.",
			image: "/images/vendors/arepas.png",
			locations: ["Miraflores", "San Isidro"]
		},
		{
			id: 10,
			name: "Tequeños & Co",
			category: "internacional",
			description: "Tequeños venezolanos con diferentes rellenos y salsas especiales.",
			image: "/images/vendors/tequenos.png",
			locations: ["Barranco"]
		}
  ];

  const vendorsGrid = document.querySelector('.vendors-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const template = document.getElementById('vendor-template');

  function renderVendors(filteredVendors) {
		vendorsGrid.innerHTML = '';
		
		filteredVendors.forEach(vendor => {
			const card = template.content.cloneNode(true);
			
			card.querySelector('img').src = vendor.image;
			card.querySelector('img').alt = vendor.name;
			card.querySelector('.vendor-name').textContent = vendor.name;
			card.querySelector('.vendor-category').textContent = getCategoryName(vendor.category);
			card.querySelector('.vendor-description').textContent = vendor.description;
			
			const locationsDiv = card.querySelector('.vendor-locations');
			vendor.locations.forEach(location => {
					const locationSpan = document.createElement('span');
					locationSpan.className = 'vendor-location';
					locationSpan.textContent = location;
					locationsDiv.appendChild(locationSpan);
			});
				
			vendorsGrid.appendChild(card);
		});
  }

  function getCategoryName(category) {
		const categories = {
			'peruana': 'Comida Peruana',
			'marina': 'Comida Marina',
			'criolla': 'Comida Criolla',
			'fusion': 'Fusión',
			'internacional': 'Internacional',
			'postres': 'Postres',
			'bebidas': 'Bebidas'
		};
		return categories[category] || category;
  }

  renderVendors(vendors);

  filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			filterButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');
			
			const category = button.dataset.category;
			const filteredVendors = category === 'all' 
				? vendors 
				: vendors.filter(vendor => vendor.category === category);
			
			renderVendors(filteredVendors);
		});
  });

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
		newsletterForm.addEventListener('submit', function(e) {
				e.preventDefault();
				const email = this.querySelector('input[type="email"]').value;
				alert('¡Gracias por suscribirte! ' + email);
				this.reset();
		});
  }
});
