<?php
// Auth
Auth::routes();

// Static
Route::get('/help', ['as' => 'help', 'uses' => 'HelpController@help']);
Route::get('/imprint', ['as' => 'imprint', 'uses' => 'HelpController@imprint']);
Route::get('/privacy', ['as' => 'privacy', 'uses' => 'HelpController@privacy']);

// Default
Route::get('/', function () {
    return redirect(route('dashboard.index'));
})->name('index');

// Register
Route::get('/register/success', ['as' => 'register.success', 'uses' => 'Auth\RegisterController@registersuccess']);
Route::get('/register/verify/{token}', ['as' => 'register.verify', 'uses' => 'Auth\RegisterController@verify']);

// Profile
Route::group(['prefix' => 'profile', 'middleware' => 'auth'], function () {
    Route::get('/', ['as' => 'profile.index', 'uses' => 'ProfileController@index']);
    Route::get('/edit', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
    Route::put('/', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);

    Route::group(['prefix' => 'password', 'middleware' => 'auth'], function () {
        Route::get('/edit', ['as' => 'password.edit', 'uses' => 'PasswordController@edit']);
        Route::put('/edit', ['as' => 'password.update', 'uses' => 'PasswordController@update']);
    });
});

Route::group(['middleware' => 'auth'], function () {
    // Dashboard
    Route::get('/dashboard', ['as' => 'dashboard.index', 'uses' => 'DashboardController@index']);


    Route::get('/assign', ['as' => 'check.assign.index', 'uses' => 'AssignController@index']);
    Route::get('/assign/allow/{check}', ['as' => 'check.assign.allow', 'uses' => 'AssignController@allow']);
    Route::get('/assign/decline/{check}', ['as' => 'check.assign.decline', 'uses' => 'AssignController@decline']);
    Route::post('/assign', ['as' => 'check.assign.store', 'uses' => 'AssignController@store']);
    // Phrase
    Route::post('/phrase', ['as' => 'phrase.add', 'uses' => 'PhraseController@add']);
    Route::get('/phrase', ['as' => 'phrase.index', 'uses' => 'PhraseController@index']);
    Route::get('/phrase/edit', ['as' => 'phrase.edit', 'uses' => 'PhraseController@edit']);
    Route::put('/phrase/update', ['as' => 'phrase.update', 'uses' => 'PhraseController@update']);

    // Partner
    Route::resource('partner', 'PartnerController', ['except' => ['create']]);

    // Tags
    Route::resource('tags', 'TagsController', ['except' => ['create']]);

    // Checks
    Route::group(['prefix' => 'check'], function () {
        // Assessment
        Route::resource('/{check}/assessment', 'AssessmentController');
        Route::post('/{check}/assessment/save', ['as' => 'assessment.save', 'uses' => 'AssessmentController@save']);

        // Foreign Assessment
        Route::post('/{check}/foreign_assessment/invite', ['as' => 'foreign_assessment.save', 'uses' => 'ForeignAssessmentController@save']);
        Route::get('/{check}/foreign_assessment/invite', ['as' => 'foreign_assessment.invite', 'uses' => 'ForeignAssessmentController@invite']);

        // Import
        Route::get('/import', ['as' => 'check.import.index', 'uses' => 'ImportController@index']);
        Route::post('/import', ['as' => 'check.import.store', 'uses' => 'ImportController@store']);

        // Assign
        Route::get('/{check}/assign', ['as' => 'check.assign.index', 'uses' => 'AssignController@index']);
        Route::post('/assign', ['as' => 'check.assign.store', 'uses' => 'AssignController@store']);

        // Duplicate
        Route::get('/{check}/duplicate', ['as' => 'check.duplicate', 'uses' => 'ChecksController@duplicate']);

        // Lock
        Route::get('/{check}/lock', ['as' => 'check.lock', 'uses' => 'ChecksController@lock']);

        // Anonymisieren
        Route::get('/{check}/anonymize', ['as' => 'check.anonymize', 'uses' => 'ChecksController@anonymize']);

        // Auswertung
        Route::get('/{check}/evaluation', ['as' => 'check.evaluation', 'uses' => 'EvaluationController@index']);
    });
    Route::resource('check', 'ChecksController');

});

// Foreign Assessment
Route::resource('/foreign_assessment', 'ForeignAssessmentController', ['only' => ['create', 'store']]);
Route::get('/foreign_assessment/{url_hash}', ['as' => 'foreign.assessment.execute', 'uses' => 'ForeignAssessmentController@index']);
Route::get('/foreign_assessment/complete/{check}/{run}', ['as' => 'foreign.assessment.complete', 'uses' => 'ForeignAssessmentController@complete']);
Route::get('check/{check}/evaluation/download', ['as' => 'check.evaluation.download', 'uses' => 'EvaluationController@download']);
