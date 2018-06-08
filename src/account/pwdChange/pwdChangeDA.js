
               'use strict';
                
               exports.pwdChangeRequest = function (req, res,someFormattedDate) 
               {
                ReqToAdmin.update({
                    'randomKey':req.params.email,
            
                    'validUntil':someFormattedDate
                },
                function (err) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred "
                        });
                    } else {
                        res.send(0);
                    }
                });
               };
               