const faq = document.querySelector(".faq")

const faqHeight = faq.getBoundingClientRect().height+"px"

let mq1 = window.matchMedia( "(min-width: 48em)" )
const faqResizeObserver =  new ResizeObserver(()=> faq.style.height = faqHeight)
if (mq1.matches){
    faqResizeObserver.observe(faq)
}


addEventListener("resize", ()=>{
    let mq2 = matchMedia( "(max-width: 48em)" )
    if (mq2.matches){
       faqResizeObserver.disconnect()
        faq.style.height = "auto"
    }
})
