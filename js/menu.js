document.querySelector("#navbar").innerHTML = `
<header id="navbar"> 
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="./index.html">Laura</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Grade horária   
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="./grade.html">2023</a>
                    <a class="dropdown-item" href="#">2022</a>
                    <a class="dropdown-item" href="#">2021</a>
                    <a class="dropdown-item" href="#">2020</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Disciplinas   
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">2023</a>
                      <a class="dropdown-item" href="#">2022</a>
                      <a class="dropdown-item" href="#">2021</a>
                      <a class="dropdown-item" href="#">2020</a>
                    </div>
                  </li>
              </ul>
            </div>
          </nav>
    </header>

`
