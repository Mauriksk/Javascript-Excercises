const isSuccessCommand = false;
    if (isSuccessCommand) {
      
    } else {
      
    }

    (isSuccessCommand) 
        ? notification['warning']({
            message: 'Experiencia devuelta',
        })
        : notification['error']({
            message: 'Ocurrió un error al devolver la experiencia',
        });

    (isSuccessCommand) 
        ? notification['warning']({ message: 'Experiencia devuelta', })
        : notification['error']({ message: 'Ocurrió un error al devolver la experiencia', });