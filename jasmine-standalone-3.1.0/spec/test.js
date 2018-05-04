/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,
*
*      Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (2 puntos, correcta, 1 segundo) -> 4 puntos
*      Si fallo pregunta en mas de 10 segundos - resto 2 puntos
            (4 puntos, incorrecta, 12 segundos) -> 2 puntos

*      Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
            (1 punto, correcta, 5 segundos) -> 2 puntos
*      Si acierto y tardo mas de 10 segundos - 0 puntos
*      Si fallo antes de 10 segundos - resto 1 punto

*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*
*
* */

describe('calculo de marcador', function(){
    function recalcularMarcador(puntos, esCorrecta, tiempo){
        if (esCorrecta && tiempo <= 2){
            return puntos + 2;
        } else if (esCorrecta && tiempo <= 10) {
            return puntos + 1;
        }
    }

    it("suma mas puntos si acierta muy rapido", function(){
        expect(recalcularMarcador(0, true, 1)).toBe(2);
        expect(recalcularMarcador(2, true, 1)).toBe(4);
        expect(recalcularMarcador(4, true, 5)).toBe(4);
    });

    xit("resta puntos si fallo muy despacio", function() {
        expect(recalcularMarcador(4, false, 12)).toBe(2);
    });
});
