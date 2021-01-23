<script>
    let indata = "";
</script>

<style>
    .input {
        margin: 0 auto;
        text-align: center;
    }

    input {
        font-size: 1em;
        font-family: "Times New Roman", Times, serif;
        font-weight: 300;
        font-style: italic;
        color: #333;
        padding: 0.5em 1em;
        border-radius: 999999999px;
        border: 1px solid #ccc;
    }
    input:focus {
        outline: none;
    }
</style>

<div class="input">
    <input type="text" bind:value={indata} placeholder="Фильтр" />
</div>
