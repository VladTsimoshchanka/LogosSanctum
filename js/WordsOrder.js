function WordObject  (Word, DictLink, LangType, Definition){
    
    
        this.Word = Word;
        this.DictLink = DictLink;
        this.LangType = LangType;
        this.Definition = Definition;
    
};
var Words = [];

Words.push("両");

populate();



//Get the elements by ID's
var openButton = document.getElementById("CommitLogosButton");
var submitButton = document.getElementById("submitButton");
var closeButton = document.getElementById("CloseButton");
var langSel = document.getElementById("LanguageAssignment");
var langSubmitButton = document.getElementById("submitLanguage");


//Making all of the buttons responsive
langSel.addEventListener('click', () => {
    
    if(langSel.value == "Add a new language"){
    
    var menu = document.getElementById("AddLanguageMenu");
    openLangMenu(menu);
    }
})
langSubmitButton.addEventListener('click', () => {
    
    
    var option = document.createElement("option");
    option.text = document.getElementById("LanguageText").value;
    langSel.add(option, langSel[0]);
    langSel.value = langSel[0];
    var menu = document.getElementById("AddLanguageMenu");
    closeLangMenu(menu);
    
})
openButton.addEventListener('click', () => {
    
    var menu = document.getElementById("CommitLogosMenu");
    openMenu(menu);
})
closeButton.addEventListener('click', () => {
    var menu = document.getElementById("CommitLogosMenu");
    closeMenu(menu);
    var name = document.getElementById("WordText");
    var message = document.getElementById("WordLink");
    var definition = document.getElementById("WordDefinition");
    name.value = "";
    message.value = "";
    definition.value = "";
})
submitButton.addEventListener('click', () => {
    var input = fetchWordInfo();
    saveWord(input);
    createWordCard(loadWord(input));
    var menu = document.getElementById("CommitLogosMenu");
    closeMenu(menu);
    var name = document.getElementById("WordText");
    var message = document.getElementById("WordLink");
    var definition = document.getElementById("WordDefinition");
    name.value = "";
    message.value = "";
    definition.value = "";
    alert("Logos committed. Endeavor to new discoveries and commitments.");
})

//Functions for the menus
function openMenu(menu){
    if (menu == null){
        return;
    }
    menu.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu(menu){
    if (menu == null){
        return;
    }
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

function openLangMenu(menu){
    if (menu == null){
        return;
    }
    
    menu.classList.add("active");
    
}

function closeLangMenu(menu){
    
    if (menu == null){
        
        return;
    }
    
    menu.classList.remove("active");
    
}

function fetchWordInfo(){
    var Word = document.getElementById("WordText").value;
    var DictLink = document.getElementById("WordLink").value;
    var Lang = document.getElementById("LanguageAssignment").value;
    var Def = document.getElementById("WordDefinition").value;

    return new WordObject(Word, DictLink, Lang, Def);
}


function saveWord(WordObj){
    Words.push(WordObj.Word);
    localStorage.setItem(WordObj.Word, JSON.stringify(WordObj));
}

function loadWord(WordObj){
    return JSON.parse(localStorage.getItem(WordObj.Word));
}

function createWordCard(WordObj){

    

    var WordCard = document.createElement("div");
    WordCard.setAttribute("id", "WordCard");
        var leftCard = document.createElement("div");
        leftCard.setAttribute("id", "leftCard");
        WordCard.appendChild(leftCard);
            var Word = document.createElement("div");
            Word.setAttribute("id", "Word");
            Word.innerHTML = WordObj.Word;
            leftCard.appendChild(Word);

            var DictLink = document.createElement("a");
            DictLink.setAttribute("id", "DictionaryLink");
            DictLink.setAttribute("href", WordObj.DictLink);
            DictLink.setAttribute("target", "_blank");
            DictLink.innerHTML = "Source Link";
            leftCard.appendChild(DictLink);

        var rightCard = document.createElement("div");
        rightCard.setAttribute("id", "rightCard");
        WordCard.appendChild(rightCard);
                var Lang = document.createElement("div");
                Lang.setAttribute("id", "Language");
                Lang.innerHTML = "Language: ";
                    var LangType = document.createElement("span");
                    LangType.setAttribute("id", "LanguageType");
                    LangType.innerHTML = WordObj.LangType;
                    Lang.appendChild(LangType);
                rightCard.appendChild(Lang);

                var Def = document.createElement("div");
                Def.setAttribute("id", "Definition");
                Def.innerHTML = WordObj.Definition;
                var DelCard = document.createElement("span");
                DelCard.setAttribute("id", "deleteCard");
                DelCard.innerHTML = "&times";
                Def.appendChild(DelCard);
                rightCard.appendChild(Def);
    var WordsOrder = document.getElementById("WordsOrder");
    WordsOrder.insertBefore(WordCard, WordsOrder.firstChild);



}

function populate(){
    var NewWord = new WordObject("Cloister", "https://www.dictionary.com/browse/cloister", "English", "a covered walk in a convent, monastery, college, or cathedral, typically with a wall on one side and a colonnade open to a quadrangle on the other. seclude or shut up in or as if in a convent or monastery."
    );
    saveWord(NewWord);
    Words.push(NewWord.Word);
    for(x in localStorage){
        if(localStorage.getItem(x) != null){
        console.log(localStorage.getItem(x));
        createWordCard(JSON.parse(localStorage.getItem(x)));
        }
    }
    
   
}