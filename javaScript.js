function slider() {
    return {
      currentIndex: 0,
      images: [
        "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20Modern%20MD271UL-915x420.jpg",
        "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20RTX%205070%20Ti-915x420.jpg",
        "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20Printer-915x420.jpg",
        "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20Camera-915x420.jpg",
        "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20MSI%20Prestige%2016%20AI+-915x420.jpg",
        "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20TUF%20Gaming%20A14-915x420.jpg"
      ],
      interval: null,
  
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      goTo(index) {
        this.currentIndex = index;
      },
      init() {
        this.interval = setInterval(() => {
          this.next();
        }, 4000);
      }
    }
  }

  fetch('http://localhost:3000/FEATURE')
   .then(response => response.json())
   .then(data => {  
      let li1 = document.getElementById('li1');
      let li2 = document.getElementById('li2');
      data.Imageli1.forEach(url => {
        li1.innerHTML += `
          <li class="flex items-center justify-between border-b pb-2 hover:scale-105 transition-all duration-300x">
            <img src="${url}" alt="">
          </li>`;
      });
      data.Imageli2.forEach(url => {
        li2.innerHTML += `
          <li class="flex items-center justify-between border-b pb-2 hover:scale-105 transition-all duration-300">
            <img src="${url}" alt="">
          </li>`;
      });
    });
  
    fetch('http://localhost:3000/header')
    .then(response => response.json())
    .then(data => {
      let header = document.getElementById('header');
      data.forEach(item => {
            header.innerHTML += `
            <div class="bg-white shadow-lg rounded-lg p-3 hover:scale-105 transition-all duration-300">
                <img src="${item.Image}" alt="Blog 1" class="w-full rounded-md">
                <p class="text-xs text-yellow-500 mt-2">${item.date}</p>
                <p class="text-sm font-semibold mt-1">${item.descrition}</p>
            </div>
        `;
        });
    });
  
    let footer = document.getElementById("footer");
    fetch('http://localhost:3000/footer')
    .then(res => res.json())
    .then(data => {
         data.Image.forEach(e => {
            footer.innerHTML += `
                <img src="${e}" alt="APC" class="h-12">
            `;
         });
    });
  
    let desktop = document.getElementById('desktop');
    fetch('http://localhost:3000/DESKTOP')
       .then(response => response.json())
       .then(data => {
            data.forEach(item => {
                desktop.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
            `;
            })
        });
  
    let LAPTOP = document.getElementById('LAPTOP');
    fetch('http://localhost:3000/LAPTOP')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        LAPTOP.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
            `;
      });
    });
    
    let LATEST = document.getElementById('LATEST');
    fetch('http://localhost:3000/latest')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        LATEST.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
  
    let monitor = document.getElementById('monitor');
    fetch('http://localhost:3000/monitor')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        monitor.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
  
    let COMPONENTS = document.getElementById('COMPONENTS');
    fetch('http://localhost:3000/component')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        COMPONENTS.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
    let GAMING = document.getElementById('GAMING');
    fetch('http://localhost:3000/gaming')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        GAMING.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
    let ACCESSORIES = document.getElementById('ACCESSORIES');
    fetch('http://localhost:3000/accessories')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        ACCESSORIES.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
    let AUDIO = document.getElementById('AUDIO');
    fetch('http://localhost:3000/audio')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        AUDIO.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
    let PROJECTOR = document.getElementById('PROJECTOR');
    fetch('http://localhost:3000/projector')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        PROJECTOR.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
    let PRINTER = document.getElementById('PRINTER');
    fetch('http://localhost:3000/printer')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        PRINTER.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
    let DIGITAL = document.getElementById('DIGITAL');
    fetch('http://localhost:3000/digital')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        DIGITAL.innerHTML += `
            <div class="bg-white p-3 shadow-lg rounded-lg text-center group hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="${item.image}" alt="Product Image" class="w-full rounded-md">
                <p class="text-sm font-semibold mt-2">${item.name}</p>
                <p class="text-gray-500 text-xs">${item.spec}</p>
                <p class="text-green-600 font-semibold">${item.price}</p>
                <div class="flex justify-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-yellow-500 hover:text-white">
                        🛒
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white">
                        👁️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-red-500 hover:text-white">
                        ❤️
                    </button>
                    <button class="p-2 bg-gray-200 rounded-md hover:bg-black hover:text-white">
                        ⚫
                    </button>
                </div>
            </div>
        `;
      });
    });
        