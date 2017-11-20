<div>
    <form class="ui form equal width" method="POST" onsubmit="return false;">
        <div id="form-errors"></div>
        {{ csrf_field() }}
        @isset($category)
            {{ method_field('PUT') }}
        @endisset
        <div class="inline fields">
            @foreach( $categories as $_categorie )
                <div class="field">
                    <div class="ui radio @if(isset($category) && $category == $_categorie->id) checked @endif checkbox">
                        <input type="radio" name="category" value="{{ $_categorie->id }}" tabindex="0" class="hidden" @if(isset($category) && $category == $_categorie->id) checked @endif>
                        <label><i class="{{ $_categorie->icon }} icon"></i> {{ $_categorie->name }}</label>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="statement" class="four wide field">Der/Die Lernende:</label>
                <input name="statement" id="statement" value="@isset($statement) {{ $statement }} @endisset" placeholder="führt eine auftragsspezifische Handlung fachgerecht durch"/>
            </div>
        </div>
        <input type="hidden" name="tab" value="{{ $tab }}"/>
        <input type="hidden" name="unique" value="@isset($unique) {{ $unique }} @endisset"/>
    </form>
</div>