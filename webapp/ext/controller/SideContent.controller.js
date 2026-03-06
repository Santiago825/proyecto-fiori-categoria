sap.ui.define([], function () {
    "use strict";

    return {
        onToggleSideContent: function (oEvent) {
            // "this" hace referencia a la extensión de la página
            var oView = this.getView();
            
            // Buscamos el ID que le pusiste al DynamicSideContent en el XML
            var oSideContent = oView.byId("idSideContentLayout");

            if (oSideContent) {
                // Si está abierto lo cierra, si está cerrado lo abre
                var bIsVisible = oSideContent.getShowSideContent();
                oSideContent.setShowSideContent(!bIsVisible);
                
                // Cambiamos el texto del botón dinámicamente
                var sNewText = bIsVisible ? "Mostrar Ayuda" : "Ocultar Ayuda";
                oEvent.getSource().setText(sNewText);
            } else {
                // Si sale esto en la consola F12, revisa el ID en tu .fragment.xml
                console.error("No se encontró el elemento idSideContentLayout");
            }
        }
    };
});
