window.onload = function() {
    


    let portfolio = [
        {
            architect: "SM Architecture",
            local: "Fernão Ferro - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/SM_FF/01_exterior.jpg", "../img/SM_FF/02_exterior.jpg"]
           
        },
        {
            architect: "RA Architecture",
            local: "Azeitão - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/RA_Az/RA_Az_01.jpg", "../img/RA_Az/RA_Az_02.jpg", "../img/RA_Az/RA_Az_03.jpg"]
        },
        {
            architect: "SM Architecture",
            local: "Cruz de Pau - Portugal",
            software: "3D Studio Max - Vray - Photshop",
            images: ["../img/SM_CruzPau/SM_CruzPau_01.jpg", "../img/SM_CruzPau/SM_CruzPau_02.jpg"]
        },
        {
            architect: "RA Architecture",
            local: "Amadora - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/CrisAmadora/CrisAmad_01_Coz_01.jpg", "../img/CrisAmadora/CrisAmad_01_Coz_02.jpg"]
        },
        {
            architect: "PA Architecture",
            local: "Charneca - Portugal",
            software: "3D Studio Max - Vray - Photshop",
            images: ["../img/PA_Mesquita/PA_Mesq_01.jpg", "../img/PA_Mesquita/PA_Mesq_02.jpg"]
        },
        {
            architect: "SM Architecture",
            local: "Aroeira - Portugal",
            software: "3D Studio Max - Corona - Photshop",
            images: ["../img/SM_Cantarelo/SM_Cant_01_Noite_01.jpg", "../img/SM_Cantarelo/SM_Cant_01_Noite_02.jpg"]
        }
    ];


    createRandomSlides();
        
    for (i = 0; i < portfolio.length; i++) {
        createAlbuns();
    }



    //---------------------------------------//
    //--------------- Slide -----------------//
    //---------------------------------------//

    function createRandomSlides() {

        let portf_random_array = [];

        for (i = 0; i < 3; i++) {

            const portfolio_random = Math.floor(Math.random() * portfolio.length);
            portf_random_array.push(portfolio_random);
            //console.log(portfolio_random);
            //console.log(portfolio.length);
        };
        
        console.log(portf_random_array);



            //------------ random slide01 ---------------
        let imgSlide_01 = document.getElementById("imgSlide_01");

        let imgSlide_import_01 = document.createElement("img");
        imgSlide_import_01.src = portfolio[portf_random_array[0]].images[get_portf_img_random(0)];
        imgSlide_01.append(imgSlide_import_01);
        console.log(imgSlide_import_01.src);

        let slideArch_01 = document.getElementById("slideArch_01");
        slideArch_01.className = "slide-text"
        slideArch_01.innerHTML = portfolio[portf_random_array[0]].architect;

        let slideLocal_01 = document.getElementById("slideLocal_01");
        slideLocal_01.className = "slide-text"
        slideLocal_01.innerHTML = portfolio[portf_random_array[0]].local;



            //------------ random slide02 ---------------
        let imgSlide_02 = document.getElementById("imgSlide_02");

        let imgSlide_import_02 = document.createElement("img");
        imgSlide_import_02.src = portfolio[portf_random_array[1]].images[get_portf_img_random(1)];
        imgSlide_02.append(imgSlide_import_02);
        console.log(imgSlide_import_02.src);

        let slideArch_02 = document.getElementById("slideArch_02");
        slideArch_02.className = "slide-text"
        slideArch_02.innerHTML = portfolio[portf_random_array[1]].architect;

        let slideLocal_02 = document.getElementById("slideLocal_02");
        slideLocal_02.className = "slide-text"
        slideLocal_02.innerHTML = portfolio[portf_random_array[1]].local;

      

            //------------ random slide03 ---------------
        let imgSlide_03 = document.getElementById("imgSlide_03");

        let imgSlide_import_03 = document.createElement("img");
        imgSlide_import_03.src = portfolio[portf_random_array[2]].images[get_portf_img_random(2)];
        imgSlide_03.append(imgSlide_import_03);
        console.log(imgSlide_import_03.src);

        let slideArch_03 = document.getElementById("slideArch_03");
        slideArch_03.className = "slide-text"
        slideArch_03.innerHTML = portfolio[portf_random_array[2]].architect;

        let slideLocal_03 = document.getElementById("slideLocal_03");
        slideLocal_03.className = "slide-text"
        slideLocal_03.innerHTML = portfolio[portf_random_array[2]].local;
   
        
        
        function get_portf_img_random(album) {
    
            return Math.floor(Math.random() * portfolio[portf_random_array[album]].images.length)
            //console.log(portfolio_image_random + " " + portfolio[portfolio_random].images[portfolio_image_random]);
        }
   
    };




    //-------- Apresentation --------

    let apresentation = document.getElementById("apresentation_ID");
        apresentation.className = "apresentation";

    let apresentation_image = document.createElement("img");
    apresentation_image.src = portfolio[1].images[2];
    apresentation_image.className = "apresent_Image"
    apresentation.append(apresentation_image);



    //-------- Portfolio ---------
    

    // Create albuns


    function createAlbuns() {

        let albunsID = document.getElementById("albunsID");
        albunsID.className = "albuns";

        let album = document.createElement("div");
        let albumID = i + 1;
        album.id = "albumID_0" + albumID;
        album.className = "album";
        albunsID.append(album);
        
        let album_image = document.createElement("img");
        album_image.className = "imgAlbum";
        
        let j = 0;
        i === 0 ? j = 1 : j = j;
        
        album_image.src = portfolio[i].images[j];
        album.append(album_image);
        
        let album_arch = document.createElement("p");
        album_arch.className = "text-center"
        album_arch.innerHTML = portfolio[i].architect;
        album.append(album_arch);
        
        let album_local = document.createElement("p");
        album_local.className = "text-center";
        album_local.innerHTML = portfolio[i].local;
        album.append(album_local);
        


        // Mouse over event
        album.addEventListener("mouseover", func, false);
        function func() {
            album.setAttribute("class", "albumMouseOver");
        }

        album.addEventListener("mouseout", func01, false);
        function func01() {
            album.setAttribute("class", "album");

        }

        album.addEventListener("onclick", func02, false);
        function func02() {
            album.setAttribute("class", "albumMouseOnClick");

        }
    } 

   

    

    
    
    
}
