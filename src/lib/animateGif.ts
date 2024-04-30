/* A function used to animate pictures with their corresponding gif */

export function enableGifs() {
    document.addEventListener("astro:page-load", ev => {
        const gifImg = "postGif"; // strict
        //console.log("visited");

        var postContainers = document.getElementsByClassName(gifImg);

        for (const container of postContainers) {
            const imgObj = container.getElementsByTagName("img")[0];
            //var imageType = imgObj.dataset.image;

            //if (imageType != undefined) {

                container.addEventListener("mouseenter", () => {
                let oldSrc = imgObj.getAttribute("src");
                const newSrc = oldSrc?.slice(0, oldSrc.length - 3);
                imgObj.setAttribute("src", newSrc + "gif");
                });

                container.addEventListener("mouseleave", () => {
                let oldSrc = imgObj.getAttribute("src");
                const newSrc = oldSrc?.slice(0, oldSrc.length - 3);
                imgObj.setAttribute("src", newSrc + "png");
                });
           //}
        }
    })
}
