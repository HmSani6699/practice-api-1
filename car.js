const loadData = async () => {
    try {
        const res = await fetch('http://127.0.0.1:5500/data.json');
        const data = await res.json();
        displayData(data)
    }
    catch (err) {
        console.log(err)
    }
}

const displayData = (cars) => {
    const container = document.getElementById('container')
    cars.forEach(car => {
        console.log(car);
        const div = document.createElement('div');
        div.classList.add('card', 'card-compact', 'w-full', 'bg-base-100', 'shadow-xl', 'border',);
        div.innerHTML = `
          <figure><img class="mt-4"
                src="${car.imageURL ? car.imageURL : "https://i.ibb.co/SJK7QYs/isuzu.png"}"
                alt="Shoes" />
            </figure>
          <div class="card-body">
               <h2 class="card-title">
               Name : ${car.name}</h2>
                  <p><span class="font-bold">Car details :</span> ${car.description}
                  </p>
              <div
                  class="card-actions ">
                  <button
                      class="btn btn-primary">Car price : ${car.price}</button>
              </div>
          </div>
    `;
        container.appendChild(div)
    })
}
loadData()