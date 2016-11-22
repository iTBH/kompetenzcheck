'use strict';
describe("Controllers", function() {
    describe("Controller: Dashboard", function() {

        beforeEach(module('desktopApp'), function($provide) {
            User = {};
            $provide.value("User", User);

            Modal = {};
            $provide.value('Modal', Modal);
        });

        var DashboardCtrl,
            User,
            Modal,
            scope,
            $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, _User_) {
            User = _User_;
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/api/dashboard')
                .respond([
                    {
                        "__v": 0,
                        "_id": "53d254d3e5fbd1a23d000004",
                        "assign_link": null,
                        "checknumber": "0815",
                        "created": "2014-04-14T08:04:09.526Z",
                        "description": "kjh",
                        "locked": false,
                        "owner": "margret",
                        "title": "ljh",
                        "runs": [],
                        "phrases": [
                            {
                                "id": 1,
                                "statement": "Anfragen des Auftraggebers im Hinblick auf die Umsetzbarkeit analysieren",
                                "phase": "beginning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000014"
                            },
                            {
                                "id": 2,
                                "statement": "Anfragen des Auftraggebers im Hinblick auf  die Kundenwünsche analysieren",
                                "phase": "beginning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000013"
                            },
                            {
                                "id": 3,
                                "statement": "Anfragen des Auftraggebers im Hinblick auf  Genauigkeit analysieren",
                                "phase": "beginning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000012"
                            },
                            {
                                "id": 4,
                                "statement": "den Auftraggeber hinsichtlich den Zeitpunkt der Fertigstellung beraten",
                                "phase": "beginning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000011"
                            },
                            {
                                "id": 20,
                                "statement": "ein Konzept entwickeln und dabei auf Kundenwünsche achten",
                                "phase": "planning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000010"
                            },
                            {
                                "id": 21,
                                "statement": "ein Konzept entwickeln und dabei auf  die Umsetzbarkeit achten",
                                "phase": "planning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d00000f"
                            },
                            {
                                "id": 22,
                                "statement": "ein Konzept entwickeln und dabei auf  kulturelle Normen achten",
                                "phase": "planning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d00000e"
                            },
                            {
                                "id": 23,
                                "statement": "ein Konzept entwickeln und dabei auf  Trends achten",
                                "phase": "planning",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d00000d"
                            },
                            {
                                "id": 51,
                                "statement": "ein Konzept verstehen und umsetzen",
                                "phase": "operation",
                                "cat": "s",
                                "_id": "53d254d3e5fbd1a23d00000c"
                            },
                            {
                                "id": 52,
                                "statement": " die Kundenwünsche verstehen und umsetzen",
                                "phase": "operation",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d00000b"
                            },
                            {
                                "id": 53,
                                "statement": " das Rebrief verstehen und umsetzen",
                                "phase": "operation",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d00000a"
                            },
                            {
                                "id": 54,
                                "statement": "das Urheberrecht beachten",
                                "phase": "operation",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000009"
                            },
                            {
                                "id": 71,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei die Rechtssicherheit beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000008"
                            },
                            {
                                "id": 72,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  die Rücksprache mit der Rechtsabteilung beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d254d3e5fbd1a23d000007"
                            },
                            {
                                "id": 73,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  den Abgleich mit Kundenwünschen und Rebrief beachten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d254d3e5fbd1a23d000006"
                            },
                            {
                                "id": 74,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  die technische Analyse beachten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d254d3e5fbd1a23d000005"
                            }
                        ]
                    },
                    {
                        "__v": 1,
                        "_id": "53d2618dabb353a476000004",
                        "created": "2014-07-25T13:54:21.169Z",
                        "description": "asdfasdfasdf",
                        "owner": "margret",
                        "title": "asdfsadf",
                        "runs": [],
                        "phrases": [
                            {
                                "id": 16,
                                "statement": "dem Auftraggeber gegenüber mit  Sachlichkeit auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000014"
                            },
                            {
                                "id": 15,
                                "statement": "dem Auftraggeber gegenüber mit  Freundlichkeit auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000013"
                            },
                            {
                                "id": 14,
                                "statement": "dem Auftraggeber gegenüber mit  Überzeugungskraft auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000012"
                            },
                            {
                                "id": 13,
                                "statement": "dem Auftraggeber gegenüber mit Serviceorientierung auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000011"
                            },
                            {
                                "id": 12,
                                "statement": "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf  das Vorbereiten von Argumenten konzentrieren",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000010"
                            },
                            {
                                "id": 11,
                                "statement": "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf  die Präsentation konzentrieren",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000f"
                            },
                            {
                                "id": 10,
                                "statement": "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf ein geschlossenes Auftreten konzentrieren",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000e"
                            },
                            {
                                "id": 9,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf  den Ableich achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000d"
                            },
                            {
                                "id": 8,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf  Kundenorientierung achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000c"
                            },
                            {
                                "id": 7,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf  schnelles Arbeit achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000b"
                            },
                            {
                                "id": 6,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf Sachlichkeit achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000a"
                            },
                            {
                                "id": 5,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  die technische Analyse beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000009"
                            },
                            {
                                "id": 4,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  den Abgleich mit Kundenwünschen und Rebrief beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000008"
                            },
                            {
                                "id": 3,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  die Rücksprache mit der Rechtsabteilung beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000007"
                            },
                            {
                                "id": 2,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei die Rechtssicherheit beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000006"
                            },
                            {
                                "id": 1,
                                "statement": "12",
                                "phase": "beginning",
                                "cat": "s",
                                "_id": "53d2618dabb353a476000005"
                            }
                        ]
                    },
                    {
                        "title": "asdfsadf (Kopie)",
                        "description": "asdfasdfasdf (Kopie)",
                        "created": "2014-07-25T13:56:21.589Z",
                        "owner": "margret",
                        "_id": "53d2620552623cd378000004",
                        "__v": 0,
                        "runs": [],
                        "phrases": [
                            {
                                "id": 16,
                                "statement": "dem Auftraggeber gegenüber mit  Sachlichkeit auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000014"
                            },
                            {
                                "id": 15,
                                "statement": "dem Auftraggeber gegenüber mit  Freundlichkeit auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000013"
                            },
                            {
                                "id": 14,
                                "statement": "dem Auftraggeber gegenüber mit  Überzeugungskraft auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000012"
                            },
                            {
                                "id": 13,
                                "statement": "dem Auftraggeber gegenüber mit Serviceorientierung auftreten",
                                "phase": "ending",
                                "cat": "s",
                                "_id": "53d26195abb353a476000011"
                            },
                            {
                                "id": 12,
                                "statement": "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf  das Vorbereiten von Argumenten konzentrieren",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000010"
                            },
                            {
                                "id": 11,
                                "statement": "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf  die Präsentation konzentrieren",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000f"
                            },
                            {
                                "id": 10,
                                "statement": "die Übergabe an den Auftraggeber vorbereiten und dabei sich dabei auf ein geschlossenes Auftreten konzentrieren",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000e"
                            },
                            {
                                "id": 9,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf  den Ableich achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000d"
                            },
                            {
                                "id": 8,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf  Kundenorientierung achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000c"
                            },
                            {
                                "id": 7,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf  schnelles Arbeit achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000b"
                            },
                            {
                                "id": 6,
                                "statement": "Reklamationen des Auftraggebers beheben und dabei auf Sachlichkeit achten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a47600000a"
                            },
                            {
                                "id": 5,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  die technische Analyse beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000009"
                            },
                            {
                                "id": 4,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  den Abgleich mit Kundenwünschen und Rebrief beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000008"
                            },
                            {
                                "id": 3,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei  die Rücksprache mit der Rechtsabteilung beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000007"
                            },
                            {
                                "id": 2,
                                "statement": "Reklamationen des Auftraggebers analysieren und dabei die Rechtssicherheit beachten",
                                "phase": "ending",
                                "cat": "f",
                                "_id": "53d26195abb353a476000006"
                            },
                            {
                                "id": 1,
                                "statement": "12",
                                "phase": "beginning",
                                "cat": "s",
                                "_id": "53d2618dabb353a476000005"
                            }
                        ]
                    }
                ]);
            scope = $rootScope.$new();
            DashboardCtrl = $controller('DashboardCtrl', {
                $scope: scope
            });

            $httpBackend.whenGET('/api/users/me').respond(500);
            $httpBackend.whenGET('partials/sharemodal.html').respond(500);
            $httpBackend.whenGET('partials/invitemodal.html').respond(500);
            $httpBackend.flush();

        }));



        it('should have a DashboardCtrl controller', function() {
            expect(DashboardCtrl).toBeDefined();
        });

        it('should have a User service', inject(['User', function(User) {
            expect(User).toBeDefined();
        }]));

        it('should have a function removeCheck()', function() {
            expect(scope.removeCheck).toBeDefined();
        });

        it('should have a function shareCheck()', function() {
            expect(scope.shareCheck).toBeDefined();
        });

        it('should have a function getNumberOfChecks()', function() {
            expect(scope.getNumberOfChecks).toBeDefined();
        });

        it('should tell the number of the users checks', function() {
            expect(scope.getNumberOfChecks()).toBeGreaterThan(0);
        });

        it('should deliver two parts of a phrase', function() {
            var phrase = 'die richtige Telefonnummer wählen';
            expect(scope.extractVerbAtTheEnd(phrase).length).toBe(2);
        });

        it('should extract the verb at the end of a phrase', function() {
            var phrase = 'die richtige Telefonnummer wählen';
            expect(scope.extractVerbAtTheEnd(phrase)[1]).toBe('wählen');
        });

        it('should build the correct preview statements', function() {

            var phrase = {
                id: 1,
                statement: "die richtige Telefonnummer wählen",
                phase: "beginning",
                cat : "f"
            };

            var built = [
                { id : 0, statement : 'Ich werde zum ersten Mal <strong>die richtige Telefonnummer</strong> <strong>wählen</strong>.' },
                { id : 1, statement : 'Ich kann <strong>die richtige Telefonnummer</strong> mithilfe einer Person oder Anleitung <strong>wählen</strong>.' },
                { id : 2, statement : 'Ich kann <strong>die richtige Telefonnummer</strong> selbstständig <strong>wählen</strong>.' },
                { id : 3, statement : 'Ich kann <strong>die richtige Telefonnummer</strong> in einer anderen Situation selbstständig <strong>wählen</strong>.' }
            ];

            expect(scope.buildPreviewStatements(phrase)).toEqual(built);

        });
    });
});
