/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,
*
*      Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (2 puntos, correcta, 1 segundo) -> 4 puntos
*      Si fallo pregunta en mas de 10 segundos - resto 2 puntos
            (5 puntos, incorrecta, 12 segundos) -> 2 puntos

*      Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
            (1 punto, correcta, 5 segundos) -> 2 puntos
*      Si acierto y tardo mas de 10 segundos - 0 puntos
            (2 puntos, correcta, 15 segundos) -> 2 puntos*
*      Si fallo antes de 10 segundos - resto 1 punto
            (3 puntos, incorrecta, 8 segundos) -> 2 puntos

*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*
*
* */

describe('calculo de marcador', function(){
    function recalcularMarcador(puntos, existeRespuesta, esCorrecta, tiempo){
        if (existeRespuesta && esCorrecta && tiempo <= 2){
            return puntos + 2;
        } else if (existeRespuesta && esCorrecta && tiempo <= 10) {
            return puntos + 1;
        } else if (existeRespuesta && esCorrecta && tiempo <10) {
            return puntos;
        } else if (existeRespuesta && !esCorrecta && tiempo >10) {
            return puntos -2;
        } else if(existeRespuesta && !esCorrecta && tiempo <=10) {
            return puntos -1;
        } else if (!existeRespuesta && tiempo >= 20) {
            return puntos -3;
        }
    }

    it("suma mas puntos si acierta muy rapido", function(){
        expect(recalcularMarcador(0, true, true, 1)).toBe(2);
        expect(recalcularMarcador(2, true, true, 1)).toBe(4);
        expect(recalcularMarcador(4, true, true, 5)).toBe(5);
        //expect(recalcularMarcador(5, true, true, 15)).toBe(5);
    });

    it("resta puntos si fallo muy despacio", function() {
        expect(recalcularMarcador(5, true, false, 12)).toBe(3);
        expect(recalcularMarcador(3, true, false, 8)).toBe(2);
    });
    it("no contestar a la pregunta", function() {
        expect(recalcularMarcador(2, false, true, 23)).toBe(-1);
        expect(recalcularMarcador(2, false, false, 23)).toBe(-1);
    });
});
