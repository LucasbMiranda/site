function myFunction() {
    const date = new Date();
    const day = date.getDate();
    const year = date.getUTCFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
  
    // Exibir o dia e hora atual no span
    document.querySelector(".day").textContent = `Hoje é dia ${day} de ${monthNames[date.getMonth()]} de ${year}`;
    document.querySelector(".day").style.display = "block";
  }
  
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  