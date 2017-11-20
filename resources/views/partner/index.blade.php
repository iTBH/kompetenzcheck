@extends('layouts.app')

@section('title', 'Schlagwörter')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Partner und Partnerinnen',
        'divider' => false,
        'help' => Config::get('help.partner'),
    ])
    <p>
        Hier können Sie neue Kompetenz-Checkpartner und -Partnerinnen anlegen, die Angaben vorhandener Partner und Partnerinnen bearbeiten oder löschen. Als Partner und Partnerin gelten Personen, denen Sie einen Check zuweisen möchten bzw. von denen Sie bereits einen Check zugewiesen bekommen haben, oder eine Einladung zu einer Fremdeinschätzung zusenden möchten bzw. bereits erhalten haben.
    </p>
    <div class="ui divider dotted"></div>
    <div class="ui divider hidden"></div>
    <div class="ui grid">
        <div class="six wide column">
            <h2 class="green colored">Neuer Partner/Partnerin</h2>
            <form method="POST" action="{{ route('partner.store') }}" class="ui form">
                {{ csrf_field() }}

                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="firstname">Vorname:</label>
                        <input type="text" id="firstname" name="firstname" placeholder="">
                    </div>
                </div>

                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="lastname">Nachname:</label>
                        <input type="text" id="lastname" name="lastname" placeholder="">
                    </div>
                </div>

                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="email">E-Mail-Adresse:</label>
                        <input type="email" id="email" name="email" placeholder="">
                    </div>
                </div>

                <div class="fields">
                    <div class="sixteen wide field">
                        <button type="submit" class="ui primary button">Hinzufügen</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="ten wide column">
            @if(count($partners) > 0)
                <h2 class="green colored">Vorhandene Partner/Partnerinnen bearbeiten</h2>
                <div class="ui grid">
                    <div class="sixteen wide column">
                        <table class="ui very basic compact table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-Mail-Adresse</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($partners as $partner)
                                <tr>
                                    <td>
                                        <strong>{{ $partner->lastname }}, {{ $partner->firstname }}</strong>
                                        <br />
                                        <br />
                                        <form onsubmit="return confirm('Partner / Partnerin wirklich löschen?')"
                                              action="{{ route('partner.destroy', $partner->id) }}" method="POST">
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}
                                            <button type="submit" class="button link">Löschen</button>
                                            <a>|</a>
                                            <a href="{{ route('partner.edit', $partner->id) }}">Bearbeiten</a>
                                        </form>
                                    </td>
                                    <td style="vertical-align: top;">{{ $partner->email }}</td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
            @else
                <div class="cta-text">
                    <h2 class="green colored">Du hast noch keine/n Partnerin/Partner hinterlegt.</h2>
                    <p>
                        Lege eine/n neuen Partnerin/Partner an oder klicke auf Hilfe um mehr über Partner und Partnerinnen zu erfahren.
                    </p>
                </div>
            @endif
        </div>
    </div>
@endsection
