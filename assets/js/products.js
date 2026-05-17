/* =========================================================
   MAISON WINE COLLECTION - DATOS DEL CATÁLOGO
   V54: información oficial ampliada para Félix Solís y Zonin
   desde Portafolio.pdf.
========================================================= */
const PRODUCTS = [
  {
    "id": "argento-malbec-organico",
    "nombre": "Argento Malbec Orgánico",
    "bodega": "Argento",
    "linea": "Argento Estate Bottled",
    "pais": "Argentina",
    "region": "Luján de Cuyo, Agrelo, Mendoza",
    "categoria": "Tinto",
    "cepa": "100% Malbec",
    "alcohol": "13.5%",
    "temperatura": "16º C - 18º C",
    "maridaje": "Ternera, Cordero y Aves.",
    "descripcion": "De color morado profundo, con aromas a ciruelas, cerezas y notas de violeta. En boca se perciben sabores de ciruelas y frutos rojos. Su final en boca se presenta con taninos suaves y balanceados.",
    "precio": null,
    "imagen": "assets/img/productos/argento-malbec-organico.png",
    "etiqueta": "Orgánico",
    "detallePdf": {
      "descripcionOficial": "De color morado profundo, con aromas a ciruelas, cerezas y notas de violeta. En boca se perciben sabores de ciruelas y frutos rojos. Su final en boca se presenta con taninos suaves y balanceados.",
      "ficha": {
        "Caja": "6 Botellas",
        "Cepa": "100% Malbec.",
        "Región": "Luján de Cuyo, Agrelo, Mendoza.",
        "Fermentación": "Fermentación en acero inoxidable a 26-28°C por 7 días.",
        "Roble": "50% crianza en roble francés, tostado medio, durante 2 meses.",
        "AT": "5.41 g/L",
        "AR": "5.13 g/L",
        "pH": "3.64 g/L",
        "Alcohol": "13.5%",
        "Gastronomía / acompañante ideal": "Ternera, Cordero y Aves."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "argento-artesano-malbec-organico",
    "nombre": "Artesano Malbec Orgánico",
    "bodega": "Argento",
    "linea": "Artesano de Argento",
    "pais": "Argentina",
    "region": "Mendoza, Luján de Cuyo, Alto Agrelo",
    "categoria": "Tinto",
    "cepa": "100% Malbec",
    "alcohol": "14%",
    "temperatura": "16º C - 18º C",
    "maridaje": "Ternera, Cordero y Aves.",
    "descripcion": "Artesano es un homenaje a la artesanía tradicional en plata y cuero de Argentina. Color rojo intenso, aromas a cereza, frambuesa, hojas y frutos de grosella. Cuerpo rico y lleno, taninos aterciopelados y final largo.",
    "precio": null,
    "imagen": "assets/img/productos/argento-artesano-malbec-organico.png",
    "etiqueta": "Orgánico",
    "detallePdf": {
      "descripcionOficial": "Artesano es un homenaje a la artesanía tradicional en plata y cuero de Argentina. Color rojo intenso, aromas a cereza, frambuesa, hojas y frutos de grosella. Cuerpo rico y lleno, taninos aterciopelados y final largo.",
      "ficha": {
        "Caja": "6 Botellas",
        "Cepa": "100% Malbec.",
        "Región": "Mendoza, Luján de Cuyo, Alto Agrelo.",
        "Fermentación": "Tanques de acero inoxidable a 24-26°C por 14 días.",
        "Roble": "El 30% del corte está en contacto con barriles de 500 litros y toneles de 3.500 lts de roble francés tostado medio.",
        "AT": "5.2 g/L",
        "pH": "3.65 g/L",
        "Alcohol": "14%",
        "Acidez": "5.8 g/L",
        "Gastronomía / acompañante ideal": "Ternera, Cordero y Aves."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "argento-minimalista-pinot-grigio",
    "nombre": "Minimalista Pinot Grigio",
    "bodega": "Argento",
    "linea": "Minimalista",
    "pais": "Argentina",
    "region": "El Borbollón, Barrancas y Valle de Uco, Mendoza. 25 de Mayo, Caucete, 9 de Julio, San Martín, Zonda, San Juan",
    "categoria": "Blanco",
    "cepa": "100% Pinot Grigio",
    "alcohol": "12,5%",
    "temperatura": "8º C - 10º C",
    "maridaje": "Marisco, Vegetariana, Pescado blanco, Champiñones y Aperitivos.",
    "descripcion": "Pinot Grigio. Inspirado en la pureza de lo esencial. Este elegante Pinot Grigio ofrece delicados aromas florales y a frutas tropicales. Ligero y limpio con sabores a damasco maduro y durazno blanco y un final vibrante.",
    "precio": null,
    "imagen": "assets/img/productos/argento-minimalista-pinot-grigio.png",
    "etiqueta": "Minimalista",
    "detallePdf": {
      "descripcionOficial": "Pinot Grigio. Inspirado en la pureza de lo esencial. Este elegante Pinot Grigio ofrece delicados aromas florales y a frutas tropicales. Ligero y limpio con sabores a damasco maduro y durazno blanco y un final vibrante.",
      "ficha": {
        "Caja": "6 Botellas",
        "Cepa": "100% Pinot Grigio.",
        "Región": "El Borbollón, Barrancas y Valle de Uco, Mendoza. 25 de Mayo, Caucete, 9 de Julio, San Martín, Zonda, San Juan.",
        "Fermentación": "Fermentación en tanques de acero inoxidable a 14-16 ºC por 21 días.",
        "AT": "6.62 g/L",
        "AR": "4 g/L",
        "pH": "3.2 g/L",
        "Alcohol": "12,5%",
        "Gastronomía / acompañante ideal": "Marisco, Vegetariana, Pescado blanco, Champiñones y Aperitivos."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "argento-minimalista-malbec",
    "nombre": "Minimalista Malbec",
    "bodega": "Argento",
    "linea": "Minimalista",
    "pais": "Argentina",
    "region": "Rivadavia y Junín (Medrano), Luján de Cuyo, Maipú (Barrancas), Tunuyán y Tupungato, Mendoza",
    "categoria": "Tinto",
    "cepa": "100% Malbec",
    "alcohol": "13%",
    "temperatura": "16º C - 18º C",
    "maridaje": "Ternera, Cordero y Aves.",
    "descripcion": "Malbec. Inspirado en la pureza de lo esencial. Este vino es de color violeta oscuro profundo, con aroma de ciruelas, cerezas y notas de chocolate. Rico en boca, muy expresivo con un final largo y taninos aterciopelados.",
    "precio": null,
    "imagen": "assets/img/productos/argento-minimalista-malbec.png",
    "etiqueta": "Minimalista",
    "detallePdf": {
      "descripcionOficial": "Malbec. Inspirado en la pureza de lo esencial. Este vino es de color violeta oscuro profundo, con aroma de ciruelas, cerezas y notas de chocolate. Rico en boca, muy expresivo con un final largo y taninos aterciopelados.",
      "ficha": {
        "Caja": "6 Botellas",
        "Cepa": "100% Malbec.",
        "Región": "Rivadavia y Junín (Medrano), Luján de Cuyo, Maipú (Barrancas), Tunuyán y Tupungato, Mendoza.",
        "Fermentación": "Fermentación en tanques de acero inoxidable a 25-27 ºC por 8 días.",
        "Roble": "4 meses de crianza en barricas de roble 50% francés y 50% americano.",
        "AT": "5.25 g/L",
        "AR": "5.5 g/L",
        "pH": "3.74 g/L",
        "Alcohol": "13%",
        "Gastronomía / acompañante ideal": "Ternera, Cordero y Aves."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "argento-minimalista-rose",
    "nombre": "Minimalista Rosé",
    "bodega": "Argento",
    "linea": "Minimalista",
    "pais": "Argentina",
    "region": "Agrelo, Luján de Cuyo, Mendoza",
    "categoria": "Rosado",
    "cepa": "40% Syrah, 25% Malbec, 25% Pinot Gris y 10% Pinot Noir",
    "alcohol": "13%",
    "temperatura": "8º C - 10º C",
    "maridaje": "Cerdo, Marisco, Vegetariana, Aves, Queso tierno y cremoso, Aperitivos.",
    "descripcion": "Rosé. Inspirado en la pureza de lo esencial. De intensos aromas a frutos rojos frescos, con sabores a cerezas y melón. Un vino equilibrado con una acidez fresca y un final vivo.",
    "precio": null,
    "imagen": "assets/img/productos/argento-minimalista-rose.png",
    "etiqueta": "Rosado",
    "detallePdf": {
      "descripcionOficial": "Rosé. Inspirado en la pureza de lo esencial. De intensos aromas a frutos rojos frescos, con sabores a cerezas y melón. Un vino equilibrado con una acidez fresca y un final vivo.",
      "ficha": {
        "Caja": "6 Botellas",
        "Cepa": "40% Syrah, 25% Malbec, 25% Pinot Gris y 10% Pinot Noir.",
        "Región": "Agrelo, Luján de Cuyo, Mendoza.",
        "Fermentación": "Syrah y Malbec cosechados temprano para asegurar una buena acidez que resulta en un excelente balance en este vino rosado. Después de un leve contacto con la piel por aproximadamente 3 horas, se logró un hermoso color salmón y se separó el jugo de las pieles. La fermentación se realizó a temperaturas frías (14-16 ºC).",
        "AT": "7.1 g/L",
        "AR": "5.41 g/L",
        "pH": "3.21 g/L",
        "Alcohol": "13%",
        "Gastronomía / acompañante ideal": "Cerdo, Marisco, Vegetariana, Aves, Queso tierno y cremoso, Aperitivos."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "argento-juicy-steak-malbec",
    "nombre": "Juicy Steak Malbec",
    "bodega": "Argento",
    "linea": "Juicy Steak",
    "pais": "Argentina",
    "region": "Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "90% Malbec, 5% Syrah y 5% Bonarda de San Martín, Rivadavia y Junín, Mendoza",
    "alcohol": "13%",
    "temperatura": "16º C - 18º C",
    "maridaje": "Ideal para carnes y parrilla.",
    "descripcion": "Este Malbec frutado y sabroso de color violáceo profundo, tiene aromas de frutos rojos con sutiles notas de tabaco, complementados con ligeras notas herbáceas que conducen a un final suave y equilibrado.",
    "precio": null,
    "imagen": "assets/img/productos/argento-juicy-steak-malbec.png",
    "etiqueta": "Carne",
    "detallePdf": {
      "descripcionOficial": "Este Malbec frutado y sabroso de color violáceo profundo, tiene aromas de frutos rojos con sutiles notas de tabaco, complementados con ligeras notas herbáceas que conducen a un final suave y equilibrado.",
      "ficha": {
        "Caja": "6 Botellas",
        "Cepa": "90% Malbec, 5% Syrah y 5% Bonarda de San Martín, Rivadavia y Junín, Mendoza.",
        "Región": "Mendoza, Argentina.",
        "Fermentación": "Fermentación del acero inoxidable a 24-26° durante 8 días.",
        "Roble": "3 meses de crianza en 50% roble francés y 50% americano.",
        "AT": "5.29 g/L",
        "AR": "4 g/L",
        "pH": "3.75 g/L",
        "Alcohol": "13%"
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "esteco-don-david-reserva-tannat",
    "nombre": "Don David Reserva Tannat",
    "bodega": "El Esteco",
    "linea": "Don David Reserva",
    "pais": "Argentina",
    "region": "Salta, Valle de Calchaquíes, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Tannat",
    "alcohol": "14%",
    "temperatura": "16°C y 18°C",
    "maridaje": "Consumirlo entre 16°C y 18°C. Decantarlo o abrirlo 15 min previos al servicio. Acompaña carnes, cerdo y parrillas.",
    "descripcion": "La altitud ideal a 180 metros de altura, el sol siempre presente y la amplitud térmica justa proporcionan el ambiente ideal para la creación de vinos de alta gama. TERROIR ÚNICO Y EXCLUSIVO, un aislado desierto llamado Cafayate, aloja los viñedos más altos del mundo. Rojo bordó con destellos violáceos y tonos negros que impactan la vista. Profundo. De buena estructura. Recuerda a mermelada de frutos rojos, pasas de uva y chocolate. Vainilla y roble muy suave y armónico. Taninos firmes de gran concentración y fuerza. Armónico con percepción de frutas secas, humo, noble. Vino de persistencia larga.",
    "precio": 19.9,
    "imagen": "assets/img/productos/esteco-don-david-tannat.png",
    "etiqueta": "Reserva",
    "detallePdf": {
      "descripcionOficial": "La altitud ideal a 180 metros de altura, el sol siempre presente y la amplitud térmica justa proporcionan el ambiente ideal para la creación de vinos de alta gama. TERROIR ÚNICO Y EXCLUSIVO, un aislado desierto llamado Cafayate, aloja los viñedos más altos del mundo. Rojo bordó con destellos violáceos y tonos negros que impactan la vista. Profundo. De buena estructura. Recuerda a mermelada de frutos rojos, pasas de uva y chocolate. Vainilla y roble muy suave y armónico. Taninos firmes de gran concentración y fuerza. Armónico con percepción de frutas secas, humo, noble. Vino de persistencia larga.",
      "ficha": {
        "Cepa": "100% Tannat.",
        "Región": "Salta, Valle de Calchaquíes, Argentina.",
        "Roble": "El 70% del vino es añejado en contacto con roble americano y francés durante 12 meses. El blend final se logra sumando el 30% restante de Tannat conservado en tanques de acero inoxidable.",
        "pH": "3.60 g/L",
        "Alcohol": "14%",
        "Acidez": "5.85 g/L",
        "Azúcar residual": "2.95 g/L",
        "Temperatura de servicio": "16°C y 18°C",
        "Gastronomía / acompañante ideal": "Consumirlo entre 16°C y 18°C. Decantarlo o abrirlo 15 min previos al servicio. Acompaña carnes, cerdo y parrillas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "esteco-michel-torino-torrontes",
    "nombre": "Michel Torino Torrontés",
    "bodega": "El Esteco",
    "linea": "Michel Torino",
    "pais": "Argentina",
    "region": "Salta, Valle Cafayate, Argentina",
    "categoria": "Blanco",
    "cepa": "100% Torrontés",
    "alcohol": "13.5%",
    "temperatura": "8°C y 10°C",
    "maridaje": "Servir idealmente a temperaturas entre los 8 y los 10°C. Este vino acompaña perfectamente aves, mariscos y ensaladas.",
    "descripcion": "Los viñedos de Michel Torino se encuentran en la región de los Valles Calchaquíes, a una altura de 1700 msnm. Color amarillo brillante, claro y límpido que se transforma en reflejos dorados. Aromas muy atractivos e intensos. Presencia de rosas silvestres y jazmines. Vino exótico, con buena frescura y un final largo y lineal. Se destacan notas cítricas como la naranja y especias como el anís.",
    "precio": 12.9,
    "imagen": "assets/img/productos/esteco-michel-torino-torrontes.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Los viñedos de Michel Torino se encuentran en la región de los Valles Calchaquíes, a una altura de 1700 msnm. Color amarillo brillante, claro y límpido que se transforma en reflejos dorados. Aromas muy atractivos e intensos. Presencia de rosas silvestres y jazmines. Vino exótico, con buena frescura y un final largo y lineal. Se destacan notas cítricas como la naranja y especias como el anís.",
      "ficha": {
        "Cepa": "100% Torrontés.",
        "Región": "Salta, Valle Cafayate, Argentina.",
        "Alcohol": "13.5%",
        "Temperatura de servicio": "8°C y 10°C",
        "Gastronomía / acompañante ideal": "Servir idealmente a temperaturas entre los 8 y los 10°C. Este vino acompaña perfectamente aves, mariscos y ensaladas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-extra-brut",
    "nombre": "Trapiche Extra Brut",
    "bodega": "Trapiche",
    "linea": "Espumosos",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Maipú), Argentina",
    "categoria": "Espumoso",
    "cepa": "70% Chardonnay, 20% Semillón, 10% Malbec",
    "alcohol": "12,5% Alc./Vol.",
    "temperatura": "5º C. - 7º C.",
    "maridaje": "Perfecto para el comienzo de una comida, su paladar acompaña delicados bocados como ostras, caviar y amuse-bouche.",
    "descripcion": "Espumoso de color amarillo suave con reflejos verdes, este assemblage de Chardonnay, Semillón y Malbec, se caracteriza por sus finas y persistentes burbujas, intenso aroma y sabores que recuerdan al pan tostado, frutas maduras y un equilibrado final en boca.",
    "precio": 15.9,
    "imagen": "assets/img/productos/trapiche-extra-brut.png",
    "etiqueta": "Espumoso",
    "detallePdf": {
      "descripcionOficial": "Espumoso de color amarillo suave con reflejos verdes, este assemblage de Chardonnay, Semillón y Malbec, se caracteriza por sus finas y persistentes burbujas, intenso aroma y sabores que recuerdan al pan tostado, frutas maduras y un equilibrado final en boca.",
      "ficha": {
        "Cepa": "70% Chardonnay, 20% Semillón, 10% Malbec.",
        "Región": "Provincia de Mendoza (Maipú), Argentina.",
        "AT": "7 g/L",
        "AR": "3,5 g/L",
        "pH": "3.15 g/L",
        "Alcohol": "12,5% Alc./Vol.",
        "Temperatura de servicio": "5º C. - 7º C.",
        "Gastronomía / acompañante ideal": "Perfecto para el comienzo de una comida, su paladar acompaña delicados bocados como ostras, caviar y amuse-bouche."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-sparkling-rose",
    "nombre": "Trapiche Sparkling Rosé",
    "bodega": "Trapiche",
    "linea": "Espumosos",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Uco), Argentina",
    "categoria": "Espumoso",
    "cepa": "90% Pinot Noir y 10% Malbec",
    "alcohol": "12% Alc./Vol.",
    "temperatura": "7º C. - 9º C.",
    "maridaje": "Excelente como aperitivo o para acompañar frutos de mar y pescados. Combina muy bien con ostras y con postres con frutas frescas.",
    "descripcion": "Color rosa pálido con suaves reflejos naranjas. De aroma intenso a frutos rojos y pan tostado provenientes del cuidado contacto sobre lías. De gran armonía entre el azúcar y la acidez, que lo hace fresco y de sabor persistente.",
    "precio": 16.9,
    "imagen": "assets/img/productos/trapiche-sparkling-rose.png",
    "etiqueta": "Rosé",
    "detallePdf": {
      "descripcionOficial": "Color rosa pálido con suaves reflejos naranjas. De aroma intenso a frutos rojos y pan tostado provenientes del cuidado contacto sobre lías. De gran armonía entre el azúcar y la acidez, que lo hace fresco y de sabor persistente.",
      "ficha": {
        "Cepa": "90% Pinot Noir y 10% Malbec.",
        "Región": "Provincia de Mendoza (Uco), Argentina.",
        "Alcohol": "12% Alc./Vol.",
        "Temperatura de servicio": "7º C. - 9º C.",
        "Gastronomía / acompañante ideal": "Excelente como aperitivo o para acompañar frutos de mar y pescados. Combina muy bien con ostras y con postres con frutas frescas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-medalla-cabernet-sauvignon",
    "nombre": "Trapiche Medalla Cabernet Sauvignon",
    "bodega": "Trapiche",
    "linea": "Medalla",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Cabernet Sauvignon",
    "alcohol": "14,8% Alc./Vol.",
    "temperatura": "17º C. - 19º C.",
    "maridaje": "Ideal para servir con todo tipo de carnes rojas, quesos y pastas con salsas bien especiadas.",
    "descripcion": "En 1983, en homenaje a los 100 años de la bodega, emerge este vino de excepción elaborado con uvas provenientes de la Primera Zona vitivinícola mendocina. Este vino posee un color rojo intenso con tonos violetas. Expresa aromas complejos con notas de mermelada de ciruela, pimientos verdes, pasas de uva, tabaco y un delicado toque de roble. De sabor redondo, en boca es muy persistente, con taninos suaves y maduros.",
    "precio": 29.9,
    "imagen": "assets/img/productos/trapiche-medalla-cabernet-sauvignon.png",
    "etiqueta": "Premium",
    "detallePdf": {
      "descripcionOficial": "En 1983, en homenaje a los 100 años de la bodega, emerge este vino de excepción elaborado con uvas provenientes de la Primera Zona vitivinícola mendocina. Este vino posee un color rojo intenso con tonos violetas. Expresa aromas complejos con notas de mermelada de ciruela, pimientos verdes, pasas de uva, tabaco y un delicado toque de roble. De sabor redondo, en boca es muy persistente, con taninos suaves y maduros.",
      "ficha": {
        "Cepa": "100% Cabernet Sauvignon.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Crianza": "Criado en barricas de roble francés de primer uso durante 18 meses.",
        "AT": "6 g/L",
        "AR": "2,9 g/L",
        "pH": "3.62 g/L",
        "Alcohol": "14,8% Alc./Vol.",
        "Temperatura de servicio": "17º C. - 19º C.",
        "Gastronomía / acompañante ideal": "Ideal para servir con todo tipo de carnes rojas, quesos y pastas con salsas bien especiadas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-reserva-chardonnay",
    "nombre": "Trapiche Reserva Chardonnay",
    "bodega": "Trapiche",
    "linea": "Reserva",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Blanco",
    "cepa": "100% Chardonnay",
    "alcohol": "13,5% Alc./Vol.",
    "temperatura": "4º C. - 6º C.",
    "maridaje": "Ideal para acompañar una bondiola de cerdo asada con manzanas verdes y crema de limón. Marida a la perfección con fondue de queso, e incluso ensaladas de verano.",
    "descripcion": "De color amarillo verdoso, este vino expresa aromas a peras y pastel de manzana, con un dejo de pan tostado. En boca presenta una buena frescura, y es vibrante y mineral con un final muy untuoso.",
    "precio": 14.9,
    "imagen": "assets/img/productos/trapiche-reserva-chardonnay.png",
    "etiqueta": "Reserva",
    "detallePdf": {
      "descripcionOficial": "De color amarillo verdoso, este vino expresa aromas a peras y pastel de manzana, con un dejo de pan tostado. En boca presenta una buena frescura, y es vibrante y mineral con un final muy untuoso.",
      "ficha": {
        "Cepa": "100% Chardonnay.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Crianza": "Criado en roble francés durante 9 meses.",
        "Alcohol": "13,5% Alc./Vol.",
        "Temperatura de servicio": "4º C. - 6º C.",
        "Gastronomía / acompañante ideal": "Ideal para acompañar una bondiola de cerdo asada con manzanas verdes y crema de limón. Marida a la perfección con fondue de queso, e incluso ensaladas de verano."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-reserva-malbec",
    "nombre": "Trapiche Reserva Malbec",
    "bodega": "Trapiche",
    "linea": "Reserva",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Malbec",
    "alcohol": "13,5% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Ideal para acompañar quesos maduros, carnes rojas a la parrilla, comidas con salsas rojas, guisados y el típico asado argentino.",
    "descripcion": "De un intenso color rojo violáceo, este Malbec expresa aromas dulces a moras y ciruelas, percibiéndose notas ahumadas con una elegante presencia de vainilla. En boca se percibe su textura aterciopelada y un final amable y persistente.",
    "precio": 14.9,
    "imagen": "assets/img/productos/trapiche-reserva-malbec.png",
    "etiqueta": "Más vendido",
    "detallePdf": {
      "descripcionOficial": "De un intenso color rojo violáceo, este Malbec expresa aromas dulces a moras y ciruelas, percibiéndose notas ahumadas con una elegante presencia de vainilla. En boca se percibe su textura aterciopelada y un final amable y persistente.",
      "ficha": {
        "Cepa": "100% Malbec.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Crianza": "Criado en roble francés y americano durante 12 meses.",
        "Alcohol": "13,5% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Ideal para acompañar quesos maduros, carnes rojas a la parrilla, comidas con salsas rojas, guisados y el típico asado argentino."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-reserva-merlot",
    "nombre": "Trapiche Reserva Merlot",
    "bodega": "Trapiche",
    "linea": "Reserva",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Merlot",
    "alcohol": "13,5% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Perfecto para acompañar un ojo de bife en una olla de barro. Destaca muy bien en compañía de platos de conejo o perdiz, spaghetti o pastas rellenas. Su textura suave lo hace muy versátil a la hora del maridaje.",
    "descripcion": "Trapiche Reserva es la línea emblemática de la bodega que nace al pie de la Cordillera de Los Andes para transformarse en la mejor expresión de todo lo bueno que Trapiche tiene para dar. De color intenso, este Merlot expresa aromas complejos de cerezas maduras, combinadas con coco, canela y tabaco.",
    "precio": 14.9,
    "imagen": "assets/img/productos/trapiche-reserva-merlot.png",
    "etiqueta": "Reserva",
    "detallePdf": {
      "descripcionOficial": "Trapiche Reserva es la línea emblemática de la bodega que nace al pie de la Cordillera de Los Andes para transformarse en la mejor expresión de todo lo bueno que Trapiche tiene para dar. De color intenso, este Merlot expresa aromas complejos de cerezas maduras, combinadas con coco, canela y tabaco.",
      "ficha": {
        "Cepa": "100% Merlot.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Crianza": "Criado en roble francés y americano durante 12 meses.",
        "Alcohol": "13,5% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Perfecto para acompañar un ojo de bife en una olla de barro. Destaca muy bien en compañía de platos de conejo o perdiz, spaghetti o pastas rellenas. Su textura suave lo hace muy versátil a la hora del maridaje."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-reserva-cabernet-sauvignon",
    "nombre": "Trapiche Reserva Cabernet Sauvignon",
    "bodega": "Trapiche",
    "linea": "Reserva",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Cabernet Sauvignon",
    "alcohol": "13,5% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Sugerido para acompañar tablas de quesos picantes, carnes rojas asadas con costra o condimentadas con hierbas.",
    "descripcion": "De un intenso color rojo, este vino expresa aromas a moras, especias tostadas y cedro. Pleno y redondo, en boca se perciben taninos aterciopelados y un final en boca con notas de tabaco y humo.",
    "precio": 14.9,
    "imagen": "assets/img/productos/trapiche-reserva-cabernet-sauvignon.png",
    "etiqueta": "Reserva",
    "detallePdf": {
      "descripcionOficial": "De un intenso color rojo, este vino expresa aromas a moras, especias tostadas y cedro. Pleno y redondo, en boca se perciben taninos aterciopelados y un final en boca con notas de tabaco y humo.",
      "ficha": {
        "Cepa": "100% Cabernet Sauvignon.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Crianza": "Criado en roble francés y americano durante 12 meses.",
        "Alcohol": "13,5% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Sugerido para acompañar tablas de quesos picantes, carnes rojas asadas con costra o condimentadas con hierbas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-chardonnay",
    "nombre": "Trapiche Vineyards Chardonnay",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Blanco",
    "cepa": "100% Chardonnay",
    "alcohol": "13.5% Alc./Vol.",
    "temperatura": "10º C. - 12º C.",
    "maridaje": "Ideal para servir con todo tipo de mariscos, platos livianos con vegetales y pastas acompañadas de salsas suaves.",
    "descripcion": "Vino de color amarillo, con algunos matices verdosos. Aromas a manzanas rojas y piñas maduras. Fresca acidez que provee un final suave y prolongado. Muy placentero.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-chardonnay.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Vino de color amarillo, con algunos matices verdosos. Aromas a manzanas rojas y piñas maduras. Fresca acidez que provee un final suave y prolongado. Muy placentero.",
      "ficha": {
        "Cepa": "100% Chardonnay.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "13.5% Alc./Vol.",
        "Temperatura de servicio": "10º C. - 12º C.",
        "Gastronomía / acompañante ideal": "Ideal para servir con todo tipo de mariscos, platos livianos con vegetales y pastas acompañadas de salsas suaves."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-pinot-noir",
    "nombre": "Trapiche Vineyards Pinot Noir",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Pinot Noir",
    "alcohol": "12.5% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Ideal para maridar con pastas, arroz y carnes blancas.",
    "descripcion": "De un leve color rubí con aromas frutados de ciruelas y cerezas. Liviano y aterciopelado. Es un vino fresco con una textura suave.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-pinot-noir.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "De un leve color rubí con aromas frutados de ciruelas y cerezas. Liviano y aterciopelado. Es un vino fresco con una textura suave.",
      "ficha": {
        "Cepa": "100% Pinot Noir.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "12.5% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Ideal para maridar con pastas, arroz y carnes blancas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-malbec",
    "nombre": "Trapiche Vineyards Malbec",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Malbec",
    "alcohol": "12.5% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Ideal para acompañar carnes asadas. Combina muy bien con pastas, cocina sazonada y quesos semi duros como el gouda, el gruyere o el edam.",
    "descripcion": "De color rojo vivo con tintes violáceos, aromas frutales a ciruelas y cerezas. Redondo en boca, con un toque de trufas y vainilla.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-malbec.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "De color rojo vivo con tintes violáceos, aromas frutales a ciruelas y cerezas. Redondo en boca, con un toque de trufas y vainilla.",
      "ficha": {
        "Cepa": "100% Malbec.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "12.5% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Ideal para acompañar carnes asadas. Combina muy bien con pastas, cocina sazonada y quesos semi duros como el gouda, el gruyere o el edam."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-merlot",
    "nombre": "Trapiche Vineyards Merlot",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Merlot",
    "alcohol": "12.5% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Ideal para acompañar carnes con guarnición de verduras, pastas y quesos semi duros como el gouda, el gruyere o el edam.",
    "descripcion": "Intenso color rojo, sabores de frutos rojos maduros y un toque sutil de pimienta negra. Se trata de un vino de cuerpo medio, jugoso y suave en boca.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-merlot.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Intenso color rojo, sabores de frutos rojos maduros y un toque sutil de pimienta negra. Se trata de un vino de cuerpo medio, jugoso y suave en boca.",
      "ficha": {
        "Cepa": "100% Merlot.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "12.5% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Ideal para acompañar carnes con guarnición de verduras, pastas y quesos semi duros como el gouda, el gruyere o el edam."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-cabernet-sauvignon",
    "nombre": "Trapiche Vineyards Cabernet Sauvignon",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Cabernet Sauvignon",
    "alcohol": "13% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Ideal para carnes asadas, verduras cocidas al vapor y quesos semi duros como el Gouda, Gruyere y Edam.",
    "descripcion": "De poderoso color rojo, destellante. Sus aromas a especias y frutas negras envuelven la nariz, presentándose finalmente equilibrado, con un final persistente en boca. Excelente armonía. Taninos perdurables.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-cabernet-sauvignon.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "De poderoso color rojo, destellante. Sus aromas a especias y frutas negras envuelven la nariz, presentándose finalmente equilibrado, con un final persistente en boca. Excelente armonía. Taninos perdurables.",
      "ficha": {
        "Cepa": "100% Cabernet Sauvignon.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "13% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Ideal para carnes asadas, verduras cocidas al vapor y quesos semi duros como el Gouda, Gruyere y Edam."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-syrah",
    "nombre": "Trapiche Vineyards Syrah",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Tinto",
    "cepa": "100% Syrah",
    "alcohol": "13% Alc./Vol.",
    "temperatura": "16º C. - 18º C.",
    "maridaje": "Puede servirse con comidas típicas argentinas, como así también con platos de la sofisticada y sabrosa Nouvelle Cuisine.",
    "descripcion": "De color rojo profundo y un intenso aroma a frutos rojos y regaliz. Su ataque dulce sorprende en boca con taninos suaves, carácter especiado y sofisticada presencia en el paladar.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-syrah.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "De color rojo profundo y un intenso aroma a frutos rojos y regaliz. Su ataque dulce sorprende en boca con taninos suaves, carácter especiado y sofisticada presencia en el paladar.",
      "ficha": {
        "Cepa": "100% Syrah.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "13% Alc./Vol.",
        "Temperatura de servicio": "16º C. - 18º C.",
        "Gastronomía / acompañante ideal": "Puede servirse con comidas típicas argentinas, como así también con platos de la sofisticada y sabrosa Nouvelle Cuisine."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-pinot-grigio",
    "nombre": "Trapiche Vineyards Pinot Grigio",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Blanco",
    "cepa": "100% Pinot Grigio",
    "alcohol": "12.5% Alc./Vol.",
    "temperatura": "10º C. - 12º C.",
    "maridaje": "Ideal como aperitivo. Excelente combinación con pescados ahumados, quesos y vegetales. También acompaña muy bien platos gratinados y carnes blancas.",
    "descripcion": "De color amarillo brillante con tintes verdosos. Aromas frescos de pomelo y espárragos. Seco en boca con una acidez placentera.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-pinot-grigio.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "De color amarillo brillante con tintes verdosos. Aromas frescos de pomelo y espárragos. Seco en boca con una acidez placentera.",
      "ficha": {
        "Cepa": "100% Pinot Grigio.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "12.5% Alc./Vol.",
        "Temperatura de servicio": "10º C. - 12º C.",
        "Gastronomía / acompañante ideal": "Ideal como aperitivo. Excelente combinación con pescados ahumados, quesos y vegetales. También acompaña muy bien platos gratinados y carnes blancas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-sauvignon-blanc",
    "nombre": "Trapiche Vineyards Sauvignon Blanc",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Blanco",
    "cepa": "100% Sauvignon Blanc",
    "alcohol": "13% Alc./Vol.",
    "temperatura": "10º C. - 12º C.",
    "maridaje": "Ideal como aperitivo. Excelente para ser combinado con pescados ahumados, quesos y vegetales. También para maridarse con platos gratinados y carnes.",
    "descripcion": "Un vino de color amarillo con algunos destellos verdosos, de frescos, frutados y herbáceos aromas como a pomelos y espárragos. En la boca, despliega una sensación seca que se combina con una agradable acidez.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-sauvignon-blanc.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Un vino de color amarillo con algunos destellos verdosos, de frescos, frutados y herbáceos aromas como a pomelos y espárragos. En la boca, despliega una sensación seca que se combina con una agradable acidez.",
      "ficha": {
        "Cepa": "100% Sauvignon Blanc.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "13% Alc./Vol.",
        "Temperatura de servicio": "10º C. - 12º C.",
        "Gastronomía / acompañante ideal": "Ideal como aperitivo. Excelente para ser combinado con pescados ahumados, quesos y vegetales. También para maridarse con platos gratinados y carnes."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "trapiche-vineyards-rose",
    "nombre": "Trapiche Vineyards Rosé",
    "bodega": "Trapiche",
    "linea": "Vineyards",
    "pais": "Argentina",
    "region": "Provincia de Mendoza, Argentina",
    "categoria": "Rosado",
    "cepa": "Malbec 65% - Cabernet Sauvignon 35%",
    "alcohol": "12.5% Alc./Vol.",
    "temperatura": "10º C. - 12º C.",
    "maridaje": "Aperitivo ideal para días de verano. Acompaña muy bien ensaladas, platos con pescados y comidas sazonadas.",
    "descripcion": "Las uvas Malbec y Cabernet Sauvignon otorgan a este vino delicadeza y elegancia. De un transparente color rojo, presenta intensos aromas a frutas negras y frutillas.",
    "precio": 10.9,
    "imagen": "assets/img/productos/trapiche-vineyards-rose.png",
    "etiqueta": "Rosado",
    "detallePdf": {
      "descripcionOficial": "Las uvas Malbec y Cabernet Sauvignon otorgan a este vino delicadeza y elegancia. De un transparente color rojo, presenta intensos aromas a frutas negras y frutillas.",
      "ficha": {
        "Cepa": "Malbec 65% - Cabernet Sauvignon 35%.",
        "Región": "Provincia de Mendoza, Argentina.",
        "Alcohol": "12.5% Alc./Vol.",
        "Temperatura de servicio": "10º C. - 12º C.",
        "Gastronomía / acompañante ideal": "Aperitivo ideal para días de verano. Acompaña muy bien ensaladas, platos con pescados y comidas sazonadas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "astica-malbec",
    "nombre": "Astica Malbec",
    "bodega": "Trapiche",
    "linea": "Astica",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Cuyo), Argentina",
    "categoria": "Tinto",
    "cepa": "100% Malbec",
    "alcohol": "13% Alc./Vol.",
    "temperatura": "15º C. - 17º C.",
    "maridaje": "Ideal para acompañar carnes rojas asadas, pizzas, pasticho, pastas con salsa de tomate bien especiada.",
    "descripcion": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
    "precio": 7.9,
    "imagen": "assets/img/productos/astica-malbec.png",
    "etiqueta": "Nuevo",
    "detallePdf": {
      "descripcionOficial": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
      "ficha": {
        "Cepa": "100% Malbec.",
        "Región": "Provincia de Mendoza (Cuyo), Argentina.",
        "Alcohol": "13% Alc./Vol.",
        "Temperatura de servicio": "15º C. - 17º C.",
        "Gastronomía / acompañante ideal": "Ideal para acompañar carnes rojas asadas, pizzas, pasticho, pastas con salsa de tomate bien especiada."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "astica-merlot",
    "nombre": "Astica Merlot",
    "bodega": "Trapiche",
    "linea": "Astica",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Cuyo), Argentina",
    "categoria": "Tinto",
    "cepa": "100% Merlot",
    "alcohol": "12,5% Alc./Vol.",
    "temperatura": "15º C. - 17º C.",
    "maridaje": "Tacos, burritos, platos especiados y con curry, pastas, pizzas, quesos, pescados asados, carnes, ternera.",
    "descripcion": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
    "precio": 7.9,
    "imagen": "assets/img/productos/astica-merlot.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
      "ficha": {
        "Cepa": "100% Merlot.",
        "Región": "Provincia de Mendoza (Cuyo), Argentina.",
        "Alcohol": "12,5% Alc./Vol.",
        "Temperatura de servicio": "15º C. - 17º C.",
        "Gastronomía / acompañante ideal": "Tacos, burritos, platos especiados y con curry, pastas, pizzas, quesos, pescados asados, carnes, ternera."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "astica-cabernet-sauvignon",
    "nombre": "Astica Cabernet Sauvignon",
    "bodega": "Trapiche",
    "linea": "Astica",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Cuyo), Argentina",
    "categoria": "Tinto",
    "cepa": "100% Cabernet Sauvignon",
    "alcohol": "12,5% Alc./Vol.",
    "temperatura": "15º C. - 17º C.",
    "maridaje": "Ideal para acompañar carnes rojas, platos asados y aromatizados, quesos picantes.",
    "descripcion": "Este Cabernet Sauvignon tiene aromas de moras negras maduras, paladar suave y redondo y frutado.",
    "precio": 7.9,
    "imagen": "assets/img/productos/astica-cabernet-sauvignon.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Este Cabernet Sauvignon tiene aromas de moras negras maduras, paladar suave y redondo y frutado.",
      "ficha": {
        "Cepa": "100% Cabernet Sauvignon.",
        "Región": "Provincia de Mendoza (Cuyo), Argentina.",
        "Alcohol": "12,5% Alc./Vol.",
        "Temperatura de servicio": "15º C. - 17º C.",
        "Gastronomía / acompañante ideal": "Ideal para acompañar carnes rojas, platos asados y aromatizados, quesos picantes."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "astica-tinto-dulce",
    "nombre": "Astica Tinto Dulce",
    "bodega": "Trapiche",
    "linea": "Astica",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Cuyo), Argentina",
    "categoria": "Tinto",
    "cepa": "Blend",
    "alcohol": "13% Alc./Vol.",
    "temperatura": "14º C. - 16º C.",
    "maridaje": "Ideal para el verano, puedes consumirlo con hielo como tinto de verano. Acompaña perfecto nuestro plato navideño, postres, quesos blandos y frutos secos.",
    "descripcion": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
    "precio": 7.9,
    "imagen": "assets/img/productos/astica-tinto-dulce.png",
    "etiqueta": "Dulce",
    "detallePdf": {
      "descripcionOficial": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
      "ficha": {
        "Cepa": "Blend.",
        "Región": "Provincia de Mendoza (Cuyo), Argentina.",
        "Alcohol": "13% Alc./Vol.",
        "Temperatura de servicio": "14º C. - 16º C.",
        "Gastronomía / acompañante ideal": "Ideal para el verano, puedes consumirlo con hielo como tinto de verano. Acompaña perfecto nuestro plato navideño, postres, quesos blandos y frutos secos."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "astica-sauvignon-blanc",
    "nombre": "Astica Sauvignon Blanc",
    "bodega": "Trapiche",
    "linea": "Astica",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Cuyo), Argentina",
    "categoria": "Blanco",
    "cepa": "100% Sauvignon Blanc",
    "alcohol": "13,5% Alc./Vol.",
    "temperatura": "10º C. - 12º C.",
    "maridaje": "Vino complejo que puede ser disfrutado como un aperitivo o con carnes blancas, también con ensalada de camarones.",
    "descripcion": "Su aroma intenso combina frutas tropicales con notas herbáceas. Es un vino crujiente, vivo, frutado. De agradable acidez. De cuerpo medio, con final persistente.",
    "precio": 7.9,
    "imagen": "assets/img/productos/astica-sauvignon-blanc.png",
    "etiqueta": "Fresco",
    "detallePdf": {
      "descripcionOficial": "Su aroma intenso combina frutas tropicales con notas herbáceas. Es un vino crujiente, vivo, frutado. De agradable acidez. De cuerpo medio, con final persistente.",
      "ficha": {
        "Cepa": "100% Sauvignon Blanc.",
        "Región": "Provincia de Mendoza (Cuyo), Argentina.",
        "Alcohol": "13,5% Alc./Vol.",
        "Temperatura de servicio": "10º C. - 12º C.",
        "Gastronomía / acompañante ideal": "Vino complejo que puede ser disfrutado como un aperitivo o con carnes blancas, también con ensalada de camarones."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "astica-torrontes",
    "nombre": "Astica Torrontés",
    "bodega": "Trapiche",
    "linea": "Astica",
    "pais": "Argentina",
    "region": "Provincia de Mendoza (Cuyo), Argentina",
    "categoria": "Blanco",
    "cepa": "100% Torrontés",
    "alcohol": "13% Alc./Vol.",
    "temperatura": "10º C. - 12º C.",
    "maridaje": "Mariscos, platos sazonados, Empanada Argentina.",
    "descripcion": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
    "precio": 7.9,
    "imagen": "assets/img/productos/astica-torrontes.png",
    "etiqueta": "Aromático",
    "detallePdf": {
      "descripcionOficial": "En lengua aborigen, Astica significa \"lugar lleno de árboles\", que describe la belleza natural de nuestro Valle Fértil, su vegetación y su invitación a disfrutar de la vida. Este vino es una muestra de gratitud a la fertilidad de nuestro suelo.",
      "ficha": {
        "Cepa": "100% Torrontés.",
        "Región": "Provincia de Mendoza (Cuyo), Argentina.",
        "Alcohol": "13% Alc./Vol.",
        "Temperatura de servicio": "10º C. - 12º C.",
        "Gastronomía / acompañante ideal": "Mariscos, platos sazonados, Empanada Argentina."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-grey-glacier-sauvignon-blanc",
    "nombre": "Grey Glacier Sauvignon Blanc",
    "bodega": "Ventisquero",
    "linea": "Grey Glacier",
    "pais": "Chile",
    "region": "Valle de Atacama - Desierto de Atacama",
    "categoria": "Blanco",
    "cepa": "100% Sauvignon Blanc",
    "alcohol": "13.0%",
    "temperatura": "7-8°C",
    "maridaje": "Se recomienda beber a una T° entre 7-8°C. Armoniza bien con ostras, erizos, pescados grasos, salmón, ceviches, mariscos, pescados, carnes blancas, pulpo, tartar atún.",
    "descripcion": "Color verde amarillo, aromas cítricos, mezclados con notas a ají verde. Fresco y de gran volumen, es un vino estructurado en el paladar y de una acidez alta que entrega tensión con una mineralidad en boca, otorgando un final limpio y persistente.",
    "precio": 22.9,
    "imagen": "assets/img/productos/ventisquero-grey-sauvignon-blanc.png",
    "etiqueta": "Premium",
    "detallePdf": {
      "descripcionOficial": "Color verde amarillo, aromas cítricos, mezclados con notas a ají verde. Fresco y de gran volumen, es un vino estructurado en el paladar y de una acidez alta que entrega tensión con una mineralidad en boca, otorgando un final limpio y persistente.",
      "ficha": {
        "Cepa": "100% Sauvignon Blanc.",
        "Región": "Valle de Atacama - Desierto de Atacama.",
        "Fermentación": "Maceración en frío por un período entre 6 a 8 horas. La fermentación se realizó lentamente, manteniendo un control constante a baja temperatura (12-15º C).",
        "Roble": "La crianza de este vino fue hecha en Foudres de 2.500 lts durante 10 meses sobre sus lías, realizando suaves movimientos.",
        "pH": "3.28 g/L",
        "Alcohol": "13.0%",
        "Acidez": "6.70 g/L",
        "Azúcar residual": "1.58 g/L",
        "Temperatura de servicio": "7-8°C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 7-8°C. Armoniza bien con ostras, erizos, pescados grasos, salmón, ceviches, mariscos, pescados, carnes blancas, pulpo, tartar atún."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-grey-glacier-garnacha-carinena-mataro",
    "nombre": "Grey Glacier Garnacha / Cariñena / Mataro",
    "bodega": "Ventisquero",
    "linea": "Grey Glacier",
    "pais": "Chile",
    "region": "Valle de Colchagua - Apalta",
    "categoria": "Tinto",
    "cepa": "59% Garnacha - 22% Cariñena - 19% Mataro",
    "alcohol": "14.0%",
    "temperatura": "14-16º C",
    "maridaje": "Se recomienda beber a una T° entre 14-16º C. Armoniza bien con charcutería (Salami – Basturma – Jamón Serrano), cordero, chorizo, carne en vara, osobuco, carne de caza, choripán.",
    "descripcion": "Una mezcla tradicional del Mediterráneo pero con el estilo de los vinos del nuevo mundo, mostrando mucha fruta y una rica acidez. Con un mínimo de paso en barrica resulta en un vino ligero, para tomar solo como aperitivo o con variedad de acompañamientos.",
    "precio": 24.9,
    "imagen": "assets/img/productos/ventisquero-grey-garnacha-carinena-mataro.png",
    "etiqueta": "Premium",
    "detallePdf": {
      "descripcionOficial": "Una mezcla tradicional del Mediterráneo pero con el estilo de los vinos del nuevo mundo, mostrando mucha fruta y una rica acidez. Con un mínimo de paso en barrica resulta en un vino ligero, para tomar solo como aperitivo o con variedad de acompañamientos.",
      "ficha": {
        "Cepa": "59% Garnacha - 22% Cariñena - 19% Mataro.",
        "Región": "Valle de Colchagua - Apalta.",
        "Fermentación": "Pre-maceración entre 3 a 5 días. Luego se hacen 2 a 3 pisoneos por día, con temperatura controlada entre 22°C y 26°C. Post maceración por 1 a 2 semanas.",
        "Roble": "100% de este vino es criado en foudres de 2.500 lts por aproximadamente 1 año.",
        "pH": "3.50 g/L",
        "Alcohol": "14.0%",
        "Acidez": "5.44 g/L",
        "Azúcar residual": "3.59 g/L",
        "Temperatura de servicio": "14-16º C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 14-16º C. Armoniza bien con charcutería (Salami – Basturma – Jamón Serrano), cordero, chorizo, carne en vara, osobuco, carne de caza, choripán."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-grey-glacier-carmenere",
    "nombre": "Grey Glacier Carménère",
    "bodega": "Ventisquero",
    "linea": "Grey Glacier",
    "pais": "Chile",
    "region": "Valle del Maipo",
    "categoria": "Tinto",
    "cepa": "100% Carménère",
    "alcohol": "13.5%",
    "temperatura": "16-18°C",
    "maridaje": "Se recomienda beber a una T° entre 16-18°C. Acompaña quesos, carnes rojas, ciervo, jabalí, cerdo, cordero.",
    "descripcion": "Un Carménère de color rojo donde se aprecian todas las notas clásicas de la variedad como la pimienta verde, pero mostrándolas bien suaves y redondas. Con un espectacular aroma a frutas negras, algo de tierra y flores como violeta.",
    "precio": 24.9,
    "imagen": "assets/img/productos/ventisquero-grey-carmenere.png",
    "etiqueta": "Premium",
    "detallePdf": {
      "descripcionOficial": "Un Carménère de color rojo donde se aprecian todas las notas clásicas de la variedad como la pimienta verde, pero mostrándolas bien suaves y redondas. Con un espectacular aroma a frutas negras, algo de tierra y flores como violeta.",
      "ficha": {
        "Cepa": "100% Carménère.",
        "Región": "Valle del Maipo.",
        "Fermentación": "Maceración pre-fermentativa a unos 8°C por 5 días, se comienza a remontar, fermentando entre 22 a 26°C, los remontajes se deciden todos los días por degustación.",
        "Roble": "El 100% de este vino se dejó reposar durante 18 meses en barricas de encina francesa de grano extrafino.",
        "pH": "3.61 g/L",
        "Alcohol": "13.5%",
        "Acidez": "5.73 g/L",
        "Azúcar residual": "3.25 g/L",
        "Temperatura de servicio": "16-18°C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 16-18°C. Acompaña quesos, carnes rojas, ciervo, jabalí, cerdo, cordero."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-reserva-cabernet-sauvignon",
    "nombre": "Reserva Cabernet Sauvignon",
    "bodega": "Ventisquero",
    "linea": "Reserva Alma de los Andes",
    "pais": "Chile",
    "region": "Valle Maipo, Chile",
    "categoria": "Tinto",
    "cepa": "85% Cabernet Sauvignon 15% Syrah",
    "alcohol": "13%",
    "temperatura": "16° C",
    "maridaje": "Se recomienda beber a una T° entre 16° C. Ideal para acompañar con quesos maduros, carnes grilladas y platos bien condimentados.",
    "descripcion": "Rojo rubí profundo. Expresivo e intenso en frutas rojas y negras frescas, especialmente del tipo berries como frutillas, frambuesas, arándanos y cassis que se mezclan con aromas de pimienta negra, caramelo, tabaco y chocolate. De cuerpo equilibrado, buena estructura y acidez presente, con taninos maduros. Final frutal, largo y persistente.",
    "precio": 15.9,
    "imagen": "assets/img/productos/ventisquero-reserva-cabernet-sauvignon.png",
    "etiqueta": "Reserva",
    "detallePdf": {
      "descripcionOficial": "Rojo rubí profundo. Expresivo e intenso en frutas rojas y negras frescas, especialmente del tipo berries como frutillas, frambuesas, arándanos y cassis que se mezclan con aromas de pimienta negra, caramelo, tabaco y chocolate. De cuerpo equilibrado, buena estructura y acidez presente, con taninos maduros. Final frutal, largo y persistente.",
      "ficha": {
        "Cepa": "85% Cabernet Sauvignon 15% Syrah.",
        "Región": "Valle Maipo, Chile.",
        "Fermentación": "Maceración pre-fermentativa a baja temperatura, el mosto fue fermentado en estanques de acero inoxidable.",
        "Roble": "70% del vino se dejó con guarda en encina francesa durante 10 meses, para luego permanecer en botella por 3 meses.",
        "pH": "3.70 g/L",
        "Alcohol": "13%",
        "Acidez": "5.14 g/L",
        "Azúcar residual": "3,5 g/L",
        "Temperatura de servicio": "16° C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 16° C. Ideal para acompañar con quesos maduros, carnes grilladas y platos bien condimentados."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-reserva-carmenere",
    "nombre": "Reserva Carménère",
    "bodega": "Ventisquero",
    "linea": "Reserva Alma de los Andes",
    "pais": "Chile",
    "region": "Valle de Colchagua, Chile",
    "categoria": "Tinto",
    "cepa": "Carménere 85% Syrah 15%",
    "alcohol": "13.0%",
    "temperatura": "16-17º C",
    "maridaje": "Se recomienda beber a una Tº entre 16-17º C. Ideal para acompañar quesos suaves, platos a base de crema, guisos, estofados y preparaciones especiadas.",
    "descripcion": "Rojo cereza profundo. Intenso y atractivo, resaltan aromas a frutas como arándano, mora, grosella, frutilla y cereza, junto a notas especiadas y terrosas con toques de chocolate, y vainilla. Resalta su rica estructura, de cuerpo equilibrado, con taninos redondos y aterciopelados que la dan un gran volumen. Final limpio y elegante.",
    "precio": 15.9,
    "imagen": "assets/img/productos/ventisquero-reserva-carmenere.png",
    "etiqueta": "Reserva",
    "detallePdf": {
      "descripcionOficial": "Rojo cereza profundo. Intenso y atractivo, resaltan aromas a frutas como arándano, mora, grosella, frutilla y cereza, junto a notas especiadas y terrosas con toques de chocolate, y vainilla. Resalta su rica estructura, de cuerpo equilibrado, con taninos redondos y aterciopelados que la dan un gran volumen. Final limpio y elegante.",
      "ficha": {
        "Cepa": "Carménere 85% Syrah 15%.",
        "Región": "Valle de Colchagua, Chile.",
        "Fermentación": "Maceración pre-fermentativa a bajas temperaturas para extraer mayor cantidad de color y aroma, a continuación, el mosto fue fermentado en estanques de acero inoxidable.",
        "Roble": "70% del vino se dejó con guarda en encina francesa durante 10 meses, para luego permanecer en botella por 3 meses.",
        "pH": "3.64 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.17 g/L",
        "Azúcar residual": "4.0 g/L",
        "Temperatura de servicio": "16-17º C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una Tº entre 16-17º C. Ideal para acompañar quesos suaves, platos a base de crema, guisos, estofados y preparaciones especiadas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-clasico-chardonnay",
    "nombre": "Clásico Chardonnay",
    "bodega": "Ventisquero",
    "linea": "Clásico",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Blanco",
    "cepa": "Chardonnay 100%",
    "alcohol": "13.0%",
    "temperatura": "8-10º C",
    "maridaje": "Se recomienda beber a una temperatura entre 8-10º C. Puede usarse como aperitivo o para acompañar ensaladas, pasta, pescado, carnes blancas, e incluso postres de frutas frescas.",
    "descripcion": "Amarillo brillante con tonalidades verdes. Este vino es expresivo, fresco y mineral, con aromas de frutas tropicales como piña, papaya y mango. En boca es delicado, de cuerpo medio, equilibrado y redondo en el paladar, dejando un fresco y frutal final, de buena persistencia.",
    "precio": 9.9,
    "imagen": "assets/img/productos/ventisquero-clasico-chardonnay.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Amarillo brillante con tonalidades verdes. Este vino es expresivo, fresco y mineral, con aromas de frutas tropicales como piña, papaya y mango. En boca es delicado, de cuerpo medio, equilibrado y redondo en el paladar, dejando un fresco y frutal final, de buena persistencia.",
      "ficha": {
        "Cepa": "Chardonnay 100%.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "En estanques de acero inoxidable, manteniendo una temperatura constante entre 12-16º C.",
        "Roble": "El 30% de este vino se dejó reposar durante 4 meses en madera de encina francesa, para luego permanecer en botella por 6 meses.",
        "pH": "3.29 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.93 g/L",
        "Azúcar residual": "3.41 g/L",
        "Temperatura de servicio": "8-10º C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una temperatura entre 8-10º C. Puede usarse como aperitivo o para acompañar ensaladas, pasta, pescado, carnes blancas, e incluso postres de frutas frescas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-clasico-merlot",
    "nombre": "Clásico Merlot",
    "bodega": "Ventisquero",
    "linea": "Clásico",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Tinto",
    "cepa": "85% Merlot, 15% Syrah",
    "alcohol": "13.0%",
    "temperatura": "16-18°C",
    "maridaje": "Servir idealmente a temperaturas entre los 16 y los 18°C. Este vino acompaña perfectamente quesos semi maduros, carnes blancas o platos de pasta.",
    "descripcion": "Color rojo con matices violeta. Expresa intensamente ciruelas y cerezas, entrelazadas con notas a canela, tabaco, vainilla y chocolate. Su equilibrio en boca, cuerpo redondo, taninos suaves y aterciopelados confieren gran elegancia a este vino.",
    "precio": 9.9,
    "imagen": "assets/img/productos/ventisquero-clasico-merlot.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Color rojo con matices violeta. Expresa intensamente ciruelas y cerezas, entrelazadas con notas a canela, tabaco, vainilla y chocolate. Su equilibrio en boca, cuerpo redondo, taninos suaves y aterciopelados confieren gran elegancia a este vino.",
      "ficha": {
        "Cepa": "85% Merlot, 15% Syrah.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Maceración pre-fermentativa a baja temperatura, a continuación, el mosto fue fermentado en estanques de acero inoxidable a temperatura controlada de 24-26ºC.",
        "Roble": "El 30% de este vino se dejó reposar durante 4 meses en madera de encina francesa, para luego permanecer en botella por 6 meses.",
        "pH": "3.70 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.23 g/L",
        "Azúcar residual": "3.31 g/L",
        "Temperatura de servicio": "16-18°C",
        "Gastronomía / acompañante ideal": "Servir idealmente a temperaturas entre los 16 y los 18°C. Este vino acompaña perfectamente quesos semi maduros, carnes blancas o platos de pasta."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-clasico-cabernet-sauvignon",
    "nombre": "Clásico Cabernet Sauvignon",
    "bodega": "Ventisquero",
    "linea": "Clásico",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Tinto",
    "cepa": "85% Cabernet Sauvignon - 15% Syrah",
    "alcohol": "13.0%",
    "temperatura": "16-18° C",
    "maridaje": "Se recomienda beber a una T° entre 16-18° C. Ideal para quesos maduros, carnes rojas, pato y cordero al horno.",
    "descripcion": "Color rojo rubí. Aromas a fruta roja fresca, como frambuesas, frutillas, arándanos y cassis matizados con notas de vainilla y chocolate. Buen cuerpo y acidez equilibrada en boca, con taninos maduros y un buen balance entre la fruta y la madera en su retrogusto.",
    "precio": 9.9,
    "imagen": "assets/img/productos/ventisquero-clasico-cabernet-sauvignon.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Color rojo rubí. Aromas a fruta roja fresca, como frambuesas, frutillas, arándanos y cassis matizados con notas de vainilla y chocolate. Buen cuerpo y acidez equilibrada en boca, con taninos maduros y un buen balance entre la fruta y la madera en su retrogusto.",
      "ficha": {
        "Cepa": "85% Cabernet Sauvignon - 15% Syrah.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "El mosto fue fermentado en estanques de acero inoxidable a temperatura controlada de 26-28ºC.",
        "Roble": "El 30% de este vino se dejó reposar durante 4 meses en madera de encina francesa y americana, para luego permanecer en botella por 6 meses.",
        "pH": "3.75 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.24 g/L",
        "Azúcar residual": "2.34 g/L",
        "Temperatura de servicio": "16-18° C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 16-18° C. Ideal para quesos maduros, carnes rojas, pato y cordero al horno."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-clasico-carmenere",
    "nombre": "Clásico Carménère",
    "bodega": "Ventisquero",
    "linea": "Clásico",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Tinto",
    "cepa": "Carménère 85% Syrah 15%",
    "alcohol": "13.0%",
    "temperatura": "16-18°C",
    "maridaje": "Se recomienda beber a una T° entre 16-18°C. Ideal para acompañar quesos suaves y maduros, platos a base de crema, carnes como el cerdo y el cordero.",
    "descripcion": "Rojo cereza profundo. En nariz expresa frutas negras y rojas como arándano, mora y cereza, junto a notas especiadas que se mezclan armoniosamente con toques de chocolate blanco y vainilla. En boca suave y equilibrado, con taninos maduros y aterciopelados.",
    "precio": 9.9,
    "imagen": "assets/img/productos/ventisquero-clasico-carmenere.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Rojo cereza profundo. En nariz expresa frutas negras y rojas como arándano, mora y cereza, junto a notas especiadas que se mezclan armoniosamente con toques de chocolate blanco y vainilla. En boca suave y equilibrado, con taninos maduros y aterciopelados.",
      "ficha": {
        "Cepa": "Carménère 85% Syrah 15%.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Maceración pre-fermentativa a baja temperatura, a continuación, el mosto fue fermentado en estanques de acero inoxidable a temperatura controlada de 24-26ºC.",
        "Roble": "El 30% de este vino se dejó reposar durante 4 meses en barricas de encina francesa, para luego permanecer en botella por 6 meses.",
        "pH": "3.70 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.66 g/L",
        "Azúcar residual": "3.00 g/L",
        "Temperatura de servicio": "16-18°C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 16-18°C. Ideal para acompañar quesos suaves y maduros, platos a base de crema, carnes como el cerdo y el cordero."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-clasico-sauvignon-blanc",
    "nombre": "Clásico Sauvignon Blanc",
    "bodega": "Ventisquero",
    "linea": "Clásico",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Blanco",
    "cepa": "Sauvignon Blanc 100%",
    "alcohol": "12.5%",
    "temperatura": "8-10°C",
    "maridaje": "Se recomienda beber a una T° entre 8 y 10°C. Ideal como aperitivo, acompaña ensaladas, frutos de mar, cebiches y pescados.",
    "descripcion": "Color verde pálido. De buena intensidad donde se mezclan aromas de frutas cítricas y tropicales, como lima, pomelo, piña y pera de agua. En boca presenta una acidez vibrante y cuerpo medio, mantiene el frescor propio de la variedad, donde vuelven a aparecer las frutas cítricas.",
    "precio": 9.9,
    "imagen": "assets/img/productos/ventisquero-clasico-sauvignon-blanc.png",
    "etiqueta": "Fresco",
    "detallePdf": {
      "descripcionOficial": "Color verde pálido. De buena intensidad donde se mezclan aromas de frutas cítricas y tropicales, como lima, pomelo, piña y pera de agua. En boca presenta una acidez vibrante y cuerpo medio, mantiene el frescor propio de la variedad, donde vuelven a aparecer las frutas cítricas.",
      "ficha": {
        "Cepa": "Sauvignon Blanc 100%.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Previo a la fermentación se realizó una maceración en frío por un periodo entre 6 y 12 horas. La fermentación a una temperatura constante de entre 13° y 15°C.",
        "Roble": "Una vez terminada la fermentación se dejó reposar durante 4 meses sobre sus lías, realizando suaves movimientos.",
        "pH": "3.37 g/L",
        "Alcohol": "12.5%",
        "Acidez": "5.52 g/L",
        "Azúcar residual": "2.84 g/L",
        "Temperatura de servicio": "8-10°C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 8 y 10°C. Ideal como aperitivo, acompaña ensaladas, frutos de mar, cebiches y pescados."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-clasico-rose",
    "nombre": "Clásico Rosé",
    "bodega": "Ventisquero",
    "linea": "Clásico",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Rosado",
    "cepa": "Cabernet Sauvignon 100%",
    "alcohol": "12.0%",
    "temperatura": "8-10°C",
    "maridaje": "Servir idealmente a temperaturas entre los 8 y los 10°C. Este vino acompaña perfectamente mariscos al vapor, pescados, quesos frescos, ensaladas y pastas.",
    "descripcion": "Color rosado pálido. Expresa notas a frutos rojos silvestres y pomelo rosado, de buena intensidad aromática. Un vino fresco, aromático, fácil de beber, de buen volumen.",
    "precio": 9.9,
    "imagen": "assets/img/productos/ventisquero-clasico-rose.png",
    "etiqueta": "Rosado",
    "detallePdf": {
      "descripcionOficial": "Color rosado pálido. Expresa notas a frutos rojos silvestres y pomelo rosado, de buena intensidad aromática. Un vino fresco, aromático, fácil de beber, de buen volumen.",
      "ficha": {
        "Cepa": "Cabernet Sauvignon 100%.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "El mosto fue fermentado en estanques de acero inoxidable a temperatura controlada de 14-16ºC, el mosto se obtiene de prensado directo y clarificado posterior.",
        "Roble": "Una vez terminada la fermentación se dejó reposar sobre sus lías.",
        "pH": "3.43 g/L",
        "Alcohol": "12.0%",
        "Acidez": "4.21 g/L",
        "Azúcar residual": "5.0 g/L",
        "Temperatura de servicio": "8-10°C",
        "Gastronomía / acompañante ideal": "Servir idealmente a temperaturas entre los 8 y los 10°C. Este vino acompaña perfectamente mariscos al vapor, pescados, quesos frescos, ensaladas y pastas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-kalfu-molu-pinot-noir",
    "nombre": "Kalfu Molu Pinot Noir",
    "bodega": "Ventisquero",
    "linea": "Kalfu Molu",
    "pais": "Chile",
    "region": "Valle de Casablanca, Chile",
    "categoria": "Tinto",
    "cepa": "85% Pinot Noir / Merlot 15% Syrah",
    "alcohol": "12.5%",
    "temperatura": "14º y 15 ° C",
    "maridaje": "Se recomienda beber a una T° entre 14º y 15 ° C. Ideal con pescado, pulpo, atún grillado, risotto con hongos, risotto di mare, pasta rellena con carne, pastel de cangrejo, pasta mar y tierra, pescados grasos, pansoti, ñoquis, terrina de cerdo y tocineta.",
    "descripcion": "Rojo rubí intenso con destellos violeta. Expresivo y frutal, destacan aromas a cereza y frambuesa suavemente especiado. El roble francés enmarca con elegancia la intensa fruta, aportando con toques a vainilla y canela al retrogusto. Largo y limpio final.",
    "precio": 16.9,
    "imagen": "assets/img/productos/ventisquero-kalfu-molu-pinot-noir.png",
    "etiqueta": "Costa",
    "detallePdf": {
      "descripcionOficial": "Rojo rubí intenso con destellos violeta. Expresivo y frutal, destacan aromas a cereza y frambuesa suavemente especiado. El roble francés enmarca con elegancia la intensa fruta, aportando con toques a vainilla y canela al retrogusto. Largo y limpio final.",
      "ficha": {
        "Cepa": "85% Pinot Noir / Merlot 15% Syrah.",
        "Región": "Valle de Casablanca, Chile.",
        "Fermentación": "Maceración en frío por un período entre 6 a 7 días. La fermentación se realizó a temperaturas medias manteniendo un control constante de la temperatura entre 22 y 26° C.",
        "Roble": "15% fue envejecido en roble francés durante 8 meses. El restante 85% se mantuvo en tanques de acero inoxidable.",
        "pH": "3.5 g/L",
        "Alcohol": "12.5%",
        "Acidez": "4.85 g/L",
        "Azúcar residual": "3,0 g/L",
        "Temperatura de servicio": "14º y 15 ° C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 14º y 15 ° C. Ideal con pescado, pulpo, atún grillado, risotto con hongos, risotto di mare, pasta rellena con carne, pastel de cangrejo, pasta mar y tierra, pescados grasos, pansoti, ñoquis, terrina de cerdo y tocineta."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-kalfu-molu-sauvignon-blanc",
    "nombre": "Kalfu Molu Sauvignon Blanc",
    "bodega": "Ventisquero",
    "linea": "Kalfu Molu",
    "pais": "Chile",
    "region": "Valle de Casablanca, Chile",
    "categoria": "Blanco",
    "cepa": "100% Sauvignon Blanc",
    "alcohol": "12.5%",
    "temperatura": "7-8° C",
    "maridaje": "Se recomienda beber a una T° entre 7 y 8° C. Ideal con ostras, erizos, sushi, quesos grasos, pastel de chucho.",
    "descripcion": "De color verde pálido. En nariz es fresco, combinando aromas cítricos y a frutas tropicales acompañados por suaves notas minerales y hierbas balsámicas. Destaca la frescura gracias a su acidez vibrante que propicia un largo y limpio final.",
    "precio": 16.9,
    "imagen": "assets/img/productos/ventisquero-kalfu-molu-sauvignon-blanc.png",
    "etiqueta": "Costa",
    "detallePdf": {
      "descripcionOficial": "De color verde pálido. En nariz es fresco, combinando aromas cítricos y a frutas tropicales acompañados por suaves notas minerales y hierbas balsámicas. Destaca la frescura gracias a su acidez vibrante que propicia un largo y limpio final.",
      "ficha": {
        "Cepa": "100% Sauvignon Blanc.",
        "Región": "Valle de Casablanca, Chile.",
        "Fermentación": "Maceración en frío por un período entre 12 a 14 horas. La fermentación se realizó lentamente, manteniendo un control constante de la temperatura entre 12 y 15ºC.",
        "Roble": "Terminada la fermentación se dejó reposar durante cuatro meses sobre sus lías, realizando suaves movimientos.",
        "pH": "3.22 g/L",
        "Alcohol": "12.5%",
        "Acidez": "5.12 g/L",
        "Azúcar residual": "3,26 g/L",
        "Temperatura de servicio": "7-8° C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una T° entre 7 y 8° C. Ideal con ostras, erizos, sushi, quesos grasos, pastel de chucho."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-chilano-merlot",
    "nombre": "Chilano Merlot",
    "bodega": "Ventisquero",
    "linea": "Chilean Soul Chilano",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Tinto",
    "cepa": "85% Merlot 15% Syrah",
    "alcohol": "13.0%",
    "temperatura": "16-18ºC",
    "maridaje": "Servir a temperaturas entre los 16 y los 18ºC. Este vino acompaña perfectamente quesos semi maduros, carnes blancas o platos de pasta.",
    "descripcion": "Vino de color rojo con matices violeta. El aroma expresa intensamente ciruelas y cerezas, entrelazadas con notas a canela, tabaco, vainilla y chocolate. De cuerpo redondo y taninos suaves y aterciopelados confieren gran elegancia a este vino.",
    "precio": 8.9,
    "imagen": "assets/img/productos/ventisquero-chilano-merlot.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Vino de color rojo con matices violeta. El aroma expresa intensamente ciruelas y cerezas, entrelazadas con notas a canela, tabaco, vainilla y chocolate. De cuerpo redondo y taninos suaves y aterciopelados confieren gran elegancia a este vino.",
      "ficha": {
        "Cepa": "85% Merlot 15% Syrah.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Maceración pre-fermentativa a baja T°, el mosto fue fermentado en estanques de acero inoxidable a T° controlada de 24-26ºC.",
        "Roble": "Tanques de acero inoxidable.",
        "pH": "3.60 g/L",
        "Alcohol": "13.0%",
        "Acidez": "4.88 g/L",
        "Azúcar residual": "4,0 g/L",
        "Temperatura de servicio": "16-18ºC",
        "Gastronomía / acompañante ideal": "Servir a temperaturas entre los 16 y los 18ºC. Este vino acompaña perfectamente quesos semi maduros, carnes blancas o platos de pasta."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-chilano-carmenere",
    "nombre": "Chilano Carménère",
    "bodega": "Ventisquero",
    "linea": "Chilean Soul Chilano",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Tinto",
    "cepa": "Carménere 85% Syrah 15%",
    "alcohol": "13.0%",
    "temperatura": "16-18º C",
    "maridaje": "Se recomienda beber a una Tº entre 16-18º C. Ideal para acompañar quesos suaves y maduros, platos a base de crema, carnes como el cerdo y el cordero y, en general, platos bien condimentados.",
    "descripcion": "Vino de color rojo cereza profundo. Aromas a frutas negras y rojas como arándano, mora, grosella, frutilla y cereza, junto a notas especiadas que se mezclan armoniosamente con toques de chocolate y vainilla. Es un vino suave y equilibrado, con taninos maduros y aterciopelados.",
    "precio": 8.9,
    "imagen": "assets/img/productos/ventisquero-chilano-carmenere.png",
    "etiqueta": "Clásico",
    "detallePdf": {
      "descripcionOficial": "Vino de color rojo cereza profundo. Aromas a frutas negras y rojas como arándano, mora, grosella, frutilla y cereza, junto a notas especiadas que se mezclan armoniosamente con toques de chocolate y vainilla. Es un vino suave y equilibrado, con taninos maduros y aterciopelados.",
      "ficha": {
        "Cepa": "Carménere 85% Syrah 15%.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Maceración pre-fermentativa a baja temperatura, a continuación, el mosto fue fermentado en estanques de acero inoxidable a temperatura controlada de 24-26ºC.",
        "Roble": "Tanques de acero inoxidable.",
        "pH": "3.61 g/L",
        "Alcohol": "13.0%",
        "Acidez": "4.94 g/L",
        "Azúcar residual": "4,0 g/L",
        "Temperatura de servicio": "16-18º C",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una Tº entre 16-18º C. Ideal para acompañar quesos suaves y maduros, platos a base de crema, carnes como el cerdo y el cordero y, en general, platos bien condimentados."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-chilano-sauvignon-blanc",
    "nombre": "Chilano Sauvignon Blanc",
    "bodega": "Ventisquero",
    "linea": "Chilean Soul Chilano",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Blanco",
    "cepa": "Sauvignon blanc 100%",
    "alcohol": "13.0%",
    "temperatura": "8-10ºC",
    "maridaje": "Se recomienda beber a una Tº entre 8 y 10ºC. Ideal como aperitivo, acompaña ensaladas, frutos de mar, cebiches y pescados.",
    "descripcion": "Vino de color verde pálido. Aroma de buena intensidad donde se mezclan aromas de frutas cítricas y tropicales, como lima, pomelo, piña y pera de agua. De acidez vibrante y cuerpo medio, mantiene el frescor propio de la variedad, donde vuelven a aparecer las frutas cítricas.",
    "precio": 8.9,
    "imagen": "assets/img/productos/ventisquero-chilano-sauvignon-blanc.png",
    "etiqueta": "Fresco",
    "detallePdf": {
      "descripcionOficial": "Vino de color verde pálido. Aroma de buena intensidad donde se mezclan aromas de frutas cítricas y tropicales, como lima, pomelo, piña y pera de agua. De acidez vibrante y cuerpo medio, mantiene el frescor propio de la variedad, donde vuelven a aparecer las frutas cítricas.",
      "ficha": {
        "Cepa": "Sauvignon blanc 100%.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Maceración en frío por un periodo entre 6 y 12 horas. La fermentación se realizó lentamente, manteniendo un control constante de la temperatura entre 13º y 15ºC.",
        "Roble": "Tanques de acero inoxidable.",
        "pH": "3.35 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.92 g/L",
        "Azúcar residual": "4,0 g/L",
        "Temperatura de servicio": "8-10ºC",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una Tº entre 8 y 10ºC. Ideal como aperitivo, acompaña ensaladas, frutos de mar, cebiches y pescados."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-chilano-rose",
    "nombre": "Chilano Rosé",
    "bodega": "Ventisquero",
    "linea": "Chilean Soul Chilano",
    "pais": "Chile",
    "region": "Valle Central, Chile",
    "categoria": "Rosado",
    "cepa": "Rosé / 10% Cabernet Sauvignon",
    "alcohol": "12.5%",
    "temperatura": "8-10ºC",
    "maridaje": "Servir idealmente a temperaturas entre los 8 y los 10ºC. Este vino acompaña perfectamente mariscos al vapor, pescados, quesos frescos, ensaladas y pastas.",
    "descripcion": "Vino de color rosado pálido. El aroma expresa notas a frutos rojos silvestres de buena intensidad aromática, y aromas a pomelo rosado. Un vino fresco, aromático, fácil de beber, de buen volumen.",
    "precio": 8.9,
    "imagen": "assets/img/productos/ventisquero-chilano-rose.png",
    "etiqueta": "Rosado",
    "detallePdf": {
      "descripcionOficial": "Vino de color rosado pálido. El aroma expresa notas a frutos rojos silvestres de buena intensidad aromática, y aromas a pomelo rosado. Un vino fresco, aromático, fácil de beber, de buen volumen.",
      "ficha": {
        "Cepa": "Rosé / 10% Cabernet Sauvignon.",
        "Región": "Valle Central, Chile.",
        "Fermentación": "Mosto fue fermentado en estanques de acero inoxidable a temperatura controlada de 14-16ºC, el mosto se obtiene de prensado directo y clarificado posterior.",
        "Roble": "Tanques de acero inoxidable.",
        "pH": "3.36 g/L",
        "Alcohol": "12.5%",
        "Acidez": "5.84 g/L",
        "Azúcar residual": "4,0 g/L",
        "Temperatura de servicio": "8-10ºC",
        "Gastronomía / acompañante ideal": "Servir idealmente a temperaturas entre los 8 y los 10ºC. Este vino acompaña perfectamente mariscos al vapor, pescados, quesos frescos, ensaladas y pastas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "ventisquero-chilano-moscato",
    "nombre": "Chilano Moscato",
    "bodega": "Ventisquero",
    "linea": "Chilean Soul Chilano",
    "pais": "Chile",
    "region": "Valle de Chile",
    "categoria": "Blanco",
    "cepa": "100% Moscatel de Alejandría",
    "alcohol": "13.0%",
    "temperatura": "8-10ºC",
    "maridaje": "Se recomienda beber a una Tº entre 8 y 10ºC. Ideal para acompañar comida exótica, tipo Thai, quesos cremosos, carnes blancas y pescados blancos.",
    "descripcion": "Vino de color amarillo pajizo. Con notas de flores blancas tipo rosa y jazmín mezcladas y con un suave perfil frutal tipo carozo como damasco y durazno blanco. De buen volumen en boca, acidez balanceada, que se presenta fresco y suave, de buena persistencia, donde vuelven a aparecer las flores.",
    "precio": null,
    "imagen": "assets/img/productos/ventisquero-chilano-moscato.png",
    "etiqueta": "Dulce",
    "detallePdf": {
      "descripcionOficial": "Vino de color amarillo pajizo. Con notas de flores blancas tipo rosa y jazmín mezcladas y con un suave perfil frutal tipo carozo como damasco y durazno blanco. De buen volumen en boca, acidez balanceada, que se presenta fresco y suave, de buena persistencia, donde vuelven a aparecer las flores.",
      "ficha": {
        "Cepa": "100% Moscatel de Alejandría.",
        "Región": "Valle de Chile.",
        "Fermentación": "Maceración en frío para obtener una mayor intensidad aromática, con temperatura entre 8°C y 10°C. La fermentación se llevó a cabo con temperaturas controladas entre 13 y 16°C durante un periodo de 20 días.",
        "Roble": "Tanques de acero inoxidable.",
        "pH": "3.35 g/L",
        "Alcohol": "13.0%",
        "Acidez": "5.92 g/L",
        "Azúcar residual": "Entre 30 y 35 g/L.",
        "Temperatura de servicio": "8-10ºC",
        "Gastronomía / acompañante ideal": "Se recomienda beber a una Tº entre 8 y 10ºC. Ideal para acompañar comida exótica, tipo Thai, quesos cremosos, carnes blancas y pescados blancos."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "felixsolis-mucho-mas-blanco",
    "nombre": "Mucho Más Blanco",
    "bodega": "Félix Solís",
    "linea": "Cuvée Especial Mucho Más",
    "pais": "España",
    "region": "Castilla-La Mancha",
    "categoria": "Blanco",
    "cepa": "Verdejo, Sauvignon Blanc y Chardonnay",
    "alcohol": "12,5%",
    "temperatura": "6º C - 8º C",
    "maridaje": "Pasta, paella, pescado al horno, ahumados y quesos.",
    "descripcion": "De color amarillo pajizo brillante con reflejos verdosos. Complejo, sutil en nariz, marcado por aromas de melocotón y albaricoque y toques cítricos con fondo ahumado. Agradable, elegante, con notas de frutas tropicales, ligeros matices de vainilla y acidez muy bien equilibrada.",
    "precio": null,
    "imagen": "assets/img/productos/felixsolis-mucho-mas-blanco.png",
    "etiqueta": "Cuvée Especial",
    "detallePdf": {
      "descripcionOficial": "Apostar por la calidad, reducir hasta la esencia, eliminando aquello que resulta nimio e insustancial... Eso es Mucho Más. Lo relevante es el vino. De color amarillo pajizo brillante con reflejos verdosos. Complejo, sutil en nariz, marcado por aromas de melocotón y albaricoque y toques cítricos con fondo ahumado. Agradable, elegante, con notas de frutas tropicales, ligeros matices de vainilla y acidez muy bien equilibrada.",
      "ficha": {
        "Línea": "Cuvée Especial Mucho Más Blanco.",
        "Región": "La nueva tendencia en el mundo del vino son los blend. Estos vinos se elaboran con un cuvée especial de diferentes uvas de diferentes cepas, ya sea por su regionalidad o por su variedad. Esto les caracteriza como vinos únicos con identidad propia, en los que se representa el arte de hacer vino.",
        "Variedad / cepa": "Verdejo, Sauvignon Blanc y Chardonnay.",
        "Estilo": "Vino tranquilo.",
        "Graduación alcohólica": "12.5%",
        "Temperatura de servicio": "Servir entre 6º C y 8º C.",
        "Notas de cata": "De color amarillo pajizo brillante con reflejos verdosos. Complejo, sutil en nariz, marcado por aromas de melocotón y albaricoque y toques cítricos con fondo ahumado. Agradable, elegante, con notas de frutas tropicales, ligeros matices de vainilla y acidez muy bien equilibrada.",
        "Maridaje": "Vino ideal como aperitivo, pero también puede acompañar platos de pasta, paella, pescado al horno, ahumados y quesos.",
        "Información técnica": "El objetivo de la mezcla era crear un estilo distinto de vino, aprovechando las cualidades de tres variedades complementarias de varias regiones vinícolas notables en España. Las vinificaciones se realizan en depósitos de acero inoxidable durante 20-25 días con temperatura máxima de 15°C. Una vez finalizada la fermentación, el vino permanece en contacto con sus lías durante 2-3 meses para desarrollar sus características aromáticas secundarias. En el caso del Chardonnay, el vino permanece en barricas de roble francés durante 3 meses, haciendo batonnage varias veces por semana."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "felixsolis-mucho-mas-etiqueta-negra",
    "nombre": "Mucho Más Etiqueta Negra",
    "bodega": "Félix Solís",
    "linea": "Cuvée Especial Mucho Más",
    "pais": "España",
    "region": "Castilla-La Mancha",
    "categoria": "Tinto",
    "cepa": "Tempranillo, Garnacha y Syrah",
    "alcohol": "13,5%",
    "temperatura": "15º C - 19º C",
    "maridaje": "Tapas y aperitivos, quesos curados, carnes magras y platos de caza.",
    "descripcion": "Color rojo picota, con capa media-alta y ribete compacto. Aromático, elegante, con buena intensidad. Recuerdos de fruta negra madura, monte bajo y balsámicos, con fondo de nobles cueros y vainilla.",
    "precio": null,
    "imagen": "assets/img/productos/felixsolis-mucho-mas-etiqueta-negra.png",
    "etiqueta": "Etiqueta Negra",
    "detallePdf": {
      "descripcionOficial": "Apostar por la calidad, reducir hasta la esencia, eliminando aquello que resulta nimio e insustancial... Eso es Mucho Más. Lo relevante es el vino. Color rojo picota, con capa media-alta y ribete compacto. Aromático, elegante, con buena intensidad. Recuerdos de fruta negra madura, monte bajo y balsámicos. Fondo con toques de nobles cueros y vainilla. En boca resulta complejo, amplio, resaltan las notas afrutadas y minerales sobre finas sensaciones de cacao. Final persistente y elegante.",
      "ficha": {
        "Línea": "Cuvée Especial Mucho Más - Etiqueta Negra.",
        "Región": "La nueva tendencia en el mundo del vino son los blend. Estos vinos se elaboran con un cuvée especial de diferentes uvas de diferentes cepas, ya sea por su regionalidad o por su variedad. Esto les caracteriza como vinos únicos con identidad propia, en los que se representa el arte de hacer vino.",
        "Variedad / cepa": "Tempranillo, Garnacha y Syrah.",
        "Estilo": "Vino tranquilo.",
        "Graduación alcohólica": "13.5%",
        "Temperatura de servicio": "Servir entre 15º C y 19º C.",
        "Notas de cata": "Color rojo picota, con capa media-alta y ribete compacto. Aromático, elegante, con buena intensidad. Recuerdos de fruta negra madura, monte bajo y balsámicos. Fondo con toques de nobles cueros y vainilla. En boca resulta complejo, amplio, resaltan las notas afrutadas y minerales sobre finas sensaciones de cacao. Final persistente y elegante.",
        "Maridaje": "Vino ideal para acompañar tapas y aperitivos, quesos curados, carnes magras y platos de caza.",
        "Información técnica": "El objetivo del coupage es obtener un vino diferente y especial, utilizando variedades Tempranillo, Garnacha y Syrah de distintas zonas vitivinícolas españolas, que aportan sus propias particularidades. Las uvas proceden de viñedos viejos y se recolectan de forma manual. Las vinificaciones se realizan en depósitos de acero inoxidable durante 10-14 días con temperaturas controladas de 26-28°C. El vino permanece en barricas de roble americano durante 3-4 meses hasta la finalización de la fermentación maloláctica. Después se determina la mezcla y se ensamblan los vinos."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "felixsolis-mucho-mas-espumoso",
    "nombre": "Mucho Más Espumoso",
    "bodega": "Félix Solís",
    "linea": "Cuvée Especial Mucho Más",
    "pais": "España",
    "region": "Castilla-La Mancha",
    "categoria": "Espumoso",
    "cepa": "Viura y Chardonnay",
    "alcohol": "11,5%",
    "temperatura": "8º C - 10º C",
    "maridaje": "Carne de ave, pasta, marisco, salmón y quesos curados.",
    "descripcion": "Cristalino, brillante. Sutiles notas de vainilla, tostadas y de brioche preparan el camino para una descarga de sabores cítricos maduros y de frutas de hueso, redondeados por un delicioso final cremoso.",
    "precio": null,
    "imagen": "assets/img/productos/felixsolis-mucho-mas-espumoso.png",
    "etiqueta": "Espumoso",
    "detallePdf": {
      "descripcionOficial": "Apostar por la calidad, reducir hasta la esencia, eliminando aquello que resulta nimio e insustancial... Eso es Mucho Más. Lo relevante es el vino. Cristalino, brillante. Sutiles notas de vainilla, tostadas y de brioche preparan el camino para una descarga de sabores cítricos maduros y de frutas de hueso, redondeados por un delicioso final cremoso.",
      "ficha": {
        "Línea": "Cuvée Especial Mucho Más Espumoso.",
        "Región": "La nueva tendencia en el mundo del vino son los blend. Estos vinos se elaboran con un cuvée especial de diferentes uvas de diferentes cepas, ya sea por su regionalidad o por su variedad. Esto les caracteriza como vinos únicos con identidad propia, en los que se representa el arte de hacer vino.",
        "Variedad / cepa": "Viura y Chardonnay.",
        "Estilo": "Vino espumoso.",
        "Graduación alcohólica": "11.5%",
        "Temperatura de servicio": "Servir entre 8º C y 10º C.",
        "Notas de cata": "Cristalino, brillante. Sutiles notas de vainilla, tostadas y de brioche preparan el camino para una descarga de sabores cítricos maduros y de frutas de hueso, redondeados por un delicioso final cremoso.",
        "Maridaje": "Vino ideal como aperitivo y maridaje con platos de carne de ave, pasta, marisco, salmón y quesos curados.",
        "Información técnica": "La originalidad de este espumoso radica en el cuidado de la producción y en la elección de fecha de vendimia. El momento óptimo se elige meticulosamente para que en el vino base prevalezca la acidez, frescura y complejidad aromática. Este vino está elaborado con uvas Viura y Chardonnay procedentes de viñedos seleccionados. Una parte del Chardonnay fermenta en barricas que aportan volumen. Después de la segunda fermentación, el vino permanece un tiempo entre seis y doce semanas sobre sus lías. El resultado es un vino equilibrado y elegante."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "felixsolis-pulpo-albarino",
    "nombre": "Pulpo Albariño",
    "bodega": "Félix Solís",
    "linea": "D.O. Rías Baixas",
    "pais": "España",
    "region": "Rías Baixas, Galicia",
    "categoria": "Blanco",
    "cepa": "Albariño",
    "alcohol": "12,5%",
    "temperatura": "Servir muy frío",
    "maridaje": "Almejas al vapor, salpicón de marisco, mariscos fríos a la plancha, pulpo al ajillo o a la brasa, calamares y mejillones a la vinagreta.",
    "descripcion": "Pulpo Albariño es un vino elaborado para disfrutar el sabor de las Rías Baixas con cualquier receta de la gastronomía española, siendo los pescados y mariscos su mejor tándem.",
    "precio": null,
    "imagen": "assets/img/productos/felixsolis-pulpo-albarino.png",
    "etiqueta": "Albariño",
    "detallePdf": {
      "descripcionOficial": "Pulpo Albariño es un vino elaborado para disfrutar el sabor de las Rías Baixas con cualquier receta de la gastronomía española, siendo los pescados y mariscos su mejor tándem. Elaborado a partir de uvas de la variedad albariño procedentes de las parcelas del Val do Salnés en Galicia, destaca por sus aromas florales y afrutados, finos y distinguidos, que impresionan agradablemente, de intensidad media y duración media-larga.",
      "ficha": {
        "Denominación": "D.O. Rías Baixas.",
        "Región": "La Denominación de Origen Rías Baixas se extiende por un conjunto de zonas de Galicia que tienen una serie de condiciones físicas comunes que identifican y originan las características de sus vinos. Se trata de tierras bajas, próximas al mar y asociadas a los tramos inferiores de los cursos de los ríos donde se mantienen temperaturas suaves y precipitaciones elevadas y repartidas, con un descenso de lluvias durante los meses de verano.",
        "Variedad / cepa": "Albariño.",
        "Estilo": "Vino tranquilo.",
        "Graduación alcohólica": "12.5%",
        "Temperatura de servicio": "Servir muy frío.",
        "Notas de cata": "Es un vino limpio y brillante con matices verdosos. En nariz destacan sus flores blancas y aromas a melocotón y albaricoque. Sabor fresco, frutal, con volumen y un largo postgusto.",
        "Maridaje": "Perfecto con almejas al vapor, salpicón de marisco, mariscos fríos a la plancha, pulpo al ajillo o a la brasa, calamares y mejillones a la vinagreta.",
        "Información técnica": "Fermentación del mosto flor a temperatura controlada de 16ºC en depósitos de acero inoxidable."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-prosecco-doc-cuvee-1821",
    "nombre": "Zonin Prosecco DOC Cuvée 1821",
    "bodega": "Zonin",
    "linea": "Prosecco DOC Cuvée 1821",
    "pais": "Italia",
    "region": "North-East Italy",
    "categoria": "Espumoso",
    "cepa": "100% Glera",
    "alcohol": "11% vol.",
    "temperatura": "6º C - 8º C",
    "maridaje": "Aperitivo, entrantes, brochetas, ensaladas, pastas ligeras y pizzas, especialmente vegetarianas.",
    "descripcion": "Spumante Brut de color amarillo pajizo pálido brillante, con espuma fina y transparente. Intenso, atractivo, muy afrutado y aromático, con aromas de flores de glicina y manzanas.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-prosecco-doc-cuvee-1821.png",
    "etiqueta": "Prosecco DOC",
    "detallePdf": {
      "descripcionOficial": "Prosecco DOC Cuvée 1821. Spumante Brut. Amarillo pajizo pálido brillante, una espuma fina y transparente. Intenso y atractivo, muy afrutado y aromático, con aromas de flores de glicina y manzanas de cuajo. Muy equilibrado y atractivo, con la delicada nota de almendra típica de la Glera.",
      "ficha": {
        "Clasificación / denominación": "DOC.",
        "Área": "North-East Italy.",
        "Variedad / cepa": "100% Glera.",
        "Alcohol": "11% vol.",
        "Vinificación": "El mosto, obtenido mediante un prensado muy suave, se somete a una fermentación inicial a baja temperatura controlada (10°C). El vino base se transfiere posteriormente a depósitos de acero inoxidable presurizados, donde se transforma lentamente en vino espumoso según el método Charmat.",
        "Color": "Amarillo pajizo pálido brillante, una espuma fina y transparente.",
        "Aroma": "Intenso y atractivo, muy afrutado y aromático, con aromas de flores de glicina y manzanas.",
        "Sabor": "Muy equilibrado y atractivo, con la delicada nota de almendra típica de la Glera.",
        "Temperatura de servicio": "Se recomienda servir frío, entre 6º C y 8º C.",
        "Maridaje": "Excelente aperitivo; el Prosecco se puede servir durante la comida, incluido el postre, siempre que los platos no tengan un sabor demasiado intenso. Es ideal con entrantes como brochetas, ensaladas, pastas ligeras y pizzas, especialmente vegetarianas."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-prosecco-rose-doc",
    "nombre": "Zonin Prosecco Rosé DOC",
    "bodega": "Zonin",
    "linea": "Prosecco Rosé DOC",
    "pais": "Italia",
    "region": "Italia",
    "categoria": "Espumoso",
    "cepa": "85% Glera y 15% Pinot Noir",
    "alcohol": "11% vol.",
    "temperatura": "6º C - 8º C",
    "maridaje": "Aperitivo, entrantes, risottos, frituras aromáticas y pescado a la parrilla.",
    "descripcion": "Rosado espumoso de color claro con perlaje fino y espuma suave y persistente. Fragante y afrutado, con toques de flores de glicina, manzana Renette y frutos rojos.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-prosecco-rose-doc.png",
    "etiqueta": "Rosé DOC",
    "detallePdf": {
      "descripcionOficial": "Prosecco Rosé DOC. Un rosado espumoso de color claro con un perlaje fino y una espuma suave y persistente. Fragante y afrutado con toques de flores de glicina, manzana Renette y frutos rojos, incluyendo fresa silvestre. Fresco y delicioso. En boca es suave y sedoso, con notas florales y un toque de almendra.",
      "ficha": {
        "Clasificación / denominación": "DOC.",
        "Variedad / cepa": "85% Glera, 15% Pinot Noir.",
        "Alcohol": "11% vol.",
        "Vinificación": "La mezcla de Glera y Pinot Nero, vinificado en tinto, procede de la misma cosecha y se fermenta de forma natural en depósitos de acero inoxidable presurizados, método Charmat, durante al menos 60 días.",
        "Color": "Un rosado espumoso de color claro con un perlaje fino y una espuma suave y persistente.",
        "Aroma": "Fragante y afrutado con toques de flores de glicina, manzana Renette y frutos rojos, incluyendo fresa silvestre.",
        "Sabor": "Fresco y delicioso. En boca es suave y sedoso, con notas florales y un toque de almendra.",
        "Temperatura de servicio": "Se recomienda servir frío, entre 6º C y 8º C.",
        "Maridaje": "Excelente como aperitivo y acompañamiento ideal para entrantes, risottos, frituras aromáticas y pescado a la parrilla."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-montepulciano-d-abruzzo",
    "nombre": "Zonin Montepulciano d’Abruzzo",
    "bodega": "Zonin",
    "linea": "Montepulciano d’Abruzzo DOC",
    "pais": "Italia",
    "region": "Abruzzo, Central Italy",
    "categoria": "Tinto",
    "cepa": "Montepulciano",
    "alcohol": "13% vol.",
    "temperatura": "18º C - 20º C",
    "maridaje": "Carnes rojas, preparaciones saladas de tradición rural y quesos de curación media.",
    "descripcion": "Color rojo rubí brillante, atractivo y cálido. Amplio y notablemente complejo, con matices vinosos y característicos. Seco, elegante, de equilibrio fino y armonioso.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-montepulciano-d-abruzzo.png",
    "etiqueta": "DOC",
    "detallePdf": {
      "descripcionOficial": "Montepulciano d’Abruzzo. Brillante, atractivo y cálido color rojo rubí. Amplio y notablemente complejo, con matices vinosos y característicos. Seco en boca y elegante, con vetas delicadas y suaves, un equilibrio fino y armonioso.",
      "ficha": {
        "Clasificación / denominación": "DOC.",
        "Área": "Abruzzo, Central Italy.",
        "Variedad / cepa": "Montepulciano.",
        "Alcohol": "13% vol.",
        "Vinificación y crianza": "Se separan los raspones de las uvas, que se prensan suavemente en cilindros a presión, rompiendo suavemente sus hollejos y liberando el mosto. Este se deja macerar con los hollejos durante aproximadamente una semana en vinificadores rotativos de acero inoxidable con control de temperatura a una temperatura de entre 28 y 30°C. Tras la fermentación alcohólica, el vino también realiza la fermentación maloláctica, un proceso que reduce la acidez total y confiere a los vinos una mayor redondez y sabor.",
        "Color": "Brillante, atractivo y cálido color rojo rubí.",
        "Aroma": "Amplio y notablemente complejo, con matices vinosos y característicos.",
        "Sabor": "Seco en boca y elegante, con vetas delicadas y suaves, un equilibrio fino y armonioso.",
        "Temperatura de servicio": "Consumir preferentemente a 18º C - 20º C.",
        "Maridaje": "Este vino se puede consumir durante toda la comida y es excelente acompañando todo tipo de carnes rojas, preparaciones saladas de tradición rural y quesos de curación media."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-chianti",
    "nombre": "Zonin Chianti",
    "bodega": "Zonin",
    "linea": "Chianti DOCG",
    "pais": "Italia",
    "region": "Chianti, Tuscany",
    "categoria": "Tinto",
    "cepa": "Sangiovese",
    "alcohol": "12,5% vol.",
    "temperatura": "16º C - 18º C",
    "maridaje": "Cocina campestre, asados, carnes rojas a la parrilla, caza y quesos de maduración moderada.",
    "descripcion": "Color rojo rubí brillante de atractiva intensidad. Aroma intenso, fino y elegante, con violetas y frutos del bosque. Seco, pleno y perfectamente equilibrado.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-chianti.png",
    "etiqueta": "DOCG",
    "detallePdf": {
      "descripcionOficial": "Chianti. Color rojo rubí brillante de atractiva intensidad. En su juventud, presenta reflejos violáceos que tienden a tornarse granates con la edad. Característicamente intenso, fino y elegante. Se distingue por un elegante aroma a violetas y tiernos aromas a frutos del bosque. Seco, pleno, perfectamente equilibrado y extremadamente atractivo, con una acidez persistente y sabores a cereza y especias.",
      "ficha": {
        "Clasificación / denominación": "DOCG.",
        "Área": "Chianti, Tuscany.",
        "Variedad / cepa": "Sangiovese.",
        "Alcohol": "12,5% vol.",
        "Vinificación y crianza": "Se separan los raspones de las uvas, que se prensan suavemente en cilindros bajo presión, rompiendo suavemente los hollejos y liberando el mosto. El mosto se deja macerar con los hollejos durante aproximadamente una semana en vinificadores de acero inoxidable con control de temperatura a una temperatura de entre 28 y 30°C. Tras la fermentación alcohólica, el vino también realiza la fermentación maloláctica, un proceso que reduce la acidez total y hace que los vinos parezcan más redondos y con mayor sabor.",
        "Color": "Color rojo rubí brillante de atractiva intensidad. En su juventud, presenta reflejos violáceos que tienden a tornarse granates con la edad.",
        "Aroma": "Característicamente intenso, fino y elegante. Se distingue por un elegante aroma a violetas y tiernos aromas a frutos del bosque.",
        "Sabor": "Seco, pleno, perfectamente equilibrado y extremadamente atractivo, con una acidez persistente y sabores a cereza y especias.",
        "Temperatura de servicio": "Se recomienda servir entre 16º C y 18º C.",
        "Maridaje": "Cuando es joven, el vino combina bien con los sabores intensos de la cocina campestre y puede consumirse durante todas las comidas. Después del tercer año, se convierte en el acompañante ideal de todo tipo de asados, carnes rojas a la parrilla, caza y quesos de maduración moderada."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-ventiterre-merlot-nero-d-avola",
    "nombre": "20 Ventiterre Merlot Nero d’Avola",
    "bodega": "Zonin",
    "linea": "20 Ventiterre",
    "pais": "Italia",
    "region": "Sicily",
    "categoria": "Tinto",
    "cepa": "Merlot and Nero d’Avola",
    "alcohol": "13% vol.",
    "temperatura": "18º C",
    "maridaje": "Primeros platos con salsa de carne, asados y quesos curados.",
    "descripcion": "Coupage de Merlot y Nero d’Avola de color rojo intenso y rico, aroma intenso y afrutado con notas de ciruela y cereza seca. Textura aterciopelada y sabor elegante, generoso y persistente.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-ventiterre-merlot-nero-d-avola.png",
    "etiqueta": "20 Ventiterre",
    "detallePdf": {
      "descripcionOficial": "Merlot Nero d’Avola. Color rojo intenso y rico. Aroma intenso y afrutado con notas de ciruela y cereza seca. Textura aterciopelada con sabor elegante, a la vez que generoso y persistente. Presenta buena persistencia y paladar.",
      "ficha": {
        "Clasificación / denominación": "Terre Siciliane IGT.",
        "Área": "Sicily.",
        "Variedad / cepa": "Merlot and Nero d’Avola.",
        "Alcohol": "13% vol.",
        "Tamaño de botella": "750 ml.",
        "Vinificación y crianza": "Tras el estrujado y despalillado de la uva, la fermentación se lleva a cabo siguiendo los principios tradicionales, pero con una delicada maceración de los hollejos, que seguirán a la plena extracción del color y, sobre todo, de los aromas y las sustancias polifenólicas que contiene.",
        "Color": "Color rojo intenso y rico.",
        "Aroma": "Aroma intenso y afrutado con notas de ciruela y cereza seca.",
        "Sabor": "Textura aterciopelada con sabor elegante, a la vez que generoso y persistente. Presenta buena persistencia y paladar.",
        "Temperatura de servicio": "Servir a 18°C (64°F).",
        "Maridaje": "Un coupage versátil de estilo moderno que convierte a este vino en el complemento perfecto para primeros platos con salsa de carne, asados y quesos curados."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-ventiterre-primitivo",
    "nombre": "20 Ventiterre Primitivo",
    "bodega": "Zonin",
    "linea": "20 Ventiterre",
    "pais": "Italia",
    "region": "Salento, Puglia",
    "categoria": "Tinto",
    "cepa": "100% Primitivo",
    "alcohol": "13% vol.",
    "temperatura": "16º C - 18º C",
    "maridaje": "Pasta sabrosa, carnes rojas asadas o estofadas en salsa, carne de pluma, caza y quesos de curación moderada.",
    "descripcion": "Rojo rubí relativamente oscuro pero brillante. Amplio y persistente, con notas de fruta roja madura, ciruelas y especias dulces. Seco, de estructura sólida y redondez excepcional.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-ventiterre-primitivo.png",
    "etiqueta": "20 Ventiterre",
    "detallePdf": {
      "descripcionOficial": "Primitivo. Rojo rubí relativamente oscuro pero brillante. Amplio y persistente, con notas de fruta roja madura, ciruelas y especias dulces. Seco, de estructura sólida y redondez excepcional. Muestra una suavidad compleja en boca, notablemente persistente.",
      "ficha": {
        "Clasificación / denominación": "Salento IGT.",
        "Área": "Salento, Puglia, Southern Italy.",
        "Variedad / cepa": "100% Primitivo.",
        "Alcohol": "13% vol.",
        "Vinificación y crianza": "Las uvas se someten a un suave estrujado en prensas horizontales. La fermentación dura ocho días y se realiza a una temperatura controlada de 25°C (77°F). Tras la fermentación alcohólica, el vino también realiza la fermentación maloláctica, un proceso que reduce la acidez total y hace que los vinos parezcan más redondos y con más cuerpo.",
        "Color": "Rojo rubí relativamente oscuro pero brillante.",
        "Aroma": "Amplio y persistente, con notas de fruta roja madura, ciruelas y especias dulces.",
        "Sabor": "Seco, de estructura sólida y redondez excepcional. Muestra una suavidad compleja en boca, notablemente persistente.",
        "Temperatura de servicio": "Servir a 16º C - 18º C (61-64°F).",
        "Maridaje": "Ideal para acompañar pasta sabrosa, carnes rojas, ya sean asadas o estofadas en salsa, así como carne de pluma y de caza y quesos de curación moderada."
      },
      "infoAdicional": ""
    }
  },
  {
    "id": "zonin-ventiterre-moscato",
    "nombre": "20 Ventiterre Moscato",
    "bodega": "Zonin",
    "linea": "20 Ventiterre",
    "pais": "Italia",
    "region": "Veneto",
    "categoria": "Blanco",
    "cepa": "100% Moscato Bianco",
    "alcohol": "7% vol.",
    "temperatura": "5º C",
    "maridaje": "Postres, tartas de mermelada, ensaladas de frutas, repostería, helado o solo acompañado de conversación entre amigos.",
    "descripcion": "Amarillo pajizo con reflejos dorados y una espuma delicada. Afrutado y muy apetecible, con intensos aromas a melocotón y frutas confitadas. Fresco y agradablemente dulce.",
    "precio": null,
    "imagen": "assets/img/productos/zonin-ventiterre-moscato.png",
    "etiqueta": "Moscato",
    "detallePdf": {
      "descripcionOficial": "Moscato. Amarillo pajizo con reflejos dorados y una espuma delicada. Afrutado y muy apetecible, con intensos aromas a melocotón y frutas confitadas. Fresco y agradablemente dulce, con un sabor que revela sus características varietales.",
      "ficha": {
        "Clasificación / denominación": "Veneto IGT.",
        "Área": "Veneto.",
        "Variedad / cepa": "100% Moscato Bianco.",
        "Alcohol": "7% vol.",
        "Vinificación y crianza": "Se deja que la fermentación prosiga hasta que se alcanza el 7% de alcohol. Posteriormente, el contenido natural de azúcar de la uva se conserva mediante refrigeración para conferir esas características dulces y aromáticas ricas.",
        "Color": "Amarillo pajizo con reflejos dorados y una espuma delicada.",
        "Aroma": "Afrutado y muy apetecible, con intensos aromas a melocotón y frutas confitadas.",
        "Sabor": "Fresco y agradablemente dulce, con un sabor que revela sus características varietales.",
        "Temperatura de servicio": "Servir a unos 5°C (41°F).",
        "Maridaje": "Excelente como vino de postre, marida a la perfección con tartas de mermelada, ensaladas de frutas y repostería. También es delicioso con helado o solo, acompañado de conversación entre amigos."
      },
      "infoAdicional": ""
    }
  }
];

const PACKS = [];

const BODEGAS = [
  {
    "nombre": "Argento",
    "pais": "Argentina · Mendoza / San Juan",
    "descripcion": "Portafolio argentino con vinos orgánicos, línea Minimalista y etiquetas pensadas para una experiencia frutal, limpia y gastronómica.",
    "icon": "bi-circle-square"
  },
  {
    "nombre": "El Esteco",
    "pais": "Argentina · Salta",
    "descripcion": "Etiquetas de altura, estructura y carácter. Ideal para quienes buscan tintos expresivos y blancos aromáticos.",
    "icon": "bi-sunrise"
  },
  {
    "nombre": "Trapiche",
    "pais": "Argentina · Mendoza",
    "descripcion": "Una de las casas argentinas más versátiles del catálogo: espumosos, reservas, varietales y líneas jóvenes.",
    "icon": "bi-buildings"
  },
  {
    "nombre": "Ventisquero",
    "pais": "Chile · Atacama, Maipo, Colchagua, Casablanca y Valle Central",
    "descripcion": "Vinos chilenos con perfiles frescos, gastronómicos y de gran personalidad por valle y clima.",
    "icon": "bi-wind"
  },
  {
    "nombre": "Zonin",
    "pais": "Italia · Véneto, Abruzzo, Toscana, Puglia y Sicilia",
    "descripcion": "Casa italiana con más de dos siglos de historia, espumosos Prosecco y tintos clásicos de diferentes regiones.",
    "icon": "bi-award"
  },
  {
    "nombre": "Félix Solís",
    "pais": "España · Castilla-La Mancha y Rías Baixas",
    "descripcion": "Bodega española con etiquetas modernas, blancas, tintas y espumosas de perfil comercial y gastronómico.",
    "icon": "bi-stars"
  }
];

window.PRODUCTS = PRODUCTS;
window.PACKS = PACKS;
window.BODEGAS = BODEGAS;
